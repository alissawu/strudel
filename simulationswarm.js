setcpm(120/4)

// intro
// the 1 1 1 1 lowk repeats forever, the first line is just the intro thing
let drums = n(`<
  {~@2 [1 [1 1]] 1}
  { 1 1 1 1}!32
  >`).sound("[dmx_sd:3 ~]*2, [~ akaixr10_bd:2]*2").gain(0.05)

let guitar = n(`<
{~@6 c#4 f4}
{bf3@0.5 c4 c#4@1.5 f4 bf3@0.5 c4 c#4@1.5 f4}!32
>`)
  .scale("C2:chromatic")
  .sound("gm_acoustic_guitar_nylon").sustain(0.3).release(0.5)

$: stack(
  drums, guitar
)


