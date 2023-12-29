const UserLocationService = require('../services/userLocationService');

class UserLocationController {
  static async updateUserLocation(req, res) {
    const { userId, latitude, longitude } = req.body;
    try {
      if (!userId || !latitude || !longitude) {
        return res.status(400).send('Invalid request. Missing required fields.');
      }

      const result = await UserLocationService.addUserLocation(userId, latitude, longitude);

      if (result) {
        res.status(200).send('User location updated successfully');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  static async getUsersNearby(req, res) {
    const { latitude, longitude, maxDistance } = req.query;
    
    try {
      if (!latitude || !longitude || !maxDistance) {
        return res.status(400).send('Invalid request. Missing required parameters.');
      }

      const nearbyUsers = await UserLocationService.getUsersNearby(parseFloat(latitude), parseFloat(longitude), parseFloat(maxDistance));

      if (nearbyUsers.length > 0) {
        res.status(200).json(nearbyUsers);
      } else {
        res.status(404).send('No nearby users found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}




module.exports = UserLocationController;
