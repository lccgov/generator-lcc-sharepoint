'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var rename = require("gulp-rename");

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.blue('generator-lcc-sharepoint') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  copyTemplates: function () {
    var _this = this;
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
  },

  install: function () {
    this.installDependencies();
  }
});
