import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "@babel/polyfill";

function RequestAPI() {
  const [data, setData] = useState({ hits: [] });

useEffect(async () => {
  const result = await axios(
    'http://hn.algolia.com/api/v1/search?query=redux',
  )
  setData(result.data);
}, [setData]);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default RequestAPI;