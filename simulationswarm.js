setcpm(100/4)

// intro
// the 1 1 1 1 lowk repeats forever, the first line is just the intro thing
let drums = n(`<
  {~@3 [1 [1 1]]}
  { 1 1 1 1}!32
  >`).sound("[dmx_sd:3 ~]*2, [~ akaixr10_bd:2]*2").gain(0.05)

//delay 6 of 8 beats, so 0.75. slow(2) => 0.375
//each note is approx 4 beats, so
let bass = n(`<
{~}@0.25
{c#2 f#1 g#1 f#1 c#2 f#1 g#1 c#2}!10
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").release(1).gain(0.1).slow(4)

//we start an extra 0.5 late . so we add 7.5/8 of a cycle
let guitar = n(`<
{~}@0.9375
{~@0.5 c#4 f4 bf3@0.5 c4 c#4@1.5 f4 bf3@0.5 c4}
{c#4@1.5 f4 bf3@0.5 c4 c#4@1.5 f4 bf3@0.5 c4}!32
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").sustain(0.3).release(0.5)
let voice = n(`<
{~}!4
{~}@0.9375
{~@2.5 f4 f4@0.5 c4@1.5 c4@2.5}
{[eb4 eb4] eb4 eb4 c4@0.5 db4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
              >`).scale("C2:chromatic").sound("gm_acoustic_guitar_nylon")

$: stack(
  drums, bass, guitar, voice
)