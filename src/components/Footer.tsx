import './css/Footer.css'
import UI from '../mock/UI.json'

export const Footer = () => {
  return (
    <footer className='footer' id='footer'>

        <div className='about'>
          <div id='footer-about-title'>
            {UI['Footer-About'].Title}
          </div>
          <div id=' footer-about-content'>
            {UI['Footer-About'].Content}
          </div>
        </div>

        <div className='comunity-adress'>

          <div className='footer-adress'>
            <div id='footer-adress-title'>
              {UI['Footer-Adress'].Title}
            </div>
            <div>
              {UI['Footer-Adress'].Content}
            </div>
          </div>

          <div className='footer-comunity'>

            <div id='footer-comunity-title'>
              {UI['Footer-Community'].Title}
            </div>

            <div className='comunity-container-items'>
              <a>
                {UI['Footer-Community'].Content.About}
              </a>
              <a>
                {UI['Footer-Community'].Content.Contact}
              </a>
              <a>
                {UI['Footer-Community'].Content.Support}
              </a>

            </div>
          </div>

        </div>
    </footer>
  )
}