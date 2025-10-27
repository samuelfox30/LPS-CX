document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-envio");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = form.querySelector('input[placeholder="Nome completo"]');
    const emailInput = form.querySelector('input[placeholder="E-mail"]');
    const telefoneInput = form.querySelector('input[placeholder="Telefone"]');

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();

    // Verificação manual dos campos
    if (!nome || !email || !telefone) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const dados = { nome, email, telefone };

    fetch("https://webhook.connetx.com.br/webhook/36383d0e-7da2-48e1-be35-3bf937a2327f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })
      .then(res => {
        if (res.ok) {
          document.getElementById("mensagem-envio").classList.remove("d-none");
          form.reset();
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      })
      .catch(() => alert("Erro de conexão."));
  });
});