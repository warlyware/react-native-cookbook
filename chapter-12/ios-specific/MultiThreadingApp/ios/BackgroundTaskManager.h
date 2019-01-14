//
//  BackgroundTaskManager.h
//  MultiThreadingApp
//
//  Created by Daniel Ward on 7/8/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <dispatch/dispatch.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

@interface BackgroundTaskManager : NSObject <RCTBridgeModule> {
  dispatch_queue_t backgroundQueue;
}

@end
