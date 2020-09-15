import React, { useState, useContext, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import Slider from "../../components/Slider/Slider";
import { LookContext } from "../../store/context";
import Loading from "../../components/UI/Loading";
import { FiStar } from "react-icons/fi";

const SingleItem = () => {
  const router = useRouter();
  const { pid } = router.query;

  let [current, setCurrent] = useState(0);
  let [item, setItem] = useState(null);
  const handleChange = (newValue) => {
    setCurrent(newValue);
  };
  const context = useContext(LookContext);
  let { loading, getLook, addtoFav, removeFav } = context;

  useEffect(() => {
    if (!item) {
      setItem(getLook(pid));
    }
  });

  if (!item) {
    return <div></div>;
  }
  if (loading) {
    return (
      <div className="loading">
        <Loading area={80} />
        <style jsx>{`
          .loading {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 80vh;
          }
        `}</style>
      </div>
    );
  }

  const images = item.images.map((img) => {
    return { url: img.url, extra: null };
  });
  const product = (
    <div className="product">
      <p className="brand">{item.brand}</p>
      <p className="Maindesc">{item.description}</p>
      <p className="price">Rs.{item.price}</p>
      <style jsx>{`
        .product {
          align-self: start;
          margin-bottom: 2rem;
          font-family: GothamHTF-Book, sans-serif;
        }
        .brand {
          font-size: 22px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .Maindesc {
          font-size: 16px;
          color: grey;
          text-transform: capitalize;
        }
        .price {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
  const imgdesc = item.images.map((it) => {
    return (
      <div>
        <div className="desc">{it.description}</div>
        <div className="add">
          <div
            className={item.fav ? "favorite added" : "favorite"}
            onClick={
              item.fav ? () => removeFav(item, item.slug) : () => addtoFav(item)
            }
          >
            <FiStar size={20} />
            <span>Add to favourite</span>
          </div>
          {it.link !== "" ? (
            <a href={it.link} target="_blank" className="link">
              <div className="buy">Buy</div>
            </a>
          ) : null}
        </div>
        <style jsx>{`
          .desc {
            width: 70%;
          }
          .add {
            display: flex;
            width: 100%;
            margin-top: 3rem;
          }
          .favorite,
          .buy {
            display: flex;
            text-align: center;
            padding: 5px 0;
            cursor: pointer;
            width: 4rem;
            background: white;
            border: 1.5px solid black;
            color: black;
            font-size: 15px;
            justify-content: center;
            transition: all 0.2s linear;
          }
          .favorite {
            width: 10rem;
            margin-right: 1rem;
          }
          .added {
            background: black;
            color: white;
          }
          .favorite span {
            margin-left: 3px;
          }
          .favorite:hover,
          .buy:hover {
            background: black;
            color: white;
            transition: all 0.2s linear;
          }
          a {
            text-decoration: none;
          }
          @media screen and (max-width: 768px) {
            .desc {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  });
  return (
    <>
      <div className="Align">
        <div className="sliderTop">
          <div className="bagSlider">
            <div className="BagSL">
              <Slider
                images={images}
                autoplay={true}
                time={4000}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="single-item-info">
          {product}
          {imgdesc[current]}
        </div>
      </div>
      <style jsx>{`
        .Align {
          display: flex;
          flex-direction: row;
          height: calc(100vh - 85px);
          background: rgb(250, 249, 248);
          width: 100%;
        }
        .sliderTop {
          position: relative;
          padding-top: 1rem;
          width: 50%;
          height: calc(100vh - 85px);
        }
        .bagSlider {
          position: relative;
          width: 70%;
          margin: 0 auto;
          padding-top: 85%;
        }
        .BagSL {
          position: absolute;
          width: 100%;
          height: 100%;
          max-width: 489px;
          max-height: 573px;
          top: 0;
          left: 0;
          overflow: hidden;
        }
        .single-item-info {
          margin-top: 2%;
          width: 50%;
          max-width: 1170px;
          vertical-align: baseline;
        }
        @media screen and (max-width: 768px) {
          .sliderTop {
            width: 100vw;
            height: 70%;
            margin: 2rem 0;
          }
          .Align {
            flex-direction: column;
            justify-content: center;
            height: 70%;
          }
          .single-item-info {
            margin: 0 auto;
            width: 70%;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default SingleItem;
