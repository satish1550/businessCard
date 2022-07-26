// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Headers';
import About from './About';
import Interest from './Interest';

function App() {
  return (
    <div className="box">
      <Header />
      <About />
      <Interest />
      <Footer />
    </div>

    // <h1>hai</h1>
    // <div className="App">
      
    //   {/* <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header> */}
    // </div>
  );
}

export default App;
