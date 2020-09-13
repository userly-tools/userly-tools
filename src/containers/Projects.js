import React from 'react'
import Dashboard from './Dashboard'

const ProjectContainer = () => {
  
  return (
    <>
      <Dashboard pass={Project} activeTab={0} />
    </>
  );

}


const Project = () => {
  return (
    <>
      PROJECTS
    </>
  )
}

export default ProjectContainer;