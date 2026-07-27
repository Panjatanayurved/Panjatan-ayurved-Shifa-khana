javascript self.addEventListener( "install", (event) => { console.log("Service Worker Installed"); }); self.addEventListener("fetch", (event) => { // Requests will pass through normally,
