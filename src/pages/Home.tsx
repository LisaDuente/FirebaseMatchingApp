import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import {useEffect, useState} from 'react';
import { userCollection } from '../lib/Controller';
import { User } from '../types/user';
import "../styles/bootStrapHome.css"
import Information from '../components/BootstrapInformation';
import { getCurrentUser, getAllUsers, getMatchesWithCounter } from '../lib/matching';
import { matchCounter } from '../types/matchCounter';

function Home() {
    const [matches, setMatches] = useState<matchCounter[]>()

    useEffect(() => onSnapshot(userCollection,(snapshot: QuerySnapshot<DocumentData>)=> {
        const user: User = getCurrentUser(snapshot)
        const users: User[] = getAllUsers(snapshot)
        const matches: matchCounter[] = getMatchesWithCounter(users, user)
        setMatches(matches.filter((matchCounter) => matchCounter.counter > 0));
    }),
    []
    )
    matches?.sort((a,b) => b.counter - a.counter)

  return (
    <div className='home'>
        {matches && matches.length ? (
            <div className='userInformation'>
                {
                    matches?.map((matchCounter) => (
                            <Information key={matchCounter.user.id+"info"} match={matchCounter} />
                        ))
                }
            </div>
        ) : (
            <h2>No user information!</h2>
        )}
        
    </div>
  );
}

export default Home;
