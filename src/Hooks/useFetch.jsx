import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function useFetch() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(data);
        };
        getData();
    }, []);
    return [data, setData];
}
