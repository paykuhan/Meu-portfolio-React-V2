function Projetos() {
  const projetos = [
    {
      titulo: "Portfólio Profissional v2",
      descricao: "Site pessoal moderno focado em UI/UX, utilizando HTML5, CSS3 avançado e JavaScript.",
      tecnologias: ["html5", "css3-alt", "js"], 
      link: "https://github.com/paykuhan/Portfolio-MVP"
    },
    {
      titulo: "Calculadora Minimalista",
      descricao: "Uma calculadora simples com visual limpo, desenvolvida em JavaScript puro.",
      tecnologias: ["html5", "css3-alt", "js"],
      link: "https://paykuhan.github.io/Calculadora/"
    }
  ];

  return (
    <section id="projetos">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div id="lista-projetos">
          
          {projetos.map((projeto, index) => (
            <div className="projeto" key={index}>
              <div className="projeto-header">
                <h3>{projeto.titulo}</h3>
                <div className="tech-tags">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <i key={techIndex} className={`fab fa-${tech}`}></i>
                  ))}
                </div>
              </div>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                Ver no GitHub
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
export default Projetos