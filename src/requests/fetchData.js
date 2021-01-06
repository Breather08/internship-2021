import axios from 'axios';

const fetchData = async (data, errors) => {
  await axios
    .get('https://api.jsonbin.io/b/5ff1946009f7c73f1b6d134f')
    .then((resp) => {
      data.push(...resp.data);
    })
    .catch((err) => {
      errors.push(err);
    });
  return data;
};

export default fetchData;
