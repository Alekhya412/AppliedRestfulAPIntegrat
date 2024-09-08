// MongoDB HW3-4
use badmintonPlayers
// This above command will create a database named badmintonPlayers in the current database.
db.badmintonPlayers.insertMany([
  { playerId: 1, name: "Lin Dan", age: 37, worldTitles: 5, country: "China" },
  { playerId: 2, name: "Lee Chong Wei", age: 38, worldTitles: 3, country: "Malaysia" },
  { playerId: 3, name: "PV Sindhu", age: 26, worldTitles: 1, country: "India" }
])
//  This above command will create a collection named badmintonPlayers in the current database.

// 5 Queries are as below:
db.badmintonPlayers.find({ age: { $gt: 30 } })
db.badmintonPlayers.find({ worldTitles: { $gt: 2 } })
db.badmintonPlayers.find({ country: "Malaysia" })
db.badmintonPlayers.find().sort({ age: -1 })
db.badmintonPlayers.countDocuments({ worldTitles: { $gte: 1 } })

