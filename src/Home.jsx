import React from 'react'
import TextForm from './TextForm'
// import About from './About'

export default function Home(props) {
  return (
    <>

    <TextForm heading="Enter the text to Analyze text" mode={props.mode}/>
    </>
  )
}
