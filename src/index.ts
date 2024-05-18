import * as 
functions from 
'firebase-functions';
import axios from 
'axios';

export const getOdds 
= 
functions.https.onRequest(async 
(req, res) => {
  try {
    const response = 
await 
axios.get('https://api.the-odds-api.com/v4/sports/upcoming/odds', 
{
      headers: {
        'x-api-key': 
'713d3c29cf9b26a1490da64cb2a98890',
      },
    });
    
res.json(response.data);
  } catch (error) {
    
res.status(error.response 
? 
error.response.status 
: 500).json({
      message: 
error.message,
      
...(error.response 
&& { data: 
error.response.data 
}),
    });
  }
});

