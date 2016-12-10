module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'css/shared.css': 'css/shared.scss',
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


	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('serve', [
		'sass',
		'concurrent:serve'
	]);
};
