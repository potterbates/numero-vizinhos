//inputNumber
//mensagem
//calcular()

const num = 1

function calcular() {
    const inputNumber = document.getElementById("inputNumber").value;

    const vizinhoMenor = (inputNumber - num);
    const vizinhoMaior = inputNumber / num + num;

    const mensagem = `Número: ${inputNumber}`
    document.getElementById("mensagem").textContent = mensagem;

    const vizinhos = document.getElementById("vizinhos").textContent = `Vizinhos: ${vizinhoMenor} e ${vizinhoMaior}.`;
}