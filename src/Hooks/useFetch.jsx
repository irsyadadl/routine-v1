import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function useFetch(url) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(url);
            setData(data);
        };
        getData();
    }, []);
    return [data, setData];
}
