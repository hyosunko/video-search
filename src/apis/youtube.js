import axios from "axios";

const KEY = "AIzaSyAIAkCdNcllqeBL0QPnyDyR6nhgO24VPmk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "10",
    key: KEY
  }
});
