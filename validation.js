var ToDate = new Date();
var UserDate = document.getElementById("startingDate").value;
var EndDate = document.getElementById("endDate").value;
var PostDate = document.getElementById("postDate").value;
var eventTitle = document.getElementById("eventTitle").value;

function validateStartDate() {
    if (new Date(UserDate).getTime() < ToDate.setHours(0,0,0,0)) {
          alert("The date must be no earlier from today.");
          document.getElementById("startingDate").value = '';
          return false;
    }
    return true;
}

function validateEndDate() {
    if (new Date(EndDate).getTime() < new Date(UserDate).getTime()) {
          alert("The second box of the event date must be set after the starting date.");
          document.getElementById("endDate").value = '';
          return false;
    }
    return true;
}

function validatePostDate() {
    if (new Date(PostDate).getTime() > new Date(UserDate).getTime()) {
          alert("The posting date must be on or before the starting date");
          document.getElementById("postDate").value = '';
          return false;
    }
    else if(new Date(PostDate).getTime() < ToDate.setHours(0,0,0,0)){
        alert("The posting date must not be set earlier than today.");
        document.getElementById("postDate").value='';
        return false;
    }
    return true;
}

function validateEventTitle(){
    if(eventTitle == ""){
        alert("Please provide an event title.")
        return false;
    }
    else if(eventTitle.length < 3){
        alert("Please provide an appropriate event title.")
		document.getElementById("eventTitle").value = '';
        return false;
    }
    return true;
}