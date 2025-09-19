async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  try {
    const response = await fetch("https://halobot-ai9-ueaf.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatBox.innerHTML += `<p><strong>Halobot:</strong> ${data.reply}</p>`;
  } catch (error) {
    chatBox.innerHTML += `<p style="color:red;"><strong>Error:</strong> Could not connect to server.</p>`;
  }
}
