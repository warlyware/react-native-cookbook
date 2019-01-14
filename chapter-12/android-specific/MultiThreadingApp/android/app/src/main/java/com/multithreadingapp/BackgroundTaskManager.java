package com.multithreadingapp;

import android.os.AsyncTask;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class BackgroundTaskManager extends ReactContextBaseJavaModule {
  public BackgroundTaskManager(ReactApplicationContext reactApplicationContext) {
    super(reactApplicationContext);
  }

  @Override
  public String getName() {
    return "BackgroundTaskManager";
  }

  @ReactMethod
  public void loadInBackground() {
    BackgroundLoadTask backgroundLoadTask = new BackgroundLoadTask();
    backgroundLoadTask.execute();
  }

  private void sendEvent(String eventName, WritableMap params) {
    getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
  }

  private class BackgroundLoadTask extends AsyncTask<String, String, String> {
    @Override
    protected String doInBackground(String... params) {
      publishProgress("Loading");
      try {
        Thread.sleep(5000);
      } catch (Exception e) {
        e.printStackTrace();
      }
      return "Done";
    }

    @Override
    protected void onProgressUpdate(String... values) {
      WritableMap params = Arguments.createMap();
      params.putString("status", "Loading");
      sendEvent("backgroundProgress", params);
    }

    @Override
    protected void onPostExecute(String s) {
      WritableMap params = Arguments.createMap();
      params.putString("status", "Done");
      sendEvent("backgroundProgress", params);
    }
  }
}
