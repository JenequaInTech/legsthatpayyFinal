import * as functions from "firebase-functions";
import axios from "axios";

export const getOdds = functions.https.onRequest(async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.the-odds-api.com/v4/sports/upcoming/odds",
      {
        headers: {
          "x-api-key": functions.config().odds_api.key // Use Firebase functions config for API key
        }
      }
    );
    res.set("Access-Control-Allow-Origin", "*"); // Handle CORS
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      message: error.message,
      ...(error.response && {data: error.response.data})
    });
  }
});