import React from "react";
import Title from "../../../../components/Title/Title";
import "./Advantages.scss";
import BigContainer from "../../../../components/BigContainer/BigContainer";
import Block from "../../../../components/Block/Block";
import gif from "../../../../assets/video/pet-gif.gif";

const Advantages = () => {
  return (
    <section className="advantages">
      <BigContainer>
        <Block>
          <Title title={"ПЕРЕВАГИ"} />
          <div className="advantages__wrapper">
            <div className="advantages__img">
              <img src={gif} alt="" />
              {/* <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video> */}
            </div>
            <div className="advantages__info">
              <p className="advantages__text">
                Працюючи з 2016 року на ринку ПЕТ, наша компанія добре розуміє,
                що клієнтам необхідна не тільки ПЕТ продукція, а й консультація
                з будь-якого питання. Йдеться про економію енергії, зменшення
                споживання ресурсів, зниження собівартості продукції та більш
                тісний контроль виробничих даних.
              </p>
              <p className="advantages__text">
                Ми готові допомогти Вам. Також, ми не забуваємо про наш основний
                товар - ПЕТ пляшку найвищої якості, і ми робимо все, щоб воно
                підвищувалося, адже нескінченність - не межа!
              </p>
              <p className="advantages__text">
                У 2019 році був повністю замінений парк напівавтоматичного
                видувногообладнання для ПЕТ тари, що дозволило нам покращити
                налаштування видування преформи та охолодження готової
                продукції, для досягнення ще більш якісних пляшок з меншою
                вагою, але тією ж щільністю.
              </p>
            </div>
          </div>
        </Block>
      </BigContainer>
    </section>
  );
};

export default Advantages;
