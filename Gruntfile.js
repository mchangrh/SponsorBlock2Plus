module.exports = function (grunt) {
    grunt.initConfig({
      zip: {
        'dist/chrome.zip': ['src/**', 'icons/**', 'manifest.json']
      }
    });

    grunt.loadNpmTasks('grunt-zip');
  };