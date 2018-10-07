//
//  UserNameManager.m
//  EmbeddedApp
//
//  Created by Daniel Ward on 10/6/18.
//  Copyright © 2018 Daniel Ward. All rights reserved.
//

#import "UserNameManager.h"
#import "AppDelegate.h"
#import "ViewController.h"
#import <React/RCTBridgeModule.h>

@implementation UserNameManager
RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(setUserName: (NSString *)userName) {
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    ViewController *controller = (ViewController *)delegate.window.rootViewController;
    
    [controller updateUserNameField:userName];
}
@end

