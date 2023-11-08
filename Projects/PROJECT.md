# How to start?

Set up your React Native project. Use react-native-cli to create a new project.

Install the required dependencies, specifically react-navigation and react-navigation-stack for navigation.

1. npm install react-navigation
2. npm install react-navigation-stack

You can install all dependencies using this command:

npm install @react-navigation/native @react-navigation/stack react-native-reanimated react-native-gesture-handler react-native-screens

3. this is for permissions - both ios and android

npm install @react-native-permissions/permissions --save

Tip: better to write different components for ios and android for handling permissions.

4. Check the important statements in App.js

We need both the navigator and the stack for our screen navigations.

### BarcodeScanner.js

Check this file for the barcode scanner. I have implemented a reusable component

### QRCodescanner.js

Check this file for the QRcode scanner. I have implemented a reusable component

## React native camera

This is camera,barcode and qrcode

react-native-camera ----> install this package ---> npm install --save react-native-camera

Add this line to the Androidmanifest.xml file 
<uses-permission android:name="android.permission.CAMERA" />

And we also need to include a few lines at android/app/build.gradle‍

	
android { 
 ... 
 defaultConfig { 
  ... 
  missingDimensionStrategy 'react-native-camera', 'general' /* insert this line */
 }
}
	