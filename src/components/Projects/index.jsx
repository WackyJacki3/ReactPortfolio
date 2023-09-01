// import { ToggleButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Container = styled.div`
background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%,  rgba(132, 59, 206, 0) 64.83%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0px 100px 0;    
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;

    ${({ active, theme }) =>
        active && `
        background-color: ${theme.primary + 20};
    `
    }

    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return (
        <Container>
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Here are some projects I wanted to share with the world!
                </Desc>

                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    ) : (
                        <ToggleButton value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    )}
                    <Divider />
                    {toggle === "web app" ? (
                        <ToggleButton active onClick={() => setToggle("web app")} >
                            WEB APPS
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("web app")}>
                            WEB APPS
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "andriod app" ? (
                        <ToggleButton active onClick={() => setToggle("android app")} >
                            ANDROID APPS
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("android app")}>
                            ANDROID APPS
                        </ToggleButton>
                    )}
                    <Divider />
                    {toggle === "machine learning" ? (
                        <ToggleButton active onClick={() => setToggle("machine learning")} >
                            MACHINE LEARNING
                        </ToggleButton>
                    ) : (
                        <ToggleButton onClick={() => setToggle("machine learning")}>
                            MACHINE LEARNING
                        </ToggleButton>
                    )}
                </ToggleGroup>
                <CardContainer>
                    {toggle === 'all' && 
                        projects.map((project) => (
                            <ProjectCard project={project}/>
                    ))}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((project) => (
                            <ProjectCard project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;