import React from 'react';
import Resizer from 'react-image-file-resizer';
const compressImage = (file) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300, // maximum width
        300, // maximum height
        'JPEG', // output format
        70, // quality
        0, // rotation
        (uri) => {
          resolve(uri);
        },
        'base64' // output type
      );
    });
  };
export default compressImage  