samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')
  setcpm(160/4) //40 bpm, 4 beats to a bar. one cycle = one bar

//bass
$: s("hh:2!16").gain(".3 .7 .4 .9 .5")
  .sound("tr909_sd")
  .decay(0.3).degradeBy(0.15).lpf(900)
  ._punchcard()// harmony
_$: n(`<b2 g2 f#2 f#2>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<800 1200 600 1500>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)
  ._punchcard()
//melody
_$: note(`<
{~ [d4 e4 d4 e4] d4@2}
{~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}
>`)
  .scale("C2:chromatic").sound("gm_overdriven_guitar:10")
  .slow(2).release(0.4).attack(0.05).lpf(2200).sustain(1)
  .vowel("a").gain(3).room(0.4).size(0.7)
  ._punchcard()

_$: n(`<d4 e4 d4 e4 d4@2>`).scale("C2:chromatic").fast(4)
  .decay(1).sound("gm_synth_brass_1")
  .postgain("<0.6 1.1 0.6 1>*2")
  .release(0.3)._punchcard()