<?php

namespace App\Service;

use App\Entity\Quiz;
use App\Entity\QuizResult;
use App\Repository\QuizResultRepository;

class QuizResultService
{
    public function __construct(
        private readonly QuizResultRepository $quizResultRepository
    )
    {
    }

    public function add(Quiz $quiz, array $quizResultData): QuizResult
    {
        $quizResult = new QuizResult($quiz, $quizResultData);

        $this->quizResultRepository->save($quizResult, true);

        return $quizResult;
    }
}