var mongoose = require('../db.js');

var planetSchema = mongoose.Schema({
  id: {type: String, index: true},
  active: Boolean,
  age: Number,
  x: {type:Number, index:true},
  y: {type:Number, index:true},
  z: {type:Number, index:true},
  planetname: String,
  rulername: String,
  race: String,
  size: Number,
  score: Number,
  value: Number,
  xp: Number,
  ratio: Number,
  size_rank: Number,
  score_rank: Number,
  value_rank: Number,
  xp_rank: Number,
  size_growth: Number,
  score_growth: Number,
  value_growth: Number,
  xp_growth: Number,
  size_growth_pc: Number,
  score_growth_pc: Number,
  value_growth_pc: Number,
  xp_growth_pc: Number,
  size_rank_change: Number,
  score_rank_change: Number,
  value_rank_change: Number,
  xp_rank_change: Number,
  totalroundroids: Number,
  totallostroids: Number,
  totalroundroids_rank: Number,
  totallostroids_rank: Number,
  totalroundroids_rank_change: Number,
  totallostroids_rank_change: Number,
  totalroundroids_growth: Number,
  totallostroids_growth: Number,
  totalroundroids_growth_pc: Number,
  totallostroids_growth_pc: Number,
  ticksroiding: Number,
  ticksroided: Number,
  tickroids: Number,
  avroids: Number,
  roidxp: Number,
  vdiff: Number,
  sdiff: Number,
  xdiff: Number,
  rdiff: Number,
  vrankdiff: Number,
  srankdiff: Number,
  xrankdiff: Number,
  rrankdiff: Number,
  idle: Number,
  cluster_size_rank: Number,
  cluster_score_rank: Number,
  cluster_value_rank: Number,
  cluster_xp_rank: Number,
  cluster_size_rank_change: Number,
  cluster_score_rank_change: Number,
  cluster_value_rank_change: Number,
  cluster_xp_rank_change: Number,
  cluster_totalroundroids_rank: Number,
  cluster_totallostroids_rank: Number,
  cluster_totalroundroids_rank_change: Number,
  cluster_totallostroids_rank_change: Number,
  galaxy_size_rank: Number,
  galaxy_score_rank: Number,
  galaxy_value_rank: Number,
  galaxy_xp_rank: Number,
  galaxy_size_rank_change: Number,
  galaxy_score_rank_change: Number,
  galaxy_value_rank_change: Number,
  galaxy_xp_rank_change: Number,
  galaxy_totalroundroids_rank: Number,
  galaxy_totallostroids_rank: Number,
  galaxy_totalroundroids_rank_change: Number,
  galaxy_totallostroids_rank_change: Number,
  race_size_rank: Number,
  race_score_rank: Number,
  race_value_rank: Number,
  race_xp_rank: Number,
  race_size_rank_change: Number,
  race_score_rank_change: Number,
  race_value_rank_change: Number,
  race_xp_rank_change: Number,
  race_totalroundroids_rank: Number,
  race_totallostroids_rank: Number,
  race_totalroundroids_rank_change: Number,
  race_totallostroids_rank_change: Number,
  size_highest_rank: Number,
  size_highest_rank_tick: Number,
  size_lowest_rank: Number,
  size_lowest_rank_tick: Number,
  score_highest_rank: Number,
  score_highest_rank_tick: Number,
  score_lowest_rank: Number,
  score_lowest_rank_tick: Number,
  value_highest_rank: Number,
  value_highest_rank_tick: Number,
  value_lowest_rank: Number,
  value_lowest_rank_tick: Number,
  xp_highest_rank: Number,
  xp_highest_rank_tick: Number,
  xp_lowest_rank: Number,
  xp_lowest_rank_tick: Number,
});

module.exports = mongoose.model('Planet', planetSchema, 'Planets');

