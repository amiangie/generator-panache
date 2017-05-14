'use strict';

var _ = require('lodash');
var path = require('path');

var Prompts = {
  questions: [
    {
      name: 'name',
      message: 'Please enter project name:',
      default: _.startCase(path.basename(process.cwd())),
      validate: function (input) {
        return !!input;
      }
    },
    {
      name: 'author',
      message: 'Please enter author name:',
      default: ''
    },
    {
      type: 'checkbox',
      name: 'features',
      message: 'Select additional features:',
      choices: [{
        name: 'jQuery',
        value: 'has_jquery',
        checked: false
      }, {
        name: 'ES2015 with Babel',
        value: 'has_babel',
        checked: false
      }]
    }
  ],

  setAnswers: function (answers) {
    this.prompts = {};

    this.prompts.name = answers.name;
    this.prompts.author = answers.author;
    this.prompts.nameSlug = _.kebabCase(answers.name);
    this.prompts.nameCamel = _.capitalize(_.camelCase(answers.name));
    this.prompts.features = {};

    for (var i in answers.features) {
      this.prompts.features[answers.features[i]] = true;
    }
  }
};

module.exports = Prompts;
