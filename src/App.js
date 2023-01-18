import './App.css';
import { useState } from 'react';

function App() {
  let [글제목,글제목변경]=useState(['강남우동맛집','남자 코트 세일','여자 코트 세일','작성해본 네번째']);
  let [따봉,따봉변경]=useState([0,0,0,0]);
  let [modal,setModal]=useState(true);


  return(
    <div className='App'>
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      {
        글제목.map((i,n)=>{
          return(
        <div className='list' key={n}>
          <h5 onClick={()=>{
            setModal(!modal)
          }}>{i}</h5>

          <span onClick={()=>{
            let copy=[...따봉];
            copy[n]=copy[n]+1
            따봉변경(copy)        
          }}>👍{따봉[n]}</span>

          <p>대충 날짜들 적음</p>
        </div>
          ) 
        })
      }
      {modal==true?<Modal/>:null}
    </div>
    
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
