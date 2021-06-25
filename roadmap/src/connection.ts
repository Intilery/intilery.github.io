const to = require('await-to-js').default;
const JiraClient = require('jira-connector');

export const client = new JiraClient({
    host: "intilery.atlassian.net",

});

export const search = async function(jql) {
    //console.log("Querying Jira with " + jql);
    let err, result;
    [err, result] = await to(client.search.search({jql: jql, maxResults:1000}));
    if (err) { throw err; }
    return result.issues;
};

export const getFilter = async function(filterId) {
    let err, filter;
    [err, filter] = await to(client.filter.getFilter({filterId: filterId}));
    if (err) { throw err; }
    return search(filter.jql);
};

export const getIssue = async function(issueId) {
    let err, issue;
    [err, issue] = await to(client.issue.getIssue({issueKey: issueId}));
    if (err) { throw err; }
    return issue;
};

export const createSubtask = async function(projectId, parentId, clientId, clientRef, priority, summary, description) {
    let doc = {
        fields: {
            project: { key: projectId },
            parent: { key: parentId },
            summary: summary,
            description: description,
            issuetype: { name: "Subtask" },
            labels: [clientId],
            customfield_10098: clientRef,
            priority: { name: priority }
        }
    }

    let err, result;
    [err, result] = await to(client.issue.createIssue(doc))
    if (err) { throw err; }
    return result;
}


