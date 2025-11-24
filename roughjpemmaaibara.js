samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')
  setcpm(80/4) //40 bpm, 4 beats to a bar. one cycle = one bar

// section 1: intro
let ethereal = n(`<
  {f#4 d4 a3 [a3 f#3]}!4
>`).scale("C2:chromatic").sound("gm_pad_warm:6").slow(2).room(1.8).lpf(1200)
  .hpf(200).attack(0.5).release(2).size(0.95)
  .gain(0.1)

let bass = n(`<
{b2 g2 d2 [d2, f#2] b2 g2 d2 [d2, f#2]}
{[b2 b2 b2 b2] [g2 g2 g2 g2] [d2 d2 d2 d2] [d2 d2 d2 d2, ~ ~ f#2 f#2] [b2 b2 b2 b2] [g2 g2 g2 g2] [d2 d2 d2 d2] [d2 d2 d2, f#2 f#2 f#2]}
>`)
  .scale("C2:chromatic")
  .slow(4)
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<800 1200 600 1500>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)

let vocal = n(`<
{~ [d4 e4 d4 e4] d4@2 ~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}!4
>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.5).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.2)

let silence = s("rolandtr808_bd:1")
  .struct(`<
  { 0 0 0 0 }!8
  >`).gain(0.05).lpf(100).decay(1.2)

let drums = s("rolandtr808_bd:1")
  .struct(`<
  { [[1 1 ~] 1] [1 1] [[1 1 ~] 1] [[1 1 1] 1] }!8
  >`).gain(0.05).lpf(100).decay(1.2)

_$: stack(
  bass, vocal, ethereal, drums
)

// verse 1
let vocal1 = n(`<
{b3 [b3 a3] b3 [~ a3] b3 [~ c#4] d4 c#4}
{[b3]@0.5 b3 [a3]@0.5 b3 [~ a3] b3 [~ c#4] d4 c#4}
{b3@1.5 a3@0.5 b3@2 b3 a3 f#3 a3}
{f#3@4 f#4@1.5 a4@1.5 d4}
{c#4@4 f#4@1.5 a4@1.5 d4}
{c#4@4 f#4@1.5 a4@1.5 d4}
{c#4@3 d4@0.65 c#4@3.35 [d4@0.65 a3@0.35]}
{a3}
>`)
  .scale("C2:chromatic")
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.5).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.2)


$: stack(
  vocal1, bass, drums
)
