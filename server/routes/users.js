import express from 'express';
import userQueries from '../queries/userQuery.js';

const router = express.Router();

/* GET users listing. */
router.get('/group/:groupID', async function(req, res, next) {
  try {
      const result = await userQueries.getAllUsers(req.params.groupID);
      return res.json(result);
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal Server Error' });
  }
});

/* GET user listing. */
router.get('/:userID', async function(req, res, next) {
  try {
      const result = await userQueries.getOneUser(req.params.userID);
      if (!result) {
        return res.status(404).send({ message: 'User not found' });
      }
      return res.json(result);
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal Server Error' });
  }
});

/* POST user listing. */
router.post('/', async function(req, res, next) {
  try {
      await userQueries.postUser(req.body);
      return res.send({ message: 'User added successfully' });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Internal Server Error' });
  }
});

/* DELETE user listing. */
router.delete('/:userID', async function(req, res, next) {
  try {
      const result = await userQueries.deleteUser(req.params.userID);
      if (!result) {
        return res.status(404).send({ message: 'User not found' });
      }
      return res.status(200).send({ message: 'User deleted successfully' });
  } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
