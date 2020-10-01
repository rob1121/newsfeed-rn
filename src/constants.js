import moment from "moment";
import { NEWS_API_KEY } from "@env";
export const MAX_SUBTITLE_LEN = 75;

export const DATE_NOW = moment().format("YYYY-MM-DD");

export const API = {
  FETCH_NEWS_TODAY: `http://newsapi.org/v2/everything?q=bitcoin&from=${DATE_NOW}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
};

export const REGEX_NTH_CHARS = /\[\+\d*\s[a-z]*\]/;
