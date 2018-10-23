class Indecision extends React.Component {
render(){

    const title= 'Indecision';
    const subtitle ='Put your Life in the hands of cat Kitten';
    let options = ['One', 'Two', 'Three'];
   return (<div>
     <Header title={title} subtitle={subtitle}/>
     <Actions />
     <Options options={options}/>
     <AddOptions />  
    </div>
   );
}
}

class Header extends React.Component {
    render() {
        return (
           <div>
               <h1>{this.props.title}</h1>
               <h3>{this.props.subtitle}</h3>
           </div>
        );
    }
}

class Actions extends React.Component {
    handlePick(){
        alert('Handle');
    }
    render() {
        return (
          <div>
              <button onClick={this.handlePick}>What should I do?</button>
          </div>
        );
    }
}
{/* {this.props.options.map((option)=> <p key={option}>{option}</p>)} */}
class Options extends React.Component {
   removeAll(){
       alert('This is alert for remove all');
   }
   
    render() {
        return (
          <div>
               <button onClick={this.removeAll}>Remove All</button>
            { 
             this.props.options.map((option)=> <Option key={option} optionText={option}/> )
            
            }
              
          </div>
        );    
    }
}



class Option extends React.Component {
    render() {
        return (
          <div>
            {this.props.optionText}
          </div>
        );
    }
}
class AddOptions extends React.Component {
  
    handleAddOptions (e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    
        if(option){
            alert(option);      
   }
} 
    render() {
        return (
          <div>
           <form onSubmit={this.handleAddOptions}>
            <input type="text" name="option" />
            <button>Add Option</button>
           </form>
          </div>
        );
    }
}

// const jsx =(
//     <div>
//         <Header />
//         <Actions />
//         <Options />
//         <AddOptions />
        
//     </div>
// );

ReactDOM.render(<Indecision />,document.getElementById('app'));