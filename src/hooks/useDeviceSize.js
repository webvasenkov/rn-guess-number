import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useDeviceSize = () => {
  const [deviceSize, setDeviceSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const changeHandler = () => {
      setDeviceSize((deviceSize) => ({
        ...deviceSize,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }));
    };

    Dimensions.addEventListener('change', changeHandler);
    return () => Dimensions.removeEventListener('change', changeHandler);
  }, []);

  return deviceSize;
};
