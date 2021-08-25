let qTeams = {
aaiec: 400,
aaiwc: 60,
qai: 200,
poc: 100,
gtm: 50,
hr: 10
};

keysSorted = Object.keys(qTeams).sort(
    (a,b) => { return qTeams[b]-qTeams[a]; } );
console.log(keysSorted)