import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const getAllImages = () => {
  return instance.get(
    '/?q=cat&page=1&key=41025952-5676fffa14718ed61db05f4ce&image_type=photo&orientation=horizontal&per_page=12'
  );
};

export const searchImages = (q, page = 1) => {
  return instance.get('/', {
    params: {
      q,
      page,
      key: '41025952-5676fffa14718ed61db05f4ce',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
};
