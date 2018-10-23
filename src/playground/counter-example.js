
// CounterExample
let count =0;
const addOne = () => {
    count++;
    renderCounterApp();
};
//Rendering to HTMl
const appRoot = document.getElementById('app'); 
const renderCounterApp = () => {
    const templateThree = (
        <div>
        <h1>Count : {count}</h1>
         <button className="btn btn-primary" onClick={addOne}>+1</button>
       <button className="btn btn-primary" onClick={()=>{
         count--;
         renderCounterApp();
        }
        }>-1</button>
        <button className="btn btn-primary"ol onClick={()=>{  count = 0; renderCounterApp();}}>Reset</button> 
        </div>
    );
    ReactDOM.render(templateThree,appRoot);
};
renderCounterApp();

//templateTwo
var templateTwo =(
    <div>
        <h1>Wasif Ahmed</h1>
        <ol>
            <li>Age : 18</li>
            <li>Location : Mumbai</li>
        </ol>
    </div>
);

