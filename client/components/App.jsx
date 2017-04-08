import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

const App = props => (
  <div>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-sm-2" />
        <div className="col-sm-8">
          {props.children}
        </div>
        <div className="col-sm-2" />
      </div>
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
