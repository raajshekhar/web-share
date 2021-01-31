import logo from './logo.svg';
import './App.css';

function App() {

  const webShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Latest Brands',
        text: "Keep the love growing valentine's gifts for them & you.",
        url: 'https://www.plants.com/',
      })
        .then(() => {
              console.log('Successful share')
        })
        .catch((error) => {
          console.log('Error sharing', error)
        });
    } else {
      console.log("Sorry, it's not working")
    }
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We Can Share Information
        </p>
        <button id="share-option" onClick={webShare}>
          Share
        </button>
      </header>
    </div>
  );
}

export default App;
