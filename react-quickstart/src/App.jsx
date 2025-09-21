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


export default function App() {
  const isDaytime = false;
  let message;

  if (isDaytime) {
    message = <p>Good morning!</p>;
  } else {
    message = <p>Good evening!</p>;
  }

  return <div>{message}</div>;
}


const products = [
  { title: 'Carrot', isFruit: false, id: 1 },
  { title: 'Blueberry', isFruit: false, id: 2 },
  { title: 'Tomato', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'blue' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

