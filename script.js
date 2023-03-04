window.addEventListener("load", function() {
    document.getElementById("date").innerHTML = moment().format('dddd, MMMM Do, Y');
    document.getElementById("time").innerHTML = moment().format('LT');
    document.getElementById("year").innerHTML = moment().format('YYYY');
});

function loadScores(data, a, b, c, d, e, f, g, h, i1, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, a1, b1, c1, d1) {
    window.addEventListener("load", function() {
        document.getElementById("date").innerHTML = moment().format('dddd, MMMM Do, Y');
        document.getElementById("time").innerHTML = moment().format('LT');
        document.getElementById("year").innerHTML = moment().format('YYYY');
        fetch(data).then(function(response) {
            response.json().then(function(json) {
                let data = json.sports[0].leagues[0];
                for(let i = 0; i<data.events.length; i++) {
                    // Converts z date to game start time
                    const dateToTime = date => date.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric'
                    });
                    const dateString = data.events[i].date;
                    const localDate = new Date(dateString);
                    // Scoreboard template
                    let scoreboard = `
                        <div class="p-grey">
                        <b>${data.events[i].fullStatus.type.description}</b> Game begins at ${dateToTime(localDate)}
                        <table> 
                        <tr style="border: 5px solid lightgrey">
                        <td class="tdName" style="border: 4px solid lightgrey"><b>${data.events[i].competitors[0].displayName}</b> <span class="record">(${data.events[i].competitors[0].record})</span></td>
                        <td class="tdScore">${data.events[i].competitors[0].score}</td>
                        </tr>
                        <tr style="border: 5px solid lightgrey">
                        <td class="tdName" style="border: 4px solid lightgrey"><b>${data.events[i].competitors[1].displayName}</b> <span class="record">(${data.events[i].competitors[1].record})</span></td>
                        <td class="tdScore">${data.events[i].competitors[1].score}</td>
                        </tr>
                        </table>
                        <div class="venue">${data.events[i].location}</div></div>
                        `
                    //Divide teams into league columns
                    if ((data.events[i].competitors[0].displayName == a || data.events[i].competitors[0].displayName == b || data.events[i].competitors[0].displayName == c || data.events[i].competitors[0].displayName == d || data.events[i].competitors[0].displayName == e || data.events[i].competitors[0].displayName == f || data.events[i].competitors[0].displayName == g || data.events[i].competitors[0].displayName == h || data.events[i].competitors[0].displayName == i1 || data.events[i].competitors[0].displayName == j || data.events[i].competitors[0].displayName == k || data.events[i].competitors[0].displayName == l || data.events[i].competitors[0].displayName == m || data.events[i].competitors[0].displayName == n || data.events[i].competitors[0].displayName == o) && (data.events[i].competitors[1].displayName == a || data.events[i].competitors[1].displayName == b || data.events[i].competitors[1].displayName == c || data.events[i].competitors[1].displayName == d || data.events[i].competitors[1].displayName == e || data.events[i].competitors[1].displayName == f || data.events[i].competitors[1].displayName == g || data.events[i].competitors[1].displayName == h || data.events[i].competitors[1].displayName == i1 || data.events[i].competitors[1].displayName == j || data.events[i].competitors[1].displayName == k || data.events[i].competitors[1].displayName == l || data.events[i].competitors[1].displayName == m || data.events[i].competitors[1].displayName == n || data.events[i].competitors[1].displayName == o)) {
                        document.getElementById("games-list1").innerHTML += scoreboard;
                    }  
                    else if ((data.events[i].competitors[0].displayName == p || data.events[i].competitors[0].displayName == q || data.events[i].competitors[0].displayName == r || data.events[i].competitors[0].displayName == s || data.events[i].competitors[0].displayName == t || data.events[i].competitors[0].displayName == u || data.events[i].competitors[0].displayName == v || data.events[i].competitors[0].displayName == w || data.events[i].competitors[0].displayName == x || data.events[i].competitors[0].displayName == y || data.events[i].competitors[0].displayName == z || data.events[i].competitors[0].displayName == a1 || data.events[i].competitors[0].displayName == b1 || data.events[i].competitors[0].displayName == c1 || data.events[i].competitors[0].displayName == d1) && (data.events[i].competitors[1].displayName == p || data.events[i].competitors[1].displayName == q || data.events[i].competitors[1].displayName == r || data.events[i].competitors[1].displayName == s || data.events[i].competitors[1].displayName == t || data.events[i].competitors[1].displayName == u || data.events[i].competitors[1].displayName == v || data.events[i].competitors[1].displayName == w || data.events[i].competitors[1].displayName == x || data.events[i].competitors[1].displayName == y || data.events[i].competitors[1].displayName == z || data.events[i].competitors[1].displayName == a1 || data.events[i].competitors[1].displayName == b1 || data.events[i].competitors[1].displayName == c1 || data.events[i].competitors[1].displayName == d1)) {
                        document.getElementById("games-list2").innerHTML += scoreboard;
                    }
                    else {document.getElementById("games-list3").innerHTML += scoreboard;}     
                }
            })
        }
    )}
)}

