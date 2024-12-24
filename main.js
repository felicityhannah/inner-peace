import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
// Add these classes to the main container
<div className={`
  ${embedded 
    ? 'h-full w-full' 
    : 'fixed bottom-6 right-6 w-96 h-[600px] sm:w-[400px]'
  }
  transform transition-all duration-300
  ${isMinimized ? 'h-14 w-14' : ''}
`}>


setupCounter(document.querySelector('#counter'))
