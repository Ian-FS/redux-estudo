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
// Renderize na tela o nome, email, tempo restante e o total de aulas completas Completo
// Configure a DevTools
//______________________________________________________________________________________________________

//Initial State
export const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

//Constantes
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

// Action Creators
export const incrementarTempo = () => ({
  type: INCREMENTAR_TEMPO,
});
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

//Reducers
const alunoReducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes = state.diasRestantes + 1;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes = state.diasRestantes - 1;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
  }
}, aluno);

export default alunoReducer;
