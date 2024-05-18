import React, { useEffect, useState } from "react";
import axios from "axios";

interface Sport {
  key: string;
  group: string;
  title: string;
  description: string;
  active: boolean;
  has_outrights: boolean;
}

const Odds: React.FC = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_ODDS_API_KEY;

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports`, {
          params: {
            apiKey: apiKey
          },
          headers: {
            'Accept': 'application/json, text/plain, */*',
          },
        });
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setSports(response.data);
        } else {
          throw new Error('Unexpected API response format');
        }
      } catch (error: any) {
        console.error('Error fetching sports data:', error);
        setError(`Error fetching sports data: ${error.message}`);
      }
    };

    fetchSports();
  }, [apiKey]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">In-Season Sports</h1>
      {sports.length > 0 ? (
        <ul>
          {sports.map((sport, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-xl">{sport.title}</h2>
              <p>{sport.description}</p>
              <p>Active: {sport.active ? 'Yes' : 'No'}</p>
              <p>Outrights: {sport.has_outrights ? 'Yes' : 'No'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading sports...</p>
      )}
    </div>
  );
};

export default Odds;
