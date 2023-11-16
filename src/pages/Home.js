import React from 'react';
import './Home.scss'; 

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="image-container">
          <div className="imagem">
            <img src="/image/saude.jpg" alt="Desenho de profissionais da saúde segurando um coração com uma cruz" />
          </div>
          <div className="automed">
            <h1>AutoMed</h1>
          </div>
          <div className="texto">
            <p>Simplificando a saúde dos idosos: receitas médicas online, compras de medicamentos fáceis e cuidadores conectados. Uma vida mais simples e saudável.</p>
          </div>
          <div className="botao">
            <button>Mais informações</button>
          </div>
        </div>

        <div className="text-container">
          <div className="solution-section">
            <h1>Solução:</h1>
            <p>A nossa solução é um aplicativo inovador que visa melhorar a qualidade de vida dos idosos e de seus cuidadores.</p>
          </div>
          <div className="function-section">
            <h1>O que ela fará:</h1>
            <p>O aplicativo simplificará a obtenção de medicamentos e o monitoramento da saúde dos idosos, tornando esses processos mais acessíveis e eficazes.</p>
          </div>
          <div className="work-section">
            <h1>Como Funcionará:</h1>
            <p>Funcionará permitindo que médicos enviem receitas diretamente para o aplicativo, facilitando a compra de medicamentos com os melhores preços e prazos de entrega,
            oferecendo suporte por meio de uma inteligência artificial amigável e permitindo que os cuidadores acompanhem a evolução da saúde dos idosos. Com essa abordagem inovadora,
            estamos tornando o cuidado com a saúde mais simples e eficiente para a população idosa.</p>
          </div>  
        </div>
        
      </section>

      <div className='titulo-vantagens'>
        <h1>Vantagens</h1>
      </div>

      <div className="vantagens">
          <div className="celular-container">
            <div className="image-celular">
              <img src="/image/idosos1.png" alt="Idosos" />
            </div>
            <div className="content">
              <div className="number">01</div>
              <div className="title">Envio de Receitas Médicas Online</div>
              <div className="text">Os médicos podem enviar receitas médicas diretamente para o aplicativo, eliminando a necessidade de papel e idas à farmácia.</div>
            </div>
          </div>

          <div className="celular-container">
            <div className="image-celular">
              <img src="/image/remedio1.png" alt="Medicamentos" />
            </div>
            <div className="content">
              <div className="number">02</div>
              <div className="title">Compra de Medicamentos Simplificada</div>
              <div className="text">Os usuários podem comprar medicamentos com facilidade, encontrando as melhores opções de preço e prazo de entrega na região, economizando tempo e esforço.</div>
            </div>
          </div>

          <div className="celular-container">
            <div className="image-celular">
              <img src="/image/farmacia1.png" alt="Farmácia" />
            </div>
            <div className="content">
              <div className="number">03</div>
              <div className="title">Monitoramento de Saúde e Assistência por IA</div>
              <div className="text">Cuidadores podem acompanhar a saúde dos idosos e garantir que os medicamentos sejam tomados corretamente, enquanto a inteligência artificial amigável torna a navegação no aplicativo mais acessível e fácil.</div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default Home;
