import React from "react";

class ErrorBoundary extends React.Component{

     constructor(props){
          super(props);
          this.state={ hasError: false }
     }


     static getDerivedStateFromError(error){
          return { hasError : true }
     }

     componentDidCatch(error, info){
          console.error(`Error found by Error Boundary : ${error}`);
          console.log(`Component Stack : ${info}`);
     }


     render(){
          if(this.state.hasError){ 
               return (
               <div className="text-center">
                    <h2>Something went Wrong 😑 ?</h2>
                    <button className="btn btn-outline-danger" onClick={() => window.location.reload()}>Reload Page</button>
               </div>
               )
      }
          return this.props.children;
     }


}

export default ErrorBoundary;