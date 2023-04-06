import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <header>
        <h1>Portfolio Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex-container">
          <div className="flex-item">Box 1</div>
          <div className="flex-item">Box 2</div>
          <div className="flex-item">Box 3</div>
        </section>
        <section className="flex-container">
          <div className="flex-item">Box 4</div>
          <div className="flex-item">Box 5</div>
          <div className="flex-item">Box 6</div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Portfolio Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
        
  