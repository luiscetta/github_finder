import axios from "axios";

import { GithubRepo } from "../types/user";

async function GetRepos(userName: string): Promise<GithubRepo> {
  const res = await axios.get(`https://api.github.com/users/${userName}/repos`);
  return res.data;
}

export default GetRepos;
