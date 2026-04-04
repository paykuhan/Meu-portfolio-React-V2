import Header from './components/Header'
import Projetos from './components/Projetos'
import './style.css' 

function App() {
  return (
    <div>
      <Header />
      
      <main>
        {/* Sua seção Sobre original idêntica */}
        <section id="sobre">
          <div className="container">
            <h1>Olá! Sou Dawillams Monteiro.</h1>
            <p className="legenda">Trabalho com montagem e manutenção de computadores.</p>
            
            <p>Graduando em Tecnologia em Sistemas para a Internet. Desenvolvedor iniciante, fascinado por tecnologia desde a infância.</p> 
            <p>Desejo transformar linhas de códigos em soluções reais que facilitem a vida das pessoas.</p>
            <a href="#projetos" className="btn-primary">Ver Meus Projetos</a>
          </div>
        </section>

        <Projetos />
      </main>

      {/* Seu rodapé original */}
      <footer>
        <div className="container">
          <p>© 2026 - Desenvolvido por Dawillams Monteiro</p>
          <div className="social-links">
            <a href="https://www.facebook.com/dawillams.monteiro" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/dawillamsmonteiro/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/dawillams-monteiro-b24a0315b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/paykuhan" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </footer>

      {/* Seu botão de WhatsApp original com o texto exato */}
      <a href="https://wa.me/5586994941106?text=Olá%20Dawillams,%20vi%20seu%20portfólio%20e%20quero%20conversar!" 
         target="_blank" 
         className="whatsapp-btn"
         rel="noreferrer">
        <i className="fab fa-whatsapp"></i> Fale comigo
      </a>
    </div>
  )
}

export default App