# expo-location-getCurrentPositionAsync-android-error
Expo Location getCurrentPositionAsync ERROR on Android

Location.getCurrentPositionAsync({}); throws error on Android

Android Emulator Logcat:
'Error getting location: ', { [Error: Encountered an exception while calling native method: Exception occurred while executing exported method getCurrentPositionAsync on module ExpoLocation: Found interface com.google.android.gms.location.FusedLocationProviderClient, but class was expected (declaration of 'com.google.android.gms.location.FusedLocationProviderClient' appears in /data/app/~~9B5HLglrsJvVMh-LSkFegQ==/com.misccdr.dezdash-xacIIWWQqqXVgneadSoeBw==/base.apk)] code: 'E_UNEXPECTED_ERROR' }

Reason:
Found interface com.google.android.gms.location.FusedLocationProviderClient, but class was expected
