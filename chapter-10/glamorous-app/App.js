import React from 'react';
import glamorous from 'glamorous-native';

const { Image } = glamorous;

const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
});

const Headline = glamorous.text({
  fontSize: 30,
  paddingBottom: 8
});

const SubHeading = glamorous.text({
  fontSize: 26,
  paddingBottom: 8
});

const ButtonText = glamorous.text({
  fontSize: 18,
  color: 'white'
});

const Button = glamorous.touchableHighlight(
  { padding: 10 },
  props => ({backgroundColor: props.warning ? 'red' : 'blue'})
);

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Image
          height={250}
          width={250}
          borderRadius={20}
          source={{ uri: 'http://placehold.it/250/3B5998' }}
        />
        <Headline>I am a headline</Headline>
        <SubHeading>I am a subheading</SubHeading>
        <Button
          onPress={() => console.log('Thanks for clicking me!')}
        >
          <ButtonText>
            Click Me!
          </ButtonText>
        </Button>
        <Button
          warning
          onPress={() => console.log(`You shouldn't have clicked me!`)}
        >
          <ButtonText>
            Don't Click Me!
          </ButtonText>
        </Button>
      </Container>
    );
  }
}
