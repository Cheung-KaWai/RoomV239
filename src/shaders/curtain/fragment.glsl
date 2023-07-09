#define PI 3.1415926535897932384626433832795

varying vec2 vUv;
varying float vElevation;

uniform float uTime;

float plot(vec2 uv,float pct){
  return smoothstep(0.01,0.0, abs(vUv.y-pct));
}

float blinnWyvillCosineApproximation (float x){
  float x2 = x*x;
  float x4 = x2*x2;
  float x6 = x4*x2;
  
  float fa = ( 4.0/9.0);
  float fb = (17.0/9.0);
  float fc = (22.0/9.0);

  float elevation = 0.05;
  float frequency = 10.0;
  float speed = 3.0;
  
  float y = fa*x6 - fb*x4 + fc*x2;
  return y + sin(x * frequency + uTime * speed) * elevation;
}

void main(){
  float y = blinnWyvillCosineApproximation(vUv.x);

  vec3 color = mix(vec3(0.7),vec3(1.0), vElevation * 5.0);

  gl_FragColor = vec4(color,0.5);
}