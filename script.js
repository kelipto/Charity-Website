function displayCause() {
  var cause = document.getElementById("cause").value;

  // show all causes if "All" is selected
  if (cause === "all") {
    let causeListElem = document.getElementById("causeList");
    for (let i = 0; i < causeListElem.children.length; i++) {
      causeListElem.children[i].style.display = "table-row";
    }
  } else {
    // hide all causes except the selected one
    let causeListElem = document.getElementById("causeList");
    for (let i = 0; i < causeListElem.children.length; i++) {
      let causeElem = causeListElem.children[i];
      if (causeElem.id !== cause) {
        causeElem.style.display = "none";
      } else {
        causeElem.style.display = "table-row";
      }
    }
  }
}
 // Hide comment section on page load
  document.getElementById("new").style.display = "none";

  // Function to show or hide the new cause form
  function showOrHideNewCauseForm() {
    let newCauseForm = document.getElementById("new");
    if (newCauseForm.style.display === "none") {
      newCauseForm.style.display = "block";
    } else {
      newCauseForm.style.display = "none";
    }
  }
  

function submitComment(event, form) {
  event.preventDefault();

  var commentName = form.querySelector("#commentName").value;
  var commentText = form.querySelector("#commentText").value;
  var commentsDiv = form.nextElementSibling;
  var currentDate = new Date();
  var commentHTML =
    "<strong>" +
    currentDate.toLocaleString() +
    "<p><strong>" +
    commentName +
    ":<br></strong> " +
    commentText +
    "<br>" +
    "</p>";
  commentsDiv.innerHTML += commentHTML;
  form.querySelector("#commentName").value = "";
  form.querySelector("#commentText").value = "";
}



    // Hide comment section on page load
  document.getElementById("cf1").style.display = "none";
  document.getElementById("cf2").style.display = "none";
  document.getElementById("cf3").style.display = "none";
  document.getElementById("cf4").style.display = "none";

  // Function to show comment section when button is clicked
  function showComments() {
    document.getElementById("cf1").style.display = "block";
	document.getElementById("cf2").style.display = "block";
	document.getElementById("cf3").style.display = "block";
	document.getElementById("cf4").style.display = "block";
  }

  // Function to hide comment section when button is clicked
  function hideComments() {
    document.getElementById("cf1").style.display = "none";
    document.getElementById("cf2").style.display = "none";
    document.getElementById("cf3").style.display = "none";
    document.getElementById("cf4").style.display = "none";
  }
  
  // Function to show or hide comment section based on current state
function showOrHideComments(causeCount) {
  let commentSection = document.getElementById("cf" + causeCount);
  if (commentSection.style.display === "none") {
    // Hide all comment sections first
    hideComments();

    // Show comment section for the selected cause
    commentSection.style.display = "block";
	
  } else {
    // Hide comment section for the selected cause
    commentSection.style.display = "none";
  }
}
  


   let signatureCounts = {
    cause1: { count: 150 },
    cause2: { count: 75 },
	 cause3: { count: 250 },
	  cause4: { count: 100 }
  }
  let followCounts = { 
  cause1: { count: 150 },
    cause2: { count: 63 },
	 cause3: { count: 250 },
	  cause4: { count: 100 }
  }
  
