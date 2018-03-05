/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />
"use strict";

//import ko = require("knockout");
// import * as ko from "knockout";

// Usage: Add a script editor webpart and add the following code
// <test-component data-module="test-component"></test-component>
// Passing parameters (Using a custom page title)
// <test-component data-module="test-component" params="pageTitle:'Changed Title'"></test-component>

namespace LCC.Modules {

    export interface Page {
        name: string;
        url: string;
    }

    export interface ITestComponent {
        start(element: any): void;
    }

    export class TestComponent implements ITestComponent {
        start(element: any) {
            console.log('TestComponent started');

            ko.components.register('test-component-content', {
                viewModel: function(params:any) {
                    var self = this;
                    self.pages = params.relatedPages;
                    self.pageTitle = params.pageTitle;
                },
                template: '<h3 data-bind="text: pageTitle"></h3><ul class="nav" data-bind="foreach: pages"><li><a data-bind="text: name, attr: { href: url, title: name }" class="item"></a></li></ul>'
            });

            ko.components.register('test-component', {
                viewModel: function(params: any) {

                    let self = this;
                    self.pageTitle = params.pageTitle || "Test Component";

                    let pagesArr: Array<Page> = new Array<Page>();
                    pagesArr.push({ name: 'BBC', url: 'https://bbc.co.uk'});
                    pagesArr.push({ name: 'Leeds CC', url: 'https://leeds.gov.uk'});

                    self.pages = ko.observableArray(pagesArr);

                },
                template: '<test-component-content params="relatedPages: pages, pageTitle: pageTitle"></test-component-content>'
            });

            class TestComponentVM {
            }

            ko.applyBindings(new TestComponentVM(), element[0]);
        }
    }

}

// class HelloViewModel {
//     language: KnockoutObservable<string>
//     framework: KnockoutObservable<string>

//     constructor(language: string, framework: string) {
//         this.language = ko.observable(language);
//         this.framework = ko.observable(framework);

//     }
// }

// ko.applyBindings(new HelloViewModel("TypeScript", "Knockout"));