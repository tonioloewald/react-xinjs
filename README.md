# react-xinjs

[github](https://github.com/tonioloewald/react-xinjs#readme) | [npm](https://www.npmjs.com/package/react-xinjs) | [xinjs](https://xinjs.net)

Incredibly simple, powerful, and efficient state management for React…

`useXin` leverages [React hooks](https://legacy.reactjs.org/docs/hooks-intro.html) to
make managing application state incredibly simple. No more passing data down through
the virtual DOM hierarchy, and needing to reroute data or write reducers.

[sandbox example](https://codesandbox.io/s/xinjs-react-reminders-demo-v0-4-2-l46k52?file=/src/App.tsx)

> This library breaks out the `useXin` function from [xinjs](https://xinjs.net)
> so that `xinjs` has no dependence on react.

<div style="text-align: center">
	<a href="https://twitter.com/dan_abramov/status/1191487232038883332?s=20&t=SNcVBTK1oj45NWI29RO1Dw">
		<img alt="Dan Abramov dissing Redux on Twitter" style="max-width: 80%" src="docs/dan-redux-tweet.png">
	</a>
</div>

`useXin` allows you to use `xin` to manage state in [ReactJS](https://reactjs.org) apps.

- work with pure components everywhere (use `useXin` the way you'd use `useState`)
- cleanly separate logic from presentation
- avoid code and performance "tax" of passing complex state through DOM hierarchies
- cleanly integrate react and non-react code without writing and maintaining wrappers

## useXin in two minutes

Pass any object to `xin`, then access it exactly like you would via `useState`
except using `useXin('path.to.value')`. E.g.

```
import { xinProxy, useXin } from 'xinjs'

const clock = xinProxy({ clock: {
	time: new Date().toLocaleTimeString()
} })

setInterval(() => {
	clock.time = new Date.toLocaleTimeString()
}, 1000)

const Clock = () => {
	const [time] = useXin('clock.time')
	return <div>{clock.time}</div>
}
```

Note that `useXin` returns `[value, setValue]` just as `useState` does 
(and if you wanted to write a more complex self-contained <Clock> that 
sets up and tears down setInterval then nothing is stopping you except 
wanting to write less, simpler code that runs faster), but in
this case the state is being updated *outside* of React and it *just works*.

## Todo List Example

Here's the good old [React](https://reactjs.org) "to do list" example rewritten with `xin` 
and only pure components.

- Fewer lines of code, 
- Clean separation between logic and presentation, 
- Better behavior, *and* 
- Cleaner screen redraws (thanks to pure components)

Better, faster, cheaper. You *can* have all three.

```
import { xinProxy, useXin } from 'xin-react'

const { app } = xinProxy({ app: {
  itemText: '',
  todos: [],
  addItem(event) {
    event.preventDefault() // forms reload the page by default!
    if(!app.itemText) return
    app.todos.push({
      id: crypto.randomUUID(),
      text: app.itemText  
    })
    app.itemText = ''
  }
} })

const Editor = () => {
  const [itemText, setItemText] = useXin('app.itemText')
  return <form onSubmit={app.addItem}>
    <input value={itemText} onInput={event => setItemText(event.target.value)} />
    <button disabled={!itemText} onClick={app.addItem}>Add Item</button>
  </form>
}

const List = () => {
  const [todos] = useXin('app.todos')
  return <ul>
    { todos.map(item => <li key={item.id}>{item.text}</li>) }
  </ul>
}

export defaul TodoApp = () => <div className="TodoApp" role="main">
  <h1>To Do</h1>
  <List />
  <Editor />
</div>

root.render(<TodoTapp />)
```
