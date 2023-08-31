import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import QuizList from './components/Quizlist';



function App() {
  const [userName, setUserName] = useState("");
  const [quizList, setQuizList] = useState(QuizList)
  const quiz = [...QuizList]

  const ChangeEvent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;
    
    switch(true){
      // includes("값") > 해당 문자열이 있는지 체크하는 속성
      case classValue.includes("name") :
        console.log("이름값이 바뀜")  
      break;
      case classValue.includes("random") :
        console.log("바뀜")
      break;
      case classValue.includes("cnt") :
        console.log("값 바뀜")
      break;
      case classValue.includes("type") :
        console.log("타입 바뀜")
      break;
      default:
        console.log("데이터 없음")
    }
  }
  useEffect(()=>{

  },[]) //로딩후 딱 한번만 실행되는 문법 ,[] - 바뀌는 것 만 []안에 넣으면 된다.
  return (
    <>
      <Routes>
        <Route path='/' element={<Main ChangeEvent={ChangeEvent}  userName={userName}  quizList={quizList}/>}/>
        <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
      </Routes>
    </>
  );
}

export default App;
