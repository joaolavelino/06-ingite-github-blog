import axios from "axios";

const username = "joaolavelino";
const reponame = "06-ingite-github-blog";

export const userApi = axios.create({
  baseURL: `http://api.github.com/users/${username}`,
});

export const issuesApi = axios.create({
  baseURL: `https://api.github.com/search/issues`,
});

export const repoApi = axios.create({
  baseURL: `https://api.github.com/repos/${username}/${reponame}/issues`,
});
