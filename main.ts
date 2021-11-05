function doom () {
    for (let index = 0; index < 99999; index++) {
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
    }
}
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . . .
    # # # # .
    `)
doom()
