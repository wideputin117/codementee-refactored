import User from '../models/User.js';

export const registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};
