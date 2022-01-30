basic.showLeds(`
    . . . . .
    . # . . .
    . . # . .
    . . . . .
    . . . # .
    `)
while (true) {
    basic.setLedColor(0x0000ff)
    music.playTone(247, music.beat(BeatFraction.Whole))
    basic.setLedColor(0xffffff)
    music.playTone(330, music.beat(BeatFraction.Whole))
    if (input.buttonIsPressed(Button.B)) {
        break;
    }
}
