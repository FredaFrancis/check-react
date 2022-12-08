
import './App.css';
import Comments from './Comments';
import EnhancedLikes from './likes';
import Likes from './likes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <EnhancedLikes />
     <Comments/>
      </header>
    </div>
  );
}

export default App;
