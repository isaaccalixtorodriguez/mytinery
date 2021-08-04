const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Mongodb connection established");
  } catch (error) {
    throw new Error(`Mongodb connection error : ${error}`);
  }
};

module.exports = {
  connection,
};
