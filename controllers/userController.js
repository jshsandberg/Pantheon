const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { Pantheon } = require("../models");
const { replaceOne } = require("../models/user");



module.exports = {
    register: async (req, res) => {
		try {

			let {email, username} = req.body;

			if (!req.body.email || !req.body.username || !req.body.password || !req.body.confirmed) {
				return res.json({ msg: 'Need to fill out all the inputs.'});
			};

			if (req.body.password.length < 5) {
				return res.json({ msg: "The password needs to be at least 5 characters long." });
			}

			if (req.body.password !== req.body.confirmed) {
				return res.json({ msg: "The passwords do not match up." });
			}

			const existingUser = await db.User.findOne({ username });
			if (existingUser) {
				return res.json({ msg: "An account with this username has already been created."});
			}

			const existingEmail = await db.User.findOne({ email });
			if (existingEmail) {
				return res.json({ msg: "An account with this email has already been created." });
			}

			const salt = await bcrypt.genSalt();
			const passwordHash = await bcrypt.hash(req.body.password, salt);
			
			const newUser = new db.User({
				username: req.body.username,
				password: passwordHash,
				email: req.body.email
			});
			const savedUser = await newUser.save();

			const token = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 60,
					id: newUser._id,
				},
				"secret"
			);

			// const token = jwt.sign(
			// 	{
			// 		exp: Math.floor(Date.now() / 1000) + 60 * 60,
			// 		id: user._id,
			// 	},
			// 	"secret"
			// );
			// res.json({
			// 	token,
			// 	user: {
			// 		id: user._id,
			// 		username: user.username,
			// 		email: user.email,
			// 		reviews: [
			// 			{
			// 				spotifyId: null,
			// 				review: null,
			// 				rating: null
			// 			}
			// 		],
			// 		friend: [null],
			// 		pantheon: [null]
			// 		}
			// 	});
			res.json({token, savedUser});
		} catch (err) {
			console.log(err)
		}
    },

    login: async (req, res) => {
		try {

			const { username, password } = req.body;

			if (!req.body.username || !req.body.password) {
				return res.json({ msg: "Not all fields have been entered." })
			}

			const user = await db.User.findOne({ username });
			if (!user) {
				return res.json({ msg: "User could not be found." })

			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.json({ msg: "Incorrect password." })

			}

			const token = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 60,
					id: user._id,
				},
				"secret"
			);
			res.json({
				token,
				user
				});
		} catch (error) {
			res.json(error)
        }
	},
	findById: async (req, res) => {

		try {
			const foundUser = await db.User.findById(req.params.id);			 
			res.json(foundUser)
		} catch (err) {
			res.status(500)
		}
	},
	// saveReview: async (req, res) => {

	// 	try {


	// 		let id = req.params.userId

	// 		await User.findOneAndUpdate({
	// 			_id: id
	// 		}, {
	// 			$push: {
	// 				reviews: {spotifyId: req.body.spotifyId, review: req.body.review, rating: req.body.rating, date: Date.now()}
	// 			}
	// 		})
			
	// 		const foundUser = await db.User.findById(id)

	// 			res.json(foundUser)

	// 	} catch(err) {
	// 		res.status(500)
	// 	}
	// },
	// getReview: async (req, res) => {

	// 	try {
	// 		let id = req.params;
	// 		const foundReview = await User.find({ "reviews.spotifyId": id.spotifyId});
			
	// 		res.json(foundReview);

	// 	} catch(err) {
	// 		res.status(500)
	// 	}
	// },
	addFriend: async (req, res) => {
		try {
			if (req.body.selector === "username") {
				const foundUser = await db.User.findOne({ username: req.params.username });
				if (foundUser.friend.includes(req.body.input)) {
						return res.send("User is already friends with this user")
				} else { 
					const foundFriend = await db.User.findOne({
						username: req.body.input
					});
					if (foundFriend === null) {
						return res.send("User does not exist");
					} else {
						await User.findOneAndUpdate({
								username: req.body.input
							}, {
								$push: {
									friendRequest: req.params.username
								}
							});
							return res.send("Friend request sent")
					}
				}
			} else if (req.body.selector === "email") {
				const foundUser = await db.User.findOne({ username: req.params.username });
				const foundEmail = await db.User.findOne({ email: req.body.input });
				if (foundEmail === null) {
					return res.send("User does not exist")
			} else if (foundUser.friend.includes(foundEmail.username)) {
					return res.send("User has already been added");
				} else {
					await User.findOneAndUpdate({
							username: foundEmail.username
						}, {
							$push: {
								friendRequest: req.params.username
							}
						});
						return res.send("Friend request sent")
				}
			}
		} catch (err) {
			console.log(err)
		}
		
	// 	try {
	// 		const value = (Object.keys(req.body));
	// 		const params = req.params.username;

	// 		const checkUserHasFriend = await db.User.findOne({ username: params });

	// 		if (checkUserHasFriend.friend.includes(value)) {
	// 			return res.send("User is already friends with this user")
	// 		} else {
	// 			const foundUser = await db.User.find({
	// 				username: value
	// 			})
	
	
	// 			if (foundUser.length === 0) {
	// 				return res.send("No username was found with the given username")
	// 			} else {
	// 				await User.findOneAndUpdate({
	// 					username: params
	// 				}, {
	// 					$push: {
	// 						friend: value
	// 					}
	// 				});
	// 				return res.send("Friend Added")
	// 			}

	// 		}

	// 	} catch (err) {
	// 		console.log("we messed up")
	// 	}
	 },

	 findFriendRequest: async (req, res) => {
		try {
			const foundUser = await db.User.findOne({ username: req.params.username });
			
			return res.json(foundUser.friendRequest)

		} catch (err) {
			console.log(err)
		}
	 },

	 acceptFriendRequest: async (req, res) => {
		 try {
			const foundUser = await db.User.findOne({ username: req.params.username });

			const updateUserFriend = await db.User.findOneAndUpdate({
				username: foundUser.username
			}, {
				$push: {
					friend: [req.body.friendUsername]
				}
			});

			const updateFriendUser = await db.User.findOneAndUpdate({
				username: req.body.friendUsername
			}, {
				$push: {
					friend: [foundUser.username]
				}
			})

			const friendRequestArr = await foundUser.friendRequest;
			const index = await friendRequestArr.indexOf(req.body.friendUsername);
			await friendRequestArr.splice(index, 1);

			const deleteFriendRequest = await db.User.findOneAndUpdate({
				username: foundUser.username
			}, {
				$set: {
					friendRequest: friendRequestArr
				}
			});

			return res.json("Friend Request accepted")


		 } catch (err) {
			 console.log(err)
		 }
	 },

	 declineFriendRequest: async (req, res) => {
		 try {
			const foundUser = await db.User.findOne({ username: req.params.username });

			const friendRequestArr = await foundUser.friendRequest;
			const index = await friendRequestArr.indexOf(req.body.friendUsername);
			await friendRequestArr.splice(index, 1);

			const deleteFriendRequest = await db.User.findOneAndUpdate({
				username: foundUser.username
			}, {
				$set: {
					friendRequest: friendRequestArr
				}
			});

			return res.json("Friend Request declined")


		 } catch (err) {
			 console.log(err)
		 }
	 },
	
	getFriends: async (req, res) => {
		try {
			const foundUser = await db.User.findOne({ username: req.params.username });
			const friends = [];

			for (let i = 0; i < foundUser.friend.length; i++) {
				const foundFriend = await db.User.findOne({ username: foundUser.friend[i] });
				const obj = {
					username: foundFriend.username,
					friend: foundFriend.friend,
					pantheon: foundFriend.pantheon
				};
				friends.push(obj)
			};
		
			return res.json(friends);
			
		} catch (err) {
			res.status(500)
		}
	},

	// acceptPantheon: async (req, res) => {
	// 	try {
	// 		const username = (Object.keys(req.body));
	// 		const pantheonId = req.params;

	// 		const testIfPantheon = await db.User.find({ username: username});


	// 		if (testIfPantheon[0].pantheon.length === 0) {
				
	// 			const findUser = await db.User.findOneAndUpdate({ 
	// 				username: username
	// 			}, {
	// 				$push: {
	// 					pantheon: [pantheonId.id]
	// 				}
	// 			});
	// 			const updatePantheon = await db.Pantheon.findOneAndUpdate({
	// 				_id: pantheonId.id
	// 			}, {
	// 				$push: {
	// 					acceptedPlayers: username[0]
	// 				}
	// 			});

	// 			return res.send("Challenge has been accepted. This is the users first Pantheon Challenge!")

	// 		} else { for (let i = 0; i < testIfPantheon[0].pantheon.length; i++) {
	// 			if (testIfPantheon[0].pantheon[i] == pantheonId.id) {

	// 			   return res.send("Challenge has already been accepted")
	// 		   } else {

	// 			   const findUser = await db.User.findOneAndUpdate({ 
	// 				   username: username
	// 			   }, {
	// 				   $push: {
	// 					   pantheon: [pantheonId.id]
	// 				   }
	// 			   });
	// 			   const updatePantheon = await db.Pantheon.findOneAndUpdate({
	// 				   _id: pantheonId.id
	// 			   }, {
	// 				   $push: {
	// 					   acceptedPlayers: username[0]
	// 				   }
	// 			   });

	// 			   return res.send("Challenge has been accepted")


	// 		   	}

			
	// 			}
	// 		}
			
			
	// 	} catch (err) {
	// 		console.log("there is an error")
	// 		console.log(err)
	// 	}
	// }

}