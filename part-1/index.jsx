// Part 1

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Bob" />
    </div>
  );
}


function FirstComponent() {
  return <h1>My very first component.</h1>;
}

function NamedComponent({ name }) {
  return <p>My name is {name}.</p>;
}