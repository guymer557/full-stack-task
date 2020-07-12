const express = require('express');
const usersController =  require('../controllers/users');
const router = express.Router();

/* GET users listing. */
router.post('/add-users', async function(req, res, next) {
  const {users} = req.body;
  try {
    await usersController.insertUsers(JSON.parse(users));
    res.status(200).send();
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

router.get('/users-info', async function(req, res, next) {
  const {ids} = req.query;
  try {
    const usersInfo = await usersController.getUsersInfo(JSON.parse(ids));
    res.status(200).send(usersInfo);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
