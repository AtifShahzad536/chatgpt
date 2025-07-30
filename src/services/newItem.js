// newItem.js
import axios from 'axios';

const addNewItem = async (formData) => {
    console.log("Sending formData:", formData);
  const res = await axios.post('https://chatgpt-backend-vfx0.onrender.com/addItem', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};


export default addNewItem;
