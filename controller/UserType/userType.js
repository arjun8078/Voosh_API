const UserType = require('../../models/userType');

exports.addUserType = async (req, res, next) => {
  try {
    const { type } = req.body;
    const usertype = new UserType({
        userType: type
    })

    const createdType = await usertype.save();
    if(!createdType){
        const error = new Error('UserType Creation Failed');
        error.status = 422;
        throw error;
    }

    res.status(200).json({message: "UserType Created", createdType})
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};


exports.deleteUserType = async (req, res, next) => {
    try {
      const { id } = req.params;

      const deleteType = await UserType.findByIdAndDelete(id);

      if(!deleteType){
          const error = new Error('UserType Deletion Failed');
          error.status = 422;
          throw error;
      }
  
      res.status(200).json({message: "UserType Deleted", deleted: true})
    } catch (err) {
      if (!err.status) {
        err.status = 500;
      }
      next(err);
    }
};

exports.getAllTypes = async (req, res, next) => {
    try {
      const types = await UserType.find();

      if(!types){
          const error = new Error('UserType not Found');
          error.status = 422;
          throw error;
      }
  
      res.status(200).json({message: "UserTypes Fetched", types})
    } catch (err) {
      if (!err.status) {
        err.status = 500;
      }
      next(err);
    }
};


exports.updateUserType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { type } = req.body;
        const userType = await UserType.findById(id);

        if(!userType){
          const error = new Error('UserType not Found');
          error.status = 404;
          throw error;
        }
    
        userType.userType = type;

        const updatedUserType = await userType.save();

        if(!updatedUserType){
            const error = new Error('UserType Updation failed');
            error.status = 404;
            throw error;
          }

        res.status(200).json({message: "UserType Updated", updatedUserType})
    } catch (err) {
      if (!err.status) {
        err.status = 500;
      }
      next(err);
    }
};