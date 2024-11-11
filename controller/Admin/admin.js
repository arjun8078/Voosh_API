const { Types } = require('mongoose');
const User = require('../../models/user');

exports.getAllUsers = async (req, res, next) => {
  try {
    const { userId } = req;
    const users = await User.aggregate([
      {
        $match: {
            _id: { $ne: Types.ObjectId.createFromHexString(userId) }
        },
      },
      {
        $project: {
          name: 1,
          email: 1,
          bio: 1,
          userType: 1,
          public: 1,
        },
      },
    ]);

    if (!users) {
      const error = new Error('Users not found');
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: 'Userd Fetched', users });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
