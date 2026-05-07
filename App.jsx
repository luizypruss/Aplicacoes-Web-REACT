import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contato from './Contato';
import Suporte from './Suporte';
import Cadastro from './Cadastro';
import CadastroProfessor from './CadastroProfessor'; // Nova página

export default function App() {
  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        fontFamily: 'sans-serif' 
      }}>
        
        {/* NAVBAR */}
        <nav style={{ padding: '15px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
          <strong style={{ marginRight: '20px' }}>UFN - Aula 22</strong>
          <Link to="/" style={linkStyle}>Home</Link> | 
          <Link to="/contato" style={linkStyle}>Contato</Link> | 
          <Link to="/suporte" style={linkStyle}>Suporte</Link> | 
          <Link to="/cadastro" style={linkStyle}>Cadastrar</Link> | 
          <Link to="/professor" style={linkStyle}>Professor</Link>
        </nav>

        {/* CONTAINER PRINCIPAL (70% de altura) */}
        <main style={{ flex: '1', minHeight: '70vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/professor" element={<CadastroProfessor />} />
          </Routes>
        </main>

        {/* FOOTER (Fica sempre embaixo devido ao flex: 1 no main) */}
        <footer style={{ 
          padding: '20px', 
          backgroundColor: '#343a40', 
          color: 'white', 
          textAlign: 'center' 
        }}>
          <p>© 2026 - Sistemas de Informação - Aplicações Web</p>
        </footer>
      </div>
    </Router>
  );
}

const linkStyle = { margin: '0 10px', textDecoration: 'none', color: '#007bff' };