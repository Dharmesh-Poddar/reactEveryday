import React, { Component } from 'react';
class Counter extends Component {
   
     state={
       Count :0,
       imageUrl: "https://picsum.photos/2000",
       tags: ['tag1','tag2','tag3']


     };

       
    
    handleIncreement = () => {
    
            this.setState({Count: this.state.Count +1});


      //this.setState({Count : this.state.Count +1});

      
       

    };

    
    render() { 
        return (<div>
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <img src="this.state.imageUrl" alt=""/>
            <h1>Hello World</h1>
            <button onClick={this.handleIncreement} className="btn btn-secondary btn-sm">
             Increement
             </button> 
            
          
            
            </div>);

    }

    renderTags(){
      if(this.state.tags==0) return <p>there are no tags</p>;
 return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;


   }

    formatCount(){

        return (this.state.Count===0?'Zero':this.state.Count);


    }

    getBadgeClasses(){
    
         let classes="badge m-2 badge-";
         classes +=this.state.Count==0? "warning":"primary";
         return classes;
     

    }
}
 
export default Counter;