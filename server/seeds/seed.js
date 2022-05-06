const db = require("../config/connection");
const { Item, User } = require("../models");

const itemData = require("./ItemData.json");
const userData = require("./UserData.json");

db.once("open", async () => {
  await Item.deleteMany({});
  await User.deleteMany({});

  const items = await Item.insertMany(itemData);
  const users = await User.insertMany(userData);

  console.log("Database seeded!");
  process.exit(0);
});
