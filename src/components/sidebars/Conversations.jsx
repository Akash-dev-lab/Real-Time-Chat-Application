import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <>
    <div className='grid grid-cols-1 gap-3 mt-8'>
    <Conversation />
    <Conversation />
    <Conversation />
    <Conversation />
    </div>
    </>
  )
}

export default Conversations
