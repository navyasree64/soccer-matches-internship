import React, { useState, useEffect } from 'react';

const SoccerMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Inline styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      padding: '32px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '48px'
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    },
    subtitle: {
      fontSize: '20px',
      color: '#6b7280',
      marginBottom: '24px'
    },
    refreshButton: {
      backgroundColor: '#059669',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s'
    },
    grid: {
      display: 'grid',
      gap: '24px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    matchCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderLeft: '4px solid #059669',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    matchCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
    },
    badge: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 8px',
      borderRadius: '20px',
      display: 'inline-block',
      marginBottom: '16px'
    },
    teamsContainer: {
      textAlign: 'center',
      marginBottom: '16px'
    },
    teamName: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '8px 0'
    },
    vs: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#059669',
      margin: '8px 0'
    },
    matchInfo: {
      borderTop: '1px solid #e5e7eb',
      paddingTop: '16px'
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      color: '#6b7280',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '8px',
      gap: '8px'
    },
    loading: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh'
    },
    spinner: {
      width: '48px',
      height: '48px',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #059669',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '16px'
    },
    error: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh'
    },
    errorCard: {
      backgroundColor: 'white',
      padding: '32px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    footer: {
      textAlign: 'center',
      marginTop: '48px',
      color: '#9ca3af',
      fontSize: '14px'
    }
  };

  // Add CSS animation for spinner
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/matches');
      
      if (!response.ok) {
        throw new Error('Failed to fetch matches');
      }
      
      const data = await response.json();
      setMatches(data.matches);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching matches:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchMatches();
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>
          <div style={styles.spinner}></div>
          <p style={{color: '#6b7280'}}>Loading upcoming matches...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.error}>
          <div style={styles.errorCard}>
            <div style={{fontSize: '24px', marginBottom: '16px'}}>⚠️</div>
            <h2 style={{fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px'}}>
              Error Loading Matches
            </h2>
            <p style={{color: '#6b7280', marginBottom: '16px'}}>{error}</p>
            <button 
              onClick={handleRefresh}
              style={styles.refreshButton}
              onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            🏆 Upcoming Soccer Matches
          </h1>
          <p style={styles.subtitle}>Premier League Schedule</p>
          <button 
            onClick={handleRefresh}
            style={styles.refreshButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#047857';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#059669';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Refresh Matches
          </button>
        </div>

        {/* Matches Grid */}
        <div style={styles.grid}>
          {matches.map(match => (
            <div 
              key={match.id} 
              style={styles.matchCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={styles.badge}>
                {match.competition || 'Premier League'}
              </div>
              
              {/* Teams */}
              <div style={styles.teamsContainer}>
                <div style={styles.teamName}>
                  {match.homeTeam}
                </div>
                <div style={styles.vs}>
                  VS
                </div>
                <div style={styles.teamName}>
                  {match.awayTeam}
                </div>
              </div>

              {/* Date and Time */}
              <div style={styles.matchInfo}>
                <div style={styles.infoRow}>
                  📅 <span>{match.date}</span>
                </div>
                <div style={styles.infoRow}>
                  🕐 <span>{match.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Data provided by Football-Data.org API</p>
          <p style={{marginTop: '8px'}}>
            API URL: https://api.football-data.org/v4/competitions/PL/matches
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoccerMatches;