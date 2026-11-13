
const caixas = document.querySelectorAll(".caixa");
const botoesPrincipais = document.querySelectorAll(".btn-principal");
const botoesSecundarios = document.querySelectorAll(".btn-secundario");


caixas.forEach(caixa => {
    caixa.addEventListener("click", () => {
        caixa.style.border = "2px solid green";
    });
});


botoesSecundarios.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.stopPropagation(); 
        caixas.forEach(caixa => {
            caixa.style.border = "1px solid #ccc"; 
        });
    });
});


botoesPrincipais.forEach(botao => {
    botao.addEventListener("click", (e) => {
        e.stopPropagation(); 
        caixas.forEach(caixa => {
            caixa.style.border = "2px solid blue";
        });
    });
});