import axios from "axios";

import { UserProps } from "../types/user";

async function GetUser(userName: string): Promise<UserProps> {
  try {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    return res.data;
  } catch {
    throw new Error("Not Found");
  }
}

export default GetUser;
