const PASSWORD = "knurlsiscool";
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === PASSWORD) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    document.getElementById("login-error").innerText = "Incorrect password!";
  }
}

let videos = [];

function addVideo() {
  const title = document.getElementById("title").value;
  const status = document.getElementById("status").value;
  const channel = document.getElementById("channel").value;

  if (title) {
    videos.push({ title, status, channel });
    displayVideos();
    document.getElementById("title").value = "";
  }
}

function displayVideos() {
  const list = document.getElementById("video-list");
  list.innerHTML = "";
  videos.forEach((v, index) => {
    const div = document.createElement("div");
    div.className = "video-item";
    div.innerText = `[${v.channel}] ${v.title} - ${v.status}`;
    list.appendChild(div);
  });
}
