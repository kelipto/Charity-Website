/*function displayCause() {
  var cause = document.getElementById("cause").value;

  if (cause === "causeList") {
    document.getElementById("cause1").style.display = "table-row";
    document.getElementById("cause2").style.display = "table-row";
    document.getElementById("cause3").style.display = "table-row";
    document.getElementById("cause4").style.display = "table-row";
	document.getElementById("cause"+causeCount).style.display = "table-row";
  } 
  
  else if (cause === "cause1") {
    document.getElementById("cause1").style.display = "table-row";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause3").style.display = "none";
    document.getElementById("cause4").style.display = "none";
	document.getElementById($("cause"+causeCount)).style.display = "none";
  } 
  
  else if (cause === "cause2") {
    document.getElementById("cause2").style.display = "table-row";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause3").style.display = "none";
    document.getElementById("cause4").style.display = "none";
	
	document.getElementById($("cause"+causeCount)).style.display = "none";
	
  } 
  
  else if (cause === "cause3") {
    document.getElementById("cause3").style.display = "table-row";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause4").style.display = "none";
	document.getElementById($("cause"+causeCount)).style.display = "none";
  } 
  
  else if (cause === "cause4") {
    document.getElementById("cause4").style.display = "table-row";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause3").style.display = "none";
	document.getElementById($("cause"+causeCount)).style.display = "none";
  }
  else {
	document.getElementById($("cause"+causeCount)).style.display = "table-row";
	document.getElementById("cause4").style.display = "none";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause3").style.display = "none";
}

}*/
/*
function displayCause() {
  var cause = document.getElementById("cause").value;

  if (cause === "causeList") {
    for (let i = 1; i <= causeCount; i++) {
      document.getElementById("cause" + i).style.display = "table-row";
    }
  } 
  
  else if (cause === "cause1") {
    for (let i = 1; i <= causeCount; i++) {
      if (i == 1) {
        document.getElementById("cause" + i).style.display = "table-row";
      } else {
        document.getElementById("cause" + i).style.display = "none";
      }
    }
  }
   
  else if (cause === "cause2") {
    for (let i = 1; i <= causeCount; i++) {
      if (i == 2) {
        document.getElementById("cause" + i).style.display = "table-row";
      } else {
        document.getElementById("cause" + i).style.display = "none";
      }
    }
  }
   
  else if (cause === "cause3") {
    for (let i = 1; i <= causeCount; i++) {
      if (i == 3) {
        document.getElementById("cause" + i).style.display = "table-row";
      } else {
        document.getElementById("cause" + i).style.display = "none";
      }
    }
  }
   
  else if (cause === "cause4") {
    for (let i = 1; i <= causeCount; i++) {
      if (i == 4) {
        document.getElementById("cause" + i).style.display = "table-row";
      } else {
        document.getElementById("cause" + i).style.display = "none";
      }
    }
  }
  // finally, add an else clause to handle any unexpected value of cause
  else {
    for (let i = 1; i <= causeCount; i++) {
      if ("cause" + i === cause) {
        document.getElementById("cause" + i).style.display = "table-row";
      } else {
        document.getElementById("cause" + i).style.display = "none";
      }
    }
  }
}*/



function displayCause() {
  var cause = document.getElementById("cause").value;

  if (cause === "all") {
    document.getElementById("cause1").style.display = "table-row";
    document.getElementById("cause1-comments").style.display = "block";
    document.getElementById("cause2").style.display = "table-row";
    document.getElementById("cause2-comments").style.display = "block";
    document.getElementById("cause3").style.display = "table-row";
    document.getElementById("cause3-comments").style.display = "block";
    document.getElementById("cause4").style.display = "table-row";

	
  } 
  
  else if (cause === "cause1") {
    document.getElementById("cause1").style.display = "table-row";
    document.getElementById("cause1-comments").style.display = "block";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause2-comments").style.display = "none";
    document.getElementById("cause3").style.display = "none";
    document.getElementById("cause3-comments").style.display = "none";
    document.getElementById("cause4").style.display = "none";
    document.getElementById("cause4-comments").style.display = "none";
  } 
  
  else if (cause === "cause2") {
    document.getElementById("cause2").style.display = "table-row";
    document.getElementById("cause2-comments").style.display = "block";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause1-comments").style.display = "none";
    document.getElementById("cause3").style.display = "none";
    document.getElementById("cause3-comments").style.display = "none";
    document.getElementById("cause4").style.display = "none";
    document.getElementById("cause4-comments").style.display = "none";
  } 
  
  else if (cause === "cause3") {
    document.getElementById("cause3").style.display = "table-row";
    document.getElementById("cause3-comments").style.display = "block";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause1-comments").style.display = "none";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause2-comments").style.display = "none";
    document.getElementById("cause4").style.display = "none";
    document.getElementById("cause4-comments").style.display = "none";
  } 
  
  else if (cause === "cause4") {
    document.getElementById("cause4").style.display = "table-row";
    document.getElementById("cause4-comments").style.display = "block";
    document.getElementById("cause1").style.display = "none";
    document.getElementById("cause1-comments").style.display = "none";
    document.getElementById("cause2").style.display = "none";
    document.getElementById("cause2-comments").style.display = "none";
    document.getElementById("cause3").style.display = "none";
    document.getElementById("cause3-comments").style.display = "none";
  }
}


