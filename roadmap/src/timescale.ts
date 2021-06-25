const addWeeks = require('date-fns/addWeeks')
const differenceInMonths = require('date-fns/differenceInMonths')

export class TimeScale {
    startOn: Date;
    completedOn: Date;

    constructor(startOn: Date) {
        this.startOn = startOn
        this.completedOn = startOn;
    }

    quarter(completion: Date) {
        if (differenceInMonths(completion, this.startOn) > 12) {
            return "Future Plans"
        } else {
            let q = Math.ceil((completion.getMonth()+1) / 3);
            return `Q${q} ${completion.getFullYear()}`
        }
    }

    getCompletionQuarterAndUpdateForNextProject(afterWeeks: number) {
        this.completedOn = addWeeks(this.completedOn, afterWeeks);
        return this.quarter(this.completedOn);
    }
}
