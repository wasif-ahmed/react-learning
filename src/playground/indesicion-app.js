console.log('App.js is running');

//JSX - Javascript XML
// template
var app ={
    title :'Starting One',
    subtitle : '',
    options : ['one','two']
}
const onFormSubmit =(e) =>{
e.preventDefault();
const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value ='';
      
        render();
        }
        console.log("options array");
        console.log(app.options);
};

 const removeAll = () => {
    app.options =[];
    render();
 };

 const onMakeDecision =()=>{
   const random = Math.floor(Math.random() * app.options.length);
   const option = app.options[random];
   alert(option); 
 };
    
//Rendering to HTMl
const appRoot = document.getElementById('app'); 

const render = () => {

    var template =(
        <div>
            <h2>{app.title} </h2>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll }>Remove All</button>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Hai yaha par Option': 'No optios'}</p>
            <ol>
               
                <p>{app.options.length}</p>
            </ol>
            {/* } */}
            {
                app.options.map((number) => {
                return <li key={number}>{number}</li>;   
                })
            }
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        
            </form>
        </div>
        );
        ReactDOM.render(template,appRoot);
};

render();
