import { DICES } from "../../data/dices";
import { SELECT_DICE, FILTERED_DICE } from "../actions/dice.action";

const initialState = {
  dices: DICES,
  filteredDice: [],
  selected: null,
};

const DicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DICE:
      return {
        ...state,
        selected: state.dices.find((dice) => dice.id === action.diceID),
      };
    case FILTERED_DICE:
      return {
        ...state,
        filteredDice: state.dices.filter(
          (dice) => dice.category === action.categoryID
        ),
      };
    default:
      return state;
  }
};

export default DicesReducer;
