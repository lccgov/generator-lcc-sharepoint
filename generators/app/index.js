'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var rename = require("gulp-rename");
var parentConfig = require('../../package.json');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.blue('LCC Sharepoint') + ' generator!'
    ));

    var prompts = [
      {
        type: 'confirm',
        name: 'goCreate',
        message: 'I will create you a shiny new SharePoint project in the current directory?',
        default: true
      },
      {
      type: 'input',
      name: 'name',
      message: 'What is the name of this package?',
      default: this.appname
      }
      ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  loadParentConfig: function () {
    this.props.generatorVersion = parentConfig.version;
  },

  copyTemplates: function () {
    var _this = this;
    if(_this.props.goCreate) 
    {
        console.log(chalk.green("Create you a new shiny SharePoint branding"));
        this.registerTransformStream(rename(function (path) {
            path.dirname = path.dirname.replace('_','');
            path.basename = path.basename.replace('_','');
            return path;
        }));
        this.fs.copyTpl(
          this.templatePath(),
          this.destinationPath(),
          _this.props
        );
    }
  },

  install: function () {
    if(this.props.goCreate) 
    {
      console.log(chalk.green("Running npm install, so you don't have to"));      
      this.npmInstall();
    }
  }
});
