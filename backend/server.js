// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// API endpoint to fetch upcoming matches
app.get('/api/matches', async (req, res) => {
  try {
    // Using football-data.org free API for Premier League matches
    const API_URL = 'https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED';
    
    const response = await fetch(API_URL, {
      headers: {
        'X-Auth-Token': 'YOUR_API_KEY_HERE' // You'll need to get a free API key
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Format the data for frontend
    const matches = data.matches.slice(0, 10).map(match => ({
      id: match.id,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      date: new Date(match.utcDate).toLocaleDateString(),
      time: new Date(match.utcDate).toLocaleTimeString(),
      competition: match.competition.name
    }));

    res.json({ matches });
  } catch (error) {
    console.error('Error fetching matches:', error);
    
    // Fallback mock data if API fails
    const mockMatches = [
      {
        id: 1,
        homeTeam: "Manchester United",
        awayTeam: "Arsenal",
        date: "2025-05-30",
        time: "15:00",
        competition: "Premier League"
      },
      {
        id: 2,
        homeTeam: "Liverpool",
        awayTeam: "Chelsea",
        date: "2025-05-31",
        time: "17:30",
        competition: "Premier League"
      },
      {
        id: 3,
        homeTeam: "Manchester City",
        awayTeam: "Tottenham",
        date: "2025-06-01",
        time: "16:00",
        competition: "Premier League"
      },
      {
        id: 4,
        homeTeam: "Newcastle",
        awayTeam: "Brighton",
        date: "2025-06-02",
        time: "14:00",
        competition: "Premier League"
      },
      {
        id: 5,
        homeTeam: "West Ham",
        awayTeam: "Everton",
        date: "2025-06-03",
        time: "19:45",
        competition: "Premier League"
      }
    ];
    
    res.json({ matches: mockMatches });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/matches`);
});

// package.json content (create this file separately)
/*
{
  "name": "soccer-matches-backend",
  "version": "1.0.0",
  "description": "Backend API for upcoming soccer matches",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "node-fetch": "^2.6.7"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
*/
