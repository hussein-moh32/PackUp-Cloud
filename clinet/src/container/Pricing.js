/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Header from '../component/Header';
import useFetch from 'use-http'


function Home() {
    const [uploadedfiles, setUploadedfiles] = useState([])


    
    const{get, post, response, loading, error } = useFetch('http://localhost:3000')

    useEffect(async() => {
        const uploadedfiles = await get('/uploadedfiles')
        console.log(uploadedfiles)
        setUploadedfiles(uploadedfiles)
    }, [])

    
  return (
    <div className="Home-conatiner">
        <Header />
        <div>
            {uploadedfiles.map(
            (uploadedfiles) => {
                return(<div>{uploadedfiles.fileName}</div>)
            }
            )}
        </div>
        
    </div>
  );
}

export default Home;
