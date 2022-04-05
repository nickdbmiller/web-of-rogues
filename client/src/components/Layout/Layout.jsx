import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
