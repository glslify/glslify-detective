const test      = require('tape')
const path      = require('path')
const detective = require('./')
const fs        = require('fs')

test('glslify-detective', function(t) {
  var detected = detective(
    fs.readFileSync(path.join(__dirname, 'fixture.glsl'), 'utf8')
  )

  t.equal(detected[0], 'glsl-fog', 'glsl-fog')
  t.equal(detected[1], 'glsl-fog/exp2', 'glsl-fog/exp2')
  t.equal(detected[2], 'glsl-fog/linear', 'glsl-fog/linear')
  t.equal(detected[3], 'glsl-noise/simplex/2d', 'glsl-noise/simplex/2d')
  t.equal(detected[4], 'glsl-noise/simplex/3d', 'glsl-noise/simplex/3d')
  t.equal(detected[5], 'glsl-smooth-min', 'glsl-smooth-min')
  t.end()
})
