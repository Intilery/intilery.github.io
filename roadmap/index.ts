const roadmap = require('./src/roadmap')
const fs = require('fs')
const Handlebars = require('handlebars')
import {TimeScale} from './src/timescale'

const timescale = new TimeScale(new Date())

interface DeliveryPeriod {
    name: string,
    items: Array<any>,
}

interface Schedule {
    schedule: Array<DeliveryPeriod>
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

let myArgs = process.argv.slice(2);
if (myArgs.length == 0) {
    console.log('provide the name of the template to generate the roadmap with:')
    fs.readdirSync('./templates').forEach(f => console.log(` * ${f.split('.')[0]}`))
}

roadmap.getRoadmap()
    .then(data => {
        let schedule = generateRoadmap(data);
        let template = Handlebars.compile(fs.readFileSync(`./templates/${myArgs[0]}.hbs`).toString())
        Handlebars.registerHelper("inc", function(value, {})
        {
            return parseInt(value) + 1;
        });

        console.log(template(schedule))
    });
