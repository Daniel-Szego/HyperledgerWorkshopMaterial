package org.hyperledger.fabric.chaincode.Models;

public class Key {

    private String keyId;

    public Key(String keyId) {
        this.keyId = keyId;
    }

    private Key() {}

    public String getKeyId() {
        return keyId;
    }

}
