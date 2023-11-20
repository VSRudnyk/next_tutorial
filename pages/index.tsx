import { useEffect, useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
