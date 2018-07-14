import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Pahul" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="first commit!" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg" />
        </section>
      </div>;
  }
}
export default App;