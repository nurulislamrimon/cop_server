import Member from "./member.model";

const getAllMemberService = async () => {
  const result = await Member.find({});
  return result;
};

export default { getAllMemberService };
