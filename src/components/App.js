import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import BaseLayout from './BaseLayout'
import ParentComponent from './ParentComponent'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <Header />
          <ParentComponent />
          <Footer />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
