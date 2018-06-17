package com.nativemoduleapp;

/**
 * Created by dan on 6/17/18.
 */

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.shell.MainReactPackage;


import java.util.Collections;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class HelloPackage implements ReactPackage {
    @Override
    public List
            <NativeModule> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List
            <ViewManager> createViewManagers
            (ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List
            <NativeModule> createNativeModules
            (ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new HelloManager(reactContext));

        return modules;
    }
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new HelloPackage()
        );
    }
}