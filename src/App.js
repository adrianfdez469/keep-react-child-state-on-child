import Parent1 from './Solution1/parent_A';

import Parent2 from './Solution2/parent_A';
import { Provider } from './Solution2/context';

import Parent3 from './Solution3/parent_A';

import Parent4 from './Solution4/parent_A';

import './App.css';

function App() {
  return (
    <div className="App">
      <Parent1 />

      <Provider>
        <Parent2 />
      </Provider>

      <Parent3 />

      <Parent4 />
    </div>
  );
}

export default App;