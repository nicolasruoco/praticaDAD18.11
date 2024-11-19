import styles from './CandidateItem.module.css'

export default function CandidateItem({candidate, vote, remove}){


    return(
        <div key={candidates.name} className={styles.listItem}>
                <p className={styles.name}>{candidate.name}</p>
                <p className={styles.votes}>Votos: {candidate.votes}</p>
                <div className={styles.actions}>
                    <div className={styles.voteButton} onClick={vote(candidate.name)}>Votar</div>
                    <div className={styles.deleteButton} onClick={remove(candidate.name)}>X</div>
                </div>
            </div>
    )
}