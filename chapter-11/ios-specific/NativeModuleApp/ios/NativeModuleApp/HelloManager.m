//
//  HelloManager.m
//  NativeModuleApp
//
//  Created by Daniel Ward on 6/16/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "HelloManager.h"

@implementation HelloManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(
  greetUser: (NSString *)name isAdmin:(BOOL *)isAdmin callback: (RCTResponseSenderBlock) callback
) {
  NSString *greeting =
    [NSString stringWithFormat:
     @"Welcome %@, you %@ an administrator.", name, isAdmin ? @"are" : @"are not"];

  callback(@[greeting]);
}

@end
