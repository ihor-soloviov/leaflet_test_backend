const db = require("../db");

class PlacesController {
  async createPlace(req, res) {
    const { name, description, latitude, longitude } = req.body;
    const newPlace = await db.query(
      `INSERT INTO places (name, description, latitude, longitude) values ($1, $2, $3, $4) RETURNING *`,
      [name, description, latitude, longitude]
    );
    res.json(newPlace);
  }
  async getPlace(req, res) {
    const places = await db.query('SELECT * FROM places')
    res.json(places.rows)
  }
}

module.exports = new PlacesController();
