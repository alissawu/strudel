samples('github:algorave-dave/samples')
samples('github:tidalcycles/dirt-samples')
  setcpm(80/4) //40 bpm, 4 beats to a bar. one cycle = one bar

// section 1: intro
let ethereal = n(`<
  {f#4 d4 a3 [a3 f#3]}!4
>`).scale("C2:chromatic").sound("gm_pad_warm:6").slow(2).room(1.8).lpf(1200)
  .hpf(300).attack(0.5).release(2).sustain(2).size(0.95).decay(0.75)
  .gain(0.1).lpenv(-3)

let bass = n(`<
{b2 g2 d2 [d2, f#2] b2 g2 d2 [d2, f#2]}
{[b2 b2 b2 b2] [g2 g2 g2 g2] [d2 d2 d2 d2] [d2 d2 d2 d2, ~ ~ f#2 f#2] [b2 b2 b2 b2] [g2 g2 g2 g2] [d2 d2 d2 d2] [d2 d2 d2, f#2 f#2 f#2]}
>`)
  .scale("C2:chromatic")
  .slow(4)
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)

let melody = n(`<
{~ [d4 e4 d4 e4] d4@2 ~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}
>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.5).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.6)

let harmony = n(`<
{~}!2
{~ ~ ~ [~ g3] f#3 ~ [f#3 f#3] ~}!2
>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.8).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(3.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.6)



let silence = s("rolandtr808_bd:1")
  .struct(`<
  { 0 0 0 0 }!8
  >`).gain(0.05).lpf(100).decay(1.2)

let drums = s("rolandtr808_bd:1")
  .struct(`<
  { [[1 1 ~] 1] [1 1] [[1 1 ~] 1] [[1 1 1] 1] }!8
  >`).gain(0.04).lpf(200, 100).decay(1.2)

_$: stack(
  bass, melody, harmony, ethereal, drums
)

// verse 1
let melody1 = n(`<
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
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.6)

//ethereal background
let ethereal1 = n(`<
  {[b4, d4] [g4, a4, d4] [d3, a4, d4] [[d3, a4, d4] [a4, c#4]]}!4
>`).scale("C2:chromatic").sound("gm_pad_warm:6").slow(2).room(1.8).lpf(1200)
  .hpf(300).lpenv(-3).attack(0.5).release(2).sustain(2).size(0.95).decay(0.75)
  .gain(0.1)

let drums1 = s("rolandtr808_bd:1")
  .struct(`<
  { 1 [1 1] [~ 1] [1 1] 1 [1 1] [~ 1] [1 1] }!8
  >`).gain(0.05).lpf(200, 100).decay(1.2).delay(0.2)

let bass1 = n(`<
{b2 g2 d2 [d2, f#2] b2 g2 d2 [d2, f#2]}>`)
  .scale("C2:chromatic")
  .slow(4)
  .sound("supersaw").sustain(0.7)
  .release(0.1)
  .lpf("<1000 800 600 400>*2")
  .room(1.3)
  .gain(0.1).resonance(0.6)

$: stack(
  melody1, ethereal1, bass1, drums1
)

// part 3: intro again ish
let melody3 = n(`<
{~ [d4 e4 d4 e4] d4@2 ~ [d4 e4 d4 e4] [d4 f#3] [d4 d4]}
>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.5).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.6)

let harmony3 = n(`<
{~ ~ ~ [~ g4] f#4 ~ [~ f#3] [a4 f#4]}
{~ ~ ~ [~ g4] f#4 ~ [~ f#3] a4}
>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.8).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(3.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2)).release(0.6)
_$: stack(
  melody3, harmony3, ethereal, bass, drums
)

// tbh the intro just repeats here
// then it's like "yo"
// and stuff changes and there's a guitar
// part 4: prechorus








// chorus
let chorus = n(`<
{b3@0.5 e4@1.5 d4@0.5 c#4@1.5 d4@0.5 c#4@1.5 d4@0.5 a3@1.5}>`)
  .scale("C2:chromatic").slow(2)
  .sound("gm_electric_guitar_muted:6")
  .release(0.4).attack(0.2).decay(0.5).lpf(1200).lpq(0.2).sustain(1).vowel("a")
  .gain(5.2).room(1.3).size(0.7).drive(0.1).pan(tri.slow(2))

_$: stack(
  chorus
)