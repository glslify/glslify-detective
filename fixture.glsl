precision mediump float;

#pragma glslify: noise2 = require(glsl-smooth-min)
#pragma glslify: noise1 = require(glsl-noise/simplex/2d, 1, 2, 3)
#pragma glslify: noise2 = require(glsl-noise/simplex/3d, 1 = 8/2, 2 = vec2, 3 = vec4)

void main() {
#pragma glslify: noise2 = require(glsl-fog/linear)
  gl_FragColor = vec4(1.0);
}

#pragma glslify: noise2 = require(glsl-fog/exp2)
#pragma glslify: noise2 = require(glsl-fog)
