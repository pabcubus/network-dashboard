module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/shared.css': 'css/shared.scss',
					'css/functions.css': 'css/functions.scss',
					'css/dashboard.css': 'css/dashboard.scss'
				}
			}
		},
		shell: {
			serve: {
				command: 'serve'
			}
		},
		watch: {
			sass: {
				files: ['**/*.scss'],
				tasks: ['sass']
			}
		},
		concurrent: {
			serve: ['shell:serve', 'watch:sass']
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', [
		'sass',
		'concurrent:serve'
	]);
};
