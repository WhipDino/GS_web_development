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
            <p>Permitir aos idosos e seus cuidadores gerenciar facilmente prescrições médicas, automatizar a compra de medicamentos com entrega em domicílio
               e acompanhar horários de medicação, tudo isso reforçado por recursos de segurança robustos para proteger dados sensíveis.</p>
          </div>
          <div className="function-section">
            <h1>O que ela fará:</h1>
            <p>O aplicativo irá automatizar as idas à farmacia. Ao invés de sair do hospital e ir para a farmácia o médico enviará a receita para o seu usuário no aplicativo
              e automaticamente já serão feitos cálculos de quais farmácias tem os melhores preços. Após a confirmação do paciente ou do cuidador, a compra será efetuada e a 
              receita será enviada junto com a compra. Agora é só esperar a encomenda em casa! Desta forma os idosos evitaram o desgaste dos trasnportes públicos, trânsito e até 
              mesmo ter que explicar o remédio solicitado pelo médico.</p>
          </div>
          <div className="work-section">
            <h1>Como Funcionará:</h1>
            <p>O aplicativo funcionará como uma plataforma centralizada para idosos e cuidadores gerenciarem prescrições médicas e medicamentos. Ele permitirá o cadastro de usuários,
               recebimento de prescrições eletrônicas, comparação de preços de medicamentos, realização de compras com opções de entrega em domicílio e fornecerá lembretes automáticos
              para a tomada de medicamentos. Tudo isso será oferecido através de uma interface amigável, com ênfase na segurança e privacidade dos dados do usuário.</p>
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
