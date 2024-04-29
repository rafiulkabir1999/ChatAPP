import React from 'react'
import Sidenav from '../components/Sidenav'
import Chatbox from '../components/Chatbox'
import Infobox from '../components/Infobox'
function Page() {
  return (
    <div className=''>
       <Sidenav />
       <Chatbox/>
       <Infobox />
    </div>
  )
}

export default Page