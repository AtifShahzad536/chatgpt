const updateOneItem=(id, data) => {
  return fetch(`https://chatgpt-backend-vfx0.onrender.com/updateItem/${id}`, {
    method: 'PUT',
    body: data,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error updating item:', error);
  });
}
export default updateOneItem;