# TypeScript + Babel Await/Async Demo solution for Visual Studio 2015

Small demo project for Visual Studio 2015 with setup steps to produce ES5 await / async JavaScript code that will run also in the browser.

**NodeJS packages used**

All packages can be found in package.json file.

As build system we us [Gulp](http://gulpjs.com/ "Gulp").

For [TypeScript](www.typescriptlang.org "TypeScript") compilation is used TypeScript@next package as described here : [http://blogs.msdn.com/b/typescript/archive/2015/07/27/introducing-typescript-nightlies.aspx](http://blogs.msdn.com/b/typescript/archive/2015/07/27/introducing-typescript-nightlies.aspx "Introducing TypeScript npm nightlies") but installed locally.

For [Babel](https://babeljs.io/ "Babel") compilation we use packages

- gulp-babel
- gulp-typescript
- gulp-sourcemaps

**Tweaks to Visual Studio 2015**

To make Visual Studio 2015 not complain about new syntax we need to something called Dev Mode. Everything is described step by step here : [https://github.com/Microsoft/TypeScript/wiki/Dev-Mode-in-Visual-Studio](https://github.com/Microsoft/TypeScript/wiki/Dev-Mode-in-Visual-Studio)

Another tweak I did is to disable building .ts files from VS2015 and instead building them with gulp. You can do this from the command line or from Visual Studio 2015 directly from Task Runner Explorer.

Please note, that VS 2015 will not display two tasks until you download NodeJS packages required.

I made two tasks,

- compile-ts 
- compile-ts-babel

which will let you compile to TS with version you have downloaded and second one that will also add babel stuff

**Client side libraries used**

- Since we use babel, we also need it's browser polyfill. More on this here : [https://babeljs.io/docs/usage/polyfill/](https://babeljs.io/docs/usage/polyfill/ "about babel polyfill").
 
- I implemented Promises with help of RSVP library. Currenlty we don't have it's definitions in DefinitelyTyped repo (.d.ts file) so I had to declare it as ambient. But it will work. More about RSVP here : [https://github.com/tildeio/rsvp.js/](https://github.com/tildeio/rsvp.js/ "RSVP github page")  


**Steps to make this work**

(I presume you have NodeJS installed on your machine)

- clone this repository,
- open command line (I do this while running as admin) where package.json file is, run *npm install* - this will look into the packages.json and will download all packages needed
- run gulp task *compile-ts-babel* from either command line or from Visual Studio 2015
- load page *index.html* from HTML folder and you will see some alerts

**Current state of await/async in TypeScript**

More on when TypeScript will be able to produce directly ES5 JavaScript can be found here [https://github.com/Microsoft/TypeScript/issues/1664](https://github.com/Microsoft/TypeScript/issues/1664 "TS await async task")

From this link I also have nice article about how you can make the whole TypeScript + babel build workflow from Ivo Gabe de Wolff : [http://dev.ivogabe.com/combine-typescript-with-babel/](http://dev.ivogabe.com/combine-typescript-with-babel/ "how to combine TypeScript and babel code in one") - please read this article to know more.

I would like to thank you Ivo for the work you did there.