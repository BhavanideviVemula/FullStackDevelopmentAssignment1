import Images from './images/lizard.png';
import './styles.css';
function Welcome(){
    return (
    <div>
        <p className="card">
         < img src={Images} alt="Lizard"/>
         <p className="heading4">
        <h1>Lizard</h1>
        <p className="heading1">Lizards are a widespread group of squamate<br></br>
        reptiles with over 6,000 species,ranging across<br></br>
        all continents except Antartica</p>
        <p className="heading2"><b>SHARE &nbsp; &nbsp;LEARNMORE </b></p>
        </p>
        </p>
        
      
       </div>
    );

}
export default Welcome;