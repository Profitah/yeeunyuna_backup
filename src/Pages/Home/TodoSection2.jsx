import React, { useState, useEffect } from "react";
import { IoTrashSharp } from "react-icons/io5";
import "../../Style/Home/Todo.css";

const TodoSection2 = ({ pageId }) => {
  const [routineList, setRoutineList] = useState([]);

  useEffect(() => {
    const storedRoutineList = localStorage.getItem(`routineList_${pageId}`);
    if (storedRoutineList) {
      setRoutineList(JSON.parse(storedRoutineList));
    }
  }, [pageId]);

  useEffect(() => {
    localStorage.setItem(`routineList_${pageId}`, JSON.stringify(routineList));
  }, [routineList, pageId]);

  const addRoutine = () => {
    const newRoutine = { name: "", completed: false };
    setRoutineList([...routineList, newRoutine]);
  };

  const deleteRoutine = (index) => {
    const newList = [...routineList];
    newList.splice(index, 1);
    setRoutineList(newList);
  };

  const updateRoutineName = (index, newName) => {
    const newList = [...routineList];
    newList[index] = {
      ...newList[index],
      name: newName,
    };
    setRoutineList(newList);
  };

  const toggleComplete = (index) => {
    const newList = [...routineList];
    newList[index] = {
      ...newList[index],
      completed: !newList[index].completed,
    };
    setRoutineList(newList);
  };

  const renderRoutineList = () => {
    return routineList.map((routine, index) => (
      <div
        className={`MyRou ${routine.completed ? "completed" : ""}`}
        key={index}
      >
        <div className="checkbox-container">
          <div className="Check1">
          <input
            type="checkbox"
            checked={routine.completed}
            onChange={() => toggleComplete(index)}
            id={`check${index}`}
            disabled={routine.name.trim() === ""}
          />
            <label htmlFor={`check${index}`}></label>
          </div>
          <input
            type="text"
            value={routine.name}
            onChange={(e) => updateRoutineName(index, e.target.value)}
            style={{
              textDecoration: routine.completed ? "line-through" : "none",
              textDecorationThickness: routine.completed ? "1px" : "initial"
            }}
            placeholder="할 일을 입력하세요"
            className="TodoSection2Routine"
          />
          <button onClick={() => deleteRoutine(index)} className="TodoDelete">
            <IoTrashSharp size={20} />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="TodoSection2Wrap">
      <div id="RouList">
        {renderRoutineList()}
        <button className="TodoAddRoutineBtn" onClick={addRoutine}>
          + 루틴 추가하기
        </button>
      </div>
    </div>
  );
};

export default TodoSection2;
