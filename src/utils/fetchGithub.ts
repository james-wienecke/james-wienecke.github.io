import axios from "axios";

const fetchGithub = async () => {
  let res = await axios.get("https://hot-recondite-periodical.glitch.me/gh/events");
  return res.data;
}

export default fetchGithub;