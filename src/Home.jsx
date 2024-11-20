import './home.css'
import { Link } from 'react-router-dom';

function Home() {
  const routes = [
    { path: '/react24/app', name: 'React24 App' },
    { path: '/react24/test', name: 'React24 Test' },
    { path: '/react18/app', name: 'React18 Component Tutorials' },
  ];

  return (
    <div className='home-page'>
      <h1>React Walkthrough Links</h1>
      <ul>
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;