import Client from '../Client/Client';
import Do from '../Do/Do';
import OpenSource from '../OpenSource/OpenSource';
import Team from '../Team/Team';
import Work from '../Work/Work';
import styles from './Body.module.scss';

function Body() {
    return (
        <div className={styles.body}>
            <Client />
            <Do />
            <Work />
            <Team />
            <OpenSource />
        </div>
    );
}

export default Body;
