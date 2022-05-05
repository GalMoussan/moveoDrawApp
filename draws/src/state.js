import Level from "./types/Level";


class AppState {
    constructor() {
        this.level = Level.Easy
        this.image = undefined
    }

    setLevel(level) {
        this.level = level;
    }

    getLevel() {
        return this.level;
    }
}

const state = new AppState();


export default state;