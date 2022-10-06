import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import TopBar from './TopBar';
import Pricing from './Pricing';

function App() {
  var cardDetails=[
    {
      name:"Free",
      price:"0",
      feature:[
        {
          line:"10 users include"
        },
        {
          line:"2 GB of storage"
        },
        {
          line:"Email support"
        },
        {
          line:"Help center access"
        }
      ]
    },
    {
      name:"pro",
      price:"15",
      feature:[
        {
          line:"20 users include"
        },
        {
          line:"10 GB of storage"
        },
        {
          line:"Priority email support"
        },
        {
          line:"Help center access"
        }
      ]
    },
    {
      name:"Enterprise",
      price:"29",
      feature:[
        {
          line:"30 users include"
        },
        {
          line:"15 GB of storage"
        },
        {
          line:"Phone and email support"
        },
        {
          line:"Help center access"
        }
      ]
    }
  ]
  return (
    <div className='container py3'>
      <header>
        <TopBar></TopBar>
        <Pricing></Pricing>
      </header>
      <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {
          cardDetails.map((item)=>{
            return <Card item={item}></Card>;
          })
        }
        
              </div>
      </main>
    </div>
  );
}

export default App;
