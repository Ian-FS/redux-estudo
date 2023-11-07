// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo
// Crie as seguintes ações:
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const aulas = [
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

const incrementarTempo = () => ({
  type: 'aluno/INCREMENTAR_TEMPO',
});
const reduzirTempo = () => ({ type: 'aluno/REDUZIR_TEMPO' });
const modificarEmail = (email) => ({
  type: 'aluno/MODIFICAR_EMAIL',
  payload: email,
});
const completarAula = (id) => ({ type: id });
const completarCurso = () => ({ type: 'aluno/COMPLETAR_CURSO' });
const resetarCurso = () => ({ type: 'aluno/RESETAR  _CURSO' });

const alunoReducer = (state = aluno, action) => {
  switch (action.type) {
    case 'aluno/INCREMENTAR_TEMPO':
      return +1;
    case 'aluno/REDUZIR_TEMPO':
      return -1;
    case 'aluno/MODIFICAR_EMAIL':
      return action.payload;
    default:
      return state;
  }
};
