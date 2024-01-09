import User from "./user.model";

const getAllUserService = async () => {
  const result = await User.find({});
  return result;
};

export default {
  getAllUserService,
};
