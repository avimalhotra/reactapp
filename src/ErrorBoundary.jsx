import React from "react";

class ErrorBoundary extends React.Component{
     constructor(props){
          super(props);
          this.state={hasError:false}
     }

     static getDerivedStateFromError(){
          return { hasError:true}
     }


     componentDidCatch(error, info) {
          console.error("Error caught by Error Boundary:", error);
          console.info("Component stack:", info);
     }



    render(){
          if(this.state.hasError){ 
               return (
                    <>
                    <h3>Something went wrong</h3>
                    <p>Error in child component</p>
                    <button className="btn btn-danger" onClick={() => location.reload()}>Reload Page</button>
                    </>
               )
           }
          return this.props.children;
    }
     

}

export default ErrorBoundary;