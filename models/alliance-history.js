var mongoose = require('../db.js');

var allianceHistorySchema = mongoose.Schema({
  tick: Number,
  hour: Number,
  timestamp: Date,
  id: Number,
  active: Boolean,
  age: Number,
  name: String,
  alias: String,
  size: Number,
  members: Number,
  score: Number,
  points: Number,
  ratio: Number,
  size_rank: Number,
  members_rank: Number,
  score_rank: Number,
  points_rank: Number,
  size_avg: Number,
  score_avg: Number,
  points_avg: Number,
  size_avg_rank: Number,
  score_avg_rank: Number,
  points_avg_rank: Number,
  size_growth: Number,
  score_growth: Number,
  points_growth: Number,
  member_growth: Number,
  size_growth_pc: Number,
  score_growth_pc: Number,
  points_growth_pc: Number,
  size_avg_growth: Number,
  score_avg_growth: Number,
  points_avg_growth: Number,
  size_avg_growth_pc: Number,
  score_avg_growth_pc: Number,
  points_avg_growth_pc: Number,
  size_rank_change: Number,
  members_rank_change: Number,
  score_rank_change: Number,
  points_rank_change: Number,
  size_avg_rank_change: Number,
  score_avg_rank_change: Number,
  points_avg_rank_change: Number,
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
  sdiff: Number,
  pdiff: Number,
  rdiff: Number,
  mdiff: Number,
  srankdiff: Number,
  prankdiff: Number,
  rrankdiff: Number,
  mrankdiff: Number,
  savgdiff: Number,
  pavgdiff: Number,
  ravgdiff: Number,
  savgrankdiff: Number,
  pavgrankdiff: Number,
  ravgrankdiff: Number,
  idle: Number,
  size_highest_rank: Number,
  size_highest_rank_tick: Number,
  size_lowest_rank: Number,
  size_lowest_rank_tick: Number,
  members_highest_rank: Number,
  members_highest_rank_tick: Number,
  members_lowest_rank: Number,
  members_lowest_rank_tick: Number,
  score_highest_rank: Number,
  score_highest_rank_tick: Number,
  score_lowest_rank: Number,
  score_lowest_rank_tick: Number,
  points_highest_rank: Number,
  points_highest_rank_tick: Number,
  points_lowest_rank: Number,
  points_lowest_rank_tick: Number,
  size_avg_highest_rank: Number,
  size_avg_highest_rank_tick: Number,
  size_avg_lowest_rank: Number,
  size_avg_lowest_rank_tick: Number,
  score_avg_highest_rank: Number,
  score_avg_highest_rank_tick: Number,
  score_avg_lowest_rank: Number,
  score_avg_lowest_rank_tick: Number,
  points_avg_highest_rank: Number,
  points_avg_highest_rank_tick: Number,
  points_avg_lowest_rank: Number,
  points_avg_lowest_rank_tick: Number,
});

module.exports = mongoose.model('AllianceHistory', allianceHistorySchema, 'AllianceHistories');

