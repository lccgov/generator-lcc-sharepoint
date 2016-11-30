# LCC SharePoint
This project contains assets for deployment into an LCC SharePoint site. The yeoman generator you scaffolded this project from includes generic masterpages, page layouts and sites assets (sass/javascript/images) to enable to to provision these into a site and have the default LCC branding to get you under way.

## Getting Started
These instructions will help you to understand the project and setup up the components for deployment into a SharePoint on-premises environment.

### Deployment
Modify the settings.json file and enter your network username (without the AD prefix), password and the site you want to deploy the assets to. 
The project contains a [VS Code](https://code.visualstudio.com) build task that will build and upload the files to the SharePoint site.
Press Ctrl + Shift + B to build and upload or from a terminal window type 
```sh
$ gulp upload
```

You can optionally supply the following debug parameter to gulp. Passing this parameter will stop the call to uglify for easier browser debugging.
```sh
--debug
```


## Customising Assets
### Adding new images
You can extra images by placing them in the app/assets/images directory under the project root.

### Adding custom JavaScript
You can extra javascript code by placing it the application.js in the app/assets/javascripts directory under the project root.
You can also add any other js files into this directory and these will be bundled in.

### Adding customer CSS
CSS files can be placed in the app/assets/css directory or you can edit the application.scss file that was created for you.
Please note other SASS files can be placed in this directory and these will be compiled and bundled.

### Adding other files (Masterpages/Page Layouts/etc..)
Any other files placed in the app/assets directory will be uploaded to _catalogs/masterpage/public in the site configured in the settings.json file.

### Adding file metadata
Some file types require associated metadata, Page Layouts for example. 
Metadata for these files needs to be added to the metadata.json file. The file already contains metadata for the default page layouts, you may copy one of these to use for your custom page layout changing the following attributes:

- name: This is the name of the file on the file system
- Title: The display title of the layout in SharePoint

You can leave any other attributes.
NB: Currently it seems there is no way to set the Associated Content Type property for Page Layouts, you can set the content type but must manually go and set the Associated Content Type. You only need to do this once, subsequent uploads will be fine.



## Gotchas

### Leave the dist folder alone
Seriously, if you want to edit any files edit them in the app folder. If you want to modify any out of the box masterpages, you should do this in the relevant repo then update the package in this project.
Still not convinced? All the files in the dist folder are cleared out at each build if that helps make your mind up.
