'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const utils = require('./utils');

module.exports = class extends Generator {
  prompting() {
    const done = this.async();

    this.log(yosay(
      `Let's kick-start your project with some ${chalk.green.bold('panache')}!`
    ));

    this.prompt(utils.prompts.questions).then(function (answers) {
      utils.prompts.setAnswers.apply(this, [answers]);
      done();
    }.bind(this));
  }
  
  configuring() {
    // Set Yeoman config
    utils.generator.setConfig.call(this);
    
    // Copy project config files
    utils.generator.copyDotFiles.call(this);
    
    // Copy application files
    utils.generator.copyAppFiles.call(this);
  }

  writing() {
    // Copy gulp config and tasks
    utils.generator.copyGulpFiles.call(this);
    
    // Copy project readme
    utils.generator.copyProjectInfoFiles.call(this);
    
    // Copy twig template files
    utils.generator.copyTemplates.call(this);
    
    // Copy stylesheets
    utils.generator.copyStyles.call(this);
    
    // Copy scripts
    utils.generator.copyScripts.call(this);
  }

  install() {
    this.installDependencies();
  }
};
