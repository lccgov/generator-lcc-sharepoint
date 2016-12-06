# LCC SharePoint branding generator
This Yeoman generator allows you to create a new LCC SharePoint branding project for a site. The generator utilises the [lcc_frontend_toolkit](https://github.com/lccgov/lcc_frontend_toolkit) and [lcc_templates_sharepoint](https://github.com/lccgov/lcc_templates_sharepoint) packages which have the basic masterpages, page layouts and assets as defined by the designers. From the generated project you can add additional assets to support the look of the new site.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-lcc-sharepoint using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-lcc-sharepoint
```

Create a new directory for your project, then CD into it

```bash
mkdir lcc_sitename
cd lcc_sitename
```

Then generate your new project:

```bash
yo lcc-sharepoint
```

The generator will install the npm packages for you

If you have [Visual Studio Code](ttps://code.visualstudio.com/) installed you can open the project in it by typing:

```bash
code .
```

Please see the [readme file](https://github.com/lccgov/generator-lcc_sharepoint/blob/master/generators/app/templates/readme.md) within the generated project for instructions on how to config and deploy the project.
