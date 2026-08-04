import Navbar from "./compounds/Navbar";
import Login from "./compounds/Login";
import Student from "./compounds/Student";
import Admin from "./compounds/admin";
import Trainer from "./compounds/Trainer";

function App(){

  let islogged=true
 let role = parseInt(prompt("Choose option 1.student 2.trainer 3.admin"))

 let content;

 if(islogged)
 {
 switch(role){
  case 1:
    content = <Student/>
    break
  case 2:
    content = <Trainer/>
    break
  case 3:
    content = <Admin/>
    break
  default:
    content = <Login/>
 }
}
else{
  content = <Login/>
}

return(
  <div>
    <Navbar/>
    {content}
  </div>
)

}

export default App;