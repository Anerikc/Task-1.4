import * as yt from 'youtube-search-without-api-key';

/**
 * Given a search query, searching on youtube
 * @param {string} search value (string or videoId).
 */
const videos = yt.search('y5kIrbG2gRc');
console.log('Videos:');
console.log(videos);