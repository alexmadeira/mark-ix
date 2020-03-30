import React from 'react';
import { FaInstagram, FaLinkedinIn, FaBitbucket } from 'react-icons/fa';

import emoji from '~/assets/emojis/01.png';

import {
  Container,
  Header,
  Spotlight,
  Emoji,
  Highlighted,
  Project,
  Title,
  Timer,
  Paragraph,
  Social,
  SocialItem,
} from './styles';

export default function Banner() {
  return (
    <Container>
      <Header>
        <Spotlight>
          <Emoji src={emoji} alt="" />
          <h1>Alex</h1>
          <h1>Madeira</h1>
        </Spotlight>
        <Highlighted>DESENVOLVEDOR WEB </Highlighted>
      </Header>
      <Project>
        <Title>Mizuno E-commerce</Title>
        <Timer />
        <Paragraph>
          Sed tempus ipsum in ante dignissim sollicitudin. Etiam in enim rutrum,
          blandit nibh vel, vehicula ex. Vivamus odio massa, condimentum vel
          enim ac, rhoncus lacinia libero. Nu llam pellentesque et urna sit amet
          hendrerit. Curabitur vel interdum orci. Donec vel blandit est, dictum
          ultrices mauris.
        </Paragraph>
      </Project>
      <Social>
        <SocialItem>
          <a href="/#">
            <FaInstagram />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="/#">
            <FaLinkedinIn />
          </a>
        </SocialItem>
        <SocialItem>
          <a href="/#">
            <FaBitbucket />
          </a>
        </SocialItem>
      </Social>
    </Container>
  );
}
