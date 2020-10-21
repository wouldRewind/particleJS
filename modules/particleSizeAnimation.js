// анимация случайно выбранного шарика в размере
// в файле particles есть массив animating particles, в котором лежат анимируемые частицы
// const growSpeed = 0.1;


export const particleSizeAnimat = (particles,maxRadius,minRadius) => {
	particles.forEach(particle => {
		// если вышли за грани роста :D
	if(particle.radius >= maxRadius || particle.radius <= minRadius)
		particle.animDirection*=-1;
	// приращение
	particle.radius+=growSpeed * particle.animDirection;
	})
}






