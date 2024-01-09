import Committee from "./committee.model";

const getAllCommitteeService = async () => {
  const result = await Committee.find({});
  return result;
};

export default { getAllCommitteeService };
