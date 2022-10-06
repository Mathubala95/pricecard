//component name start should be Caps 
//component should return something
//component only return single element
function Card(props) {
    return  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm"> 
        <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{props.item.name}</h4>
        </div>
        <div className="card-body">
            <h1 className="card-title pricing-card-title">{props.item.price}<small className="text-muted fw-light">/mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
                {
props.item.feature.map((element)=>{
    return <li>{element.line}</li>
})
                }
                </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
        </div>
    </div>
</div>
        
    
    
    
}
export default Card;