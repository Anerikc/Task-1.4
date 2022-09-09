"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yt = __importStar(require("youtube-search-without-api-key"));
/**
 * Given a search query, searching on youtube
 * @param {string} search value (string or videoId).
 */
const videos = yt.search('y5kIrbG2gRc');
console.log('Videos:');
console.log(videos);
[{ kind: 'youtube#searchResult',
        channel: { id: 'UCFzpTuxdolZ_EaZr-emNgbg',
            name: 'David Koller',
            url: 'https://www.youtube.com/channel/UCFzpTuxdolZ_EaZr-emNgbg' },
        id: { videoId: 'y5kIrbG2gRc',
            channelId: 'UCFzpTuxdolZ_EaZr-emNgbg' },
        snippet: { url: 'https://www.youtube.com/watch?v=y5kIrbG2gRc',
            thumbnails: {
                "url": "https://i.ytimg.com/vi/y5kIrbG2gRc/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA-pk9HLDSz4VelSFZ01ceyeIpBSw",
                "width": "246",
                "height": "138"
            },
            publishedAt: 'vor 3 Monaten',
            duration: '2:01',
            title: 'How to Download Free Music On Your iPhone (OFFLINE) 2020',
            views: '51',
            description: 'This video will show you how to download free music and videos on your iphone easy and fast 2020&#xA0;...' }
    }];
