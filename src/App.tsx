import React, { useState } from 'react';
import styled from 'styled-components';

import jokes from './jokes.json'

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 200px;
  color: red
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://cdn.discordapp.com/attachments/531964183559012393/951296860394487808/listao_de_ano_novo_1.png);
  background-size: cover;
  width: 100%;
  heigth: 100%;
`

const Joke = styled.h4`
  font-family: comic-sans;
  color: red
`

const Answer = styled.h3`
  font-family: comic-sans;
  color: red
`

interface IJoke {
  joke: string;
  answer: string;
}

function App() {
  const [joke, setJoke] = useState<IJoke>({} as IJoke)

  const clickHandler = () => {
    const randomIndex = Math.round(Math.random() * (jokes.length - 1))
    const randomJoke = jokes[randomIndex];
    setJoke(randomJoke)

    const sound = new Audio(require("./assets/joke_drum_effect.mp3")) 
    sound.play();
  }

  return (
    <Container>
      <Title>Gerador de piadas do Duarte!</Title>

      <div>
        <button onClick={clickHandler}>Gerar piada do Duarte</button>
      </div>
      <Joke>{joke.joke}</Joke> 
      <br />
      <Answer>{joke.answer}</Answer>
    </Container>
  );
}

export default App;
