export const getLocationPermission = () => {
  const onSuccess = (position, resolve) => {
    const { latitude, longitude } = position.coords;
    resolve({ latitude, longitude });
  };
  const onError = (positionError, reject) => {
    reject(positionError.message);
  };
  const locationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => onSuccess(position, resolve),
      (positionError) => onError(positionError, reject)
    );
  });
  return locationPromise;
};
