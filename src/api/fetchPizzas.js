import axios from 'axios';
import { setPizzas } from '../redux/actions/pizzaAction';

// export const fetchPizzas = () => (dispatch) => {
//   dispatch({
//     type: 'SET_LOADED',
//     payload: false,
//   });
//   axios.get('http://localhost:3000/db.json').then(({ data }) => {
//     dispatch(setPizzas(data.pizzas));
//   });
// };

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `http://localhost:3001/pizzas/?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};