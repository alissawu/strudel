samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')
  setcpm(160/4) //40 bpm, 4 beats to a bar. one cycle = one bar

// tu ta too ta (mid hi low hi)
let complex_drums = s("[tr909_bd:2 tr909_hh:1 tr909_sd:5 tr909_hh:1] [tr909_sd:6 tr909_sd:6] [tr909_bd:3 tr909_sd:7] [tr909_sd:6 tr909_sd:6]")          // push it into breakcore-ish speed
  .lpf("<1500 1200>").hpf(100)
  .room(0.4).resonance(0.6).lpf(800)

let basic_drums = s("tr909_sd:5 tr909_hh:1 tr909_bd:2 tr909_hh:1")
  .delay(0.15).lpf(800)
$: stack(
  basic_drums,
  complex_drums
)._punchcard()
// harmony
$: n(`<b2 g2 f#2 f#2>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<800 1200 600 1500>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)
  ._punchcard()
//melody
$: note(`<
{~ [d4 e4 d4 e4] d4@2}
{~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}
>`)
  .scale("C2:chromatic").sound("gm_overdriven_guitar:10")
  .slow(2).release(0.4).attack(0.05).lpf(2200).sustain(1)
  .vowel("a").gain(3).room(0.4).size(0.7)
  ._punchcard()


