import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './components/layout/Alert';
import User from './components/pages/User';

function App() {
  return (
      //wrap components with context provider that need access to global state variables
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />

              <main className='container mx-auto pb-12'>
                <Alert />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/user/:login' element={<User />} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='/*' element={<NotFound/>} />
                </Routes>
              </main>

              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>

  );
}

export default App;
