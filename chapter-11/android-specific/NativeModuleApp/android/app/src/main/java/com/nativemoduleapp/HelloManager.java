package com.nativemoduleapp;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by stan229 on 7/6/16.
 */
public class HelloManager extends ReactContextBaseJavaModule {
    public HelloManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelloManager";
    }

    @ReactMethod
    public void greetUser(String name, Boolean isAdmin, Callback callback) {
        System.out.println("User Name: " + name + ", Administrator: " + (isAdmin ? "Yes" : "No"));

        String greeting = "Welcome " + name + ", you " + (isAdmin ? "are" : "are not") + " an administrator";

        callback.invoke(greeting);
    }

    @ReactMethod
    public void greetUserWithPromises(String name, Boolean isAdmin, Promise promise) {
        System.out.println("User Name: " + name + ", Administrator: " + (isAdmin ? "Yes" : "No"));

        String greeting = "Welcome " + name + ", you " + (isAdmin ? "are" : "are not") + " an administrator";

        promise.resolve(greeting);
    }

    @ReactMethod
    public void greetUserWithEvent(String name, Boolean isAdmin) {
        System.out.println("User Name: " + name + ", Administrator: " + (isAdmin ? "Yes" : "No"));

        String greeting = "Welcome " + name + ", you " + (isAdmin ? "are" : "are not") + " an administrator";

        WritableMap body = Arguments.createMap();
        body.putString("greeting", greeting);

        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("GreetingResponse", body);
    }
}
