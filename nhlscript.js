let league = 
    [
    //Eastern Conference
    'Carolina Hurricanes',
    'Columbus Blue Jackets',
    'New Jersey Devils',
    'New York Rangers',
    'New York Islanders',
    'Philadelphia Flyers',
    'Pittsburgh Penguins',
    'Washington Capitals',
    'Boston Bruins',
    'Buffalo Sabres',
    'Detroit Red Wings',
    'Florida Panthers',
    'Montreal Canadiens',
    'Ottawa Senators',
    'Tampa Bay Lightning',
    'Toronto Maple Leafs',

    //Western Conference
    'Arizona Coyotes',
    'Chicago Blackhawks',
    'Colorado Avalanche',
    'Dallas Stars',
    'Minnesota Wild',
    'Nashville Predators',
    'St. Louis Blues',
    'Winnipeg Jets',
    'Anaheim Ducks',
    'Calgary Flames',
    'Edmonton Oilers',
    'Los Angeles Kings',
    'San Jose Sharks',
    'Seattle Kraken',
    'Vancouver Canucks',
    'Vegas Golden Knights'
    ]

loadScores("https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=hockey&league=nhl&region=us&lang=en&contentorigin=espn", ...league);