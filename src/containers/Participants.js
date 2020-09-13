import React from 'react'
import Dashboard from './Dashboard'

const ParticipantContainer = () => {
  
  return (
    <>
      <Dashboard pass={Participants} activeTab={1} />
    </>
  );

}


const Participants = () => {
  return (
    <>
      PARTICIPANTS
    </>
  )
}

export default ParticipantContainer;