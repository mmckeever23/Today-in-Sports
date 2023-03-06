let league = 
    [
    //AFC
    'Buffalo Bills',
    'Miami Dolphins',
    'New England Patriots',
    'New York Jets',
    'Cincinnati Bengals',
    'Baltimore Ravens',
    'Pittsburgh Steelers',
    'Cleveland Browns',
    'Jacksonville Jaguars',
    'Tennessee Titans',
    'Indianapolis Colts',
    'Houston Texans',
    'Kansas City Chiefs',
    'Los Angeles Chargers',
    'Las Vegas Raiders',
    'Denver Broncos',

    //NFC
    'Philadelphia Eagles',
    'Dallas Cowboys',
    'New York Giants',
    'Washington Commanders',
    'Minnesota Vikings',
    'Detroit Lions',
    'Green Bay Packers',
    'Chicago Bears',
    'Tampa Bay Buccaneers',
    'Carolina Panthers',
    'New Orleans Saints',
    'Atlanta Falcons',
    'San Francisco 49ers',
    'Seattle Seahawks',
    'Los Angeles Rams',
    'Arizona Cardinals',
    ]








loadScores("https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl&region=us&lang=en&contentorigin=espn", ...league);