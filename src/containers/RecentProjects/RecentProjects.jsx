import React from "react";
import { Link } from "react-router-dom";
import { Title, SingleProject } from "../../components";
import images from "../../constants/images";
import "./recentProjects.css";

const RecentProjects = () => {
  return (
    <div className="app__recentProjects section__padding">
      <Title title="Recent Projects " />
      <div className="app__recentProjects-container">
        <SingleProject
          img={images.youtube}
          img2={images.youtube2}
          img3={images.youtube3}
          img4={images.youtube4}
          img5={images.youtube2}
          title="YouTube Clone"
          text="It's a personal challenge. I challenged myself  to create the YouTube application using Rapid API. This enables access to all YouTube channels and their content. Additionally, this project is responsive"
          link="https://willtube.netlify.app/"
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <SingleProject
          img={images.photo}
          img2={images.ona1}
          img3={images.ona2}
          img4={images.ona3}
          img5={images.ona4}
          title="Ona Batiment"
          text=" ONA BATIMENT is a general building company divided into three divisions: Architectural design, engineering office, and construction. I was primarily at the heart of the project, from selecting the model to launching the website."
          link="https://onabatiment.com/"
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <SingleProject
          img={images.giricht}
          img2={images.giricht2}
          img3={images.giricht3}
          img4={images.giricht4}
          img5={images.giricht5}
          title="Gericht Resto"
          text="This is the website of a restaurant. This project is part of my numerous projects undertaken for fun. The goal was to integrate a Figma mockup."
          link="https://gericht-a.netlify.app/"
          sProjectNInitialBg={"sp-new-bg"}
          sProjectNewBg={"sp-initial-bg"}
          initialColor={"text-initial-color"}
          newColor={"text-initial-color"}
        />
        <Link to="/projects" className="link_see-more">
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecentProjects;
