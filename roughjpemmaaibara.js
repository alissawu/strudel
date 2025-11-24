samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')
  setcpm(160/4) //40 bpm, 4 beats to a bar. one cycle = one bar

// section 1: pre lyric
let ethereal = note(`<
  {f#4 d4 a3 [a3 f#3]}
  {f#4 d4 a3 [a3 f#3]}
  {[f#4 f#4 f#4 f#4] [d4 d4 d4 d4] [a3 a3 a3 a3] [a3 a3 f#3 f#3]}
  {[f#4 f#4 f#4 f#4] [d4 d4 d4 d4] [a3 a3 a3 a3] [a3 a3 f#3 f#3]}
>`).sound("gm_pad_warm:6").slow(4).room(1.8).lpf(1200)
  .hpf(200).attack(0.5).release(2).size(0.95)
  .gain(0.4)
let bass = n(`<b2 g2 [d2, f#2] [d2, f#2]>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<800 1200 600 1500>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)
  ._punchcard()


// drums that appear at the start ish
// lpf 100 removes the weird blip sound at the top
_$:s("rolandtr808_bd:1")
  .struct(`<
    { [[1 1 ~] 1] [1 1] }
    { [[1 1 ~] 1] [[1 1 1] 1] }
  >`).gain(0.05).lpf(100)._punchcard()
// weird shaker sound that appears with the start drums
_$: s("hr16_sh*4").gain(0.5).delay(0.3, 0.15).room(0.8).sustain(0.5).gain(0.01).resonance(0.6)

// underlying deep bass
_$: n(`<b2 g2 [d2, f#2] [d2, f#2]>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<800 1200 600 1500>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)
  ._punchcard()
_$: note(`<
{~ [d4 e4 d4 e4] d4@2}
{~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}
>`)
  .scale("C2:chromatic").sound("gm_overdriven_guitar:10")
  .slow(2).release(0.4).attack(0.2).decay(0.4).lpf(1100).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(0.8).size(0.7).drive(0.1).pan(tri.slow(2))
  ._punchcard()




// prelyric -- vocal, bass, ethereal sound
