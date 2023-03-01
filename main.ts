controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(img`
        2 
        5 
        5 
        `, SpaceShip, 0, -100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
})
let bad: Sprite = null
let projectile: Sprite = null
let SpaceShip: Sprite = null
effects.starField.startScreenEffect()
SpaceShip = sprites.create(img`
    . . . . . . . 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . 
    . . . . 1 1 5 1 5 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . 1 1 1 1 1 . . . 1 1 1 1 1 . 
    . 1 1 1 1 . . . . . 1 1 1 1 . 
    . 1 1 1 . . . . . . . 1 1 1 . 
    . 1 1 . . . . . . . . . 1 1 . 
    . 1 . . . . . . . . . . . 1 . 
    `, SpriteKind.Player)
SpaceShip.setPosition(84, 98)
controller.moveSprite(SpaceShip)
info.setLife(3)
game.onUpdateInterval(500, function () {
    bad = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Enemy)
    bad.setPosition(randint(0, scene.screenWidth()), 0)
    bad.follow(SpaceShip, 50)
})
