import { createContext, useReducer } from "react";


export const PostList=createContext({
  postList : [],
  addPost : ()=>{},
  deletePost : ()=>{},
});
const postListReducer = (currPostList,action)=>{
  let newPostList=currPostList
  if(action.type === 'DELETE_POST'){
    newPostList=currPostList.filter(post =>post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_POST')
  {
    newPostList=[action.payload,...currPostList];
  }
  return newPostList;
}
const PostListProvider =({children})=>{
  const [postList,dispatchPostList]=useReducer(postListReducer,[]);
  const addPost = (userId,postTitle,postBody,reactions,tags)=>{
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
        id: Date.now,
        title :postTitle,
        body:postBody,
        reactions: reactions,
        userId :userId,
        tags:tags,

      }
    })

  }
  const deletePost = (postId)=>{
    dispatchPostList({
      type : 'DELETE_POST',
      payload :{
        postId,
      }
    });

  }
  return (
    <PostList.Provider value={{
      postList:postList,
      addPost: addPost,
      deletePost:deletePost

    }}>
      {children}
    </PostList.Provider>
  );

}
const DEFAULT_POST_LIST=[{
  id:'1',
  title :'Going to Rajasthan',
  body:'Hi Friends,I am going to Rajasthan for my vacations.Hope to enjoy a lot',
  reactions: 0,
  userId :'prajesh02',
  tags:['vacation','rajasthan','desert'],
},
{
  id:'2',
  title :'Going to Purulia',
  body:'Hi Friends,I am going to Purulia for my vacations.Hope to enjoy a lot',
  reactions: 15,
  userId :'prajesh02',
  tags:['vacation','nature','mountain'],
}
]
export default PostListProvider;