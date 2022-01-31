let i = 0
music.playMelody("C E D F E G E F ", 120)
while (i <= 10) {
    basic.showNumber(i)
    music.playMelody("C E D F E G E F ", 360)
    i += 1
    // basic.setLedColor(0x0000ff)
    // music.playTone(247, music.beat(BeatFraction.Whole))
    // basic.setLedColor(0xffffff)
    // music.playTone(330, music.beat(BeatFraction.Whole))
    if (input.buttonIsPressed(Button.A)) {
        break;
    }
}
