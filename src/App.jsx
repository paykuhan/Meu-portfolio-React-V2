import Header from './components/Header'
import Projetos from './components/Projetos'
import './style.css' 

function App() {
  return (
    <div>
      <Header />
      
      <main>
        {/* seção Sobre */}
        <section id="sobre">
          <div className="container">
           <h1>Olá, Sou Dawillams Monteiro</h1>
                <p class="legenda">Trabalho com montagem e manutenção de computadores.</p>
                <p>Tenho experiência em montagem, manutenção e formatação de computadores, atuando como técnico. Estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias para oferecer o melhor serviço possível aos meus clientes.</p>
                <p>Atualmente, estou em busca de oportunidades para expandir minha carreira e contribuir com minhas habilidades técnicas em um ambiente desafiador e inovador.</p>
                <p>Graduando em Tecnologia em Sistemas para a Internet. Desenvolvedor iniciante, fascinado por tecnologia e programação. Estou sempre buscando aprender e aprimorar minhas habilidades para me tornar um profissional cada vez melhor.</p>
                <p>Desejo transformar linhas de código em soluções criativas e eficientes, contribuindo para projetos inovadores e impactantes. Estou animado para enfrentar desafios e crescer na área de desenvolvimento, sempre com o objetivo de criar experiências digitais incríveis.</p>
            <a href="#projetos" className="btn-primary">Ver Meus Projetos</a>
          </div>
        </section>

        <Projetos />
      </main>

      {/* Rodapé */}
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

      {/* Botão de WhatsApp */}
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
