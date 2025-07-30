// newItem.js
import axios from 'axios';

const addNewItem = async (formData) => {
    console.log("Sending formData:", formData);
  const res = await axios.post('http://localhost:3001/addItem', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};


export default addNewItem;
