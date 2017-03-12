import React, { Component } from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-8">
              {this.props.children}
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
