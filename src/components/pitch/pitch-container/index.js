import './styles.css';

import PitchSvg from '../svg';
import Player from '../../player';

const PitchContainer = ({children}) => {
    const getPlayers = (numberOfPlayers) => {
        let players = [];
    
        for (let index = 0; index < Number(numberOfPlayers); index++) {
            players.push(<Player key={`player-${index}`} />);
        }
        
        return players;
    }

    return (
        <div className='pitch-container'>
            {children(getPlayers)}
            <PitchSvg />
        </div>
    )
}

export default PitchContainer;