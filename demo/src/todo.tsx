import React from "react";
import { xinProxy } from "tosijs";
import { useTosi } from "react-tosijs";

type Reminder = {
  id: number;
  reminder: string;
};

declare global {
  var app: any;
}

const { app } = xinProxy({
  app: {
    name: "Reminders",
    newItem: {
      id: 1,
      reminder: "",
    } as Reminder,
    todos: [] as Reminder[],
    addItem(evt: Event) {
      evt.preventDefault();
      if (!app.newItem.reminder) return;
      app.todos.push({
        ...app.newItem,
      });
      app.newItem.id++;
      app.newItem.reminder = "";
    },
  },
});

window.app = app;

const List = () => {
  const [todos] = useTosi(app.todos);
  return (
    <div className="List">
      {todos.map((item: Reminder) => (
        <div className="ListItem" key={item.id}>
          <span className="elastic">{item.reminder}</span>
          <button
            title="delete"
            onClick={() => {
              todos.splice(todos.indexOf(item), 1);
            }}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

const Editor = () => {
  const [reminder, setReminder] = useTosi("app.newItem.reminder");
  const [id] = useTosi("app.newItem.id");
  return (
    <form className="Editor" onSubmit={app.addItem}>
      <input
        className="elastic"
        placeholder="enter a reminder"
        value={reminder}
        onInput={(event) =>
          setReminder((event.target as HTMLInputElement).value)
        }
      />
      <button disabled={!reminder}>Add Item #{id}</button>
    </form>
  );
};

const App = () => {
  const [name] = useTosi("app.name");
  return (
    <div className="App">
      <h1>{name}</h1>
      <List />
      <Editor />
    </div>
  );
};

export default App;
