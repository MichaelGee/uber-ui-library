import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/globals.css';
import './App.css';
import InputPassword from 'components/input/input-password';
import {useToast} from 'components/toast/useToast';

function App() {
  const [count, setCount] = useState(0);
  const {addToast} = useToast();

  const handler = () => {
    addToast?.('Paragraph text', {
      type: 'info',
      headline: 'Headline text',
      position: 'topRight',
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <InputPassword placeholder="password" type="password" />
      <button onClick={handler}>Open Toast</button>
    </>
  );
}

export default App;
