window.addEventListener("load", function() {
    document.getElementById("date").innerHTML = moment().format('dddd, MMMM Do, Y');
    document.getElementById("time").innerHTML = moment().format('LT');
    document.getElementById("year").innerHTML = moment().format('YYYY');
    let gamesList1 = document.getElementById('games-list1')
    let gamesList2 = document.getElementById('games-list2')
    let gamesList3 = document.getElementById('games-list3')
    fetch("https://statsapi.web.nhl.com/api/v1/schedule/games/?sportId=1").then(function(response) {
        response.json().then(function(json) {
            let data = json.dates[0];
            for(let i = 0; i<data.games.length; i++) {
                // Converts z date to game start time
                const dateToTime = date => date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric'
                });
                const dateString = json.dates[0].games[i].gameDate;
                const localDate = new Date(dateString);
                // Eastern Conference
                if ((data.games[i].teams.home.team.name == "Boston Bruins" || data.games[i].teams.home.team.name == "Buffalo Sabres" || data.games[i].teams.home.team.name == "Carolina Hurricanes" || data.games[i].teams.home.team.name == "Columbus Blue Jackets" || data.games[i].teams.home.team.name == "Detroit Red Wings" || data.games[i].teams.home.team.name == "Florida Panthers" || data.games[i].teams.home.team.name == "Montreal Canadiens" || data.games[i].teams.home.team.name == "New Jersey Devils" || data.games[i].teams.home.team.name == "New York Islanders" || data.games[i].teams.home.team.name == "New York Rangers" || data.games[i].teams.home.team.name == "Ottawa Senators" || data.games[i].teams.home.team.name == "Philadelphia Flyers" || data.games[i].teams.home.team.name == "Pittsburgh Penguins" || data.games[i].teams.home.team.name == "Tampa Bay Lightning" || data.games[i].teams.home.team.name == "Toronto Maple Leafs" || data.games[i].teams.home.team.name == "Washington Capitals") && (data.games[i].teams.away.team.name == "Boston Bruins" || data.games[i].teams.away.team.name == "Buffalo Sabres" || data.games[i].teams.away.team.name == "Carolina Hurricanes" || data.games[i].teams.away.team.name == "Columbus Blue Jackets" || data.games[i].teams.away.team.name == "Detroit Red Wings" || data.games[i].teams.away.team.name == "Florida Panthers" || data.games[i].teams.away.team.name == "Montreal Canadiens" || data.games[i].teams.away.team.name == "New Jersey Devils" || data.games[i].teams.away.team.name == "New York Islanders" || data.games[i].teams.away.team.name == "New York Rangers" || data.games[i].teams.away.team.name == "Ottawa Senators" || data.games[i].teams.away.team.name == "Philadelphia Flyers" || data.games[i].teams.away.team.name == "Pittsburgh Penguins" || data.games[i].teams.away.team.name == "Tampa Bay Lightning" || data.games[i].teams.away.team.name == "Toronto Maple Leafs" || data.games[i].teams.away.team.name == "Washington Capitals")) {
                    gamesList1.innerHTML += ``      
                        // UPCOMING
                        if (data.games[i].status.detailedState == "Scheduled" || data.games[i].status.detailedState == "Pre-Game") {
                            gamesList1.innerHTML += `   
                            <div class="p-grey">
                            <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // STARTING SOON
                        } else if (data.games[i].status.detailedState == "Warmup") {
                            gamesList1.innerHTML += `   
                            <div class="p-red">
                            <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>  
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // DELAYED START
                        } else if (data.games[i].status.detailedState == "Delayed Start") {
                            gamesList1.innerHTML += `   
                            <div class="p-grey">
                            <b>DELAYED START</b> ${data.games[i].status.reason}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>  
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // IN PROGRESS
                        } else if (data.games[i].status.detailedState == "In Progress") {
                            gamesList1.innerHTML += ` 
                            <div class="p-green">
                            <b>IN PROGRESS</b>
                            <table> 
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>   
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // FINAL
                        } else if ((data.games[i].status.detailedState == "Game Over" || data.games[i].status.detailedState == "Final")) {
                            gamesList1.innerHTML += `   
                            <div class="p-blue">
                            <b>FINAL</b>
                            <table>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255);"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>    
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;                   
                        };
                // Western Conference
                } else if ((data.games[i].teams.home.team.name == "Anaheim Ducks" || data.games[i].teams.home.team.name == "Arizona Coyotes" || data.games[i].teams.home.team.name == "Calgary Flames" || data.games[i].teams.home.team.name == "Chicago Blackhawks" || data.games[i].teams.home.team.name == "Colorado Avalanche" || data.games[i].teams.home.team.name == "Dallas Stars" || data.games[i].teams.home.team.name == "Edmonton Oilers" || data.games[i].teams.home.team.name == "Los Angeles Kings" || data.games[i].teams.home.team.name == "Minnesota Wild" || data.games[i].teams.home.team.name == "Nashville Predators" || data.games[i].teams.home.team.name == "San Jose Sharks" || data.games[i].teams.home.team.name == "Seattle Kraken" || data.games[i].teams.home.team.name == "St. Louis Blues" || data.games[i].teams.home.team.name == "Vancouver Canucks" || data.games[i].teams.home.team.name == "Vegas Golden Knights" || data.games[i].teams.home.team.name == "Winnipeg Jets") && (data.games[i].teams.away.team.name == "Anaheim Ducks" || data.games[i].teams.away.team.name == "Arizona Coyotes" || data.games[i].teams.away.team.name == "Calgary Flames" || data.games[i].teams.away.team.name == "Chicago Blackhawks" || data.games[i].teams.away.team.name == "Colorado Avalanche" || data.games[i].teams.away.team.name == "Dallas Stars" || data.games[i].teams.away.team.name == "Edmonton Oilers" || data.games[i].teams.away.team.name == "Los Angeles Kings" || data.games[i].teams.away.team.name == "Minnesota Wild" || data.games[i].teams.away.team.name == "Nashville Predators" || data.games[i].teams.away.team.name == "San Jose Sharks" || data.games[i].teams.away.team.name == "Seattle Kraken" || data.games[i].teams.away.team.name == "St. Louis Blues" || data.games[i].teams.away.team.name == "Vancouver Canucks" || data.games[i].teams.away.team.name == "Vegas Golden Knights" || data.games[i].teams.away.team.name == "Winnipeg Jets")) {
                    gamesList2.innerHTML += ``
                        // UPCOMING
                        if (data.games[i].status.detailedState == "Scheduled" || data.games[i].status.detailedState == "Pre-Game") {
                            gamesList2.innerHTML += `   
                            <div class="p-grey">
                            <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>  
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // STARTING SOON
                        } else if (data.games[i].status.detailedState == "Warmup") {
                            gamesList2.innerHTML += `   
                            <div class="p-red">
                            <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>     
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // DELAYED START
                        } else if (data.games[i].status.detailedState == "Delayed Start") {
                            gamesList2.innerHTML += `   
                            <div class="p-grey">
                            <b>DELAYED START</b> ${data.games[i].status.reason}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>    
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // IN PROGRESS
                        } else if (data.games[i].status.detailedState == "In Progress") {
                            gamesList2.innerHTML += ` 
                            <div class="p-green">
                            <b>IN PROGRESS</b>
                            <table> 
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>   
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // FINAL
                        } else if ((data.games[i].status.detailedState == "Game Over" || data.games[i].status.detailedState == "Final")) {
                            gamesList2.innerHTML += `   
                            <div class="p-blue">
                            <b>FINAL</b>
                            <table>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255);"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>  
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;                   
                        };
                // Interconference
                } else {
                    gamesList3.innerHTML += ``
                          // UPCOMING
                        if (data.games[i].status.detailedState == "Scheduled" || data.games[i].status.detailedState == "Pre-Game") {
                            gamesList3.innerHTML += `   
                            <div class="p-grey">
                            <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // STARTING SOON
                        } else if (data.games[i].status.detailedState == "Warmup") {
                            gamesList3.innerHTML += `   
                            <div class="p-red">
                            <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
                            <table> 
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                                <tr style="border: 5px solid rgb(255, 153, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(255, 153, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>    
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // DELAYED START
                        } else if (data.games[i].status.detailedState == "Delayed Start") {
                            gamesList3.innerHTML += `   
                            <div class="p-grey">
                            <b>DELAYED START</b> ${data.games[i].status.reason}
                            <table> 
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore"><b></b></td>
                                </tr>
                                <tr style="border: 5px solid lightgrey">
                                    <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore"></td>
                                </tr>
                            </table>                            
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // IN PROGRESS
                        } else if (data.games[i].status.detailedState == "In Progress") {
                            gamesList3.innerHTML += ` 
                            <div class="p-green">
                            <b>IN PROGRESS</b>
                            <table> 
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 255, 153)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>     
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;
                        // FINAL
                        } else if ((data.games[i].status.detailedState == "Game Over" || data.games[i].status.detailedState == "Final")) {
                            gamesList3.innerHTML += `   
                            <div class="p-blue">
                            <b>FINAL</b>
                            <table>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255);"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses}-${json.dates[0].games[i].teams.away.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
                                </tr>
                                <tr style="border: 5px solid rgb(153, 204, 255)">
                                    <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.home.leagueRecord.losses}-${json.dates[0].games[i].teams.home.leagueRecord.ot})</span></td>
                                    <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
                                </tr>
                            </table>
                            <div class="venue">@ ${json.dates[0].games[i].venue.name}</div></div>
                            `;                   
                        };
                    };
                };
            });       
        });
    });