/*
function displayCause() {
  var cause = document.getElementById("cause").value;

  // loop through all the causes and set their display property based on the selected cause
  var causes = document.querySelectorAll('[id^="cause"]');
  causes.forEach(function (causeElem) {
    if (cause === "all" || causeElem.id === "cause") {
      causeElem.style.display = "table-row";
    } else {
      causeElem.style.display = "none";
    }
  });
}*/
	


/*
  function addNewCause() {
    // get the new cause name and info from the input elements
    let newCauseName = document.getElementById("newCauseName").value;
    let newCauseInfo = document.getElementById("newCauseInfo").value;

    // create a new cause element with a default signature count of 0 and the provided cause description
    let newCauseElem = document.createElement("div");
    newCauseElem.id = newCauseName;
    newCauseElem.innerHTML = `
      <h3>${newCauseName} 
	  <button type="button" class="btn btn-light btn-lg" onclick="addSignature('${newCauseName}')">Sign</button>
	  <button type="button" class="btn btn-light btn-lg" onclick="addFollow('${newCauseName}')">Follow</button>  
	  </h3>
     
      	<table> 
			<tr>
			<th><p id="signatureCount_${newCauseName}">0 signatures</p></th>
			<th>&nbsp;</th>
			<th><p id="followCount_${newCauseName}">0 Following</p></th>
			</tr>
			</table>
	  
	  <p id="causeInfo_${newCauseName}">${newCauseInfo}</p>
	  
	  				
 <!-- Comments form and div for newCause -->
<form onsubmit="submitComment(event, this)">
  <label for="commentName">Name:</label>
  <input type="text" id="commentName" name="commentName" required>
  <br>
  <label for="commentText">Comment:</label><br>
  <textarea id="commentText" name="commentText" class="form-control" rows="5"required></textarea>
  <br>
   <button type="Submit" class="btn btn-success btn-lg">Submit</button>
</form>
<div class="comments"><h4>Discussion:</h4></div>

    `;

    // add the new cause element to the cause list
    let causeListElem = document.getElementById("causeList");
    causeListElem.appendChild(newCauseElem);

    // add the new cause to the signatureCounts object with a count of 0
    signatureCounts[newCauseName] = { count: 0 };
	followCounts[newCauseName] = { count: 0 };
  }*/
  
  

/*
 let signatureCounts = {
    cause1: { count: 150 },
    cause2: { count: 75 },
	 cause3: { count: 250 },
	  cause4: { count: 100 }
  }
  followCounts = { 
  cause1: { count: 150 },
    cause2: { count: 75 },
	 cause3: { count: 250 },
	  cause4: { count: 100 }
 }

  // object to store signature counts for each cause
 function addSignature(causeId) {
    // check if causeId is already in signatureCounts object
    if (signatureCounts.hasOwnProperty(causeId)) {
      // increment signature count by 1
      signatureCounts[causeId].count++;
    } else {
      // add new cause to signatureCounts object with count of 1
      signatureCounts[causeId] = { count: 1 };
    }

    // update signature count display
    let signatureCountElem = document.getElementById("signatureCount_" + causeId);
    signatureCountElem.innerHTML = signatureCounts[causeId].count + " signatures";
  }
  
  // object to store follows counts for each cause
 function addFollow(causeId) {
    // check if causeId is already in followCounts object
    if (followCounts.hasOwnProperty(causeId)) {
      // increment signature count by 1
      followCounts[causeId].count++;
    } else {
      // add new cause to followCounts object with count of 1
      followCounts[causeId] = { count: 1 };
    }

    // update follows count display
    let followCountElem = document.getElementById("followCount_" + causeId);
    followCountElem.innerHTML = followCounts[causeId].count + " following";
  }*/
  


