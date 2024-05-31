# TMDB Aster Assignment

This is a React Native application that allows users to search and view movies using the TMDB API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/).
- You have installed [React Native CLI](https://reactnative.dev/docs/environment-setup).
- You have installed [Android Studio](https://developer.android.com/studio) or Xcode if you are developing for iOS.
- You have a TMDB API key. You can get one by creating an account on [TMDB](https://www.themoviedb.org/).

## Getting Started

To get a local copy up and running, follow these steps:

### Clone the repository

```bash
git clone https://github.com/Suminaabdulla/tmdb-aster-assignment
cd tmdb-aster-assignment
```

### Install dependencies

```bash
npm install
```

### Setup environment variables

Create a `.env` file in the root directory of the project and add your TMDB API key:


### Link native dependencies

If you haven't already linked the native dependencies, run:

```bash
npx react-native link
```

### Running the application

#### For Android

Make sure you have an Android emulator running or an Android device connected.

```bash
npx react-native run-android
```

#### For iOS

Make sure you have an iOS simulator running or an iOS device connected. You may need to install CocoaPods dependencies:

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

### Additional Commands

- **Start the development server:**

  ```bash
  npx react-native start
  ```

- **Build the project:**

  For Android:

  ```bash
  cd android
  ./gradlew assembleRelease
  ```

  For iOS:

  ```bash
  cd ios
  xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release -sdk iphoneos
  ```

### Using the Application

- **Search for Movies:** Use the search bar at the top of the home screen to search for movies by title.

## Contributing

To contribute to this project, fork the repository and create a pull request with your changes.


## Acknowledgements

- [React Native](https://reactnative.dev/)
- [TMDB API](https://www.themoviedb.org/documentation/api)
