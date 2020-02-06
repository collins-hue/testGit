document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
    var issueDesc =document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueServerityInput').value;
    var issueAssignedTo =document.getElementById('issueAssignedToInput').value;
    var issueStatus ='open';
    var issue ={
        id:issueId,
        description:issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status:issueStatus,
    }
    if(localStorage.getItem('issues')==null){
        var issues =[];
        localStorage.setItem('issues',JSON.stringify(issues));

    }else{
        var issues=JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));

    }
    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}

function fetchIssues() {
    var issues =JSON.parse(localStorage.getItem('issues'));
    var issuesList =document.getElementById('issuesList');

    issuesList.innerHTML='';

    for(var i=0;i < issues.length;  i++){
        var id=issues[i].id;
        var desc = issues[i].severity;
        var assignedTo =issues[i].assignedTo;
        var status =issues[i].status;

        issuesList.innerHTML += '<div class="well">'+
        '<h6>Issue ID: ' + id + id +'</h6>'+
        '<p><span class="label label-info">' + status + '</span></p' +
        '<h3>' + desc + '</h3>' +
        '<p><span class="glyphicon-time"></span>' + severity + '</p>'+
        '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
        '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">close</a>'+
        '<a href="#" onclick="deleteIssue(\''+id+'\')" class=btn btn-danger">Delete</a>'+
'<div';
    }
    
}