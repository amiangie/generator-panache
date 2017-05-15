'use strict';

var helpers = {
  copy: function(template, destination, context){
    if (context && Object.keys(context).length) {
      this.fs.copyTpl(this.templatePath(template), this.destinationPath(destination), context);
    } else {
      this.fs.copy(this.templatePath(template), this.destinationPath(destination));
    }
  }
};

var Generator = {
  setConfig: function(){
    this.config.set('config', this.prompts);
  },
  
  copyDotFiles: function(){
    helpers.copy.call(this, '.*', '', this.prompts);
    helpers.copy.call(this, '.gitignore', '.gitignore');
    helpers.copy.call(this, 'assets/**/.*', 'src/assets/');
  },
  
  copyAppFiles: function(){
    helpers.copy.call(this, 'package.json', 'package.json', this.prompts);
  },
  
  copyGulpFiles: function(){
    helpers.copy.call(this, 'gulpfile.js', 'gulpfile.js', this.prompts);
    helpers.copy.call(this, 'gulp/**/*', 'gulp/', this.prompts);
  },
  
  copyProjectInfoFiles: function(){
    helpers.copy.call(this, 'README.md', 'README.md', this.prompts);
  },
  
  copyTemplates: function(){
    helpers.copy.call(this, 'templates/**/*', 'src/templates/', this.prompts);
  },
  
  copyStyles: function(){
    helpers.copy.call(this, 'styles/**/*', 'src/styles/', this.prompts);
  },
  
  copyScripts: function(){
    helpers.copy.call(this, 'scripts/**/*', 'src/scripts/', this.prompts);
  }
};

module.exports = Generator;
