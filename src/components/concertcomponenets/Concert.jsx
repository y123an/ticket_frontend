import React, { useEffect, useState } from "react";
import concertad from "../../assets/images/concertad.jpg";
import Navbar from "../Navbar";
import Ad from "../Ad";
import SearchBar from "../SearchBar";
import Card from "../Card";
import Axios from "axios";
import Book from "../bookcomponent/Book";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Concert() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [newData, setNewData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [bookImg, setBookImg] = useState();
  const [pagesss, setPage] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:3000/getnewconcertsdata")
      .then((res) => {
        res.data.forEach((element) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(element.img.data.data))
          );

          setNewData((prev) => [...prev, base64String]);
        });
      })
      .catch((err) => console.log(err, "it has an error"));

    Axios.get("http://localhost:3000/gettrendingconcertsdata")
      .then((res) => {
        res.data.forEach((element) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(element.img.data.data))
          );

          setTrendingData((prev) => [...prev, base64String]);
        });
      })
      .catch((err) => console.log(err, "it has an error"));
  }, []);

  return pagesss ? (
    <div className="pb-32">
      <Navbar />
      <SearchBar />
      <Ad img={concertad} />
      <h1 className="text-2xl p-11">New</h1>
      <div className="new flex justify-center items-center">
        <Carousel
          responsive={responsive}
          showDots={true}
          containerClass="container"
          keyBoardControl={true}
          className=" w-[90%] p-16  bg-[#71BD26] rounded-lg"
        >
          {newData.map((data, index) => {
            return (
              <div>
                <Card key={index} img={data} />
                <button
                  type="submit"
                  onClick={() => {
                    setBookImg(data);
                    setPage(false);
                  }}
                  className="text-2xl ml-72 bg-yellow-400 p-1 mt-4 rounded-md text-white font-bold"
                >
                  Book
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>

      <h1 className="text-2xl p-11">Trending</h1>
      <div className="trending flex justify-center items-center">
        <Carousel
          responsive={responsive}
          showDots={true}
          containerClass="container"
          className=" w-[90%] p-16   bg-[#71BD26] rounded-lg"
        >
          {trendingData.map((data, index) => {
            return (
              <div>
                <Card key={index} img={data} />
                <button
                  onClick={() => {
                    setBookImg(data);
                    setPage(false);
                  }}
                  className="text-2xl ml-72 bg-yellow-400 p-1 mt-4 rounded-md text-white font-bold"
                >
                  Book
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  ) : (
    <Book img={bookImg} />
  );
}
