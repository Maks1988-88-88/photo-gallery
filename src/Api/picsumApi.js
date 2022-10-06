const BASE_URL = 'https://picsum.photos';

function fetchQuery(page) {
  return fetch(`${BASE_URL}/v2/list?page=${page}&limit=20`).then(res =>
    res.json(),
  );
}

export default fetchQuery;
