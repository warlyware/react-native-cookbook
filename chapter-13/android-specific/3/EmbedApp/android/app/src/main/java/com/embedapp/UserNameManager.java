package com.embedapp;

import android.app.Activity;
import android.widget.EditText;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by stan229 on 9/15/16.
 */
public class UserNameManager extends ReactContextBaseJavaModule {
    public UserNameManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "UserNameManager";
    }

    @ReactMethod
    public void setUserName(final String userName) {
        Activity mainActivity = getReactApplicationContext().getCurrentActivity();
        final EditText userNameField = (EditText) mainActivity.findViewById(R.id.userName);
        mainActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                userNameField.setText(userName);
            }
        });
    }
}
