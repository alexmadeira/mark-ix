import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { completeLoadBar } from '~/store/modules/loadBar/actions';
import { setCurrent } from '~/store/modules/page/actions';

import code from '~/assets/temp/code.jpg';
import Footer from '~/components/Footer';

import {
  Container,
  Header,
  Title,
  ContentBox,
  TextBox,
  Text,
  CodeBox,
  Skills,
  List,
  ListTitle,
  ListList,
} from './styles';

export default function Sobre() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(completeLoadBar());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrent('Sobre'));
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Link to="/">{/* <img src={Logo} alt="" /> */}</Link>
      </Header>
      <ContentBox>
        <Title>Etiam elementum diam in dui lacinia efficitur.</Title>

        <TextBox>
          <Text>
            Vivamus non lorem lobortis, porttitor sem in, tristique sapien.
            Nulla volutpat justo at massa rhoncus suscipit. Ut pulvinar dui sit
            amet leo ultrices consectetur. Quisque eget nunc sit amet nibh
            gravida aliquet. Maecenas mollis ex vel est semper fermentum. Nunc
            et quam volutpat, posuere tortor malesuada, laoreet metus. Curabitur
            sit amet vestibulum augue, at viverra tellus. Fusce ullamcorper nibh
            vitae eros ullamcorper semper. Suspendisse vel diam vulputate,
            tempus risus vitae, iaculis purus. Donec non ex nec velit finibus
            consequat. Cras lectus neque, sodales non ex at, pellentesque
            tristique odio. Nam imperdiet purus ac sodales accumsan. Nam
            eleifend convallis libero, id rutrum ex facilisis sed. Nullam
            facilisis eget nulla lacinia pulvinar.
          </Text>
          <Text>
            Vivamus non lorem lobortis, porttitor sem in, tristique sapien.
            Nulla volutpat justo at massa rhoncus suscipit. Ut pulvinar dui sit
            amet leo ultrices consectetur. Quisque eget nunc sit amet nibh
            gravida aliquet. Maecenas mollis ex vel est semper fermentum. Nunc
            et quam volutpat, posuere tortor malesuada, laoreet metus. Curabitur
            sit amet vestibulum augue, at viverra tellus. Fusce ullamcorper nibh
            vitae eros ullamcorper semper. Suspendisse vel diam vulputate,
            tempus risus vitae, iaculis purus. Donec non ex nec velit finibus
            consequat. Cras lectus neque, sodales non ex at, pellentesque
            tristique odio. Nam imperdiet purus ac sodales accumsan. Nam
            eleifend convallis libero, id rutrum ex facilisis sed. Nullam
            facilisis eget nulla lacinia pulvinar.
          </Text>
        </TextBox>
        <CodeBox>
          <img src={code} alt="" />
        </CodeBox>
      </ContentBox>
      <ContentBox>
        <Skills>
          <List>
            <ListTitle>Skils</ListTitle>
            <ListList>HTML</ListList>
            <ListList>CSS</ListList>
            <ListList>ReactJS</ListList>
            <ListList>React Native</ListList>
            <ListList>NodeJS</ListList>
          </List>
          <List>
            <ListTitle>Experiência</ListTitle>
            <ListList>CoreBis</ListList>
            <ListList>Garage IM</ListList>
            <ListList>Guia Bolso</ListList>
          </List>
          <List>
            <ListTitle>Educação</ListTitle>
            <ListList>CoreBis</ListList>
            <ListList>Garage IM</ListList>
          </List>
          <List>
            <ListTitle>Clientes</ListTitle>
            <ListList>ArtWalk</ListList>
            <ListList>Smiles</ListList>
            <ListList>Mizuno</ListList>
            <ListList>SemParar</ListList>
          </List>
        </Skills>
      </ContentBox>
      <Footer />
    </Container>
  );
}
