package com.example.springsocial.payload;

public class ApiResponse {
    private int success;
    private String message;
    private Object result;

    public ApiResponse(int success, String message, Object result) {
        this.success = success;
        this.message = message;
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getSuccess() {
        return success;
    }

    public void setSuccess(int success) {
        this.success = success;
    }

    public Object getResult() {
        return result;
    }

    public void setResult(Object result) {
        this.result = result;
    }
}
