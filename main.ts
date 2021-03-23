input.onButtonPressed(Button.A, function () {
    let sprite: game.LedSprite = null
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let scrip = game.createSprite(2, 2)
basic.forever(function () {
    scrip.move(1)
    scrip.ifOnEdgeBounce()
    basic.pause(100)
})
