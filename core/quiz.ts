export class QuizData {

    private questions: string[] = ['pregunta 1', 'pregunta 2', 'pregunta 3', 'pregunta 4', 'pregunta 5'];
    private values: number[] = [0, 0, 0, 0, 0, 0, 0];

    constructor() {}

    getDataQuestion() {
        return [
            { data: this.values, label: 'Preguntas'}
        ];
    }

    increaseValue( question: string, value: number ) {
        question = question.toLowerCase().trim();

        for (let index in this.questions) {
            if ( this.questions[index] === question ) {
                this.values[index] += value;
            }
        }
        return this.getDataQuestion();
    }

}