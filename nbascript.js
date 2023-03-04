let league = 
    [
    //Eastern Coference
    'Milwaukee Bucks', 
    'Boston Celtics', 
    'Philadelphia 76ers', 
    'Cleveland Cavaliers', 
    'New York Knicks', 
    'Brooklyn Nets', 
    'Miami Heat', 
    'Atlanta Hawks', 
    'Toronto Raptors', 
    'Washington Wizards', 
    'Chicago Bulls', 
    'Indiana Pacers', 
    'Orlando Magic', 
    'Charlotte Hornets', 
    'Detroit Pistons',

    //Western Conference
    'Denver Nuggets', 
    'Memphis Grizzlies', 
    'Sacramento Kings', 
    'Phoenix Suns', 
    'Golden State Warriors', 
    'Dallas Mavericks', 
    'LA Clippers', 
    'Minnesota Timberwolves', 
    'Utah Jazz', 
    'New Orleans Pelicans', 
    'Los Angeles Lakers', 
    'Portland Trail Blazers', 
    'Oklahoma City Thunder', 
    'San Antonio Spurs', 
    'Houston Rockets'
    ]

loadScores("https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=basketball&league=nba&region=us&lang=en&contentorigin=espn", ...league); 








