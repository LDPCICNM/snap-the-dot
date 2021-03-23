input.onButtonPressed(Button.A, function () {
    if (scrip.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let scrip: game.LedSprite = null
scrip = game.createSprite(2, 2)
basic.forever(function () {
    scrip.move(1)
    scrip.ifOnEdgeBounce()
    basic.pause(100)
})
