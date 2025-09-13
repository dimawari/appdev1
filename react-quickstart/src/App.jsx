import './App.css'

export default App

function MyComponent (){
  return (
    <button>This is MyComponent Button</button>
  );
}


function ThisButton() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <ThisButton />
    </div>
  );
}
