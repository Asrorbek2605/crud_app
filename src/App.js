import React,{useState,useRef} from "react";

function App() {
let [email,setEmail] = useState('')
let [password,setPassword] = useState('')
  let [users,setUsers] = useState([]);
let watchUpdate=0
email = useRef();
password = useRef();
const AddUser = (event)=>{

  event.preventDefault();
  if(email.current.value.trim() == "" || password.current.value==""){
   alert("iltimos oxirigacha toldiring")
   return
  }
  if(watchUpdate!==0){
    let findUser=users.find(user=>user.id==watchUpdate)
    findUser.email=email.current.value
    findUser.password=email.current.password
    setUsers([...users])
  email.current.value=""
  password.current.value=""
    watchUpdate=0
    return
  }
  if(watchUpdate==0){
    let newUser = {
      id:users.length+1,
      email:email.current.value,
      password:password.current.value,
    }
 users.push(newUser)
    setUsers([...users])
  email.current.value = ""
  password.current.value = ""
}};
const deleteUser = (id)=>{
  users=users.filter(user=>user.id!==id);
setUsers([...users]);
};
const updateUser =(id)=>{
  const findUser=users.find(user=>user.id==id);
  email.current.value=findUser.email;
  password.current.value=findUser.password;
  watchUpdate = findUser(id);
}
  return (
<div className={"container"}>
  <div className={"row"}>
<div className={"col-md-6"}>
  <form onSubmit={AddUser}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" ref={email} className="form-control"  />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" ref={password} className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary form-control">Add USer</button>
  </form>

</div>
    <div className={"col-md-6 mt-3"}>
      <h3>{users.length ==0?"Hozircha userlar yoq":"Umumiy userlar soni:"+users.length}</h3>
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">#Id:</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delate</th>
                </tr>
                </thead>
                <tbody>

                {users.map((user)=>{
                return(
                  <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td onClick={()=>updateUser(user.id)}><button type={"button"} className={"btn btn-primary"}>Update</button></td>
                  <td onClick={()=>deleteUser(user.id)}><button type={"button"} className={"btn btn-danger"}>Delete</button></td>
                  </tr>

                  )})}
                </tbody>
              </table>
    </div>
  </div>
</div>
  );
}

export default App;
