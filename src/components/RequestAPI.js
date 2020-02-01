// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function RequestAPI() {
//   const [data, setData] = useState({ hits: [] });

// useEffect(async () => {
//   const result = await axios(
//     'http://localhost:3001/item',
//   )
//   setData(result.data);
// });

//   return (
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default RequestAPI;