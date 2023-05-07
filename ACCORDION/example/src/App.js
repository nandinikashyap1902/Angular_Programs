import axios from "axios";
function App() {
// const name = e.target.name.value;
 //const surname = e.target.surname.value;
 //const age = e.target.age.value;
 //const data = {name,surname,age};
 //axios.post("https://jsonplaceholder.typicode.com/posts",{
 // name,
 // surname, //put data object besides of sending javascript object
 // age,
 //})
 //.then((response)=>{
 // console.log(response);
 //})
 //.catch((error)=>{
 // console.log(error);
 //})
//}//
 

  //axios.get("https://jsonplaceholder.typicode.com/posts")
  //.then((response)=>{
  //  console.log(response);
  //})
  //.catch((error)=>{
  //  console.log(error);
  //});

function postDelete(){
  axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((response)=>
  console.log("deleted!!!!!",response)
  .catch((err)=>{
    console.log("error")
  })
)}
  return (
    <div className="App">
      <form>
  <div class="form-group">
    <label >NAME</label>
    <input type="text" class="form-control" id=" name" aria-describedby="emailHelp" placeholder="Enter email" name="name"/>
  </div>
  <div class="form-group">
    <label >SURNAME</label>
    <input type="text" class="form-control" id="surname" placeholder="Password" surname="surname" />
  </div>
  
  <div class="form-group">
    <label >AGE</label>
    <input type="text" class="form-control" id="age"name="age" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="submit" class="btn btn-primary" onClick={postDelete}>Delete</button>
  <button type="submit" class="btn btn-primary">Update</button>
</form>
    </div>
  );
  }
export default App;
