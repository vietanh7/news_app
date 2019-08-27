import ApiCaller from './ApiCaller';

export const getCategories = () => ApiCaller.get('taxonomy');

export const getNews = params => ApiCaller.get('content', {}, params);
