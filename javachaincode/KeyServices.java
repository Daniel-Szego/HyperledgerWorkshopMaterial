package org.hyperledger.fabric.chaincode;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hyperledger.fabric.chaincode.Models.*;
import org.hyperledger.fabric.shim.Chaincode;
import org.hyperledger.fabric.shim.ChaincodeStub;

import java.util.List;

public class KeyServices extends BaseServices {

    public KeyServices() {}

    public Chaincode.Response createKey(ChaincodeStub stub, List<String> args) {

        // input validation

        if (args.size() != 1)
            return newErrorResponse(responseError("Incorrect number of arguments, expecting 1", ""));
        String keyId = args.get(0);
        if (!checkString(keyId))
            return newErrorResponse(responseError("Invalid argument, keyId is not a string", ""));

        Key key = new Key(keyId);
        try {
            if(checkString(stub.getStringState(keyId)))
                return newErrorResponse(responseError("Existing key", ""));
            stub.putState(keyId, (new ObjectMapper()).writeValueAsBytes(key));
            return newSuccessResponse(responseSuccess("Key created"));
        } catch (Throwable e) {
            return newErrorResponse(responseError(e.getMessage(), ""));
        }
    }

    public Chaincode.Response getKey(ChaincodeStub stub, List<String> args) {
        if (args.size() != 1)
            return newErrorResponse(responseError("Incorrect number of arguments, expecting 1", ""));
        String keyId = args.get(0);
        if (!checkString(keyId))
            return newErrorResponse(responseError("Invalid argument", ""));
        try {
            String keyString = stub.getStringState(keyId);
            if(!checkString(keyString))
                return newErrorResponse(responseError("Nonexistent key", ""));
            return newSuccessResponse((new ObjectMapper()).writeValueAsBytes(responseSuccessObject(keyString)));
        } catch(Throwable e){
            return newErrorResponse(responseError(e.getMessage(), ""));
        }
    }

    public static void main(String[] args) {
        new KeyServices().start(args);
    }

}
