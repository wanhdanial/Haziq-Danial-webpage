import logo from './logo.svg';
import profilePhoto from './assets/starwars.jpg';
import bgImage from './assets/background.png'
import  './App.css';

function App() {
  return (
    
    <div style={{ 
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      fontFamily: 'sans-serif', 
      maxWidth: 1000, 
      margin: '0 auto', 
      padding: 80 }}>
    
      <img
        src={profilePhoto}
        alt='Profile Photo'
        style={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: 20,
        }}
        />
    
      <h1>Hi, I'm Haziq Danial 👋</h1> 
      <p>I'm a developer who loves building things for the web.</p>

      <h2>Project</h2>
      <ul>
        <li>Project One – Coming Soon</li>
        <li>Project Two – Docker & K8s</li>
      </ul>

      <h2>Contact</h2>
      <p>Email: testing@email.com</p>
    </div>
  );
}

export default App;
