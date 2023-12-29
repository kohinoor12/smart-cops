const Destination = require('../model/adminmap');

const createDestination = async (req, res) => {
  try {
    const { user,userID,date, destinations } = req.body;
    console.log('Received Data:', req.body);
    if (!user || !userID ||!date || !destinations || !Array.isArray(destinations)) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Save destinations to the database
    const result =await Destination.create({
      user,
      userID,
      date,
      destinations,
    });
    console.log('HI');
    console.log('Database Result:', result);
    res.status(201).json({ message: 'Destination saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createDestination,
};
