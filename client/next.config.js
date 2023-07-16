// for file change detection when nextJS fails.  It autmatically checks
module.exports = {
    webpack: (config) => {
      config.watchOptions.poll = 300;
      return config;
    },
  };