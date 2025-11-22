import Card from "./Card";

function Section( prop ) {

  return (
     <section className="my-3">
      <h2>Section Component</h2>
      <p>Its a paragrapgh</p>
      <p> {prop.y() } </p>
      
      <div className="row">
        <div className="col-6">
          <Card price={82500} title="IPhone 17" />
        </div>
        <div className="col-6">
          <Card price={135000} title="Iphone 17 pro" />
        </div>
      </div>
      
     </section>
    
  );
}

export default Section;