# LCC SharePoint branding generator
This Yeoman generator allows you to create a new LCC SharePoint branding project for a site. The generator utilises the [lcc_frontend_toolkit](https://github.com/lccgov/lcc_frontend_toolkit) and [lcc_templates_sharepoint](https://github.com/lccgov/lcc_templates_sharepoint) packages which have the basic masterpages, page layouts and assets as defined by the designers. From the generated project you can add additional assets to support the look of the new site.

## Installation
Please install the following pre-requisites
- [Node.js](https://nodejs.org/en/)
- [VS code](https://code.visualstudio.com/Download) (Optional)

Node.js will allow us to use the NPM package manager, but once installed we need to set the proxy to use it from the LCC corporate network
```sh
npm config set proxy http://<corporate-proxy>:<port>
npm config set http_proxy http://<corporate-proxy>:<port>
```

Next we have to install the NPM packages that we will use. These are [Yeoman](http://yeoman.io) and generator-lcc-sharepoint. You should probably do this each time to make sure you get the latest generator-lcc-sharepoint.
The following command will install these for us
```bash
npm install -g yo generator-lcc-sharepoint
```

Create a new directory for your project, then CD into it

```bash
mkdir lcc_sitename
cd lcc_sitename
```

Then generate your new project, following the prompts on-screen.

```bash
yo lcc-sharepoint
```

The generator will install the npm packages for you

If you have [Visual Studio Code](ttps://code.visualstudio.com/) installed you can open the project in it by typing:

```bash
code .
```

Please see the [readme file](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/generators/app/templates/readme.md) within the generated project for instructions on how to config and deploy the project.

If you're using this readme as a starter to scaffold your project, you need to read no further. The rest of this readme concerns itself with updating the generator.

## Updating package version numbers for the generated project
Remember when you want to update the version number for packages that are in the generated project you need to update them 
in the [package.json](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/generators/app/templates/package.json) for the template, not in the package.json for this project. For example if you updated the lcc_frontend_toolkit and wanted those changes to be reflect within the project you are generating, you would need to bump the version number in the package above. This applies to adding new packages too.


## Publishing to NPM
Once you have updated any of the template files, or updated the package version for dependencies you need to publish these back to NPM so the next time you use the generator, you get the new files or package dependencies. 
First off you need to update the version number in the [package.json](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/package.json) file for this project.

N.B You need to come off the corporate network to publish to NPM.

Next, from the root of this project type.

```sh
$ npm publish
```
You should see the the new published version number as the last line written. Something like:
```sh
+ generator-lcc-sharepoint@0.2.4
```
