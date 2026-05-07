export default function Contato() {

  return (
    <div className="p-4 rounded shadow-sm" style={{ background: '#e8f5e9', border: '1px solid #c8e6c9' }}>
      <h2 style={{ color: '#2e7d32' }}>Entre em Contato</h2>
      <p>Esta é uma rota carregada dinamicamente via <strong>React Router</strong>.</p>
      
      <div className="d-flex flex-column gap-2" style={{ maxWidth: '300px' }}>
        <input type="text" className="form-control" placeholder="Nome Completo" />
        <input type="email" className="form-control" placeholder="E-mail" />
        <button className="btn text-white" style={{ background: '#2e7d32' }}>
          Enviar Mensagem
        </button>
      </div>
    </div>
  );
}