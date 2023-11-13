import { useEffect, useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log('Counter: ' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button
        appearance='primary'
        arrow='right'
        onClick={() => setCounter((x) => x + 1)}
      >
        Узнать подробнее
      </Button>
      <Button appearance='ghost' arrow='down'>
        Узнать подробнее
      </Button>
      <Paragraph size='L'>Large text</Paragraph>
      <Paragraph>Test text</Paragraph>
      <Paragraph size='S'>Small text</Paragraph>
      <Tag size='s'>Small ghost</Tag>
      <Tag size='m' color='red'>
        Medium red
      </Tag>
      <Tag color='green'>Small green</Tag>
      <Tag color='primary'>Small primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
