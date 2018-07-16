package com.audioplayerapp;

import android.app.Activity;
import android.content.Intent;
import android.media.AudioManager;
import android.media.MediaMetadataRetriever;
import android.media.MediaPlayer;
import android.net.Uri;
import android.provider.MediaStore;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MediaManager extends ReactContextBaseJavaModule implements ActivityEventListener {
  private MediaPlayer mediaPlayer = null;
  private MediaMetadataRetriever mediaMetadataRetriever = null;

  public MediaManager(ReactApplicationContext reactApplicationContext) {
    super(reactApplicationContext);
    reactApplicationContext.addActivityEventListener(this);
  }

  @Override
  public String getName() {
    return "MediaManager";
  }

  @Override
  public void onCatalystInstanceDestroy() {
    super.onCatalystInstanceDestroy();
    mediaPlayer.stop();
    mediaPlayer.release();
    mediaPlayer = null;
  }

  @ReactMethod
  public void showSongs() {
    Activity activity = getCurrentActivity();
    Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Audio.Media.EXTERNAL_CONTENT_URI);
    activity.startActivityForResult(intent, 10);
  }

  @Override
  public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
    if (data != null) {
      playSong(data.getData());
    }
  }

  @Override
  public void onNewIntent(Intent intent) {
  }

  private void playSong(Uri uri) {
    try {
      if (mediaPlayer != null) {
        mediaPlayer.stop();
        mediaPlayer.reset();
      } else {
        mediaMetadataRetriever = new MediaMetadataRetriever();
        mediaPlayer = new MediaPlayer();
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
      }

      mediaPlayer.setDataSource(getReactApplicationContext(), uri);

      mediaPlayer.prepare();
      mediaPlayer.start();

      mediaMetadataRetriever.setDataSource(getReactApplicationContext(), uri);
      String artist = mediaMetadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_ARTIST);
      String songTitle = mediaMetadataRetriever.extractMetadata(MediaMetadataRetriever.METADATA_KEY_TITLE);

      WritableMap params = Arguments.createMap();
      params.putString("songPlaying", artist + " - " + songTitle);

      getReactApplicationContext()
        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
        .emit("SongPlaying", params);
    } catch (Exception ex) {
      ex.printStackTrace();
    }
  }
}
