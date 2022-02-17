import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello ITAP",
};

const Index = () => {
  const [name, setName] = useState("");
  // const[people, setPeople] = useState(data)
  // const[modal, setModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newName = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_DATA", payload: newName });
      setName("");
    } else {
      dispatch({ type: "NO_INPUT_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAl" });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(name){
  //     setModal(true)
  //     setPeople([...people, {id: new Date().getTime().toString(), name}])
  //     setName('')
  //   }else{
  //     setModal(false)
  //   }
  // }

  return (
    <React.Fragment>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add todo</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            {person.name}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              rmv
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Index;
