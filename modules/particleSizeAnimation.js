// анимация все шариков на странице
const growSpeed = 0.1;

export const particleSizeAnimate = (particles,maxRadius,minRadius) => {
	particles.forEach(particle => {
		// если вышли за грани роста :D
	if(particle.radius > maxRadius || particle.radius < minRadius)
		particle.animDirection*=-1;
	// приращение
	particle.radius+=growSpeed * particle.animDirection;
	})
}






