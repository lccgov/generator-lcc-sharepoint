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

## Updating package version numbers for packages used in the generated project
Remember when you want to update the version number for packages that are in the generated project you need to update them 
in the [package.json](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/generators/app/templates/package.json) for the template, not in the package.json for this project. For example if you updated the lcc_frontend_toolkit and wanted those changes to be reflect within the project you are generating, you would need to bump the version number in the package above. This applies to adding new packages too.

## Making changes to the generator
All the files the are created when using the generator to scaffold your project live in the [templates folder](https://github.com/lccgov/generator-lcc-sharepoint/tree/master/generators/app/templates)

If for example, you want to make a change to the application SASS file so all newly generated sites get this by default, you would edit the [application.scss](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/generators/app/templates/app/assets/sass/application.scss) that lives inside the templates directory.

## Publishing to NPM

Once you have updated anything in the generator, it needs a new NPM package generating so you can use the updated generator.

1. Bump version in [package.json](https://github.com/lccgov/generator-lcc-sharepoint/blob/master/package.json) – we use semantic versioning. NOTE: If this step is omitted, then when you commit and push your changes it will not generate new NPM packages for each of the output formats. Helpful when you are not ready to publish a new package but want to make sure your changes are source controlled.
2. Commit changes and push to remote repository.
3. Once pushed, a [Travis CI build](https://travis-ci.org/lccgov/generator-lcc-sharepoint) is kicked off that checks that the version has increased and if so will publish to the [NPM registry](https://www.npmjs.com/package/generator-lcc-sharepoint).
