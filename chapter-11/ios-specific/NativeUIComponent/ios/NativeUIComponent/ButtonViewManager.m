//
//  ButtonViewManager.m
//  NativeUIComponent
//
//  Created by Daniel Ward on 6/17/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

//#import "ButtonViewManager.h"
//
//@implementation ButtonViewManager
//
//@end

#import "ButtonViewManager.h"
#import "Button.h"
#import "React/UIView+React.h"

@implementation ButtonViewManager
RCT_EXPORT_MODULE()

- (UIView *)view {
  Button *button = [[Button alloc] init];
  return button;
}

RCT_EXPORT_VIEW_PROPERTY(buttonText, NSString);
RCT_EXPORT_VIEW_PROPERTY(onTap, RCTBubblingEventBlock);

@end
