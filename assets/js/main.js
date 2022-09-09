import {
    getHellfireClubSubscriptions,
    subscribeToHellfireClub
} from './firebase/hellfire-club.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

// debugger

// FUNÇÃO DO BOTÃO PARA CAPTURAR OS DADOS DO FORMULÁRIO
btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    // SALVAR NO BANCO DE DADOS;
    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    alert(`PARABÉNS, VOCÊ FOI INSCRITO COM SUCESSO:  ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
});

async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()