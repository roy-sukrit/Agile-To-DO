import axios from 'axios';


const url = 'https://agile-to-do.onrender.com/todos';

export const getData = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const postData = async (data) => {
    try {
        const response = await axios.post(url, {
            title: data
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};





