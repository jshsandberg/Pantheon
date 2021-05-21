import axios from "axios";

export const API = {
  
    saveNewUser: function(user) {
      return axios.post("/api/user/register", user);
    },
    loginUser: function(loginData) {
      return axios.post("/api/user/login", loginData);
    },
    getUserbyId: function(id) {
      return axios.post("/api/user/" + id);
    },
    checkFriendRequest: function(username) {
      return axios.post("/api/user/friendRequest/" + username)
    },
    acceptFriendRequest: function(username, friendUsername) {
      return axios.post("/api/user/acceptFriendRequest/" + username, {friendUsername: friendUsername})
    },
    declineFriendRequest: function(username, friendUsername) {
      return axios.post("/api/user/declineFriendRequest/" + username, {friendUsername: friendUsername})
    },
    getAllUsersPantheon: function(username) {
      return axios.post("/api/user/allPantheon/" + username);
    },
    allUserPantheons: function(username, user) {
      return axios.post("/api/user/allUserPantheons/" + username, user)
    },
    // saveReview: function(user, review) {
    //   return axios.post("/api/user/review/" + user, review);
    // },
    // getReview: function(id) {
    //   return axios.post("/api/user/mediaReview/" + id);
    // },
    // getMaxRatings: function() {
    //   return axios.post("api/maxRatings");
    // },
    addFriend: function(username, selector, input) {
      const obj = {
        selector: selector,
        input: input
      };
      return axios.post("api/user/addFriend/" + username, obj);
    },
    getFriends: function(username) {
      return axios.post("api/user/getFriends/" + username);
    },
    getFriendsPantheon: function (user) {
      return axios.post("api/user/getFriendsPantheon/" + user.username, user)
    },
    savePantheon: function(data) {
      return axios.post("api/pantheon", data);
    },
    getNonAcceptedPantheons: function(username) {
      return axios.post("api/pantheon/" + username);
    },
    getUserPantheonInteractions: function(username) {
      return axios.post("api/user/pantheonInteractions/" + username)
    },
    acceptPantheon: function(id, username) {
      const obj = {
        username: username
      };
      return axios.post("api/user/pantheon/" + id, obj)
    },
    declinePantheon: function(id, username) {
      const obj = {
        username: username
      };
      return axios.post("api/user/pantheonDeclined/" + id, obj)
    },
    getPantheonBattle: function(username) {
      return axios.post("api/pantheon/selectMusic/" + username)
    },
    saveSong: function(username, song, pantheonId) {
      const obj = {
        song: song,
        pantheonId: pantheonId
      };
      return axios.post("api/pantheon/song/" + username, obj)
    },
    checkPantheonTimer: function(username) {
      return axios.post("api/pantheon/timer/" + username);
    },
    submitVote: function(username, fighter, pantheonId, battle, number) {
      const obj = {
        username: username,
        fighter: fighter,
        battle: battle,
        number: number
      };
      return axios.post("api/pantheon/vote/" + pantheonId, obj)
    },
    finalVote: function(username) {
      return axios.post("api/pantheon/finalVote/" + username);
    },
    getResultsPantheon: function (username) {
      return axios.post("api/pantheon/results/" + username);
    },
    submitFinalVote: function(username, fighter, pantheonId, battle) {
      const obj = {
        username: username,
        fighter: fighter,
        battle: battle,
      };
      return axios.post("api/pantheon/finalVoting/" + pantheonId, obj)
    },
    checkFinalTimer: function(username) {
      return axios.post("api/pantheon/finalTimer/" + username);
    },
    getWinner: function(username) {
      return axios.post("api/pantheon/winner/" + username);
    },
    completePantheon: function(username) {
      return axios.post("api/pantheon/complete/" + username)
    }
    // getActivePantheon: function(id) {
    //   return axios.post("api/pantheon/creator/" + id);
    // },
    // startMusic: function (item) {
    //   console.log(item)
    //   return axios.post("api/pantheon/music/" + item.id, item);
    // },
    // getMusic: function (username) {
    //   return axios.post("api/pantheon/find/" + username)
    // },
    // submitBattle: function (obj, username) {
    //   return axios.post("api/pantheon/battle/" + username, obj)
    // },
    // getVotingPantheon: function (username) {
    //   return axios.post("api/pantheon/voting/" + username);
    // },
    // saveVotes: function (obj) {
    //   return axios.post("api/pantheon/saveVotes/" + obj.username, obj)
    // },
    // getResults: function (username) {
    //   return axios.post("api/pantheon/results/" + username)
    // },
    // createFinalBattle: function (id) {
    //   return axios.post("api/pantheon/finalBattle/" + id)
    // },
    // getFinalMusic: function (username) {
    //   return axios.post("api/pantheon/finalMusic/" + username)
    // },
    // submitFinalBattle: function (obj, username) {
    //   return axios.post("api/pantheon/finalMusicChoice/" + username, obj)
    // },
    // getFinalVotingPantheon: function (username) {
    //   return axios.post("api/pantheon/finalVoting/" + username);
    // },
    // saveFinalVotes: function (obj, username) {
    //   return axios.post("api/pantheon/saveFinalVotes/" + username, obj)
    // },
    // getFinalResults: function (username) {
    //   return axios.post("api/pantheon/finalResults/" + username)
    // },
    // completePantheon: function (pantheonId) {
    //   return axios.post("api/pantheon/complete/" + pantheonId)
    // }
};