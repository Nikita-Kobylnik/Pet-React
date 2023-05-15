import React from "react";
import Container from "../../../../components/Container/Container";
import Block from "../../../../components/Block/Block";
import Title from "../../../../components/Title/Title";
import Slider from "../../../../components/Slider/Slider";
import Delimiter from "../../../../components/Delimiter/Delimiter";
import "./Bottles.scss";
import img1 from "../../../../assets/slides/48mm.jpg";
import img2 from "../../../../assets/slides/28mm.jpg";
import img3 from "../../../../assets/slides/500ml.jpg";
import img4 from "../../../../assets/slides/1000ml.jpg";
import img5 from "../../../../assets/slides/1500ml.jpg";
import img6 from "../../../../assets/slides/2000ml.jpg";
import img7 from "../../../../assets/slides/one.jpg";

const Bottles = () => {
  const bottlesSlides = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
  ];

  return (
    <section className="bottles">
      <Container>
        <Block>
          <Title title={"ПРОДУКЦІЯ"} />
          <div className="bottles__wrapper">
            <Slider slides={bottlesSlides} title={"Тара"} />
          </div>
        </Block>
      </Container>
      <Delimiter />
    </section>
  );
};

export default Bottles;
