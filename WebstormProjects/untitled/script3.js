/**
 * Created by wwy on 17-7-13.
 */
function draw(id) {
    var canvas=document.getElementById(id);
    if(canvas==null)
        return false;
    var context=canvas.getContext('2d');
    context.fillStyle="#EEEEFF";
    context.beginPath();
    context.lineWidth=5;
    context.setLineDash([5,10,15]);
    context.moveTo(20,20);
    context.lineTo(200,20);
    context.stroke();
}
