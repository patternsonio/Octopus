'use strict';

exports.config = {
  namespace: 'octopus',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false,
    },
    {
      type: 'dist',
    },
  ],
};
