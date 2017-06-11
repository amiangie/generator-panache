# Panache 
A Yeoman generator for setting up front-end projects... with ** *panache* **

![](docs/gfx/panache.gif)

## Features
- **[Gulp](http://gulpjs.com/)**
- **[Browsersync](https://www.browsersync.io/)**
- **[Twig](http://twig.sensiolabs.org/)**
- **SCSS** with **[ITCSS architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)**
- **[Browserify](http://browserify.org/)** with **Watchify**
- full set of **linters**
- [ **ES2015** with **[Babel](https://babeljs.io/)** ]
- [ **jQuery** ]

## Installation

```bash
# install yeoman
npm install -g yo

# install panache
npm install -g generator-panache

# go to project folder and scaffold your project
yo panache
```

## Development

```bash
# new project
npm run dev
```

Note that you don't need to set up project again from scratch if it was previously set up with Panache. In this case, clone the project to your machine, and then run: 

```
# pre-existing project, which was set up with Panache
npm install
npm run build
npm run dev
```

`npm run build` re-builds the whole project and creates new revisions of styles and scripts. `npm run dev` starts a development server, watches for changes in style, script, and template files, and recompiles them as necessary.

## License

At the moment Panache is mostly a simplified version of [Chisel](https://github.com/xfiveco/generator-chisel/) by [Xfive](https://github.com/xfiveco) with improved structure and added basic styles.

Chisel and its portions in Panache as well as Panache are licensed under [MIT License](https://github.com/noel-noel/generator-panache/blob/master/LICENSE).
