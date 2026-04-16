const dbURL = "https://graduacao-fatima-default-rtdb.firebaseio.com/mensagens.json";

function enviarMensagem() {
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  fetch(dbURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome || "Anónimo",
      mensagem: mensagem,
      data: new Date().toISOString()
    })
  })
  .then(() => {
    document.getElementById("status").innerText = "Mensagem enviada 💛";
    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
  })
  .catch(() => {
    document.getElementById("status").innerText = "Erro ao enviar.";
  });
}