import './main.css'
import { useSelector } from 'react-redux';

const Main = () => {
    const works = useSelector(state => state.works);

    return (
        <main>
    <div className="container">
        <div className="main_container-1">
            <div className="main_block">
                <h1>
                    Hi, I am John, <br/>
                    Creative Technologist
                </h1>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/>
                    sint.Velit officia consequat duis enim velit mollit. Exercitation veniam <br/>
                    consequat sunt nostrud amet.
                </p>
                <button>Download Resume</button>
            </div>
            <img src="./image/main/Ellipse1.png" alt=""/>
        </div>
        <div className="main_container-2">
            <div className="block_container">
                <p>Recent posts</p>
                <div className="block-2">
                    <div className="main_block_1">
                        <h1>
                            Making a design system from <br/>
                            scratch
                        </h1>
                        <p>12 Feb 2020      |    Design, Pattern</p>
                        <p>Amet minim mollit non deserunt ullamco est sit <br/> 
                            aliqua dolor do amet sint. Velit officia consequat <br/>
                             duis enim velit mollit. Exercitation veniam <br/>
                              consequat sunt nostrud amet.
                            </p>
                    </div>
                    <div className="main_block_2">
                        <h1>
                            Creating pixel perfect icons in Figma
                        </h1>
                        <p>12 Feb 2020      |    Figma, Icon Design</p>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit <br/> aliqua dolor do amet sint. Velit officia consequat <br/> duis enim velit mollit. Exercitation veniam <br/> consequat sunt nostrud amet.    
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="containerCard">
            <div className="cardTitle">
              <p>Featured works</p>
            </div>

    <div>
      {works.map(work => (
        <div className="card" key={work.id}>
          <img src={work.image} alt="Image" className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{work.title}</h3>
            <div className="y-b">
              <p className="card-year">{work.year}</p>
              <button className="card-btn">{work.type}</button>
            </div>
            <p className="card-text">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
            
        </div>
        
    </div>
</main>

    )
}

export default Main