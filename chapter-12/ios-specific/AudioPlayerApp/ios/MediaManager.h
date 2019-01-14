//
//  MediaManager.h
//  AudioPlayerApp
//
//  Created by Daniel Ward on 7/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <MediaPlayer/MediaPlayer.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>

@interface MediaManager : NSObject<RCTBridgeModule, MPMediaPickerControllerDelegate>

@property (nonatomic, retain) MPMediaPickerController *mediaPicker;
@property (nonatomic, retain) MPMusicPlayerController *musicPlayer;
@end
