// import "./App.css"
import StudentInfo from "./components/home/Home";
import MyHeader from './components/header/Header';
import Footer from "./components/footer/Footer";
import Memes from "./components/tours/Tours"
import data from './data.json'

function App(){
    // console.log(data);
    let react = "React";
    let studentAge = 24
    let studentAvatar = "https://s3.envato.com/files/229844315/AVATAR%20PEOPLE/NO%20BACKGROUND/JPG/PEOPLE%20ICON-01.jpg"
    return(
        <>
            <MyHeader />
            <h1 id="helloWorld">Hello World</h1>
            <p style={{backgroundColor:"blue"}}>My First {react} Website</p>
            <StudentInfo studentName="Yousef" studentAge={studentAge} studentAvatar={studentAvatar} />
            <Memes memes={data}/>
            <Footer />
        </>
        
    )
}

export default App;