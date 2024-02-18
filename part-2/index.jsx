// Part 2

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

function App() {
  const tweets = [
    { username: 'JohnDoe30', name: 'John Doe', date: '02/17/2024', message: 'Today is a great day!' },
    { username: 'MSan31', name: 'Marcus Sanchez', date: '02/17/2024', message: '@JohnDoe30 Yes it is.' },
    { username: 'KingJames', name: 'LeBron James', date: '02/17/2024', message: 'What dat mean.' },
    { username: 'Brogrammer', name: 'Jake Brown', date: '02/17/2024', message: 'Hello, world!' }
  ]

  return (
    <>
      {tweets.map((tweet, index) =>
        <Tweet
          key={index}
          username={tweet.username}
          name={tweet.name}
          date={tweet.date}
          message={tweet.message}
        />
      )}
    </>
  );
}

function Tweet({ username, name, date, message }) {

  const styles = `
    .username {
      font-weight: bold;
    }
    
    .date {
      color: #888;
    }
    
    .message {
      margin: 10px 0;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <p>
        <strong>{name}</strong>
        <span className="username">@{username}</span> - <span className="date">{date}</span>
      </p>
      <p className="message">{message}</p>
    </div>
  );
}
