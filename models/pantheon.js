const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pantheonSchema = new Schema({
  category: {
    type: String
  },
  players: {
    type: Array
  },
  creator: {
    type: String
  },
  acceptedPlayers: {
    type: Array
  },
  numOfPlayers: {
    type: Number
  },
  votingTime: {
    type: Number
  },
  winnerTime: {
    type: Number
  },
  battle: {
    type: Object
  },

  finalBattle: {
    type: Object
  },

  accepted: {
    type: Boolean
  },

  music: {
    type: Boolean
  },

  vote: {
    type: Boolean
  },

  final: {
    type: Boolean
  },

  finalMusic: {
    type: Boolean
  },

  finalVote: {
    type: Boolean
  },

  completed: {
    type: Boolean
  },
  victoryLap: {
    type: Number
  }
});

module.exports = mongoose.model("Pantheon", pantheonSchema);