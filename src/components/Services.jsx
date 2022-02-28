import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Tận tâm",
      subTitle:
        "Luôn mang đến nguồn năng lượng hấp dẫn trong hoạt đông kinh doanh cũng như sự tận tâm đối với khách hàng của mình.",
    },
    {
      icon: service2,
      title: "An toàn",
      subTitle:
        "Xanh Travel hoạt động với tiêu chí là người bạn đồng hành đáng tin cậy trên mọi nẻo đường.",
    },
    {
      icon: service3,
      title: "Giá tốt nhất",
      subTitle:
        "Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng, giá cả ổn định.",
    },
    {
      icon: service4,
      title: "Lan tỏa đam mê",
      subTitle:
        "Các sản phẩm du lịch độc đáo đồng thời cũng là nơi lan tỏa niềm đam mê du lịch đến với cộng đồng, tôn vinh những nét đẹp nhân văn đến với xã hội.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
