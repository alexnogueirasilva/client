export default class Card {
    constructor(readonly title: string, public estimative: number) {
    }

    incraseEstmative(){
        this.estimative++;
    }

    decraseEstmative(){
        this.estimative--;
    }
}
