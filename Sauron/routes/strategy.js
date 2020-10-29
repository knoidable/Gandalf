const config = require('../../config');
const express = require('express');
var router = express.Router();
const access = require('../access');
const fs = require('fs');


router.get('/', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'strategy' });
  });
});


router.get('/ship', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_ship.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'ship' });
  });
});

router.get('/tickplan', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'tickplan' });
  });
});

router.get('/tickplan/ter', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan_ter.html', fs.constants.F_OK, (err) => {
    res.render('tickplan', { content_exists: err ? false : true, race: 'ter' });
  });
});

router.get('/tickplan/cat', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan_cat.html', fs.constants.F_OK, (err) => {
    res.render('tickplan', { content_exists: err ? false : true, race: 'cat' });
  });
});

router.get('/tickplan/xan', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan_xan.html', fs.constants.F_OK, (err) => {
    res.render('tickplan', { content_exists: err ? false : true, race: 'xan' });
  });
});

router.get('/tickplan/zik', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan_zik.html', fs.constants.F_OK, (err) => {
    res.render('tickplan', { content_exists: err ? false : true, race: 'zik' });
  });
});

router.get('/tickplan/etd', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_tickplan_etd.html', fs.constants.F_OK, (err) => {
    res.render('tickplan', { content_exists: err ? false : true, race: 'etd' });
  });
});


router.get('/forting', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_forting.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'forting' });
  });
});


router.get('/startup', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_startup.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'startup' });
  });
});


router.get('/quests', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_quests.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'quests' });
  });
});


router.get('/scans', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_scans.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'scans' });
  });
});


router.get('/attack', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_attack.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'attack' });
  });
});


router.get('/defence', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_defence.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'defence' });
  });
});


router.get('/complaints', access.memberRequired, function(req, res, next) {
  fs.access('views/content/strat_complaints.html', fs.constants.F_OK, (err) => {
    res.render('strategy', { content_exists: err ? false : true, strategy: 'complaints' });
  });
});


module.exports = router;

