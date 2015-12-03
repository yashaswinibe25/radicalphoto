var change_main_text=document.getElementById("main_text");
setTimeout(changeText,2500);
function changeText()
{
 change_main_text.innerHTML="Capturing Nature";
	change_main_text.style.background="#7EB126";
	change_main_text.style.lineHeight="36px";
}

var gallery=document.getElementById("gallery");
var thumb_image=gallery.getElementsByTagName("a");
var big_image=document.getElementById("main_big_image");

for(i=0;i<thumb_image.length;i++)
{
  thumb_image[i].onmouseover=changeImage;	
	
}
function changeImage()
{
	var thumb_image_location=this.href;
	big_image.src=thumb_image_location;

}
