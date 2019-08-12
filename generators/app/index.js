'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const parentConfig = require('../../package.json');
const rename = require("gulp-rename");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the ' + chalk.blue('LCC Sharepoint') + ' generator ' + chalk.green(parentConfig.version))
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'goCreate',
        message: 'I will scaffold you an LCC SharePoint project in the current directory?',
        default: true
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this package?',
        default: this.appname.split(' ').join('.')
      }
      ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing() {
    var _this = this;
    if(_this.props.goCreate) 
    {
      this.props.generatorVersion = parentConfig.version;
        console.log(chalk.green("Creating you a new shiny SharePoint branding project"));
        this.registerTransformStream(rename(function (path) {
          path.dirname = path.dirname.replace('_', '');
          path.basename = path.basename.replace(/^_/gi, ''); // remove first underscore
          path.basename = path.basename.replace('$$name$$', _this.props.name);
            return path;
        }));
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          _this.props
        );
    }
  }

  install() {
    if(this.props.goCreate) 
    {
      console.log(chalk.green("Running npm install, so you don't have to"));      
      this.npmInstall();
    }
  }
};
