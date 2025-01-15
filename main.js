const students = [
    "Ануар", 
    "Бенайа", 
    "Ратмир К", 
    "Ратмир Л", 
    "Илима", 
    "Тая", 
    "Егор", 
    "Давид", 
    "Даана", 
    "Зохан"
  ];
  
  function randomizeOrder() {
    const shuffledStudents = [...students];
    for (let i = shuffledStudents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledStudents[i], shuffledStudents[j]] = [shuffledStudents[j], shuffledStudents[i]];
    }
  
    const tableBody = document.querySelector("#resultTable tbody");
    tableBody.innerHTML = "";
  

    shuffledStudents.forEach((name, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${name}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  