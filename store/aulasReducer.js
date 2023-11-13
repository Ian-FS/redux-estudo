//Contantes
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

//Action Creators
export const completarAula = (id) => ({
  type: 'aula/COMPLETAR_AULA',
  payload: id,
});
export const completarCurso = () => ({ type: 'aula/COMPLETAR_CURSO' });
export const resetarCurso = () => ({ type: 'aula/RESETAR_CURSO' });

//Reducer
const aulasReducer = immer.produce((state, action) => {
  switch (action.type) {
    case 'aula/COMPLETAR_AULA':
      state.map((aula) => {
        if (aula.id === action.payload) return (aula.completa = true);
        else return aula;
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

export default aulasReducer;