// function loadScores(data) {
//     window.addEventListener("load", function() {
//     document.getElementById("date").innerHTML = moment().format('dddd, MMMM Do, Y');
//     document.getElementById("time").innerHTML = moment().format('LT');
//     document.getElementById("year").innerHTML = moment().format('YYYY');
//     let gamesList1 = document.getElementById('games-list1')
//     let gamesList2 = document.getElementById('games-list2')
//     let gamesList3 = document.getElementById('games-list3')
//     fetch(data).then(function(response) {
//         response.json().then(function(json) {
//             let data = json.dates[0];
//             for(let i = 0; i<data.games.length; i++) {
//                 // Converts z date to game start time
//                 const dateToTime = date => date.toLocaleString('en-US', {
//                     hour: 'numeric',
//                     minute: 'numeric'
//                 });
//                 const dateString = json.dates[0].games[i].gameDate;
//                 const localDate = new Date(dateString);
//                 // National League
//                 if ((data.games[i].teams.home.team.name == "Arizona Diamondbacks", data.games[i].teams.home.team.name == "Atlanta Braves", data.games[i].teams.home.team.name == "Chicago Cubs", data.games[i].teams.home.team.name == "Cincinnati Reds", data.games[i].teams.home.team.name == "Colorado Rockies", data.games[i].teams.home.team.name == "Los Angeles Dodgers", data.games[i].teams.home.team.name == "Miami Marlins", data.games[i].teams.home.team.name == "Milwaukee Brewers", data.games[i].teams.home.team.name == "New York Mets", data.games[i].teams.home.team.name == "Philadelphia Phillies", data.games[i].teams.home.team.name == "Pittsburgh Pirates", data.games[i].teams.home.team.name == "San Diego Padres", data.games[i].teams.home.team.name == "San Francisco Giants", data.games[i].teams.home.team.name == "St. Louis Cardinals", data.games[i].teams.home.team.name == "Washington Nationals") && (data.games[i].teams.away.team.name == "Arizona Diamondbacks", data.games[i].teams.away.team.name == "Atlanta Braves", data.games[i].teams.away.team.name == "Chicago Cubs", data.games[i].teams.away.team.name == "Cincinnati Reds", data.games[i].teams.away.team.name == "Colorado Rockies", data.games[i].teams.away.team.name == "Los Angeles Dodgers", data.games[i].teams.away.team.name == "Miami Marlins", data.games[i].teams.away.team.name == "Milwaukee Brewers", data.games[i].teams.away.team.name == "New York Mets", data.games[i].teams.away.team.name == "Philadelphia Phillies", data.games[i].teams.away.team.name == "Pittsburgh Pirates", data.games[i].teams.away.team.name == "San Diego Padres", data.games[i].teams.away.team.name == "San Francisco Giants", data.games[i].teams.away.team.name == "St. Louis Cardinals", data.games[i].teams.away.team.name == "Washington Nationals")) {
//                     gamesList1.innerHTML += ``      
//                         // UPCOMING
//                         if (data.games[i].status.detailedState == "Scheduled", data.games[i].status.detailedState == "Pre-Game") {
//                             gamesList1.innerHTML += `   
//                             <div class="p-grey">
//                             <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                     <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // STARTING SOON
//                         } else if (data.games[i].status.detailedState == "Warmup") {
//                             gamesList1.innerHTML += `   
//                             <div class="p-red">
//                             <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"></td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>   
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // DELAYED START
//                         } else if (data.games[i].status.detailedState == "Delayed Start") {
//                             gamesList1.innerHTML += `   
//                             <div class="p-grey">
//                             <b>DELAYED START</b> ${data.games[i].status.reason}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>   
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // IN PROGRESS
//                         } else if (data.games[i].status.detailedState == "In Progress") {
//                             gamesList1.innerHTML += ` 
//                             <div class="p-green">
//                             <b>IN PROGRESS</b>
//                             <table> 
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                                 </tr>
//                             </table>  
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // FINAL
//                         } else if ((data.games[i].status.detailedState == "Game Over", data.games[i].status.detailedState == "Final")) {
//                             gamesList1.innerHTML += `   
//                             <div class="p-blue">
//                             <b>FINAL</b>
//                             <table>
//                                 <tr style="border: 5px solid rgb(153, 204, 255)">
//                                 <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(153, 204, 255)">
//                                 <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                                 </tr>
//                             </table> 
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;                   
//                         };
//                 // American League
//                 } else if ((data.games[i].teams.home.team.name == "Baltimore Orioles", data.games[i].teams.home.team.name == "Boston Red Sox", data.games[i].teams.home.team.name == "Chicago White Sox", data.games[i].teams.home.team.name == "Cleveland Guardians", data.games[i].teams.home.team.name == "Detroit Tigers", data.games[i].teams.home.team.name == "Houston Astros", data.games[i].teams.home.team.name == "Kansas City Royals", data.games[i].teams.home.team.name == "Los Angeles Angels", data.games[i].teams.home.team.name == "Minnesota Twins", data.games[i].teams.home.team.name == "New York Yankees", data.games[i].teams.home.team.name == "Oakland Athletics", data.games[i].teams.home.team.name == "Seattle Mariners", data.games[i].teams.home.team.name == "Tampa Bay Rays", data.games[i].teams.home.team.name == "Texas Rangers", data.games[i].teams.home.team.name == "Toronto Blue Jays") && (data.games[i].teams.away.team.name == "Baltimore Orioles", data.games[i].teams.away.team.name == "Boston Red Sox", data.games[i].teams.away.team.name == "Chicago White Sox", data.games[i].teams.away.team.name == "Cleveland Guardians", data.games[i].teams.away.team.name == "Detroit Tigers", data.games[i].teams.away.team.name == "Houston Astros", data.games[i].teams.away.team.name == "Kansas City Royals", data.games[i].teams.away.team.name == "Los Angeles Angels", data.games[i].teams.away.team.name == "Minnesota Twins", data.games[i].teams.away.team.name == "New York Yankees", data.games[i].teams.away.team.name == "Oakland Athletics", data.games[i].teams.away.team.name == "Seattle Mariners", data.games[i].teams.away.team.name == "Tampa Bay Rays", data.games[i].teams.away.team.name == "Texas Rangers", data.games[i].teams.away.team.name == "Toronto Blue Jays")) {
//                     gamesList2.innerHTML += ``
//                         // UPCOMING
//                         if (data.games[i].status.detailedState == "Scheduled", data.games[i].status.detailedState == "Pre-Game") {
//                             gamesList2.innerHTML += `   
//                             <div class="p-grey">
//                             <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table> 
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // STARTING SOON
//                         } else if (data.games[i].status.detailedState == "Warmup") {
//                             gamesList2.innerHTML += `   
//                             <div class="p-red">
//                             <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"></td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>  
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // DELAYED START
//                         } else if (data.games[i].status.detailedState == "Delayed Start") {
//                             gamesList2.innerHTML += `   
//                             <div class="p-grey">
//                             <b>DELAYED START</b> ${data.games[i].status.reason}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>   
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // IN PROGRESS
//                         } else if (data.games[i].status.detailedState == "In Progress") {
//                             gamesList2.innerHTML += ` 
//                             <div class="p-green">
//                             <b>IN PROGRESS</b>
//                             <table> 
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                                 </tr>
//                             </table>   
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // FINAL
//                     } else if ((data.games[i].status.detailedState == "Game Over", data.games[i].status.detailedState == "Final")) {
//                         gamesList1.innerHTML += `   
//                         <div class="p-blue">
//                         <b>FINAL</b>
//                         <table>
//                             <tr style="border: 5px solid rgb(153, 204, 255)">
//                             <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                             <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                             </tr>
//                             <tr style="border: 5px solid rgb(153, 204, 255)">
//                             <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                             </tr>
//                         </table> 
//                         <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                         `;                   
//                     };
//                 // Interleague
//                 } else {
//                     gamesList3.innerHTML += ``
//                           // UPCOMING
//                         if (data.games[i].status.detailedState == "Scheduled", data.games[i].status.detailedState == "Pre-Game") {
//                             gamesList3.innerHTML += `   
//                             <div class="p-grey">
//                             <b>UPCOMING</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // STARTING SOON
//                         } else if (data.games[i].status.detailedState == "Warmup") {
//                             gamesList3.innerHTML += `   
//                             <div class="p-red">
//                             <b>STARTING SOON</b> Game begins at ${dateToTime(localDate)}
//                             <table> 
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"></td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(255, 153, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>  
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // DELAYED START
//                         } else if (data.games[i].status.detailedState == "Delayed Start") {
//                             gamesList3.innerHTML += `   
//                             <div class="p-grey">
//                             <b>DELAYED START</b> ${data.games[i].status.reason}
//                             <table> 
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore"><b></b></td>
//                                 </tr>
//                                 <tr style="border: 5px solid lightgrey">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore"></td>
//                                 </tr>
//                             </table>                            
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // IN PROGRESS
//                         } else if (data.games[i].status.detailedState == "In Progress") {
//                             gamesList3.innerHTML += ` 
//                             <div class="p-green">
//                             <b>IN PROGRESS</b>
//                             <table> 
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(153, 255, 153)">
//                                 <td class="tdName" style="border: 4px solid lightgrey"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                                 </tr>
//                             </table> 
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;
//                         // FINAL
//                         } else if ((data.games[i].status.detailedState == "Game Over", data.games[i].status.detailedState == "Final")) {
//                             gamesList3.innerHTML += `   
//                             <div class="p-blue">
//                             <b>FINAL</b>
//                             <table>
//                                 <tr style="border: 5px solid rgb(153, 204, 255)">
//                                 <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.away.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.away.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                 <td class="tdScore">${json.dates[0].games[i].teams.away.score}</td>
//                                 </tr>
//                                 <tr style="border: 5px solid rgb(153, 204, 255)">
//                                 <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${json.dates[0].games[i].teams.home.team.name}</b> <span class="record">(${json.dates[0].games[i].teams.home.leagueRecord.wins}-${json.dates[0].games[i].teams.away.leagueRecord.losses})</span></td>
//                                     <td class="tdScore">${json.dates[0].games[i].teams.home.score}</td>
//                                 </tr>
//                             </table>    
//                             <div class="venue">${json.dates[0].games[i].venue.name}</div></div>
//                             `;                   
//                         };
//                     };
//                 };
//             });       
//         });
//     })
// }