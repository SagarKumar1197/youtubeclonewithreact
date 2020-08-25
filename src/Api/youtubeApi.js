import axios from 'axios';
let KEY = 'AIzaSyDSNpILWyVG5kF57E5WS9WvgXReERL0vd4';
export const baseParams = {
	part: 'snippet',
	maxResults: 25,
	key: KEY,
};
let YoutubeApi = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default YoutubeApi;
