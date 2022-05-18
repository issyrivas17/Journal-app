import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>

   <div
   className='journal__entry-picture'
   style= {{
     backgroundSize: 'cover',
     background: 'url(https://previews.123rf.com/images/pabkov/pabkov1507/pabkov150700397/42366943-tokyo-giappone-21-marzo-distretto-di-shibuya-il-21-marzo-2015-a-tokyo-giappone-il-quartiere-%C3%A8-un-cen.jpg)'

   }}
   > </div>
   <div className='journal__entry-body'>
       <p className='journal__enty-title'>
       Orgullo & Prejucio
    </p>

    <p className='journal__enty-content'>
      Jane Austen
    </p>
   </div>

   <div className='journal__entry-date-box'>
   <span>Friday</span>
   <h4>25</h4>

   </div>

    </div>
  )
}
