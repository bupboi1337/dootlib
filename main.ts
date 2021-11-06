// resume the main part of the "doot" Function
function doot_again () {
    useless_variable = 0
}
// play doot
function doot () {
    for (let index = 0; index < 99999; index++) {
        if (soup == 1) {
            break;
waitin = 1
        } else {
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(233, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(233, music.beat(BeatFraction.Quarter))
            music.playTone(247, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(330, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Quarter))
            music.playTone(165, music.beat(BeatFraction.Quarter))
            basic.pause(30)
            music.playTone(165, music.beat(BeatFraction.Quarter))
            music.playTone(233, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
    }
}
// stop the main functionality of the "doot" function
function stahp () {
    soup = 1
    return 0
}
// boot-loader for the "doot" function
let waitin = 0
let soup = 0
let useless_variable = 0
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # . . .
    `)
doot()
// forever script to make the "doot_again" function work
basic.forever(function () {
    while (waitin == 1 && useless_variable == 1) {
        useless_variable = 0
        waitin = 0
        soup = 0
    }
})
