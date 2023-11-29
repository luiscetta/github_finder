import axios from "axios";

import { UserReposProps } from "../types/user";

async function GetRepos(userName: string): Promise<UserReposProps> {
  const res = await axios.get(`https://api.github.com/users/${userName}/repos`);
  return res.data;
}

export default GetRepos;
