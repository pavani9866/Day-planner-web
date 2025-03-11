document.addEventListener("DOMContentLoaded", function () {
    populateTimeOptions("from-hour", "from-minute");
    populateTimeOptions("to-hour", "to-minute");
});

function populateTimeOptions(hourId, minuteId) {
    const hourSelect = document.getElementById(hourId);
    const minuteSelect = document.getElementById(minuteId);

    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        hourSelect.appendChild(option);
    }

    for (let i = 0; i <= 55; i += 5) {
        const option = document.createElement("option");
        option.value = i < 10 ? "0" + i : i;
        option.textContent = i < 10 ? "0" + i : i;
        minuteSelect.appendChild(option);
    }
}

function addTask() {
    const task = document.getElementById("task").value.trim();
    const date = document.getElementById("date").value;
    const priority = document.getElementById("priority").value;
    const from = `${document.getElementById("from-hour").value}:${document.getElementById("from-minute").value} ${document.getElementById("from-period").value}`;
    const to = `${document.getElementById("to-hour").value}:${document.getElementById("to-minute").value} ${document.getElementById("to-period").value}`;

    if (task === "" || date === "") {
        alert("Please fill in all fields!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task, date, priority, from, to });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    alert("Task Added!");
    resetFields();
}

function resetFields() {
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("priority").selectedIndex = 0;
    document.getElementById("from-hour").selectedIndex = 0;
    document.getElementById("from-minute").selectedIndex = 0;
    document.getElementById("to-hour").selectedIndex = 0;
    document.getElementById("to-minute").selectedIndex = 0;
}

function viewTasks() {
    window.location.href = "tasks.html";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

function changeTheme() {
    const theme = document.getElementById("theme").value;
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#f4f4f4";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
}
