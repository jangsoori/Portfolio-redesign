import React from "react";
import styled, { css } from "styled-components";
import { ProjectStack, renderStack } from "./ProjectItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Images
import spacezDesktop from "../../Assets/Images/Projects/SpaceZ/desktop_1.jpg";
// import spacezMobile from "../../Assets/Images/Projects/SpaceZ/mobile_1.jpg";
import myTeamDesktop_1 from "../../Assets/Images/Projects/MyTeam/desktop_1.jpg";
import myTeamDesktop_2 from "../../Assets/Images/Projects/MyTeam/desktop_2.jpg";
// import myTeamMobile from "../../Assets/Images/Projects/MyTeam/mobile_1.jpg";
import therunupDesktop_1 from "../../Assets/Images/Projects/TheRunUp/desktop_1.jpg";
import therunupDesktop_2 from "../../Assets/Images/Projects/TheRunUp/desktop_2.jpg";
import therunupDesktop_3 from "../../Assets/Images/Projects/TheRunUp/desktop_3.jpg";
import weatherDesktop_1 from "../../Assets/Images/Projects/Weather/desktop_1.jpg";
import weatherDesktop_2 from "../../Assets/Images/Projects/Weather/desktop_2.jpg";
import weatherDesktop_3 from "../../Assets/Images/Projects/Weather/desktop_3.jpg";
// import weatherMobile from "../../Assets/Images/Projects/Weather/mobile_1.jpg";
// import weatherTablet from "../../Assets/Images/Projects/Weather/tablet_1.jpg";

const imageSources = {
  spacez: [/*spacezMobile,*/ spacezDesktop],
  myteam: [myTeamDesktop_1, myTeamDesktop_2 /*myTeamMobile*/],
  therunup: [therunupDesktop_1, therunupDesktop_2, therunupDesktop_3],
  weather: [
    weatherDesktop_1,
    weatherDesktop_2,
    weatherDesktop_3,
    // weatherMobile,
    // weatherTablet,
  ],
};
//Project popup

const StyledProjectDetails = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  ${({ open }) =>
    open &&
    css`
      display: flex;
    `}
`;

const ProjectDetailsContentWrapper = styled.section`
  width: 90%;
  height: 90%;
  background: white;
  border-radius: 2px;
  padding: 2rem;
  display: grid;
  gap: 2rem;

  grid-template-rows: repeat(3, max-content) 1fr;
`;

const ProjectDetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: start;
`;

const Title = styled.header`
  font-size: 3rem;
`;

const Close = styled.button`
  background: none;
  border: none;
  position: relative;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  span {
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    :nth-child(1) {
      transform: rotate(-45deg);
    }
    :nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;

const Overview = styled.section``;

const OverviewText = styled.p`
  font-size: 1.3rem;
  opacity: 0.5;
`;

const CarouselContainer = styled.section`
  height: 100%;
  .carousel .slide img {
    object-fit: scale-down;
    width: 100%;
    height: 60vh;
  }
  ul,
  li {
    height: 100%;
  }
`;

const renderImages = (project) => {
  return project.map((item) => {
    return <img alt="" src={item} />;
  });
};

const renderCarousel = (project) => {
  switch (project.name) {
    case "SpaceZ":
      return renderImages(imageSources.spacez);

    case "The Run Up":
      return renderImages(imageSources.therunup);

    case "My Team":
      return renderImages(imageSources.myteam);

    case "Pocket Weather":
      return renderImages(imageSources.weather);

    default:
      break;
  }
};
export default function ProjectDetails(props) {
  const { name, desc, stack, links } = props.details;

  console.log(props);
  return (
    <StyledProjectDetails open={props.open}>
      <ProjectDetailsContentWrapper>
        <ProjectDetailsHeader>
          <Title>{name}</Title>
          <Close onClick={() => props.handleOpen()}>
            <span></span>
            <span></span>
          </Close>
        </ProjectDetailsHeader>
        <Overview>
          <OverviewText> {desc}</OverviewText>
        </Overview>
        <ProjectStack numberOfItems={stack.length}>
          {renderStack(stack)}
        </ProjectStack>
        {/* <div> */}
        <CarouselContainer>
          <Carousel height="100%" showThumbs={false}>
            {renderCarousel(props.details)}
          </Carousel>
        </CarouselContainer>
        {/* </div> */}
      </ProjectDetailsContentWrapper>
    </StyledProjectDetails>
  );
}
