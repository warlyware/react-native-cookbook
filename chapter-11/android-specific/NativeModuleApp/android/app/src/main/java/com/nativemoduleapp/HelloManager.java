package com.nativemoduleapp;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class HelloManager extends ReactContextBaseJavaModule {
    public HelloManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelloManager";
    }

    @ReactMethod
    public void greetUser(String name, boolean isAdmin, Callback callback) {
        System.out.println("User Name: " + name + ", Administrator: " + (isAdmin ? "Yes" : "No"));

        String greeting = "Welcome " + name + ", you " + (isAdmin ? "are" : "are not") + " an administrator";

        callback.invoke(greeting);
    }
}
