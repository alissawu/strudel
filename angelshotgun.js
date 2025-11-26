setcpm(36/4)

// notes
// gm_tuba:0 (muffled tuba)
// gm_fx_atmosphere(13):2 (i think?) - kinda angelic
// gm_french_horn(5):1 and 5 (the last one. or is it 5?) (distant)
//tr808 1, 6
let drums = s("tr808_bd:1, tr808_bd:6")
  .struct(`<
  { 1 [~@7 1] 1 1}
  >`).gain(0.2).sustain(0.5).lpf(100)
let bkgd = n(`<
  {f#4 g4 f#4 e4}
  {[b3, f#4] [g3, g4] [d4, f#4] [a3, e4]}
>`).scale("C2:chromatic").sound("gm_pad_warm:6").room(2).lpf(500)
  .hpf(300).attack(0.5).release(1.5).sustain(1).decay(0.75).gain(0.05)
  .lpenv(-3).pan(cosine.slow(2))
let front = n(`<
{~}
  {~ [f#3 f#3, b3 b3, d4 d4, f#4 f#4, f#5 f#5] ~ [g2 g2, g3 g3, d4 d4, g4 g4, g5 g5] ~ [f#3 f#3, a3 a3, d4 d4, f#4 f#4, f#5 f#5] [e3, a3, e4]@2}
  {[f#2 f#2] [f#3 f#3, b3 b3, d4 d4, f#4 f#4, f#5 f#5] [g2 g2] [g2 g2, g3 g3, d4 d4, g4 g4, g5 g5] [f#2 f#2] [f#3 f#3, a3 a3, d4 d4, f#4 f#4, f#5 f#5] [e3, a3, e4]@2}
>`).scale("C2:chromatic").sound("gm_fx_atmosphere").room(2).lpf(500)
  .hpf(300).attack(0.2).release(1).sustain(1).decay(0.75).gain("<0 0.07 0.03>")
  .lpenv(-3).pan(sine.slow(2))
let bass = n(`<
{b1 g1 d2 c#2}!2
{[[b1 b1] b1] [[g1 g1] g1] [[d2 d2] d2] [[a2 a2] a2, [c#2 c#2] c#2]}!2
>`)
  .scale("C2:chromatic")
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.05).pan(sine.slow(2))
// its a bit more hoarse than this i think
let brass = n(`<{a3 a3 a3 c#4}>`).sound("gm_french_horn").scale("C2:chromatic")
  .sustain(0.7)
  .release(0.1).lpf("<1000 800 600 400>*2")
  .room(1)
  .gain(0.04).pan(sine.slow(2))
//{~} {~@6 [~@2 e4 e4] [f#4 e4 f#4 a4]}
let vocal = n(`<
{~} 
{~@6 [~@2 e4 e4] [f#4 e4 f#4 a4]}
{[f#4 e4] ~ ~ [f#4 e4 f#4 a4] [f#4 e4] ~ ~@2}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.55).attack(0.1).lpf(1000).sustain(0.85)
  .gain("<0.45 0.35>*2").room(1.7).decay(0.5)
let backvocal = n(`<
{~} 
{~}
{~ [f#4 e4] [f#4 e4] ~ ~ [f#4 e4] [f#4 e4@2 d4]@2}
>`).sound("gm_violin").scale("C4:chromatic")
  .release(0.55).attack(0.1).lpf(600).sustain(0.85)
  .gain("<0.3 0.15 0.3 0.15>*4").room(1.8).decay(0.7)
$:
stack(
  drums._punchcard(), 
  bkgd._punchcard(), 
  front._punchcard(), 
  bass._punchcard(), 
  brass._punchcard(), 
  vocal._punchcard(), 
  backvocal._punchcard()
)

