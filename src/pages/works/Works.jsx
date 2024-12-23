import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { useSelector } from "react-redux"
const Works = () => {
    const works = useSelector(state => state.works);
    return (
        <>
        <Header />
            <main>
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
            </main>
        <Footer />
        </>
    )
}

export default Works