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

