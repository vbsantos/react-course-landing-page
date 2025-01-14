import styled from "styled-components";
import {
  FaPhone as PhoneIcon,
  FaBuilding as BuildingIcon,
  FaFacebookF as FacebookIcon,
  FaLinkedinIn as LinkedInIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

interface PropType {}

const Footer = (props: PropType) => {
  return (
    <Root>
      <Container>
        <Grid md={3}>
          <div>
            <Heading>
              <h6>Bohrer Auto Escola</h6>
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              possimus iste non quas maxime sit ab esse modi velit, provident
              sint eos adipisci quae tenetur voluptates exercitationem, aliquam
              repellat tempore!
            </p>
          </div>
          <div>
            <Heading>
              <h6>Contatos</h6>
            </Heading>
            <p>
              <IconContainer>
                <PhoneIcon />
              </IconContainer>
              (55) 12345-6789
            </p>
            <p>
              <IconContainer>
                <BuildingIcon />
              </IconContainer>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
              tempore natus omnis.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Redes Sociais</h6>
            </Heading>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/vinicius.bsantos/"
              >
                <IconContainer>
                  <FacebookIcon />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.linkedin.com/in/viníciusbohrer/"
              >
                <IconContainer>
                  <LinkedInIcon />
                </IconContainer>
                LinkedIn
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://twitter.com/_viniciusbohrer"
              >
                <IconContainer>
                  <TwitterIcon />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </div>
        </Grid>
      </Container>
    </Root>
  );
};

export default Footer;
