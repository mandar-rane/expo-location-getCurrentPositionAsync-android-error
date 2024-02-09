try {
        let location = await Location.getCurrentPositionAsync({});

        const { coords } = location;
        const { latitude, longitude } = coords;

        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });

        reverseGeoCodeCoords(latitude, longitude);
        setIsInitialRegionFetched(true);
  
      } catch (error) {
        console.error("Error getting location: ", error);
}

// Android Studio Logcat Error:
// 'Error getting location: ', { [Error: Encountered an exception while calling native method: Exception occurred while executing exported
// method getCurrentPositionAsync on module ExpoLocation: Found interface com.google.android.gms.location.FusedLocationProviderClient, but 
// class was expected (declaration of 'com.google.android.gms.location.FusedLocationProviderClient'
// appears in /data/app/~~9B5HLglrsJvVMh-LSkFegQ==/com.misccdr.dezdash-xacIIWWQqqXVgneadSoeBw==/base.apk)] code: 'E_UNEXPECTED_ERROR' }
