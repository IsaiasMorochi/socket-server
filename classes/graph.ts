export class GraphData {

    private months: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];
    private values: number[] = [0, 0, 0, 0, 0, 0, 0];

    constructor() {}

    getDataGraph() {
        return [
            { data: this.values, label: 'Ventas'}
        ];
    }

    increaseValue( month: string, value: number ) {
        month = month.toLowerCase().trim();

        for (let index in this.months) {
            if ( this.months[index] === month ) {
                this.values[index] += value;
            }
        }
        return this.getDataGraph();
    }

}