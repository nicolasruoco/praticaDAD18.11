import styles from './VotesSummary.module.css'

export default function VotesSummary(votes) {

    return(
        <div className={styles.summaryContainer}>
            <p className={summaryText}>Votos totais: {votes}</p>
        </div>
    )

}