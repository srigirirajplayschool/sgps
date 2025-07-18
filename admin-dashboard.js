// admin-dashboard.js
import { db, collection, addDoc } from "./firebase.js";

document.getElementById("attendanceForm").addEventListener("submit", async e => {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;

  await addDoc(collection(db, "attendance"), {
    studentId,
    name,
    date,
    status
  });

  alert("Attendance recorded successfully!");
  e.target.reset();
});
