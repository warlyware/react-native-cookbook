//
//  ViewController.m
//  EmbeddedApp
//
//  Created by Daniel Ward on 9/23/18.
//  Copyright © 2018 Daniel Ward. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import "EmbeddedViewController.h"

@interface ViewController () <RCTBridgeDelegate> {
    EmbeddedViewController *embeddedViewController;
    RCTBridge *_bridge;
    BOOL isRNRunning;
    
}

@property (weak, nonatomic) IBOutlet UITextField *userNameField;

@end

@implementation ViewController

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    return jsCodeLocation;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    [self openRNAppEmbeddedButtonPressed:nil];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)openRNAppEmbeddedButtonPressed:(id)sender {
    if(_bridge == nil) {
        _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
    }
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBridge :_bridge
                      moduleName        : @"FromRNToNative"
                      initialProperties : nil];
    
    isRNRunning = true;
    [embeddedViewController setView:rootView];
}


- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    if([segue.identifier isEqualToString:@"embed"]) {
        embeddedViewController = segue.destinationViewController;
    }
}

-(void) updateUserNameField:(NSString *)userName {
    [_userNameField setText:userName];
}
@end
