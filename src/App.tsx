import Component from "./starter/02-props";
function App() {
  return (
    <main>
      //02-props
      <Component name='peter'id={123}>
        <h2>Hello </h2>
      </Component>
      <Component name='peter'id={123}></Component>
    </main>
  );
}

export default App;
