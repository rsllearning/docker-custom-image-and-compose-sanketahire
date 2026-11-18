// CloudPulse Web Application Script
document.addEventListener("DOMContentLoaded", () => {
  const versionBadge = document.getElementById("versionBadge");
  const systemTime = document.getElementById("systemTime");
  const userAgent = document.getElementById("userAgent");
  const uptime = document.getElementById("uptime");
  const refreshBtn = document.getElementById("refreshBtn");

  // Display user agent
  if (userAgent) {
    userAgent.textContent = navigator.userAgent;
  }

  // Live system time clock
  function updateClock() {
    if (systemTime) {
      const now = new Date();
      systemTime.textContent = now.toTimeString().split(" ")[0];
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Live session uptime tracker
  let seconds = 0;
  setInterval(() => {
    seconds++;
    if (uptime) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      uptime.textContent = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    }
  }, 1000);

  // Refresh diagnostics button
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      updateClock();
      refreshBtn.textContent = "Refreshed!";
      setTimeout(() => {
        refreshBtn.textContent = "Refresh Data";
      }, 1000);
    });
  }

  console.log(`CloudPulse Web App loaded successfully. Current Version: ${versionBadge ? versionBadge.textContent : "v1.0.0"}`);
});
