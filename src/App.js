
import data from './data';
import Card from './Card';





function App() {
  return (
    <div>
      <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
          Personal Digital Assistant
          </p>
        </div>
      </section>
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
