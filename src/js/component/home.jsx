import React from "react";
import MyNavbar from "./Navbar";
import Warm from "./Warm";
import Card from "./Cards";
import Myfooter from "./Footer";
import "../../styles/index.css"

const Project = () => {
  return (
    <>
      <MyNavbar />
      <div className="container mb-5">
        <Warm />
      </div>
      <div className="container mx-auto my-5 row justify-content-between">
        <Card
          imagen="https://picsum.photos/id/237/530/325"
          title="Perro"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, laboriosam."
          buttonDescription="boton 1"
        />
        <Card
          imagen="https://picsum.photos/id/238/530/325"
          title="Ciudad"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, laboriosam."
          buttonDescription="boton 2"
        />
        <Card
          imagen="https://picsum.photos/id/239/530/325"
          title="Diente de león"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, laboriosam."
          buttonDescription="boton 3"
        />
        <Card
          imagen="https://picsum.photos/id/236/530/325"
          title="Paisaje"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, laboriosam."
          buttonDescription="boton 4"
        />
      </div>
      <Myfooter />

    </>
  )
}

export default Project;
