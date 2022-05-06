const db = require("../config/connection");
const { Item, User } = require("../models");
const bcrypt = require("bcrypt");

const itemData = require("./ItemData.json");
const userData = require("./UserData.json");

db.once("open", async () => {
  await Item.deleteMany({});
  await User.deleteMany({});
  const saltRounds = 10;

  const usersWithHashedPasswordsPromiseArray = userData.map(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    return user;
  });

  const usersWithHashedPasswords = await Promise.all(
    usersWithHashedPasswordsPromiseArray
  );

  const items = await Item.insertMany(itemData);
  const users = await User.insertMany(usersWithHashedPasswords);

  console.log("Database seeded!");
  process.exit(0);
});
