const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
module.exports = grunt => {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
                implementation: sass
            },
            main: {
                files: {
                    'dist/assets/styles/main.css': 'src/assets/styles/main.scss'
                }
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },
            main: {
                files: {
                    'dist/assets/scripts/main.js': 'src/assets/scripts/main.js'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/assets/styles/*.scss'],
                tasks: ['sass']
            },
            babel: {
                files: ['src/assets/scripts/*.js'],
                tasks: ['babel']
            }
        }
    })

    loadGruntTasks(grunt)

    grunt.registerTask('default', ['sass', 'babel', 'watch'])
}