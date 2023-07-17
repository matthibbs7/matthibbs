'use client'
import { useEffect } from "react";

// Create your instance


export const Work = () => {

  return (
    <div className='w-full flex' style={{height: '450px', border: '1px solid #777671'}}>
        <div className='w-1/3 h-full overflow-scroll'>
            <div className=' h-16 flex items-center px-6' style={{borderBottom: '1px solid gray'}}>
                <p style={{fontFamily: 'roobert', fontSize: '14px'}}>Amazon</p>
            </div>
            <div className='h-16 flex items-center px-6' style={{borderBottom: '1px solid gray'}}>
                <p style={{fontFamily: 'roobert', fontSize: '14px'}}>Datadog</p>
            </div>
            <div className=' h-16 flex items-center px-6' style={{borderBottom: '1px solid gray'}}>
                <p style={{fontFamily: 'roobert', fontSize: '14px'}}>Target</p>
            </div>
            <div className='h-16 flex items-center px-6' style={{borderBottom: '1px solid gray'}}>
                <p style={{fontFamily: 'roobert', fontSize: '14px'}}>Rollsolid.com</p>
            </div>
            <div className=' h-16 flex items-center px-6' style={{borderBottom: '1px solid gray'}}>
                <p style={{fontFamily: 'roobert', fontSize: '14px'}}>Rollsolid.com</p>
            </div>
            
        </div>
        <p color='white'>Work</p>
    </div>
  );
}
