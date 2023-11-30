export type GithubUser = {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  blog: string;
  company: string;
  twitter_username: string;
  location: string;
  followers: number;
  following: number;
  html_url: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
};
