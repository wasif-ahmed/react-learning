
var checkButton =false;

const toggleVisibility = () =>
{
    checkButton = !checkButton;
    chalenge();

}
//Rendering to HTMl
const appRoot = document.getElementById('app'); 
const chalenge = () => {
  const template =(
      <div>
          <p>Visibility Toggle </p>
          <button onClick={toggleVisibility}>
              {
                  checkButton ? 'HIdeDetails ' : 'ShowDetails'
              }          </button>
         {
             checkButton && (
                 <div><p>Hey u can see me as u have clicked the button</p></div>
             )
         }
      </div>
  );
  ReactDOM.render(template,appRoot);
};
chalenge();