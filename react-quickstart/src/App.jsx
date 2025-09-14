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
