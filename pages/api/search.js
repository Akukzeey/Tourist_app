// import axios from "axios";
//
// export default async function handler(req, res) {
//     const options = {
//         method: 'GET',
//         url: 'https://travel-advisor.p.rapidapi.com/locations/search',
//         params: {
//             query: req.body.term,
//             limit: '30',
//             offset: '0',
//             units: 'km',
//             location_id: '1',
//             currency: 'USD',
//             sort: 'relevance',
//             lang: 'en_US'
//         },
//         headers: {
//             'X-RapidAPI-Key': process.env.API_KEY,
//             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//         }
//     };
//
//     try {
//         const response = await axios.request(options)
//         res.status(200).json(response.data).end()
//     } catch (e) {
//         res.status(401).json(e).end()
//     }
// }