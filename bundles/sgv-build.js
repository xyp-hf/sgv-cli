"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var Page_1 = require("./domain/impl/Page");
program
    .usage('[entry]')
    .option('-p,--page [page-name]', 'create page module')
    .option('-c,--comp [comp-name]', 'create component module')
    .option('-s,--service [service-name]', 'create service module')
    .option('-f,--fun [method-name]', "method name")
    .parse(process.argv);
console.log(program.hasOwnProperty("page"));
if (program.hasOwnProperty("page")) {
    console.log("page");
    var page = new Page_1.Page();
    page.copyFiles();
}
if (program.hasOwnProperty("comp")) {
}
//# sourceMappingURL=sgv-build.js.map