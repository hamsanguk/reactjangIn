import './App.css';
import { useState } from 'react';

function App() {

  let post = 'hosting service'
  let [a,aTitle] = useState(['useState 사용','두번째사용','세번째 사용'])
  let [like, likeplus ]=useState(0)
  let [modal,setModal]=useState(false)

  like.map(
    function(a,i){
      let copyLike = [...like]
      
    }
  )
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>
      
      <button onClick={()=>{
       let aCopy = [...a];
       aCopy[0]='stateFunction사용'
       aTitle(aCopy)
      }}>변경</button>

      <button onClick={()=>{
        let alignACoppy=[...a];
        alignACoppy.sort()
        aTitle(alignACoppy)
      }}>글자순정렬</button>

      {/* <div className='list'>
        <h4>{a[0]} <span onClick={()=>{likeplus(like+1)}}>👍</span>{like}</h4>
        <p>
          Dec.24 2021
        </p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>
          Dec.24 2021
        </p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{
          setModal(
            modal==true?modal=false:modal=true
            //!modal
          )
        }}>{a[2]}</h4>
        <p>
          Dec.24 2021
        </p>
      </div>
 */}

      {
        a.map(function(ad,anum){
          return(
          <div className='list'>
        <h4 onClick={()=>{
          setModal(
            // !modal
            modal==true?modal=false:true
          )
        }}>
          {a[anum]}
          <span onClick={()=>{likeplus(like+1)}}>
            👍
          </span>{like}</h4>
        
        <p>
          Dec.24 2021
        </p>
      </div>
          )
        })
      }

      {
        modal==true?<Modal/>:null
      }

    </div>
    //scss confirm
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4 >Title</h4>
        <p><i>date</i></p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
