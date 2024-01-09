import Committee from "./transaction.model";

const getAllCommitteeService = async () => {
  const result = await Committee.find({});
  return result;
};

export default { getAllCommitteeService };
