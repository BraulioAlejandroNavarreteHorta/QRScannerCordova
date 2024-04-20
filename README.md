# QR Code Scanner App Cordova

## Overview

This QR Code Scanner App harnesses the power of Cordova to bring a seamless QR code scanning experience to mobile devices. Utilizing the camera plugin and the PhoneGap Barcode Scanner, it's specifically optimized for iOS but maintains cross-platform compatibility.

## Features

- **iOS Optimized**: Enhanced performance on iOS devices for a smooth scanning experience.
- **Cross-Platform Functionality**: Works on both iOS and Android to reach a wider audience.
- **Camera Integration**: Utilizes device cameras for quick QR code recognition.
- **Barcode Scanning**: Leverages the PhoneGap Barcode Scanner plugin for efficient and accurate QR code detection.

## Getting Started

To get this project up and running on your local machine for development and testing purposes, follow these simple steps:

1. Install Cordova: `npm install -g cordova`
2. Clone the repository: `git clone [https://github.com/BraulioAlejandroNavarreteHorta/QRScannerCordova.git]`
3. Navigate to the project directory: `cd qr-scanner-app`
4. Add the platform you want to run on: `cordova platform add ios` or `cordova platform add android`
5. Install the required plugins:
   - `cordova plugin add cordova-plugin-camera`
   - `cordova plugin add phonegap-plugin-barcodescanner`
6. Build the app for the desired platform: `cordova build ios` or `cordova build android`

## How It Works

The app activates the device's camera and waits for a QR code to appear in the viewfinder. Once a QR code is detected, the scanner decodes the information and performs the designated action, such as opening a URL or storing data.

## Built With

- [Cordova](https://cordova.apache.org/) - The mobile application development framework.
- [cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera) - A plugin to access the device camera for taking pictures or capturing video.
- [phonegap-plugin-barcodescanner](https://github.com/phonegap/phonegap-plugin-barcodescanner) - A plugin for barcode and QR code scanning functionality.

## Contributing

We welcome contributions! If you have suggestions for how to improve the app, please fork the repository and create a pull request, or open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks!

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

Replace `[https://github.com/BraulioAlejandroNavarreteHorta/QRScannerCordova.git]` with the actual link to your repository. The README assumes that the licenses and contributing guidelines are the standard ones; adjust as necessary for your project.


## iOS Configuration:
1. Run this command to change ownership of the platforms folder, allowing modification.
   `sudo chown -R braulioalejandronavarretehorta platforms`

2. Add the iOS platform to your Cordova project.
   `sudo cordova platform add ios`
   
3. Build the .ipa file for the iOS platform.
   `sudo cordova build ios`

   

   <img width="1149" alt="image" src="https://github.com/BraulioAlejandroNavarreteHorta/QRScannerCordova/assets/133619100/67c7c78b-b328-418e-8278-e7e4805a6f5f">

   
4. Open the iOS folder in a terminal (it's inside your Cordova project's platforms folder) and execute the following commands:
   
   - Change ownership of the file with the following command:
     `sudo chown $(whoami) CamaraApp.xcworkspace`
   
   - Change permissions to grant write access using the command:
     `chmod +w CamaraApp.xcworkspace`
   
   - Change permissions for all the content in the directory:
     ```
     sudo chown -R $(whoami) .
     chmod -R u+w .
     ```
   These commands prevent an error from occurring when the project is opened in Xcode.

   

   <img width="453" alt="image" src="https://github.com/BraulioAlejandroNavarreteHorta/QRScannerCordova/assets/133619100/7329b076-70c4-4caf-9e9c-e053f3e80e3a">


5. Open Xcode and navigate to your Cordova project's iOS folder, then press:
   `command + shift + O`
   
6. This will open a quick search within Xcode, type:
   `Info.plist`

7. Select the first file and click on the " + " button.

8. Then in the new key that was added, choose:



<img width="200" alt="image" src="https://github.com/BraulioAlejandroNavarreteHorta/QRScannerCordova/assets/133619100/32259247-6ecf-4307-8032-817a5a35ea34">



