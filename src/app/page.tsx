// app/page.tsx
'use client';

import VersoIntro from '@/app/home/VersoIntro';
import HomeIndex from '@/app/home/HomeIndex';
import 'animate.css';
import Sinopses from './components/Sinopses';


export default function Page() {
  return (
    <>
      <VersoIntro />
      <HomeIndex  />
      <Sinopses />
    </>
  );
}
