import logo from './logo.svg';
import './App.css';



function App() {
  function submit(){
    if(document.getElementById('edittext').value===''){
        alert("null value");
    }
    else{
      let txt=document.getElementById('edittext').value;
      const data = new FormData();
      data.append('query',txt);
      fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: data
      }).then(response => {
      response.json().then(body => {
      console.log(body.file);
      });
      });
    }
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <input type='text' id='edittext' placeholder='enter comma separated roll nos.'></input>
        <input type='submit' id='sub' onClick={submit}></input>
      </header>
    </div>
  );
}

export default App;
