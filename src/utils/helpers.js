/* eslint-disable no-magic-numbers */
import immutable from 'object-path-immutable';
const links = require('../config/links');
import { url as mainUrl } from '../config/variables';

export const createAction = type => payload => ({ type, payload });
export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
  if (handlers[action.type]) return handlers[action.type](state, action);
  return state;
};

export const updateProperty = (path, value, obj) => immutable.set(obj, path, value);

export const getMetaTags = (folder = 'home', subfolder = 'home', post = 'home') => {

  let selectedPost = links[0].links[0];

  let title = selectedPost.title;
  let ogTitle = selectedPost.ogTitle;
  let description = selectedPost.description;
  let ogDescription = selectedPost.ogDescription;
  let ogImage = mainUrl + selectedPost.ogImage;
  let postUrl = '/'
  let content = selectedPost.content;
  let selectedListTitle = links[0].title;
  let selectedLinkTitle = selectedPost.title;

  links.forEach(link => {
    const selectedPost = link.links.find(l => l.route === `/post/${folder}/${subfolder}/${post}`);
    if (selectedPost) {
      title = selectedPost.title;
      ogTitle = selectedPost.ogTitle;
      description = selectedPost.description;
      ogDescription = selectedPost.ogDescription;
      ogImage = mainUrl + selectedPost.ogImage;
      postUrl = folder === 'home' ? '/' : `/post/${folder}/${subfolder}/${post}`;
      content = selectedPost.content;
      selectedListTitle = link.title;
      selectedLinkTitle = selectedPost.title;
    }
  });

  return {
    title,
    ogTitle,
    description,
    ogDescription,
    ogImage,
    ogUrl: `${mainUrl}${postUrl}`,
    content,
    selectedListTitle,
    selectedLinkTitle,
  };
}