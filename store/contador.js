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
//______________________________________________________________________________________________________

//Contantes
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
const alunoReducer = (state = aluno, action) => {
  switch (action.type) {
    case 'aluno/INCREMENTAR_TEMPO':
      return { ...state, diasRestantes: state.diasRestantes + 1 };
    case 'aluno/REDUZIR_TEMPO':
      return { ...state, diasRestantes: state.diasRestantes - 1 };
    case 'aluno/MODIFICAR_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const aulasReducer = (state = aulas, action) => {
  switch (action.type) {
    case 'aula/COMPLETAR_AULA':
      return state.map((aula) => {
        if (aula.id === action.payload) return { ...aula, completa: true };
        else return { ...aula };
      });
    case 'aula/COMPLETAR_CURSO':
      return state.map((aula) => ({ ...aula, completa: true }));
    case 'aula/RESETAR_CURSO':
      return state.map((aula) => ({ ...aula, completa: false }));
    default:
      return state;
  }
};
