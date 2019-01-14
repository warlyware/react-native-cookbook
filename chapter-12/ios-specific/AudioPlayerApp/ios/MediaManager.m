//
//  MediaManager.m
//  AudioPlayer
//
//  Created by Stanislav Bershadskiy on 7/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "MediaManager.h"
#import "AppDelegate.h"

@implementation MediaManager
RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;
@synthesize musicPlayer;

#pragma mark private-methods

-(void)showMediaPicker {
  if(self.mediaPicker == nil) {
    self.mediaPicker = [[MPMediaPickerController alloc] initWithMediaTypes:MPMediaTypeAnyAudio];
    
    [self.mediaPicker setDelegate:self];
    [self.mediaPicker setAllowsPickingMultipleItems:NO];
    [self.mediaPicker setShowsCloudItems:NO];
    self.mediaPicker.prompt = @"Select song";
  }
  
  AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  
  [delegate.window.rootViewController presentViewController:self.mediaPicker animated:YES completion:nil];
}

void hideMediaPicker() {
  AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
  [delegate.window.rootViewController dismissViewControllerAnimated:YES completion:nil];
}

-(void) mediaPicker:(MPMediaPickerController *)mediaPicker didPickMediaItems:(MPMediaItemCollection *)mediaItemCollection {
  MPMediaItem *mediaItem = mediaItemCollection.items[0];
  NSURL *assetURL = [mediaItem valueForProperty:MPMediaItemPropertyAssetURL];
  
  [self.bridge.eventDispatcher sendAppEventWithName:@"SongPlaying"
                                               body:[mediaItem valueForProperty:MPMediaItemPropertyTitle]];
  
  if(musicPlayer == nil) {
    musicPlayer = [MPMusicPlayerController systemMusicPlayer];
  }
  
  [musicPlayer setQueueWithItemCollection:mediaItemCollection];
  [musicPlayer play];
  
  hideMediaPicker();
}

-(void) mediaPickerDidCancel:(MPMediaPickerController *)mediaPicker {
  hideMediaPicker();
}

#pragma mark RCT_EXPORT

RCT_EXPORT_METHOD(showSongs) {
  [self showMediaPicker];
}


@end
