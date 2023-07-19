'use client'
import { useEffect } from "react";

// Create your instance


export const Footer = () => {

  return (
    <div className='w-full flex-col mt-20' style={{height: '450px'}}>
        <div className='w-full flex items-center'>
            <p className="select-none" style={{fontSize: '10px'}}>➔</p>
            <p className="select-none ml-4" style={{fontFamily: 'roobertb', fontSize: '10px'}}>Contact</p>
        </div>
        <div className='w-full flex items-center'>
            <p className="mt-2" style={{fontFamily: 'roobert', fontSize: '72px'}}>Keep in touch</p>
            
        </div>
        <div className='w-full flex items-center mt-10'>
            <p color="#777671" style={{fontFamily: 'roobert', fontSize: '10px', color: '#6D6D6D'}}>Lets build something great</p>
            
        </div>
        <div className='w-full flex-col items-center mt-3'>
            <p className='gradient-text hover:cursor-pointer hover:opacity-80' color="#777671" style={{fontFamily: 'roobert', fontSize: '2vw', color: '#6D6D6D'}}>hibbs.matthew@protonmail.com</p>
            <div className='hover:cursor-pointer' style={{height: '0.5px', width: '29vw', borderBottom: '1px solid transparent', borderImage: 'linear-gradient(to right, #70CFA3 0%, #EEFFAB 50%, #CF636E 100%)', borderImageSlice: '1'}} />
            
        </div>
        <div className='w-full flex items-center mt-14'>
            <p color="#777671" style={{fontFamily: 'roobert', fontSize: '10px', color: '#6D6D6D'}}>Connect with me</p>
            
        </div>
        <div className='w-full flex items-center mt-3'>
            <p className="hover:cursor-pointer hover:opacity-80" color="#777671" style={{fontFamily: 'roobert', fontSize: '1.3vw', color: '#999999', marginTop: '14px'}}>LinkedIn</p>
            <p className="hover:cursor-pointer hover:opacity-80" color="#777671" style={{fontFamily: 'roobert', fontSize: '1.3vw', color: '#999999', marginTop: '14px', marginLeft: '14px'}}>GitHub</p>
            <p className="hover:cursor-pointer hover:opacity-80" color="#777671" style={{fontFamily: 'roobert', fontSize: '1.3vw', color: '#999999', marginTop: '14px', marginLeft: '14px'}}>DevPost</p>
        </div>

        <div className='w-full flex items-center mt-24'>
            <p color="#777671" style={{fontFamily: 'roobert', fontSize: '10px', color: '#6D6D6D'}}>© Designed and developed by matthew hibbs. [2023] All rights reserved.</p>
            
        </div>
    </div>
  );
}
