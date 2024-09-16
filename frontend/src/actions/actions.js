import axios from 'axios';
// import { TRACK_USER_EVENT } from './types';
// import { host_url } from '../data';
// import { toast } from "react-toastify";

// Autres actions ici...

// track user event
export const trackUserEvent = (eventType, data) => (dispatch, getState) => {
  // const body = JSON.stringify({ eventType, data });
  // axios.post(`${host_url}/api/useractions/`, body, tokenConfig(getState))
  //   .then(res => {
  //     dispatch({
  //       type: TRACK_USER_EVENT,
  //       payload: res.data
  //     });
  //   })
  //   .catch(err => console.log(err));
};

// Setup config with token - helper function
// export const tokenConfig = (getState) => {
//   // Get token from state
//   const token = getState().auth.token;

//   // Headers
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   // If token, add to headers config
//   if (token) {
//     config.headers['Authorization'] = `Token ${token}`;
//   }

//   return config;
// };


const API_KEY = 'AIzaSyBftW5KTTToUJygMq5OnOxVujtnXooGvMs';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export const fetchYouTubeVideos = async (query, maxResults = 100) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: maxResults,
        key: API_KEY
      }
    });
    
    return response.data.items.map(item => ({
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      published_at: item.snippet.publishedAt,
      video_id: item.id.videoId,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};