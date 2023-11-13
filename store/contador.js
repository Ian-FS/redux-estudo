// Usando o Redux (pode usar Immer ou Não). Completo
// Crie uma store contendo os estados iniciais abaixo. Completo
// Crie as seguintes ações: Completo
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso. Completo
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso. Completo
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário. Completo
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado. Completo
// aulas/COMPLETAR_CURSO, completa todas as aulas. Completo
// aulas/RESETAR_CURSO, reseta todas as aulas completas. Completo
// Crie constantes e action creators para as ações. Completo
// Crie um reducer para aluno e um para aulas. Completo
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools
//______________________________________________________________________________________________________

//Contantes
export const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

export const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

// Action Creators
const incrementarTempo = () => ({
  type: 'aluno/INCREMENTAR_TEMPO',
});
const reduzirTempo = () => ({ type: 'aluno/REDUZIR_TEMPO' });
const modificarEmail = (email) => ({
  type: 'aluno/MODIFICAR_EMAIL',
  payload: email,
});
const completarAula = (id) => ({ type: 'aula/COMPLETAR_AULA', payload: id });
const completarCurso = () => ({ type: 'aula/COMPLETAR_CURSO' });
const resetarCurso = () => ({ type: 'aula/RESETAR_CURSO' });

//Redutores
const alunoReducer = immer.produce((state, action) => {
  switch (action.type) {
    case 'aluno/INCREMENTAR_TEMPO':
      state.diasRestantes = state.diasRestantes + 1;
      break;
    case 'aluno/REDUZIR_TEMPO':
      state.diasRestantes = state.diasRestantes - 1;
      break;
    case 'aluno/MODIFICAR_EMAIL':
      state.email = action.payload;
      break;
    default:
      return state;
  }
}, aluno);

const aulasReducer = immer.produce((state, action) => {
  switch (action.type) {
    case 'aula/COMPLETAR_AULA':
      state.map((aula) => {
        if (aula.id === action.payload) aula.completa = true;
        else aula;
      });
      break;
    case 'aula/COMPLETAR_CURSO':
      state.map((aula) => (aula.completa = true));
      break;
    case 'aula/RESETAR_CURSO':
      state.map((aula) => (aula.completa = false));
      break;
    default:
      return state;
  }
}, aulas);

const reducers = Redux.combineReducers({ alunoReducer, aulasReducer });
export const store = Redux.createStore(reducers);

function render() {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const diasRestantes = document.getElementById('diasRestantes');
  const totalAulasCompletas = document.getElementById('totalAulasCompletas');

  nome.innerText = store.getState().alunoReducer.nome;
  email.innerText = store.getState().alunoReducer.email;
  diasRestantes.innerText = store.getState().alunoReducer.diasRestantes;
  totalAulasCompletas.innerText = store
    .getState()
    .aulasReducer.filter((aula) => aula.completa === true).length;
}

store.subscribe(render);

// store.dispatch(reduzirTempo());
store.dispatch(modificarEmail('andre@hotmail.com'));
// store.dispatch(completarCurso());
console.log(store.getState());
