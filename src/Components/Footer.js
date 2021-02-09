import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {RiFacebookFill,RiInstagramLine,RiLinkedinFill,RiTwitterFill} from 'react-icons/ri';

const Container = styled.div`
 padding:80px 60px;
 background: #000;
`;
const Wrapper = styled.div`
 display:flex;
 flex-direction: column;
 justify-content:center;
 max-width:1000px;
 margin: 0 auto;

`;
const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;
 margin-left: 60px;

  & h1{
      color:#fff;
      font-size:32px;
      text-align: center;
      width: 300px;
      margin-bottom:40px;
  }
  @media (max-width: 768px){
    margin-left:0;
      text-align: center;

      & h1{
          margin-left:40px;
      }
  }
`;

const Row = styled.div`
 display:grid;
 grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
 grid-gap: 20px;

  @media (max-width: 768px){
 grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  }
`;
const Links = styled(Link)`
 color: #fff;
 margin-bottom:20px;
 font-size:16px;
 text-decoration:none;
 align-items:center;

 &:hover{
     color:#ff9c00;
     transition:200ms ease-in;
 }
`;
const Title = styled.div`
 color: #fff;
 margin-bottom:40px;
 font-size:24px;
 font-weight:bold;
`;

const Form = styled.div`
 display:flex;
 position: relative;
 padding-top: 1.5rem;
 align-items:center;

 & label{
    position: absolute;
  top: 0;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease-out;
 }

 & input:placeholder-shown {
     opacity: 0;
  transform: translateY(1rem);

 }
`;


const Facebook =styled(RiFacebookFill)``;
const Instagram =styled(RiInstagramLine)``;
const Linkdin =styled(RiLinkedinFill)``;
const Twitter =styled(RiTwitterFill)``;


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                    <Row>
                    <Column>
                        <h1>Help us Find You a Home</h1>
                        <Form>
                            <label>
                                Email:
                                <input type="text" name="email" />
                            </label>
                            <input type="submit" value="Submit" />
                        </Form>
                    </Column>
                    <Column>
                         
                     </Column>
                    <Column>
                        <Title>Contact  Us</Title>
                        <Links  to="/">Asansol</Links>
                        <Links to="/">Mumbai</Links>
                        <Links to="/">Delhi</Links>
                        <Links to="/">Hyderabad</Links>
                    </Column>
                    <Column>
                        <Title>Social</Title>
                        <Links  to="/"><Facebook/>  Facebook</Links>
                        <Links to="/"><Instagram/>  Instagram</Links>
                        <Links to="/"><Linkdin/>  Linkedin</Links>
                        <Links to="/"><Twitter/>  Twitter</Links>
                    </Column>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Footer
