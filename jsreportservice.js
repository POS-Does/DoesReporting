const fs = require("fs");
const path = require("path");
const jsreport = require('jsreport-core')({
    loadConfig: false
});

jsreport.use(require('jsreport-jsrender')());
jsreport.use(require('jsreport-phantom-pdf')());

const jsReportService = function() {
    const _renderReport = function(name, recipe, data, response) {
        return jsreport.init().then(function () {
            return jsreport.render({
                template: {
                    content: fs.readFileSync(path.join(__dirname, 'reports\\templates', name, name + '.jsreport'), 'utf8'),
                    engine: 'jsrender',
                    recipe: recipe
                },
                data: data
            }).then(function(out) {
                return out;
            }).catch(function(e) {
                console.error("Cannot render.");
                console.error(e);
                throw e;
            });
        }).catch(function(e) {
            console.error("Cannot init.");
            throw e;
        });
    };

    return {
        renderReport: _renderReport
    };
};

module.exports = jsReportService;
