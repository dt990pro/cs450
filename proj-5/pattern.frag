#version 330 compatibility
uniform float	uS0;
uniform float	uT0;
uniform float	uSize;

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords

void
main( )
{
	vec3 myColor = vec3( .5, .2, 0.7 );

	if( uS0-uSize/2. <= vST.s && vST.s <= uS0+uSize/2. && uT0-uSize/2. <= vST.t && vST.t <= uT0+uSize/2. )
	{
		myColor = vec3( .6, .1, .1 );
	}
	gl_FragColor = vec4( myColor,  1. );
}
