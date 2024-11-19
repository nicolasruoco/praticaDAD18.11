import styles from './VotingApp.module.css'
import CandidateForm from "../CandidateForm/CandidateForm";
import CandidateList from "../CandidateList/CandidateList";
import VotesSummary from "../VotesSummary/VotesSummary";
import { useState } from "react";

function VotingApp() {

    const [candidates, setCandidates] = useState([])

    const addCandidate = (name) => {
        setCandidates([...canditates, {name: name, votes: 0}])
    }

    const addVote = (name) => {
        const candidate = candidates.filter((candidate) => candidate.name === name)[0]

        candidate.votes += 1

        setCandidates([...tasks])
    }

    const removeCandidate = (name) => {
        setCandidates(candidates.filter((candidate) => candidate.name !== name))
    }

    const sumVotes = () => {
        let quant = 0
        candidates.forEach(
            quant += candidates.votes
        )
    }

    return(
        <div className={styles.appContainer}>
            <CandidateForm addCandidate={addCandidate}/>
            <CandidateList canditates={candidates} addVote={addVote} removeCandidate={removeCandidate}/>
            <VotesSummary votes={sumVotes()} />
        </div>
    )
}

export default VotingApp