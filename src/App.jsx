import { useState } from "react";

import "./App.css"

function App() {
  let [total, setTotal] = useState([]);
  let [formstate, setFormstate] = useState({
    title: "",
    complete: false,
    assignto: "",
  });

  function handlechange(event) {
    let value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    let newobj = {
      ...formstate,
      [event.target.name]: value,
    };

    setFormstate(newobj);
  }

  function handlesubmit(event) {
    event.preventDefault();
    let updated = [...total, formstate];

    setTotal(updated);

    setFormstate({ title: "", complete: false, assignto: "" });
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="add title"
          name="title"
          value={formstate.title}
          onChange={handlechange}
        />

        <div>
          <label>
            Status of the task
            <input
              type="checkbox"
              name="complete"
              checked={formstate.complete}
              onChange={handlechange}
            />
          </label>
        </div>

        <select
          name="assignto"
          value={formstate.assignto}
          onChange={handlechange}
        >
          <option value="">Assign task to</option>
          <option value="Suraj">Suraj</option>
          <option value="Aman">Aman</option>
          <option value="Ritesh">Ritesh</option>
        </select>

        <button>Add task</button>

        <div>
          {total.map((ele, index) => {
            return (
              <div key={index} className="smalldiv">
                <h2>Title is : {ele.title}</h2>
                <h2>{ele.complete ? "Complete":"Pending"}</h2>
                <h2>Assign To  : {ele.assignto}</h2>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
}

export default App;
