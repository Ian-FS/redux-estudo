//Initial State
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

//Contantes
const COMPLETAR_AULA = 'aula/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aula/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aula/RESETAR_CURSO';

//Action Creators
export const completarAula = (id) => ({
  type: COMPLETAR_AULA,
  payload: id,
});
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

//Reducer
const aulasReducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      state.map((aula) => {
        if (aula.id === action.payload) return (aula.completa = true);
        else return aula;
      });
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEach((aula) => (aula.completa = false));
      break;
  }
}, aulas);

export default aulasReducer;
