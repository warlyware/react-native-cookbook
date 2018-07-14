//
//  BackgroundTaskManager.m
//  MultiThreadingApp
//
//  Created by Daniel Ward on 7/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//
#import "BackgroundTaskManager.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>

@implementation BackgroundTaskManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(loadInBackground) {
  backgroundQueue = dispatch_queue_create("com.moduscreate.bgqueue", NULL);
  
  dispatch_async(backgroundQueue, ^{
    NSLog(@"processing background");
    [self.bridge.eventDispatcher sendAppEventWithName:@"backgroundProgress" body:@{@"status": @"Loading"}];
    [NSThread sleepForTimeInterval:5];
    NSLog(@"slept");
    dispatch_async(dispatch_get_main_queue(), ^{
      NSLog(@"Done processing; main thread");
      [self.bridge.eventDispatcher sendAppEventWithName:@"backgroundProgress" body:@{@"status": @"Done"}];
    });
  });
}

@end
