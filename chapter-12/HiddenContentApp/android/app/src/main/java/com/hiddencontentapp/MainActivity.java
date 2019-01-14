package com.hiddencontentapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "HiddenContentApp";
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (getReactNativeHost().getReactInstanceManager().getCurrentReactContext() != null) {
            WritableMap params = Arguments.createMap();
            params.putBoolean("appHasFocus", hasFocus);

            getReactNativeHost().getReactInstanceManager()
              .getCurrentReactContext()
              .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
              .emit("focusChange", params);
        }
    }
}
