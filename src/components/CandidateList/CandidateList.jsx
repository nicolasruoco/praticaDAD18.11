import styles from './CandidateList.module.css'
import CandidateItem from '../CandidateItem/CandidateItem'

export default function CandidateList({candidates, addVote, removeCandidate}){

    const vote = (name) =>{
        addVote(name)
    }

    const remove = (name) =>{
        removeCandidate(name)
    }

    return(
        <div className={styles.listContainer}>
            <h1 className={styles.header}>Candidatos</h1>

            {candidates.map((candidate) => 
            <CandidateItem key={candidate.name} candidate={candidate} vote={vote} remove={remove} />
            )}

        </div>
    )

}