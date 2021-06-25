const jira = require('./src/connection')
const csv = require('csv-parser')
const fs = require('fs')

let addSubtask = d => {
    let doc = {
        project: "RM", parent: `RM-${d["RM-ID"]}`, clientId: "iGO4", clientRef: d["ID"],
        priority: d["Priority"], summary: "TBD",
        description: `${d["so that"]} ${d["As a"]} ${d["I want"]}`
    }

    jira.createSubtask(doc.project, doc.parent, doc.clientId, doc.clientRef, doc.priority, doc.summary, doc.description)
        .then(r => console.log(`Created ${r.key} from ${doc.clientRef}`));
};

fs.createReadStream('igo4.csv')
    .pipe(csv())
    .on('data', d => addSubtask(d))
    .on('end', () => console.log('done'));
