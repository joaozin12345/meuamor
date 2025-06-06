const tempoEl = document.getElementById("tempo");

// 🗓️ Data de início do relacionamento:
const dataInicio = new Date("2024-09-12T00:00:00");

function atualizarTempo() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / 1000 / 60) % 60;
  const horas = Math.floor(diff / 1000 / 60 / 60) % 24;
  const dias = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
  const meses = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);

  tempoEl.innerText = `${meses} mês(es), ${dias} dia(s), ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
