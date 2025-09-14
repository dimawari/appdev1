import './App.css';


export default function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <h2>I am the Parent</h2>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return <p>I am the Child component</p>;
}

{
  return (
    <div>
      <h1>Hello, Beh!</h1>
      <p>This is a markup a.k.a JSX.</p>
    </div>
  );
}

export default function App() {
  const style = {
    color: 'blue',
    fontSize: '20px'
  };

  return <h2 style={style}>Basta Heading 'To</h2>;
}


export default function App() {
  const user = {
    name: 'Taylor and Hayley',
    imageUrl: 'https://www.billboard.com/wp-content/uploads/2023/07/Taylor-Swift-and-Hayley-Williams-2010-billboard-1548.jpg?w=942&h=623&crop=1'
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <img src={user.imageUrl} alt={user.name} />
    </div>
  );
}