let causeCount = 4; // Initialize causeCount to the number of existing causes
let causeList = ["Cause 1", "Cause 2", "Cause 3", "Cause 4"]; // Initialize the causeList array with the existing causes
function addNewCause() {
  // Increment the causeCount variable to get the next cause number
  causeCount++;

  // get the new cause name and info from the input elements
  // Add the cause number to the name
  let newCauseName = "Cause "+ causeCount+": "+ document.getElementById("newCauseName").value;
  let newCauseInfo = document.getElementById("newCauseInfo").value;
 
  // create a new cause element with a default signature count of 0 and the provided cause description
  let newCauseElem = document.createElement("div");
  newCauseElem.id = newCauseName;
  newCauseElem.innerHTML = `
    <h3>
    <a href="cause${causeCount}.html">${newCauseName}</a>
	
	<button id="signatureButton_${newCauseName}"  type="button" class="btn-success btn-sm"  onclick="leaveSignature('${newCauseName}')">Sign</button>
	<button id="followButton_${newCauseName}"  type="button" class="btn-success btn-sm"  onclick="follow('${newCauseName}')">Follow</button>
      
    </h3>

    <table> 
      <tr>
        <th><p id="signatureCount_${newCauseName}">0 signatures</p></th>
        <th>&nbsp;</th>
        <th><p id="followCount_${newCauseName}">0 Following</p></th>
      </tr>
    </table>
    <p id="causeInfo_${newCauseName}">${newCauseInfo}</p>
    <button type="btn" class="btn btn-light btn-block" onclick="showOrHideComments(${causeCount})">Show Comments</button>
    <p>

    <!-- Comments form and div for newCause -->
	<div id="cf${causeCount}">
    
<div class="comments"><h4>Discussion:</h4>
<strong>10/02/2023, 9:30:45<strong>
<p>
<strong>Dummy Dummy:</strong><br>
Dummy comment to test if it works as it should!
<br>
</p>
<strong>10/02/2023, 9:30:45<strong>
<p>
  <strong>Dummy The Second:</strong><br>
  Second Dummy comment to test if it works as it should!
  <br>
</p>
</div>
    </div>
  `;

  // add the new cause element to the cause list
  let causeListElem = document.getElementById("causeList");
  causeListElem.appendChild(newCauseElem);

  // add the new cause name to the causeList array
  causeList.push(newCauseName);

  // create a new option element with the new cause name and id
  let newOptionElem = document.createElement("option");
  newOptionElem.value = newCauseName;
  newOptionElem.text = `Cause ${causeListElem.children.length}`;

  // add the new option element to the select dropdown
  let causeSelectElem = document.getElementById("cause");
  causeSelectElem.add(newOptionElem);

  // add the new cause to the signatureCounts object with a count of 0
  signatureCounts[newCauseName] = { count: 0 };
  followCounts[newCauseName] = { count: 0};

  // call the displayCause function to update the cause list display
  displayCause();
}


function leaveSignature(cause) {
  var button = document.getElementById("signatureButton_" + cause);
  var countElement = document.getElementById("signatureCount_" + cause);
  var count = parseInt(countElement.textContent);

  if (button.textContent === "Sign") {
    count++;
    countElement.textContent = count + " signatures";
    button.textContent = "Unsign";
  } else {
    count--;
    countElement.textContent = count + " signatures";
    button.textContent = "Sign";
  }
}


function follow(cause) {
  var button = document.getElementById("followButton_" + cause);
  var countElement = document.getElementById("followCount_" + cause);
  var count = parseInt(countElement.textContent);

  if (button.textContent === "Follow") {
    count++;
    countElement.textContent = count + " follows";
    button.textContent = "Unfollow";
  } else {
    count--;
    countElement.textContent = count + " follows";
    button.textContent = "Follow";
  }
}

function unFollow(cause) {
  var countElement = document.getElementById("followCount_" + cause);
  var count = parseInt(countElement.textContent);
  count--;
  countElement.textContent = count;
}

function showSignatures(cause) {
  var signatures = ["John Wick", "Klerman Kellerman", "Josh Gadovski"]; // Replace with actual list of signatures for the cause
  var signaturesList = document.getElementById("signaturesList");
  signaturesList.innerHTML = "";
  for (var i = 0; i < signatures.length; i++) {
    var signature = document.createElement("li");
    signature.innerHTML = signatures[i];
    signaturesList.appendChild(signature);
  }
  $('#signaturesModal').modal('show');
}


function deleteRow(btn){
  // Get the row that contains the button clicked
  var row = btn.parentNode.parentNode;
  // Remove the row
  row.parentNode.removeChild(row);

}