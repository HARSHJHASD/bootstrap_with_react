import data from './data';
import Card from './Card';

function App() {
  return (
    
    <div>
      <div>
      <h1>Personal Digital Assistant.</h1>
      </div>
        <div className="container">
      <div className="row">
     {
       data.map((d)=>
       {
        return(
        <Card image={d.image} name={d.name} description={d.description} />
        );
       })
     }
     </div>
     </div>
    </div>
  )
}



export default App;
