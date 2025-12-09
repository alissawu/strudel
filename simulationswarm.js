setcpm(120/4)

// intro
// the 1 1 1 1 lowk repeats forever, the first line is just the intro thing
let drums = n(`<
  {~@3 [1 [1 1]]}
  { 1 1 1 1}!32
  >`).sound("[dmx_sd:3 ~]*2, [~ akaixr10_bd:2]*2").gain(0.05)

//delay 6 of 8 beats, so 0.75. slow(2) => 0.375
//each note is approx 4 beats, so
let bass = n(`<
{~}@0.375
{c#2 f#1 g#1 f#1}!10
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").release(1).gain(0.1).slow(2)

//drums start at the 6th of 8 beats
//so we need 1.5 more beats. 1.5/8 = 
let guitar = n(`<
{~}@0.1875
{~@4 c#4 f4 bf3@0.5 c4}
{c#4@1.5 f4 bf3@0.5 c4 c#4@1.5 f4 bf3@0.5 c4}!32
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").sustain(0.3).release(0.5)


//4 taps = 1 beat
// 0.1875 + 4.5 = 4.6875 beats
// 4.6875 of 8, but it's slowed so only need half those, so 4.6875/2 * cycle len

let voice = n(`<
{~}@2.34375
{~ [f4@2 f4] c4@0.5 c4@1.5 [[eb4 eb4] eb4] eb4@0.5 c4@0.25 db4@1.7 [bb3@1.5 c4]@0.55}
{ db4 [eb4 f4] c4@0.5 c4@1.5 [[eb4 eb4] eb4] eb4@0.5 c4@0.25 db4@1.7 [bb3@1.5 c4]@0.55}
{ db4 [eb4 f4] c4@0.5 c4@1.5 [[eb4 eb4] eb4] eb4@0.5 c4@0.25 db4@1.7 [bb3@1.5 c4]@0.5}
              >`).scale("C2:chromatic").sound("gm_acoustic_guitar_nylon").slow(2)




// THESE MATCH
let voice1 = n(`<
{~@2.5 f4 f4@0.5 c4@1.5 c4@2.5}
{[eb4 eb4] eb4 eb4 c4@0.5 db4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
{c#4@2.5 ef4@0.5 f4 c4@1.5 c4@2.5}
{[ef4 ef4] [ef4 ef4] ef4 c4@0.5 df4@3 bb3@0.5 c4}
              >`).scale("C2:chromatic").sound("gm_acoustic_guitar_nylon")
let guitar1 = n(`<
{c#4@1.5 f4 bf3@0.5 c4 c#4@1.5 f4 bf3@0.5 c4}!32
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").sustain(0.3).release(0.5)

$: stack(
  voice1, guitar1
)



