/**
 * Created by eklimenko on 27.03.2015.
 */
// because live_reload doesn't work in gulp - use grunt
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.initConfig({

      open: {
        dev: {
          path: 'http://localhost:63342/ekPager/app/index.html',
          app: 'Chrome'
        }
      },

      watch: {

        livereload: {
          options: {
            livereload: true
          },
          files: [
            'app/**/*.{css,js,html}'
          ]
        }
      },

      concat: {
        dist: {
          src: ['app/**/*.js','app/ekPager/ekPagerModule.js',
            '!app/**/*_test.js','!app/bootstrap.js', '!app/main.js'],
          dest: "js/ekPager.js"
        },
        template: {
          src: ["app/ekPager/ekPager_template.html"],
          dest: "html/ekPager_template.html"
        }
      },

      'string-replace': {
          dist: {
            files: {
              "js/ekPager.js":"js/ekPager.js"
            },

            options: {
              replacements: [{
                pattern: 'ekPager/ekPager_template.html',
                replacement: 'bower_components/ekPager/html/ekPager_template.html'
              }]
            }
          }
        }

    }
  );

  grunt.registerTask("default", ['open', 'watch']);
  grunt.registerTask("build", ['concat', 'string-replace']);
};
