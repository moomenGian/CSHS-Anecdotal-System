fetch("http://localhost:3000/students")
  .then((response) => response.json())
  .then((data) => {
    displayDatas(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function fetchViolations() {
  try {
    const response = await fetch("http://localhost:3000/violations");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR", error);
  }
}

function displayDatas(studentData) {
  studentData.forEach((student) => {
    let tableHTML = `
            <tr>
                <th>${student.Section}</th>
                <th>${student.StudentName}</th>
                <th style="padding: 0"> <button class="recordBtn" data-student-id="${student.StudentID}">View Records</button> </th>
            </tr>
        `;
        
    document.querySelector(".tableElement").innerHTML += tableHTML;
    addButtonListeners()
  });
}

function addButtonListeners(){
    document.querySelectorAll(".recordBtn").forEach((button) => {
        button.addEventListener("click", () => {
            const studentId = button.dataset.studentId;

            fetchViolations().then((data) => {
                data.forEach(item =>{
                    console.log(item);
                })
            });
        });
    });
}


