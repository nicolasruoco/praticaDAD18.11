import styles from './CandidateForm.module.css'

export default function CandidateForm({addCandidate}) {

    const createTask = () => {
        const value = document.getElementById('Name').value
        if (value) {
            addTask(value)
            document.getElementById('taskName').value = ''
        }
        else{
            window.alert('Por favor, digite uma tarefa')
            return
        }

    }

    return (
        <div className={styles.form}>
            <input type="text" placeholder='Novo Candidato' id='Name' className={styles.input}/>
            <div className={styles.button} onClick={() => createTask()}>Salvar</div>
        </div>
    )
}