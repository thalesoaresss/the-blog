import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />
      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
      >
        <Link href='#' className='w-full h-full overflow-hidden rounded-xl'>
          <Image
            className='group-hover:scale-105 transition w-full h-full object-cover object-center'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='Titulo do post'
            priority
          />
        </Link>
        <div className='flex flex-col gap-3 sm:justify-center'>
          <time className='text-slate-600 text-sm' dateTime='2026-06-22'>
            {' '}
            22/06/2026 18:17
          </time>
          <PostHeading url='#' as='h1'>
            Titulo do post
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            veniam. Eligendi, itaque exercitationem ipsam illum consequatur odit
            ex, harum voluptas blanditiis voluptate tempore quaerat recusandae
            quidem. Obcaecati numquam amet maxime.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold py-8 text-center'>Aqui e o footer</p>
      </footer>
    </Container>
  );
}
