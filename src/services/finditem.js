const findsingleitem = async (id) => {  
    try {
        const res = await fetch(`http://localhost:3001/getOneItem/${id}`);
        if (!res.ok) {
        throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Fetched item:", data);
        return data; // Return the fetched item
    } catch (err) {
        console.error("Error fetching item:", err);
    }
    }
export default findsingleitem;