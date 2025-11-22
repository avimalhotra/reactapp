function Card(prop){
     // console.log(prop);                        // object
     return (
          <div className="card">
               <div className="card-body">
                    <h3 className="card-title"> {prop.title} </h3>
                    <p>Price: ₹{prop.price.toLocaleString('en-in')}</p>
                    <p className="card-text"> <strong>{prop.title}</strong> is the latest mobile phone by Apple with latest chip and features available now in India. </p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
               </div>
          </div>
     )
}

export default Card;