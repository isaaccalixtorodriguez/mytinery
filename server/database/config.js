const mongoose = require('mongoose');

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    process.stdout.write('Mongodb connection established\n');
  } catch (error) {
    process.stdout.write(`Mongodb connection error : ${error}\n`);
  }
};

module.exports = {
  connectionDB,
};
