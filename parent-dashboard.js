// parent-dashboard.js
import { db, collection, getDocs } from "./firebase.js";

const studentId = "A001"; // ✅ Replace with dynamic login logic later

async function loadAttendance() {
  const snapshot = await getDocs(collection(db, "attendance"));
  const table = document.querySelector("#attendanceTable tbody");
  table.innerHTML = "";

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.studentId === studentId) {
      const row = `<tr><td>${data.date}</td><td>${data.status}</td></tr>`;
      table.insertAdjacentHTML("beforeend", row);
    }
  });
}

loadAttendance();
