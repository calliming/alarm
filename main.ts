for (let index = 0; index < 4; index++) {
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
}
for (let index = 0; index < 4; index++) {
    basic.setLedColor(0x0000ff)
    music.playTone(247, music.beat(BeatFraction.Whole))
    basic.turnRgbLedOff()
    music.playTone(330, music.beat(BeatFraction.Whole))
}
for (let index = 0; index < 4; index++) {
    basic.setLedColor(0x0000ff)
    basic.pause(500)
    basic.turnRgbLedOff()
    basic.pause(500)
}
basic.turnRgbLedOff()
