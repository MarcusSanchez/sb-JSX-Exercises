// Part 3

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

function App() {

  const people = [
    { name: 'John Doe', age: 30, hobbies: ['running', 'reading', 'writing'] },
    { name: 'Jane Doe', age: 22, hobbies: ['painting', 'drawing', 'singing'] },
    { name: 'Marcus Sanchez', age: 20, hobbies: ['programming', 'skateboarding', 'basketball'] }
  ]

  return (
    <>
      {people.map((person, index) =>
        <Person
          key={index}
          name={person.name}
          age={person.age}
          hobbies={person.hobbies}
        />
      )}
    </>
  );
}

function Person({ name, age, hobbies }) {
  return (
    <div>
      <h2>{
        name.length > 6
          ? name.substring(0, 6)
          : name
      }</h2>
      <h3>{
        age > 18
          ? "Please go vote!"
          : "You must be 18."
      }</h3>
      <ul>
        {hobbies.map((hobby, index) =>
          <li key={index}>{hobby}</li>
        )}
      </ul>
    </div>
  )
}

