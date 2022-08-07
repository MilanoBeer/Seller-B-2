import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { productLineItemsApi } from "../../api/productApi";
import "./ProductOption.css";

// Product : product_id, name, price, thumbnail(이미지), reg_date(등록일시)
const dummyData = [
  {
    product_seq: "1",
    product_id: "abc",
    product_name: "스탠드형 에어컨",
    product_price: "1,300,000",
    product_thumbnail: "",
    reg_date: "2022-07-25",
  },
  {
    product_seq: "2",
    product_id: "CCC",
    product_name: "미니 에어컨",
    product_price: "800,000",
    product_thumbnail: "",
    reg_date: "2022-07-22",
  },
  {
    product_seq: "3",
    product_id: "CCC",
    product_name: "미니 에어컨",
    product_price: "800,000",
    product_thumbnail: "",
    reg_date: "2022-07-22",
  },
  {
    product_seq: "4",
    product_id: "CCC",
    product_name: "미니 에어컨",
    product_price: "800,000",
    product_thumbnail: "",
    reg_date: "2022-07-22",
  },
  // {
  //   product_id: "CCC",
  //   product_name: "미니 에어컨",
  //   product_price: "800,000",
  //   product_thumbnail: "",
  //   reg_date: "2022-07-22",
  // },
  // {
  //   product_id: "CCC",
  //   product_name: "미니 에어컨",
  //   product_price: "800,000",
  //   product_thumbnail: "",
  //   reg_date: "2022-07-22",
  // },
];

function ProdcutOption({ items }) {
  // 해당 제품군에 대한 상품들 -> 리스트로 받기
  // console.log("ITEMS: " + )

  console.log("prop items:" + items)
  const [data, setData] =  useState(dummyData ); // 더미데이터로 셋팅

  const navigate = useNavigate();
  const onNavigate = (product_seq) => {
    navigate(`/manager/productDetail/${product_seq}`);
  };

  return (
    <>
      {/* 각 제품(div) 여러 개 만들기 */}
      <div className="body-wrapper">
        {items.map((ele, i) => {
          return (
            <>
            
              <div
                className="element-wrapper"
                onClick={() => navigate(`/manager/productDetail/${ele.product_seq}`)}>
                <img
                  alt="#"
                  src={`${process.env.PUBLIC_URL}/img/product_img.png`}
                />
                <div className="product-info">
                  <h5>품번 : </h5>
                  {ele.productId}
                </div>
                <div className="product-info" >
                  <h5>제품명 : </h5>
                  {ele.productName}
                </div>
                <div className="product-info">
                  <h5>가격 : </h5>
                  {ele.productPrice}
                </div>
              </div>
              
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProdcutOption;
