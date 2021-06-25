const to = require('await-to-js').default;
const jira = require('./connection')

//STORY FIELDS
import {getIssue} from "./connection";

let estimatedWeeks = "customfield_10093"
let publicDescription = "customfield_10088"
//SUBTASK FIELDS
let clientReference = "customfield_10098"

const prettySubtask = function(subtask) { //TODO: Add due date, release date
    return {
        id: subtask.id,
        key: subtask.key,
        client: subtask.fields.labels.length > 0 ? subtask.fields.labels[0] : 'Intilery',
        clientReference: subtask.fields[clientReference],
        priority: {name: subtask.fields.priority.name, rank: subtask.fields.priority.id },
        summary: subtask.fields.summary,
        description: subtask.fields.description,
        status: subtask.fields.status.name,
    }
}

const prettyStory = function(story, subtasks) { //TODO: Add date fields, team size, etc...
    return {
        key: story.key,
        summary: story.fields.summary,
        description: story.fields[publicDescription],
        estimatedWeeks: story.fields[estimatedWeeks],
        subtasks: subtasks,
    }
}

const translateStory = async function(story) {
    let subtasks = [];
    if (story.fields.subtasks) {
        let issues = story.fields.subtasks.map(st => getIssue(st.id));
        let err, result;
        [err, result] = await to(Promise.all(issues));
        if (err) { throw err; }
        subtasks = result.map(prettySubtask);
    }

    return prettyStory(story, subtasks);
}

export const getRoadmap = async function() {
    let err, result;
    [err, result] = await to(jira.search('project=RM and "Estimated Weeks[Number]" is not empty and status in ("To Do", "Agreed", "Planned", "In Progress") order by rank'));
    if (err) { throw err; }
    let roadmap = result.map(story => translateStory(story));
    [err, result] = await to(Promise.all(roadmap));
    if (err) { throw err; }
    return result;
}
