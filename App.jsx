
import imgUno from './assets/images/img1.jpg';

import MyButton from './components/MyButton';

import WelcomeText from './components/WelcomeText';

import ListFruits from './components/fruts/ListFruits';

import ButtonState from './components/ButtonState';


const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = 'text-center';
    /* const pathImg = 'src/assets/images/img1.jpg'; */
    const user = true;

    const fruits = ['🍎', '🍌', '🍐'];
    const fruit2 = ['🍟', '🌭', '🍕'];

    return (
        <>

            <ButtonState/>

            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={imgUno} alt={`imagen-${title}`} /> <br/>

            <MyButton text='botón 1' />
            <MyButton text='botón 2' />
            <MyButton text='botón 3' />


            {/* --------------- */}
            {/* { user ? <OnlineText/> : <OfflineText/> } */}
            {/* {user && <OnlineText/>} */}
            <WelcomeText user={user} />


            {/* ------------- */}
            <ul>
                <li>{fruits[0]}</li>
                <li>{fruits[1]}</li>
                <li>{fruits[2]}</li>
            </ul>

            <ListFruits fruits={fruit2}/>

        </>
    );
}

export default App;
