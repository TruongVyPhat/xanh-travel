import React from "react";
import styled from "styled-components";
import phatImg from "../assets/phat.jpg";
import thaoImg from "../assets/thao.jpg";
import tuongImg from "../assets/tuong.jpg";
import nhuImg from "../assets/nhu.jpg";
import ngocImg from "../assets/ngoc.jpg";
import oanhImg from "../assets/oanh.jpg";
import tienImg from "../assets/tien.jpg";
import khaImg from "../assets/kha.jpg";
import phungImg from "../assets/phung.jpg";
import longImg from "../assets/long.jpg";
import anhImg from "../assets/anh.jpg";
import BngocImg from "../assets/Bngoc.jpg";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Về chúng tôi</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={phatImg} alt="" />
            <div className="details">
              <h4>Hồ Văn Phát</h4>
              <span>Giám đốc</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={thaoImg} alt="" />
            <div className="details">
              <h4>Phan Phương Thảo</h4>
              <span>Kế toán</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={nhuImg} alt="" />
            <div className="details">
              <h4>Phan Thị Quỳnh Như</h4>
              <span>Đội ngũ marketing</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={ngocImg} alt="" />
            <div className="details">
              <h4>Vương Thị Mỹ Ngọc</h4>
              <span>Đội ngũ marketing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={tuongImg} alt="" />
            <div className="details">
              <h4>Lê Minh Tường</h4>
              <span>Đội ngũ marketing</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            
          </p>
          <div className="info">
            <img src={oanhImg} alt="" />
            <div className="details">
              <h4>Huỳnh Phan Hoàng Oanh</h4>
              <span>Đội ngũ sales</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={tienImg} alt="" />
            <div className="details">
              <h4>Huỳnh Giang Tiên</h4>
              <span>Đội ngũ sales</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={khaImg} alt="" />
            <div className="details">
              <h4>Lê Hoàng Kha</h4>
              <span>Đội ngũ sales</span>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={phungImg} alt="" />
            <div className="details">
              <h4>Trần Ngọc Yến Phụng</h4>
              <span>Đội ngũ Điều Hành và Hướng Dẫn Viên</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={longImg} alt="" />
            <div className="details">
              <h4>Diệp Phi Long</h4>
              <span>Đội ngũ Điều Hành và Hướng Dẫn Viên</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={anhImg} alt="" />
            <div className="details">
              <h4>Võ Nguyễn Tuấn Anh</h4>
              <span>Đội ngũ Điều Hành và Hướng Dẫn Viên</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          </p>
          <div className="info">
            <img src={BngocImg} alt="" />
            <div className="details">
              <h4>Huỳnh Thị Bảo Ngọc</h4>
              <span>Đội ngũ Điều Hành và Hướng Dẫn Viên</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    padding-bottom: 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      width: 20%;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
