let listaAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNome = document.getElementById("amigo");
const resultado = document.getElementById("resultado");


//Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
    if (amigo == ""){
        alert ("Digite um nome válido");
        return;}
    listaAmigos.push(amigo);
    atualizarLista();
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
    exibirTextonaTela('ul', listaAmigos)
    console.log (listaAmigos);
    limparCampo();


}
//Função para limpar o campo depois de adicionar um amigo
function limparCampo(){
    amigo = document.querySelector("input");
    amigo.value = "";
}
// Função para atualizar a lista exibida na tela
function atualizarLista() {
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
    listaAmigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    })
    }
//Função para exibir textos na tela
function exibirTextonaTela(tag, lista){
    let campo = document.querySelector(tag);
    campo.innerHTML = lista;
}
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.//

//Função sortear amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;}

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;    
}