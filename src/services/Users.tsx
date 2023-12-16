import axios from "axios";

import { GithubUser } from "../types/user";

async function GetUser(userName: string): Promise<GithubUser> {
  try {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    return res.data;
  } catch {
    throw new Error("Not Found");
  }
}

export default GetUser;
