# ⚽ Soccer Matches Web App

A modern web application displaying upcoming Premier League matches with real-time data from Football-Data.org API.

## 🚀 Features
- Real-time Premier League match data
- Responsive design for all devices
- Professional UI with hover effects
- Error handling with fallback data
- Node.js backend API
- React.js frontend

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** React.js, CSS3
- **API:** Football-Data.org
- **Styling:** Custom CSS with animations

## 🏃‍♂️ How to Run Locally

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager)

### Backend Setup
```bash
cd backend
npm install
npm start
```
**Backend runs on:** http://localhost:3001

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
**Frontend runs on:** http://localhost:3000

## 🌐 API Information

- **API Used:** Football-Data.org
- **Endpoint:** `https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED`
- **Features:** Premier League upcoming matches with team names, dates, and times
- **Rate Limit:** Free tier with limited requests per day

## 📋 Project Structure
```
soccer-matches-internship/
├── README.md
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── frontend/
    ├── src/
    │   └── App.js
    ├── public/
    │   └── index.html
    ├── package.json
    └── package-lock.json
```

## 🎯 Internship Task Requirements Met

✅ **Basic web page** displaying upcoming matches  
✅ **Specific sport chosen** (Soccer/Football - Premier League)  
✅ **Data fetched from free API** (Football-Data.org)  
✅ **Shows team information** (two teams and scheduled date/time)  
✅ **Simple backend** to fetch and provide API data  
✅ **Frontend interface** with React.js  
✅ **Code shared on GitHub** with proper documentation  
✅ **Error handling** implemented for API failures  
✅ **Responsive design** for mobile and desktop  

## 🖼️ Screenshot

### Desktop View
![Screenshot 2025-05-29 130426](https://github.com/user-attachments/assets/c8a788f8-d4ad-4e4e-a9bc-5aa621485ea9)

## 🔧 Installation Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/navyasree64/soccer-matches-internship.git
   cd soccer-matches-internship
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the backend server:**
   ```bash
   cd ../backend
   npm start
   ```

5. **Start the frontend (in new terminal):**
   ```bash
   cd frontend
   npm start
   ```

6. **Open your browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## 🧪 Testing

- **Manual Testing:** Verified on Chrome, Firefox, Safari
- **Responsive Testing:** Tested on mobile, tablet, and desktop
- **API Testing:** Handled network errors and API rate limits
- **Cross-browser Compatibility:** Ensured consistent performance

## 🚀 Future Enhancements

- [ ] Add live score updates
- [ ] Include more leagues (La Liga, Bundesliga)
- [ ] Add match statistics and player information
- [ ] Implement user favorites and notifications
- [ ] Deploy to production (Vercel/Netlify)

## 👨‍💻 Development Process

**Time Taken:** Approximately 45 minutes  
**Approach:** API-first development with React frontend  
**Challenges:** Handling API rate limits and responsive design  
**Solutions:** Implemented fallback data and mobile-first CSS  

## 📞 Contact

**Developer:** Navya Sree  
**Email:** madalannavyasree@gmail.com  
**GitHub:** [@navyasree64](https://github.com/navyasree64)  

---

*Developed for internship application - Demonstrating full-stack web development skills with modern technologies.*
