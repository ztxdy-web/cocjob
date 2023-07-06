
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Content from './components/Content';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Lowongan from './components/Lowongan';
import Detail from './components/Detail';
import Bar from './components/Bar';
import Tabel from './components/Tabel';
import Tambah from './components/Tambah';
import Edit from './components/Edit';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div className="overflow-x-hidden">
            <Nav />
            <Outlet />
            <Contact />
          </div>
        }> 
          <Route path="/" element={
            <div>
             <Hero />
             <Content />
           </div>
          } />
          <Route path="/lowongan" element={<Lowongan />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
        <Route path='/dashboard' element={
          <div className='flex'>
            <Bar />
            <div className='ml-[260px] w-full h-full'>
            <Outlet />
            </div>
          </div>
        }>
          <Route path='pekerjaan' element={<Lowongan />} />
          <Route path='tabel' element={<Tabel />} />
          <Route path='tambah' element={<Tambah />}/>
          <Route path='edit/:id' element={<Edit />}/>

        </Route>
      </Routes>  
    </Router >
  );
}

export default App;
