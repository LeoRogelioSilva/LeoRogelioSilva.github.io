const getDifference = () => {
  const clock = document.getElementsByClassName("clock")[0];
  const date = new Date("2023-11-08T20:00:00.000Z");
  const today = new Date();

  let diffYears = today.getFullYear() - date.getFullYear();
  let diffMonths = today.getMonth() - date.getMonth();
  let diffDays = today.getDate() - date.getDate();
  let diffHours = today.getHours() - date.getHours();

  // Ajustar para casos em que o mês ou dia são negativos
  if (diffHours < 0) {
    diffHours += 24;
    diffDays -= 1;
  }
  if (diffDays < 0) {
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Último dia do mês anterior
    diffDays += previousMonth.getDate();
    diffMonths -= 1;
  }
  if (diffMonths < 0) {
    diffMonths += 12;
    diffYears -= 1;
  }

  clock.innerHTML = `há ${diffYears} ano(s), ${diffMonths} mês(es), ${diffDays} dia(s), ${diffHours} hora(s)`;
};

setInterval(() => {
  getDifference();
}, 1000);
