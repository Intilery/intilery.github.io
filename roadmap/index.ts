const roadmap = require('./src/roadmap')
import {TimeScale} from './src/timescale'

const timescale = new TimeScale(new Date())

interface DeliveryPeriod {
    name: string,
    items: Array<any>,
}

interface Schedule {
    schedule: Array<DeliveryPeriod>
}

let printSubtask  = x => {console.log(`  * ${x.status}: ${x.summary}  (for ${x.client}, Use Case ID: ${x.clientReference}, Client Priority: ${x.priority.name})`)};
let printSubtasks = x => { x.subtasks.forEach(i => printSubtask(i)); }
let printStory = x => { console.log(`\n### ${x.key}: ${x.summary}\n${x.description}\n`); printSubtasks(x);}

let printSchedule = (s: Schedule) => {
    s.schedule.forEach(t => {
        console.log(`\n\n## ${t.name}\n`)
        t.items.forEach(story => printStory(story))
    })
}

function getScheduledPeriod(s: Schedule, t: string) {
    let lastPeriod = s.schedule.length > 0 ? s.schedule[s.schedule.length - 1] : null;
    if (!(lastPeriod && lastPeriod.name === t)) {
        let thisPeriod: DeliveryPeriod = {name: t, items: []};
        s.schedule.push(thisPeriod);
    }

    return s.schedule[s.schedule.length - 1];
}

let addToSchedule = (i, s: Schedule) => {
    let t = timescale.getCompletionQuarterAndUpdateForNextProject(i.estimatedWeeks);
    let period = getScheduledPeriod(s, t);
    period.items.push(i)
}

let generateRoadmap = x => {
    const schedule: Schedule = { schedule: []}
    x.forEach(i => addToSchedule(i, schedule));
    return schedule;
};

roadmap.getRoadmap()
    .then(data => {
        let schedule = generateRoadmap(data);
        console.log(`# Product Roadmap`)
        printSchedule(schedule);
    });
