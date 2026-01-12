import Intro1 from '../components/Intro1';
import Intro2 from '../components/Intro2';
import Intro3 from '../components/Intro3';

function Articles() {
    return (
        <section className="articles">
            {/* Other article components can be added here (each article directs to a specific page) */}
           <Intro1 />
            <Intro2 />
            <Intro3 />
        </section>
    );
};

export default Articles; 