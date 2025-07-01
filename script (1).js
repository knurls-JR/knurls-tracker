const PASSWORD = "knurlsiscool";

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
    displayVideos();
  } else {
    document.getElementById("login-error").innerText = "Incorrect password!";
  }
}

let videos = JSON.parse(localStorage.getItem("videos")) || [{"title": "Video 1", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 2", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 3", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 4", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 5", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 6", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 7", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 8", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 9", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 10", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 11", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 12", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 13", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 14", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 15", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 16", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 17", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 18", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 19", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 20", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 21", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 22", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 23", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 24", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 25", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 26", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 27", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 28", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 29", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 30", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 31", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 32", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 33", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 34", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 35", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 36", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 37", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 38", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 39", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 40", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 41", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 42", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 43", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 44", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 45", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 46", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 47", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 48", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 49", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 50", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 51", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 52", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 53", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 54", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 55", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 56", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 57", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 58", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 59", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 60", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 61", "status": "In Progress", "channel": "Knurls"}, {"title": "Video 62", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 63", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 64", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 65", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 66", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 67", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 68", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 69", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 70", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 71", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 72", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 73", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 74", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 75", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 76", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 77", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 78", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 79", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 80", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 81", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 82", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 83", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 84", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 85", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 86", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 87", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 88", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 89", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 90", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 91", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 92", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 93", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 94", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 95", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 96", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 97", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 98", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 99", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 100", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 101", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 102", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 103", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 104", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 105", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 106", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 107", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 108", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 109", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 110", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 111", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 112", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 113", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 114", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 115", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 116", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 117", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 118", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 119", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 120", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 121", "status": "In Progress", "channel": "knurls'"}, {"title": "Video 122", "status": "In Progress", "channel": "knurls'"}];

function saveVideos() {
  localStorage.setItem("videos", JSON.stringify(videos));
}

function addVideo() {
  const title = document.getElementById("title").value;
  const status = document.getElementById("status").value;
  const channel = document.getElementById("channel").value;
  if (title) {
    videos.push({ title, status, channel });
    saveVideos();
    displayVideos();
    document.getElementById("title").value = "";
  }
}

function deleteVideo(index) {
  videos.splice(index, 1);
  saveVideos();
  displayVideos();
}

function editVideo(index) {
  const newTitle = prompt("New title:", videos[index].title);
  const newStatus = prompt("New status (Planned, In Progress, Completed):", videos[index].status);
  if (newTitle) videos[index].title = newTitle;
  if (newStatus) videos[index].status = newStatus;
  saveVideos();
  displayVideos();
}

function displayVideos() {
  const list = document.getElementById("video-list");
  const search = document.getElementById("search").value.toLowerCase();
  list.innerHTML = "";
  videos
    .filter(v => v.title.toLowerCase().includes(search))
    .sort((a, b) => a.channel.localeCompare(b.channel) || a.title.localeCompare(b.title))
    .forEach((v, index) => {
      const div = document.createElement("div");
      div.className = "video-item";
      div.innerText = `[${v.channel}] ${v.title} – ${v.status}`;
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.className = "edit";
      editBtn.onclick = () => editVideo(index);
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.onclick = () => deleteVideo(index);
      div.appendChild(editBtn);
      div.appendChild(deleteBtn);
      list.appendChild(div);
    });
}

saveVideos();
displayVideos();
