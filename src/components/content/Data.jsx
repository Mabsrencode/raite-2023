import React, { useEffect, useState } from 'react';

const Data = () => {
    const [data, setData] = useState([]);
    const url = 'https://philippine-news.p.rapidapi.com/latest?limit=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f8c30fb194mshbd6656c59861836p10230ejsn0db9c6d5cb04',
            'X-RapidAPI-Host': 'philippine-news.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const result = await response.json();
                    setData(result);
                    console.log(result);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Source: {item.source}</p>
                    <p>Published on: {item.pubDate}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    )
}

export default Data