import './App.css'
import img1 from './img/34.png'
import img2 from './img/35.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'

function App() {
  return (
    <div className="all">
      <div className="side">
        <img src={img1} alt="Foto"></img>
        <h1>RODRIGO MELO</h1>
        <div className="divleg">
          <p>
            Full Stack Web Developer
            <br />
            Currently Working as Freelancer
            <br />
            <br /> JavaScript enthusiast,
            <br />
            interested in web/mobile development.
          </p>
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/rodrigomelon"
        >
          <div className="git">
            <BsGithub />
            <p>GitHub</p>
          </div>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/rodrigo-de-melo-nogueira-655b12233/"
        >
          <div className="linked">
            <BsLinkedin />
            <p>LinkedIN</p>
          </div>
        </a>
        <div className="email">
          <MdEmail />
          <p>rodnogueira21@gmail.com</p>
        </div>
        <div className="phone">
          <MdPhoneAndroid />
          <p>+55 (27) 99721-6891</p>
        </div>
      </div>

      <div className="rest">
        <div className="briefing">
          <h1>BRIEFING</h1>
          <p>
            My first contact with programming was during my teenage years, when
            I caught up myself setting up robots for some online games, but I
            didn't even know I was actually programming. Later on, during my
            graduation in environmental engineering, I had a proper perspective
            about programming (Programming I using C++ and Numerical Algorithms
            I and II). Since then, I've been improving my knowledge in this area
            and keeping myself updated on what's new in the programming
            universe.
          </p>
          <hr size="1" />
        </div>
        <div className="skillst">
          <h1>SKILLS</h1>
          <div className="skills">
            <div className="lista1">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="lista2">
              <ul>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>C++</li>
              </ul>
            </div>
          </div>
          <hr></hr>
        </div>
        <div className="edc">
          <h1>EDUCATION</h1>
          <h2>Federal University of Espirito Santo</h2>
          <h3>BSC Environmental Engineering (2013-2019)</h3>
          <h2>University of Brighton - England</h2>
          <h3>
            BSC Environmental and Civil Engineering - Sandwich Degree
            (2014-2015)
          </h3>
          <h2>Zero to Mastery</h2>
          <h3>The Complete Web Developer (2022)</h3>
          <hr></hr>
        </div>
        <div className="experi">
          <h1>EXPERIENCE</h1>
          <h2>Freelance</h2>
          <h3>APP / Web Developer (2021/2022)</h3>
          <ul>
            <li>- React.js</li>
            <li>- React Native</li>
          </ul>
          <h2>Essencialles Cosmetics</h2>
          <h3>Front-end Developer (2021)</h3>
          <ul>
            <li>- HTML</li>
            <li>- CSS</li>
            <li>- JavaScript</li>
          </ul>
          <h2>Avangar Steel Co.</h2>
          <h3 className="thi">Customer Service (2020)</h3>
          <hr></hr>
        </div>
        <div className="projects">
          <h1>PROJECTS</h1>
          <div className="wtdiv">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://rodrigomelon.github.io/wtd2/"
            >
              <img className="wtd" src={img2} alt="wtd" />
            </a>
            <div className="textwtd">
              <h2>What's The Distance?</h2>
              <p className="pp">
                A React.js based fully responsive website/app capable of finding
                the distance between two zip-codes, using a web service API.
              </p>
              <a
                className="linkwtd"
                rel="noreferrer"
                target="_blank"
                href="https://rodrigomelon.github.io/wtd2/"
              >
                <div className="wtda">
                  <p className="p1">https://rodrigomelon.github.io/wtd2/</p>
                  <p className="p2">
                    https://rodrigomelon.
                    <br />
                    github.io/wtd2/
                  </p>
                </div>
              </a>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default App
