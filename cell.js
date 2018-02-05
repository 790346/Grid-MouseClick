
'use strict'

class Cell {
    constructor(game, location) {
      this.game = game;
      this.loc = location;

    }

    render(){
     //  draw a rectangle at location
     this.game.context.fillStyle="#AABBAA";
     this.game.context.strokeStyle="#001122";
     this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    }


}
