function App(props: any) {
  return (
    <div className="App">
      <p>Hello World from WebApp 1 -&gt; External text : {props.textValue ? props.textValue : "-"}</p>
      <button onClick={() => props.setTextValue("Hello")}>Hello</button>
      <button onClick={() => props.setTextValue("World")}>World</button>
    </div>
  );
}

export default App;
