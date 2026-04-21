const team1 = {name: 'Real Madrid', city: 'Madrid', country: 'Spain', topscorers: ['Ronaldo','Benzema','Hazard'],WorldwideFans: 798}
const team2 = {name: 'Barcelona', city: 'Barcelona', country: 'Spain', topscorers: ['Messi','Suarez','Puyol'],WorldwideFans: 738}
const team3 = {name: 'Manchester United', city: 'Manchester', country: 'England', topscorers: ['Cantona','Rooney','Ronaldo'],WorldwideFans: 755}
const team4 = {name: 'Manchester City', city: 'Manchester', country: 'England', topscorers: ['Sterling','Aguero','Haaland'],WorldwideFans: 537}
const team5 = {name: 'Brazil National Team', city: 'N/A', country: 'Brazil', topscorers: ['Ronaldinho','Cafu','Bebeto'],WorldwideFans: 950}
const team6 = {name: 'Argentina National Team', city: 'N/A', country: 'Argentina', topscorers: ['Messi','Batistuta','Maradona'],WorldwideFans: 888}
const team7 = {name: 'Atletico Madrid', city: 'Madrid', country: 'Spain', topscorers: ['Aragonés','Griezmann','Torez'],WorldwideFans: 400}
const teams = [team1, team2, team3, team4, team5, team6, team7];

db.collection("teams").doc("realMadrid").set(team1);
db.collection("teams").doc("barcelona").set(team2);
db.collection("teams").doc("manUnited").set(team3);
db.collection("teams").doc("manCity").set(team4);
db.collection("teams").doc("brazil").set(team5);
db.collection("teams").doc("argentina").set(team6);
db.collection("teams").doc("atleticoMadrid").set(team7);