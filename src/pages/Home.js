import React from 'react';
import './Home.scss'; 
import { useSlideShow } from '../funcao';

const Home = () => {
  const { plusSlides, currentSlide } = useSlideShow(3);
  return (
    <main className="home-container">
        <section className="hero-section">
          <div className="image-container">
            <div className="imagem">
              <img src="/image/imagem_principal.png" alt="Desenho de profissionais da saúde segurando um coração com uma cruz" />
            </div>
            <div className="automed">
              <img src="/image/logo.png" alt="Logo da AutoMed" />
              <h1>AutoMed</h1>
            </div>
            <div className="texto">
              <p>Saúde à Distância, Cuidado de Perto.</p>
            </div>
            <div className="botao">
              <button>Mais informações</button>
            </div>
          </div>
  
          <div className="text-container">
            <div className="mySlide slide1 active">
              <img src='/image/pessoas_cabeca.jpg' alt=""></img>
              <div className="solution-section">
                <div className="text-content">
                  <h1>Solução:</h1>
                  <p>Nosso aplicativo é uma solução inovadora que simplifica a vida dos idosos e de seus cuidadores, tornando o processo de obtenção de medicamentos e o 
                    monitoramento da saúde mais acessível e eficaz. Os médicos podem enviar receitas diretamente para o aplicativo, eliminando a necessidade de papel, enquanto 
                    os usuários podem comprar medicamentos com facilidade, encontrando as melhores opções de preço e prazo de entrega na região.</p>
                </div>
              </div>
            </div>
            <div className="mySlide slide2 active">
            <img src='/image/saude.jpg' alt=""></img>
                <div className="function-section">
                  <div className="text-content">
                    <h1>O que ela fará:</h1>
                    <p>O aplicativo irá automatizar as idas à farmacia. Ao invés de sair do hospital e ir para a farmácia o médico enviará a receita para o seu usuário no aplicativo
                        e automaticamente já serão feitos cálculos de quais farmácias tem os melhores preços. Após a confirmação do paciente ou do cuidador, a compra será efetuada e a 
                        receita será enviada junto com a compra. Agora é só esperar a encomenda em casa! Desta forma os idosos evitaram o desgaste dos trasnportes públicos, trânsito e até 
                        mesmo ter que explicar o remédio solicitado pelo médico.</p>
                  </div>
                </div>
            </div>
            <div className="mySlide slide3 active">
            <img src='/image/solucao.png' alt=""></img>
                <div className="work-section">
                  <div className="text-content">
                    <h1>Como Funcionará:</h1>
                    <p>O aplicativo funcionará como uma plataforma centralizada para idosos e cuidadores gerenciarem prescrições médicas e medicamentos. Ele permitirá o cadastro de usuários,
                        recebimento de prescrições eletrônicas, comparação de preços de medicamentos, realização de compras com opções de entrega em domicílio e fornecerá lembretes automáticos
                        para a tomada de medicamentos. Tudo isso será oferecido através de uma interface amigável, com ênfase na segurança e privacidade dos dados do usuário.</p>
                  </div>
                </div>  
            </div>
            
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>


            <div className="slide-indicators">
              <span className="dot" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
          </div>

          

        </section>

        <div className='titulo-vantagens'>
          <h1>Vantagens</h1>
        </div>
  
        <div className="vantagens">
            <div className="celular-container">
              <div className="image-celular">
                <img src="/image/celular1.png" alt="Idosos" />
              </div>
              <div className="content">
                <div className="number">01</div>
                <div className="title">Envio de Receitas Médicas Online</div>
                <div className="text">Os médicos podem enviar receitas médicas diretamente para o aplicativo, eliminando a necessidade de papel e idas à farmácia.</div>
              </div>
            </div>
  
            <div className="celular-container">
              <div className="image-celular">
                <img src="/image/celular2.png" alt="Medicamentos" />
              </div>
              <div className="content">
                <div className="number">02</div>
                <div className="title">Compra de Medicamentos Simplificada</div>
                <div className="text">Os usuários podem comprar medicamentos com facilidade, encontrando as melhores opções de preço e prazo de entrega na região, economizando tempo e esforço.</div>
              </div>
            </div>
  
            <div className="celular-container">
              <div className="image-celular">
                <img src="/image/celular3.png" alt="Medicamentos" />
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
