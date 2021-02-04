# Nativescript Firebase Env

Separate environment for nativescript-firebase

### Setup

For iOS you can put your `GoogleService-Info.plist.dev` and `GoogleService-Info.plist.prod` at your project root.
For Android you can put your `google-services.json.dev` and `google-services.json.prod` at your project root.

### Build

The build hooks of this plugin will now choose either the `dev` or the `prod` version of your google services `plist` and `json` files depending on how you run your build:

- `dev` will be selected if you run without `--env.production`.
- `prod` will be selected if you run with `--env.production`.
