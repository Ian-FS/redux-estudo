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

//Contantes
export const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

// Action Creators
export const incrementarTempo = () => ({
  type: 'aluno/INCREMENTAR_TEMPO',
});
export const reduzirTempo = () => ({ type: 'aluno/REDUZIR_TEMPO' });
export const modificarEmail = (email) => ({
  type: 'aluno/MODIFICAR_EMAIL',
  payload: email,
});

//Reducers
const alunosReducer = immer.produce((state, action) => {
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

export default alunosReducer;
