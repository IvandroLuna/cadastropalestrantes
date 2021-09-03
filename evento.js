let idadeParticipante, listaParticipantes;
let dataAtual = new Date();


let cadastroDiaEvento = 02;

let cadastroMesEvento = 09;

let cadastroAnoEvento = 2021;

//--------------------------------------------------------------------------------------

if(cadastroAnoEvento > dataAtual){
    console.log("Cadastro realizado com sucesso!");
    //console.log("ano ok");
} else if((cadastroMesEvento > (dataAtual.getMonth() + 1)) & (cadastroAnoEvento >= dataAtual)){
    console.log("Cadastro realizado com sucesso!");
    //console.log("mes ok");
} else if((cadastroDiaEvento > dataAtual.getDate()) & (cadastroMesEvento >= (dataAtual.getMonth() + 1)) & (cadastroAnoEvento >= dataAtual)){
    console.log("Cadastro realizado com sucesso!");
    //console.log("dia ok");
} else {
    console.log("A data informada deve ser posterior a data inicial!");
}

//--------------------------------------------------------------------------------------
//Registro de Participantes e verificação da idade


listaParticipantes = ["Francisco", "Joao", "Maria", "Ivandro"];

//console.log("Digite a idade do participante: ");
idadeParticipante = [15, 20, 34, 18];

let participantesCadastrados = new Array(); 

if(listaParticipantes.length < 100){
    for (let i = 0; i < listaParticipantes.length; i++) {
        if((idadeParticipante[i] < 18)){
            console.log("O participante não pode ter menos que 18 anos!")
            
        } else{
            console.log("O participante " + listaParticipantes[i] + " foi cadastrado com sucesso!");
            participantesCadastrados.push(listaParticipantes[i]); 
        }
    }  
} else {
    console.log(" Não é possível cadastrar mais nenhum participante!");
}

//--------------------------------------------------------------------------------------
//Listar participantes cadastrados

console.log("\nParticipantes cadastrados:");

for (let i = 0; i < participantesCadastrados.length; i++) {
    console.log("Participante "+ (i+1) + ": " + participantesCadastrados[i]);

}