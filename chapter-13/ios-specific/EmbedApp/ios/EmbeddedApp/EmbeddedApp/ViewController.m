//
//  ViewController.m
//  EmbeddedApp
//
//  Created by Daniel Ward on 9/22/18.
//  Copyright © 2018 Daniel Ward. All rights reserved.
//

#import "ViewController.h"
#import "EmbeddedViewController.h"
#import <React/RCTRootView.h>

@interface ViewController () {
    EmbeddedViewController *embeddedViewController;
}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)openRNAppButtonPressed:(id)sender {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"EmbedApp"
                         initialProperties : nil
                          launchOptions    : nil];
    
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    [self presentViewController:vc animated:YES completion:nil];
}
- (IBAction)openRNAppEmbeddedButtonPressed:(id)sender {
    NSURL *jsCodeLocation = [NSURL
                             URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                         moduleName        : @"EmbedApp"
                         initialProperties : nil
                          launchOptions    : nil];
    
    [embeddedViewController setView:rootView];
}


- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    if([segue.identifier isEqualToString:@"embed"]) {
        embeddedViewController = segue.destinationViewController;
    }
}

@end
