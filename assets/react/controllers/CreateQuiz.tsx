import React, { useState } from 'react';
import { Button, Card, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { visit } from '../utils/utils';

export default function CreateQuiz() {

  const [content, setContent] = useState('');
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGenerating(true)
    const response = await fetch('/quizzes', {
      method: 'POST',
      body: JSON.stringify({ content }),
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
    setGenerating(false)

    visit(`/quizzes/${data.quiz.id}`)


  }
  
  return (
    <Container maxWidth="sm">
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
          <Typography
            fontWeight="bold"
            component="h2"
            variant="h2"
            marginY={5} >
            Make My Quiz
          </Typography>
        </Grid>
        <Grid item>
          <Card style={{ padding: 15 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Génerer un quiz"
                name="content"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
              <Button disabled={generating} type="submit" variant="contained" fullWidth style={{ marginTop: 20 }}>

                {generating ? <CircularProgress color="secondary" /> : "Générer"}
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
