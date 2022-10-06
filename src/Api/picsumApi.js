const BASE_URL = 'https://picsum.photos';

function fetchQuery(page, limitImagesList) {
  return fetch(
    `${BASE_URL}/v2/list?page=${page}&limit=${limitImagesList}`,
  ).then(res => res.json());
}

export default fetchQuery;