/*
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
      <h3>${newCauseName} 
      <button type="button" class="btn btn-light btn-lg" onclick="addSignature('${newCauseName}')">Sign</button>
      <button type="button" class="btn btn-light btn-lg" onclick="addFollow('${newCauseName}')">Follow</button>  
      </h3>
     
        <table> 
            <tr>
            <th><p id="signatureCount_${newCauseName}">0 signatures</p></th>
            <th>&nbsp;</th>
            <th><p id="followCount_${newCauseName}">0 Following</p></th>
            </tr>
            </table>
      
      <p id="causeInfo_${newCauseName}">${newCauseInfo}</p>
      <button type="btn" class="btn btn-light btn-block" onclick="showOrHideComments(${causeCount})">Show Comments</button> <p>
                    
        <!-- Comments form and div for newCause -->
        <div id="cf${causeCount}">
        <form onsubmit="submitComment(event, this)">
        <label for="commentName">Name:</label>
        <input type="text" id="commentName" name="commentName" required>
        <br>
        <label for="commentText">Comment:</label><br>
        <textarea id="commentText" name="commentText" class="form-control" rows="5"required></textarea>
        <br>
    
  <button type="Submit" class="btn btn-success btn-small">Add your comment</button>
        </form>
        <div class="comments"><h4>Discussion:</h4></div>
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
// add the new cause to the causeList array
causeList.push(newCauseName);

// call the displayCause function to update the cause list display
displayCause();

}*/
  
  /*
let causeCount = 4; // Initialize causeCount to the number of existing causes

function addNewCause() {
    // Increment the causeCount variable to get the next cause number
    causeCount++;

    // get the new cause name and info from the input elements
    // Add the cause number to the name
	let newCauseName = "Cause "+ causeCount+": "+ document.getElementById("newCauseName").value;
    let newCauseInfo = document.getElementById("newCauseInfo").value;

    // create a new cause element with a default signature count of 0 and the provided cause description
    let newCauseElem = document.createElement("div");
    newCauseElem.id = "cause"+causeCount;
    newCauseElem.innerHTML = `
      <h3>${newCauseName} 
	  <button type="button" class="btn btn-light btn-lg" onclick="addSignature('${newCauseName}')">Sign</button>
	  <button type="button" class="btn btn-light btn-lg" onclick="addFollow('${newCauseName}')">Follow</button>  
	  </h3>
     
      	<table> 
			<tr>
			<th><p id="signatureCount_${newCauseName}">0 signatures</p></th>
			<th>&nbsp;</th>
			<th><p id="followCount_${newCauseName}">0 Following</p></th>
			</tr>
			</table>
	  
	  <p id="causeInfo_${newCauseName}">${newCauseInfo}</p>
	  <button type="btn" class="btn btn-light btn-block" onclick="showOrHideComments(${causeCount})">Show Comments</button> <p>
	  				
		<!-- Comments form and div for newCause -->
		<div id="cf${causeCount}">
		<form onsubmit="submitComment(event, this)">
		<label for="commentName">Name:</label>
		<input type="text" id="commentName" name="commentName" required>
		<br>
		<label for="commentText">Comment:</label><br>
		<textarea id="commentText" name="commentText" class="form-control" rows="5"required></textarea>
		<br>
	
  <button type="Submit" class="btn btn-success btn-small">Add your comment</button>
		</form>
		<div class="comments"><h4>Discussion:</h4></div>
    `;

    // add the new cause element to the cause list
    let causeListElem = document.getElementById("causeList");
    causeListElem.appendChild(newCauseElem);

  // create a new option element with the new cause name and id
  let newOptionElem = document.createElement("option");
  newOptionElem.value = newCauseName;
  newOptionElem.text = `Cause ${causeListElem.children.length}`;

  // add the new option element to the select dropdown
  let causeSelectElem = document.getElementById("cause");
  causeSelectElem.add(newOptionElem);

    // add the new cause to the signatureCounts object with a count of 0
    signatureCounts[newCauseName] = { count: 0 };
	followCounts[newCauseName] = { count: 0 };
}
*/


