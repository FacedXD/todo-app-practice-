const API_URL = "http://localhost:5000/tasks";

// Function para kunin ang tasks mula sa database
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  document.getElementById("taskList").innerHTML = tasks
    .map(
      (task) =>
        `<li>${task.text} <button onclick="deleteTask('${task._id}')">❌</button></li>`
    )
    .join("");
}

// Function para magdagdag ng task
async function addTask() {
  const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim()) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskInput.value }),
    });
    taskInput.value = "";
    fetchTasks();
  }
}

// Function para mag-delete ng task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

// I-load agad ang tasks kapag nagbukas ang page
fetchTasks();
