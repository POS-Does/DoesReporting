var express = require('express');
var router = express.Router();
var reportService = require('../jsreportservice');

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var rec = req.body.recipe ? req.body.recipe : 'html';
    var arguments = req.body.arguments ? req.body.arguments : {};
    // res.type('application/' + rec);
    if (rec === 'pdf') {
        rec = 'phantom-pdf';
    }
    console.log('Report process: ' + name);
    reportService().renderReport(name, rec, req.body.payload)
        .then(function (data) {
            data.stream.pipe(res);
            console.log('Report completed: ' + name);
    });
});

module.exports = router;
