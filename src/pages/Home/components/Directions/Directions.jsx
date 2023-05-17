import React from "react";
import "./Directions.scss";
import Container from "../../../../components/Container/Container";
import Title from "../../../../components/Title/Title";
import Delimiter from "../../../../components/Delimiter/Delimiter";
import Block from "../../../../components/Block/Block";

const Directions = () => {
  return (
    <section className="directions">
      <Container>
        <Block>
          <Title title={"ОСНОВНІ НАПРЯМКИ"} />
          <ul className="directions__list">
            <li className="directions__item">
              <p className="directions__text">
                Виробництво ПЕТ тари і ПЕТ преформи;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Розробка ПЕТ пляшок згідно з Вашими індивідуальними потребами;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Навчання експлуатації видувного обладнання;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Проектування виробничих ПЕТ ліній;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Рекомендації щодо вибору відповідного виробника видувного
                обладнання і підвищення ефективності виробничого процесу;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Оптимізація процесу видуву і периферійного обладнання;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Вибір найбільш підходящих легких ПЕТ преформ;
              </p>
            </li>
            <li className="directions__item">
              <p className="directions__text">
                Допомога у переналагодженні видувного обладнання під інші
                стандарти преформи.
              </p>
            </li>
          </ul>
        </Block>
      </Container>
      <Delimiter />
    </section>
  );
};

export default Directions;
