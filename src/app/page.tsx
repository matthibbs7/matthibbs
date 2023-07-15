'use client'
import Cursor from '@/components/Cursor/Cursor';
import DotRing from '@/components/DotRing/DotRing';
import { Gradient } from '@/components/GradientGenerator/Gradient'
import { GradientGenerator } from '@/components/GradientGenerator/GradientGenerator'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis'
import { Work } from '@/components/Work/Work';

const TEXTS = [
	"Hello, I am Matthew Hibbs.",
	"Hola, soy Matthew Hibbs.",
	"Bonjour, je suis Matthew Hibbs.",
	"Hallo, ich bin Matthew Hibbs.",
	"你好，我是马修·希布斯。",
	"こんにちは、私はマシュー・ヒブスです。",
	"Hej, jag heter Matthew Hibbs.",
	"مرحبًا ، أنا ماثيو هيبس.",
	"नमस्ते, मैं मैथ्यू हिब्स हूं।.",
	"안녕하세요 매튜 힙스입니다.",
	"Привет, я Мэтью Хиббс.",
];

export default function Home() {

// Call `initGradient` with the selector to your canvas
useEffect(() => {
  const canvasElement = document.getElementById("gradient-canvas");
  const gradient: any = new Gradient();
  if (canvasElement) {
      gradient.initGradient("#gradient-canvas");
  } else {
      gradient.pause();
  }
}, []);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [hoverArrow, setHoverArrow] = useState<null | 'work' | 'projects' | 'research' | 'contact'>(null)
  const [tv, setTv] = useState<'canvas' | 'work' | 'projects' | 'research' | 'contact'>('canvas');

  useEffect(() => {
    const fadeId = setInterval(() => {
      setFade(!fade);
      if (!fade) {
        setTimeout(() => setIndex(index + 1), 100);
      }
    },
      2900
    );
    return () => {
      clearTimeout(fadeId);
    };
  }, [fade, index]);

  const lenisRef = useRef()

  return (
    <ReactLenis ref={lenisRef} options={{duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}} root>
      <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-24 px-44">
        <DotRing />
        <div className="w-full h-40 flex -mt-10">
          <div className="w-20 flex-col">
            <p onClick={() => setTv('canvas')} style={{fontFamily: 'roobertm', fontSize: '16px', letterSpacing: '4.5px'}}>matthew</p>
            <p onClick={() => setTv('canvas')} style={{fontFamily: 'roobertm', fontSize: '15.5px', marginTop: '3.25px', letterSpacing: '4.5px'}}>hibbs</p>
          </div>
          <div className="w-50 flex ml-auto">
            <p style={{fontFamily: 'roobert', fontSize: '12px'}}>|</p>
            <p className="select-none ml-5" style={{fontFamily: 'roobert', fontSize: '12px'}}>EN</p>
            <p className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white" style={{fontFamily: 'roobert', fontSize: '12px'}}>VN</p>
            <p className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white" style={{fontFamily: 'roobert', fontSize: '12px'}}>中文</p>
          </div>
          <div className="w-20 flex-col ml-40">
            <div onClick={() => setTv('work')} onMouseEnter={() => {setHoverArrow('work')}} onMouseLeave={() => setHoverArrow(null)} className="group flex items-center -ml-7">
              <p style={{fontSize: '10.5px'}} className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">➔</p>
              <p className="transition duration-700 ease-in-out select-none mt-4.5 group-hover:cursor-pointer text-unhovered group-hover:text-white"  style={{fontFamily: 'roobert', fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORK</p>
            </div>
            <div onClick={() => setTv('projects')} onMouseEnter={() => {setHoverArrow('projects')}} onMouseLeave={() => setHoverArrow(null)} className="mt-2 group flex items-center -ml-7">
              <p style={{fontSize: '10.5px'}} className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">➔</p>
              <p className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"  style={{fontFamily: 'roobert', fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS</p>
            </div>
            <div onClick={() => setTv('research')} onMouseEnter={() => {setHoverArrow('research')}} onMouseLeave={() => setHoverArrow(null)} className="mt-2 group flex items-center -ml-7">
              <p style={{fontSize: '10.5px'}} className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">➔</p>
              <p className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"  style={{fontFamily: 'roobert', fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESEARCH</p>
            </div>
            <div onClick={() => setTv('contact')} onMouseEnter={() => {setHoverArrow('contact')}} onMouseLeave={() => setHoverArrow(null)} className="mt-2 group flex items-center -ml-7">
              <p style={{fontSize: '10.5px'}} className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">➔</p>
              <p className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"  style={{fontFamily: 'roobert', fontSize: '12px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT</p>
            </div>
            
          </div>
          
          
        </div>

        {tv ==='canvas' && <canvas className="mt-2" style={{zIndex: '1'}} id="gradient-canvas" data-transition-in />}
        {tv === 'work' && <Work />}
        <p className={`fade-in-out ${index} mt-10`} color='white'>{TEXTS[index % TEXTS.length]}</p>
        {tv ==='canvas' && <GradientGenerator />}
      </main>
    </ReactLenis>
  )
}
