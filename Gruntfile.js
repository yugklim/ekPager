/**
 * Created by eklimenko on 27.03.2015.
 */
// because live_reload doesn't work in gulp - use grunt
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-concat');

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
          //src:['app/centerSequence/centerSequence.js', 'app/ekPager/ekPagerModule.js'],
          src: ['app/**/*.js', '!app/**/*_test.js'],
          dest: "js/ekPager.js"
        },
        template: {
          src: ["app/ekPager/ekPager_template.html"],
          dest: "html/ekPager_template.html"
        }
      }
    }
  );

  grunt.registerTask("default", ['open', 'watch']);
  grunt.registerTask("build", ['concat']);
};
