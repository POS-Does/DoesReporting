var express = require('express');
var router = express.Router();
var reportService = require('../jsreportservice');

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var rec = req.body.recipe ? req.body.recipe : 'html';
    // res.type('application/' + rec);
    if (rec === 'pdf') {
        rec = 'phantom-pdf';
    }
    reportService().renderReport(name, rec, req.body.payload, res)
});

router.get('/', function (req, res, next) {
    var name = 'ticket';
    var rec = 'pdf';
    res.type('application/' + rec);
    if (rec === 'pdf') {
        rec = 'phantom-pdf';
    }
    reportService().renderReport(name, rec, {"foo":"bacon"}, res)
});

module.exports = router;
