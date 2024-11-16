import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/reservas')
            .then(response => setData(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.nombre}</div>
            ))}
        </div>
    );
};
