import photo from './assets/images/photo.png'
import './App.css';
import { useState } from 'react';
import textRu, { textEng } from './data';

const App = () => {
  const [languageTitle, setLanguageTitle] = useState('Eng')
  const [text, setText] = useState(textEng) 

  const onClickButtonLanguage = () => {
    if(languageTitle === 'Eng') {
      setLanguageTitle('Ru')
      setText(textRu)
    } else if (languageTitle === 'Ru') {
      setLanguageTitle('Eng')
      setText(textEng)
    }
  }

  return (
    <div className="App">
      <div className='container' >
        <header>
          <h1 className='title' >Egor Holikov</h1>
          <hr className='section' width="376" />
          <button onClick={onClickButtonLanguage} >{languageTitle}</button>
        </header>
        <section>
          <main>
            <img src={photo} />
            <hr width='1037' />
          </main>
          <main>
            <p>{text}</p>
            <hr width='1037' />
          </main>
        </section>
        <footer>
          <a href='https://t.me/alonelux' >Telegram</a>
          <h4>By Kholikov Egor</h4>
        </footer>
      </div>   
    </div>
  );
}

export default App;
