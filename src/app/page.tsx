import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { FeaturedPost } from '@/components/FeaturedPost/inedx';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold py-8 text-center'>Aqui e o footer</p>
      </footer>
    </Container>
  );
}
