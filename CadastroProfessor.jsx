export default function CadastroProfessor() {
  return (
    <div style={{ maxWidth: '400px' }}>
      <h2>Cadastro de Professor</h2>
      <p>Preencha os dados abaixo para registrar um novo docente.</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Nome Completo:</label>
          <input type="text" placeholder="Ex: João Silva" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Disciplina:</label>
          <input type="text" placeholder="Ex: Algoritmos" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>E-mail Acadêmico:</label>
          <input type="email" placeholder="professor@ufn.edu.br" style={inputStyle} />
        </div>

        <button type="submit" style={buttonStyle}>
          Cadastrar Professor
        </button>
      </form>
    </div>
  );
}

const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { 
  padding: '10px', 
  backgroundColor: '#28a745', 
  color: 'white', 
  border: 'none', 
  borderRadius: '4px', 
  cursor: 'pointer',
  marginTop: '10px'
};