// Criar o botao/botoes, (X)
// usar DOM com addEventListener para os botoes (X)
// Math.random() para rolar os botoes 1000 vezes (X)
// criar array para guardar a soma dos dados (X)
// usar appendChild para mostrar os resultados na tela ()
// os resultados precisam ser escritos, ()
// && em gráfico utilizando px para a altura ou largura ()
// implementação mobile first && responsiva!!! ()

const destination = document.getElementsByClassName("resultado");
const lista = document.getElementsByTagName("li");
const dice = document.getElementById('diceRoll');
dice.addEventListener('click', () => {
    let diceRollArray = [[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]];
    for(let i = 0; i < 1000; i++) {

        let dice1 = Math.round(Math.random() * (6 - 1) + 1);

        let dice2 = Math.round(Math.random() * (6 - 1) + 1);

        console.log(dice1, dice2)

        let result = dice1 + dice2;

        for(let j = 0; j < diceRollArray.length; j++) {
            let internalDice = diceRollArray[j];

            for(let z = 0; z < internalDice.length; z++) {
                if(result === diceRollArray[j][0]) {
                    diceRollArray[j][1]++;
                }
            }
        }
    }

    //for de li que criei direto no html
    for(let i = 0; i < lista.length; i++) {
        // template string
        lista[i].innerText = `${diceRollArray[i][0]} : ${diceRollArray[i][1]}`;
        lista[i].style.height = diceRollArray[i][1] + 40 + "px";
        lista[i].style.width = "50px"
        lista[i].style.border = "1px solid #000";
        lista[i].style.backgroundColor = "blue";
    }
})