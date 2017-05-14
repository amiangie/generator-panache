'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const prompts = require('./utils/prompts');

module.exports = class extends Generator {
  prompting() {
    const done = this.async();

    this.log(yosay(
      "Let's kick-start your project with some " + chalk.red('panache') + "!"
    ));

    this.prompt(prompts.questions).then(function (answers) {
      prompts.setAnswers.apply(this, [answers]);
      done();
    }.bind(this));
  }
  
  configuring() {
     this.config.set('config', this.prompts);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(''),
      this.destinationPath(''),
      this.prompts
    );
  }

  install() {
    this.installDependencies();
  }
};
