package org.hyperledger.fabric.chaincode;
import java.util.List;
import org.hyperledger.fabric.chaincode.Models.*;
import org.hyperledger.fabric.shim.ChaincodeBase;
import org.hyperledger.fabric.shim.ChaincodeStub;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BaseServices extends ChaincodeBase{
    protected class ChaincodeResponse {
        public String message;
        public String code;
        public boolean OK;

        public ChaincodeResponse(String message, String code, boolean OK) {
            this.code = code;
            this.message = message;
            this.OK = OK;
        }
    }

    protected String responseError(String errorMessage, String code) {
        try {
            return (new ObjectMapper()).writeValueAsString(new BaseServices.ChaincodeResponse(errorMessage, code, false));
        } catch (Throwable e) {
            return "{\"code\":'" + code + "', \"message\":'" + e.getMessage() + " AND " + errorMessage + "', \"OK\":" + false + "}";
        }
    }

    protected String responseSuccess(String successMessage) {
        try {
            return (new ObjectMapper()).writeValueAsString(new BaseServices.ChaincodeResponse(successMessage, "", true));
        } catch (Throwable e) {
            return "{\"message\":'" + e.getMessage() + " BUT " + successMessage + " (NO COMMIT)', \"OK\":" + false + "}";
        }
    }

    protected String responseSuccessObject(String object) {
        return "{\"message\":" + object + ", \"OK\":" + true + "}";
    }

    protected boolean checkString(String str) {
        if (str.trim().length() <= 0 || str == null)
            return false;
        return true;
    }

    @Override
    public Response init(ChaincodeStub stub) {
        return newSuccessResponse(responseSuccess("Init"));
    }

    @Override
    public Response invoke(ChaincodeStub stub) {
        String func = stub.getFunction();
        List<String> params = stub.getParameters();
        KeyServices keyServices = new KeyServices();
        if (func.equals("createKey"))
            return keyServices.createKey(stub, params);
        else if (func.equals("getKey"))
            return keyServices.getKey(stub, params);
        return newErrorResponse(responseError("Unsupported method", ""));
    }
}
