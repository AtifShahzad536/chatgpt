 const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:3001/getItems");
      const data = await res.json();
      console.log("Fetched items:", data);


      return data; // Load only first 20 to avoid memory crash
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };
  export default fetchItems;