import { Button, Container, MobileStepper } from '@mui/material';
import React, { useState } from 'react'
import Question from './Question';
import { visit } from '../utils/utils';

const Quiz = (props) => {
  const quiz = JSON.parse(props.quiz);
  const [activeStep, setActiveStep] = useState(0)
  const [quizResult, setQuizResult] = useState([])
  const [loading, setLoading] = useState(false)

  const isLastQuestion = () => {
    return activeStep === quiz.questions.length - 1
  }

  const handleSumit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData(e.target)
   
    quizResult.push({ questionId: quiz.questions[activeStep].id, answerId: parseInt(formData.get('answer')) });

    if (!isLastQuestion()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      return;
    }

    const response = await fetch(`/quizzes/${quiz.id}`, {
      method: 'POST',
      body: JSON.stringify({ quizResult }),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setLoading(false)

    visit(`/quizzes/result/${data.quizResult.id}`)
  }

  return (
    <Container maxWidth="sm">
      <MobileStepper
        backButton={<Button style={{ visibility: "hidden" }}>Back</Button>}
        nextButton={<Button style={{ visibility: "hidden" }}>Next</Button>}
        activeStep={activeStep}
        steps={quiz.questions.length}
        variant="dots"
        sx={{ flexGrow: 1 }}
        position="static" //si en leve, il  n'affiche pas 
      />
      <form onSubmit={handleSumit}>
        <Question question={quiz.questions[activeStep]} />
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
          >
            {isLastQuestion() ? "Terminer" : "Suivant"}
          </Button>
        </div>

      </form>
    </Container>

  )
}

export default Quiz