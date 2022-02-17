export const reducer = (state, action) => {
  // console.log(state, action);
  if (action.type === "ADD_DATA") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "Finished ITAP Interview, best of luck",
    };
  }

  if (action.type === "NO_INPUT_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a request",
    };
  }

  if (action.type === "CLOSE_MODAl") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const remvPerson = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      isModalOpen: false,
      people: remvPerson,
    };
  }

  return state;
  throw new Error("action type not found");
};
