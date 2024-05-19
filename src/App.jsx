import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import Post from './components/Post'
//import {useState} from 'react';
import PostListProvider from './store/post-list-store'

import './App.css'
import PostList from './components/PostList'

function App() {
  const [selectedTab,setSelectedTab]= useState("Home");
 
  return (
    <>
    <PostListProvider>
      <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
        <Header></Header>
        {selectedTab==="Home"?(<PostList></PostList>
        ):
        (<CreatePost></CreatePost>)}
        
        
        <Footer></Footer>
        </div>
        
      </div>
      </PostListProvider>
      
    </>
  )
}

export default App
