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
                    let scoreboardGrey = `
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
                    let scoreboardGreen = `
                        <div class="p-green">
                        <b>${data.events[i].fullStatus.type.description}</b>
                        <table> 
                            <tr style="border: 5px solid rgb(153, 255, 153)">
                                <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${data.events[i].competitors[0].displayName}</b> <span class="record">(${data.events[i].competitors[0].record})</span></td>
                                <td class="tdScore">${data.events[i].competitors[0].score}</td>
                            </tr>
                            <tr style="border: 5px solid rgb(153, 255, 153)">
                            <td class="tdName" style="border: 4px solid rgb(153, 255, 153)"><b>${data.events[i].competitors[1].displayName}</b> <span class="record">(${data.events[i].competitors[1].record})</span></td>
                                <td class="tdScore">${data.events[i].competitors[1].score}</td>
                            </tr>
                        </table>  
                        <div class="venue">${data.events[i].location}</div></div>
                        `
                    let scoreboardBlue = `
                        <div class="p-blue">
                        <b>${data.events[i].fullStatus.type.description}</b>
                        <table> 
                            <tr style="border: 5px solid rgb(153, 204, 255)">
                                <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${data.events[i].competitors[0].displayName}</b> <span class="record">(${data.events[i].competitors[0].record})</span></td>
                                <td class="tdScore">${data.events[i].competitors[0].score}</td>
                            </tr>
                            <tr style="border: 5px solid rgb(153, 204, 255)">
                            <td class="tdName" style="border: 4px solid rgb(153, 204, 255)"><b>${data.events[i].competitors[1].displayName}</b> <span class="record">(${data.events[i].competitors[1].record})</span></td>
                                <td class="tdScore">${data.events[i].competitors[1].score}</td>
                            </tr>
                        </table>  
                        <div class="venue">${data.events[i].location}</div></div>
                        `
                    //Divide teams into league columns
                    if ((data.events[i].competitors[0].displayName == a || data.events[i].competitors[0].displayName == b || data.events[i].competitors[0].displayName == c || data.events[i].competitors[0].displayName == d || data.events[i].competitors[0].displayName == e || data.events[i].competitors[0].displayName == f || data.events[i].competitors[0].displayName == g || data.events[i].competitors[0].displayName == h || data.events[i].competitors[0].displayName == i1 || data.events[i].competitors[0].displayName == j || data.events[i].competitors[0].displayName == k || data.events[i].competitors[0].displayName == l || data.events[i].competitors[0].displayName == m || data.events[i].competitors[0].displayName == n || data.events[i].competitors[0].displayName == o) && (data.events[i].competitors[1].displayName == a || data.events[i].competitors[1].displayName == b || data.events[i].competitors[1].displayName == c || data.events[i].competitors[1].displayName == d || data.events[i].competitors[1].displayName == e || data.events[i].competitors[1].displayName == f || data.events[i].competitors[1].displayName == g || data.events[i].competitors[1].displayName == h || data.events[i].competitors[1].displayName == i1 || data.events[i].competitors[1].displayName == j || data.events[i].competitors[1].displayName == k || data.events[i].competitors[1].displayName == l || data.events[i].competitors[1].displayName == m || data.events[i].competitors[1].displayName == n || data.events[i].competitors[1].displayName == o)) {
                        if (data.events[i].fullStatus.type.description == "Scheduled") {
                            document.getElementById("games-list1").innerHTML += scoreboardGrey;
                        } else if (data.events[i].fullStatus.type.description == "Final") {
                            document.getElementById("games-list1").innerHTML += scoreboardBlue;
                        } else {
                            document.getElementById("games-list1").innerHTML += scoreboardGreen;
                        }
                    }  
                    else if ((data.events[i].competitors[0].displayName == p || data.events[i].competitors[0].displayName == q || data.events[i].competitors[0].displayName == r || data.events[i].competitors[0].displayName == s || data.events[i].competitors[0].displayName == t || data.events[i].competitors[0].displayName == u || data.events[i].competitors[0].displayName == v || data.events[i].competitors[0].displayName == w || data.events[i].competitors[0].displayName == x || data.events[i].competitors[0].displayName == y || data.events[i].competitors[0].displayName == z || data.events[i].competitors[0].displayName == a1 || data.events[i].competitors[0].displayName == b1 || data.events[i].competitors[0].displayName == c1 || data.events[i].competitors[0].displayName == d1) && (data.events[i].competitors[1].displayName == p || data.events[i].competitors[1].displayName == q || data.events[i].competitors[1].displayName == r || data.events[i].competitors[1].displayName == s || data.events[i].competitors[1].displayName == t || data.events[i].competitors[1].displayName == u || data.events[i].competitors[1].displayName == v || data.events[i].competitors[1].displayName == w || data.events[i].competitors[1].displayName == x || data.events[i].competitors[1].displayName == y || data.events[i].competitors[1].displayName == z || data.events[i].competitors[1].displayName == a1 || data.events[i].competitors[1].displayName == b1 || data.events[i].competitors[1].displayName == c1 || data.events[i].competitors[1].displayName == d1)) {
                        if (data.events[i].fullStatus.type.description == "Scheduled") {
                            document.getElementById("games-list2").innerHTML += scoreboardGrey;
                        } else if (data.events[i].fullStatus.type.description == "Final") {
                            document.getElementById("games-list2").innerHTML += scoreboardBlue;
                        } else {
                            document.getElementById("games-list2").innerHTML += scoreboardGreen;
                        }
                    }
                    else {
                        if (data.events[i].fullStatus.type.description == "Scheduled") {
                            document.getElementById("games-list3").innerHTML += scoreboardGrey;
                        } else if (data.events[i].fullStatus.type.description == "Final") {
                            document.getElementById("games-list3").innerHTML += scoreboardBlue;
                        } else {
                            document.getElementById("games-list3").innerHTML += scoreboardGreen;
                        }
                    }     
                }
            })
        }
    )}
)}