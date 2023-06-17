 
let btn = document.getElementById('submitBtn')
let leavBtnG = ''
btn.addEventListener('click',addlist)
function addlist(){
    //get elements 
    let carName = document.getElementById('car_Name').value
    let plateNo = document.getElementById('plate_No').value
    let carType = document.getElementById('car_Type').value 
   
    //crate an array to hold the value 
    let carInfo = Object() 
    
    carInfo.carName = carName
    carInfo.plateNo = plateNo
    carInfo.carType = carType

   //create the table  
   let tbody = document.getElementsByTagName('tbody')[0]
   let row = tbody.insertRow()
   ///create a row
     let carNameCell = row.insertCell()
     let plateNoCell = row.insertCell()
     let carTypeCell = row.insertCell()
     let startTimeCell = row.insertCell()
     let currentTimeCell = row.insertCell()
     let leavBtnCellCell = row.insertCell()
     let leavBtn = document.createElement('button')
     let leavBtnG = leavBtn
     leavBtn.innerHTML = 'leave'
     leavBtn.className = 'btn btn leavBtn '
     leavBtn.id = 'leavBtn'
     leavBtnCellCell.appendChild(leavBtn)



     
   /// dispaly in the table
   carNameCell.innerHTML = carName 
   plateNoCell.innerHTML = plateNo 
   carTypeCell.innerHTML = carType 
 
 
   

    // Create a new Date object
let currentTime = new Date();
// Get the current time components
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
// Create a formatted date string
 let for_Hour = hours < 10 ? "0"+hours : hours
let for_Minute = minutes < 10 ? "0"+minutes : minutes
let for_Second = seconds < 10 ? "0"+seconds : seconds
    // let's find our table current time element
    startTimeCell.innerHTML = for_Hour +":"+for_Minute+":"+for_Second
   
function updatetime(){
    let leavetime = new Date();
    let Hours = leavetime.getHours();
    let Minutes = leavetime.getMinutes();
    let Seconds = leavetime.getSeconds();

    let formateHours = Hours < 10 ? "0" +Hours : Hours
    let formateSecond = Seconds < 10 ? "0" +Seconds :Seconds
    let formateMinutes = Minutes <10 ?"0" +Minutes :Minutes
    currentTimeCell.innerHTML = formateHours+ ":"+formateMinutes+":"+formateSecond

}
updatetime()
setInterval(updatetime,1000)

     let deletedRow = null;
     // Get all remove buttons
     let removeButtons = document.querySelectorAll('#leavBtn');
    // Attach event listener to each remove button
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function() {
      // Get the parent row of the button
        let row = button.parentNode.parentNode; 
       // Remove the row from the table
      row.parentNode.removeChild(row); 
      deletedRow = row;
       // Display the deleted row in the innerHTML of the container element
 /*   let deletedRowContainer = document.getElementById("deletedRowContainer");
    deletedRowContainer.innerHTML = deletedRow.outerHTML; */
    });
});
leavBtn.addEventListener('click',leave)
function leave() {
    let leavingRow = leavBtn.parentNode.parentNode;

// This will help us to find the owner name by using the leav btn parent parent node  of 
 let leavingOwner = leavingRow.cells[0].textContent;
 console.log('hi ')
 console.log(leavingOwner)
 // we have to crate a function to convert hour to minutes
 function convertToMinutes(time) { 
 let parts = time.split(':')
 let hours = parseInt(parts[0]); 
 let minutes = parseInt(parts[1]); 
 let totalMinutes = hours * 60 + minutes; 
  return  totalMinutes; 
 }
 
 // so to calculate parked time first we will get the start time and current time so we will substract start time from current time
 let startTime = leavingRow.cells[3].textContent;
 let endTime = leavingRow.cells[4].textContent;
 console.log(startTime)
 let start = convertToMinutes(startTime); // Convert start time to minutes 
 console.log(start)
 let end = convertToMinutes(endTime); // Convert current time to minutes 
 console.log(end)
 let duration = end - start; // Calculate duration in minutes 
 console.log(duration)
 let cost = duration; // Calculate cost (1 birr per minute)
 
 // now lets put the value
 let costTable = document.getElementById('deletedRowsTable')
 let costRow = coastTable.insertRow()
 
 let coastedOwner = costRow.insertCell()
 let parkedTime = costRow.insertCell()
 let totalCoast = costRow.insertCell()
 
 // inserting values to Html
 coastedOwner.innerHTML = leavingOwner
 parkedTime.innerHTML = duration < 10 ? '0'+ duration +' minutes' : duration
 totalCoast.innerHTML = cost + ' birr'
 console.log('hello')
}
}
 
