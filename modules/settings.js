// каждый скрипт теперь модульный
window.onload = function()
{
	document.querySelectorAll("script").forEach(scr => scr.setAttribute("type","module"))
}
