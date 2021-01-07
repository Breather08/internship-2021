import axios from 'axios';

const getRestaurantData = async (data, errors) => {
  await axios
    .get('https://api.jsonbin.io/b/5ff6a827a6fe5a58cd870bf0', {
      headers: {
        'secret-key': '$2b$10$KOUZGg5Q5shdJYgU0mTAm.NlBasckrjEuUyvAkZgfqDCMtu/UQqna',
      },
    })
    .then((resp) => {
      data.push(...resp.data);
    })
    .catch((err) => {
      errors.push(err);
    });
};

export default getRestaurantData;
