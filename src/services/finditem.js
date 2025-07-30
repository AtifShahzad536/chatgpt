const findsingleitem = async (id) => {  
    try {
        const res = await fetch(`https://chatgpt-backend-vfx0.onrender.com/getOneItem/${id}`);
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