'use client'
import { Gradient } from '@/components/GradientGenerator/Gradient'
import { GradientGenerator } from '@/components/GradientGenerator/GradientGenerator'
import Image from 'next/image'
import { useEffect, useState } from 'react';

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 px-44">
      <div className="w-full h-40 flex -mt-10">
        <div className="w-20 flex">
          <p style={{fontFamily: 'roobertm'}}>matthew hibbs</p>
        </div>
        <div className="w-50 flex-col ml-auto">
          <p style={{fontFamily: 'roobert', fontSize: '12px'}}>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 中文</p>
        
        </div>
        <div className="w-20 flex-col ml-40">
          <p style={{fontFamily: 'roobert', fontSize: '12px'}}>WORK</p>
          <p className="mt-2.5 hover:cursor-pointer text-unhovered hover:text-white" style={{fontFamily: 'roobert', fontSize: '12px'}}>PROJECTS</p>
          <p className="mt-2.5" style={{fontFamily: 'roobert', color: '#777672', fontSize: '12px'}}>RESEARCH</p>
          <p className="mt-2.5" style={{fontFamily: 'roobert', color: '#777672', fontSize: '12px'}}>CONTACT</p>
        </div>
        
        
      </div>
      <canvas id="gradient-canvas" data-transition-in />
      <p className={`fade-in-out ${index} mt-10`} color='white'>{TEXTS[index % TEXTS.length]}</p>
      <GradientGenerator />
    </main>
  )
}
