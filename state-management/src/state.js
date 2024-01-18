class State {
  constructor(state) {
    this.state = state;
  }
}

export class UpMovement extends State {
  constructor(player) {
    super();
    this.player = player;
  }
  handleInput(input) {
    if (input === 'PRESS down') this.player.setState()
  }
}