import { Link } from 'react-router-dom';
import './header.css';

const   Header = () => {
    return (
        <header>
            <nav>
                <Link to ="/">Home</Link>
                <Link to="/works">Works</Link>
            </nav>
        </header>

    )
}

export default Header