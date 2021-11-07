let soup = 0
// play doot
function doot () {
    for (let index = 0; index < 99999; index++) {
        if (soup == 0) {
            while (soup == 0) {
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
}
// play the "doot" function after it was disabled by the "stahp" function
function resume () {
    soup = 0
    doot()
    return 0
}
// stop the main functionality of the "doot" function
function stahp () {
    soup = 1
    return 0
}
