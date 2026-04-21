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

function showResults(title, teams) {
  console.log(title, teams);

  const div = document.createElement("div");
  div.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(teams, null, 2)}</pre>`;
  document.body.appendChild(div);
}
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => doc.data());
    showResults("Teams in Spain", teams);
  });
  db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => doc.data());
    showResults("Teams in Madrid, Spain", teams);
  });
  db.collection("teams")
  .where("city", "==", "N/A")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => doc.data());
    showResults("National Teams", teams);
  });
  db.collection("teams")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs
      .map(doc => doc.data())
      .filter(team => team.country !== "Spain");

    showResults("Not in Spain", teams);
  });
  db.collection("teams")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs
      .map(doc => doc.data())
      .filter(team =>
        team.country !== "Spain" &&
        team.country !== "England"
      );

    showResults("Not Spain or England", teams);
  });
  db.collection("teams")
  .where("country", "==", "Spain")
  .where("WorldwideFans", ">", 700)
  .get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => doc.data());
    showResults("Spain teams > 700M fans", teams);
  });
  db.collection("teams")
  .where("WorldwideFans", ">=", 500)
  .where("WorldwideFans", "<=", 600)
  .get()
  .then(snapshot => {
    const teams = snapshot.docs.map(doc => doc.data());
    showResults("Fans 500–600M", teams);
  });
  db.collection("teams")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs
      .map(doc => doc.data())
      .filter(team => team.topscorers.includes("Ronaldo"));

    showResults("Teams with Ronaldo", teams);
  });
  db.collection("teams")
  .get()
  .then(snapshot => {
    const teams = snapshot.docs
      .map(doc => doc.data())
      .filter(team =>
        team.topscorers.includes("Ronaldo") ||
        team.topscorers.includes("Messi") ||
        team.topscorers.includes("Maradona")
      );

    showResults("Ronaldo / Messi / Maradona teams", teams);
  });
  db.collection("teams").doc("realMadrid").update({
  name: "Real Madrid FC",
  WorldwideFans: 811
});
db.collection("teams").doc("barcelona").update({
  name: "FC Barcelona",
  WorldwideFans: 747
});
db.collection("teams").doc("realMadrid").update({
  topscorers: firebase.firestore.FieldValue.arrayRemove("Hazard")
});

db.collection("teams").doc("realMadrid").update({
  topscorers: firebase.firestore.FieldValue.arrayUnion("Crispo")
});
db.collection("teams").doc("barcelona").update({
  topscorers: firebase.firestore.FieldValue.arrayRemove("Puyol")
});

db.collection("teams").doc("barcelona").update({
  topscorers: firebase.firestore.FieldValue.arrayUnion("Deco")
});
const colorRM = {
  home: "White",
  away: "Black"
};

const colorBarca = {
  home: "Red",
  away: "Gold"
};
db.collection("teams").doc("realMadrid").update({
  color: colorRM
});

db.collection("teams").doc("barcelona").update({
  color: colorBarca
});
db.collection("teams").doc("realMadrid").update({
  "color.away": "Purple"
});
db.collection("teams").doc("barcelona").update({
  "color.away": "Pink"
});