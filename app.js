const team1 = {name: 'Real Madrid', city: 'Madrid', country: 'Spain', topscorers: ['Ronaldo','Benzema','Hazard'],WorldwideFans: 798}
const team2 = {name: 'Barcelona', city: 'Barcelona', country: 'Spain', topscorers: ['Messi','Suarez','Puyol'],WorldwideFans: 738}
const team3 = {name: 'Manchester United', city: 'Manchester', country: 'England', topscorers: ['Cantona','Rooney','Ronaldo'],WorldwideFans: 755}
const team4 = {name: 'Manchester City', city: 'Manchester', country: 'England', topscorers: ['Sterling','Aguero','Haaland'],WorldwideFans: 537}
const team5 = {name: 'Brazil National Team', city: 'N/A', country: 'Brazil', topscorers: ['Ronaldinho','Cafu','Bebeto'],WorldwideFans: 950}
const team6 = {name: 'Argentina National Team', city: 'N/A', country: 'Argentina', topscorers: ['Messi','Batistuta','Maradona'],WorldwideFans: 888}
const team7 = {name: 'Atletico Madrid', city: 'Madrid', country: 'Spain', topscorers: ['Aragonés','Griezmann','Torez'],WorldwideFans: 400}
const teams = [team1, team2, team3, team4, team5, team6, team7];

db.collection("teams").doc("9zFqNasEXltkitiDtcTP").set(team1);
db.collection("teams").doc("zEJqkqdCjMNeTfyBzFJB").set(team2);
db.collection("teams").doc("pCPr0UqTwAuVxXWBFNYu").set(team3);
db.collection("teams").doc("lYkkq8XnKu3R5K6uU9fN").set(team4);
db.collection("teams").doc("EnH7zhwJ8PhIfXL3ohXD").set(team5);
db.collection("teams").doc("wmWYIuIwp4geT9JvApkd").set(team6);
db.collection("teams").doc("ogJWOVWa0AWREvsLWY0Y").set(team7);