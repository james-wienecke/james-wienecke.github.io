import axios from "axios";

let cached: githubData = {} as githubData;

const fetchGithub = async () => {
  if (cached.user === undefined) {
    console.log("fetching data");
    const data = await makeRequest();
    cached = buildUser(data);
  } else {
    console.log("using cached data");
  }
  return cached;
}

const buildUser = (data: any) => {
  console.log("building user object")
  return {
    user: {
      name: data[0].actor.display_login,
      url: data[0].actor.url,
      pic: data[0].actor.avatar_url,
    },
    repo: {
      name: data[0].repo.name,
      url: data[0].repo.url,
    },
    lastCommit: {
      message: data[0].payload.commits[0].message,
    }
  }
}


const makeRequest = async () => {
  let res = await axios.get("https://hot-recondite-periodical.glitch.me/gh/events");
  return await res.data.filter((event: { type: string; }) => event.type === "PushEvent");
}

interface githubData {
  user: {
    name: string;
    url: string;
    pic: string;
  },
  repo: {
    name: string;
    url: string;
  },
  lastCommit: {
    message: string;
  },
}


export {fetchGithub};
export type {githubData};
