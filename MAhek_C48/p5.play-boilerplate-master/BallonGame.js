function createarrow()
{
  var arrow=createSprite(300,230,10,10);
  arrow.scale = 0.08;
  arrow.x=bow.x;
  arrow.y=bow.y;
  arrow.addImage(ar_img);
  arrow.velocityX=-6;
  arrow.lifetime =100;   // 400/4
arrow_group.add(arrow);
}
function rballoons()
{
  
    var redb=createSprite(200,Math.round(random(5,400)),10,10);
    redb.addImage(r_img);
    redb.scale = 0.08;
    redb.velocityX=-2;
    redb.lifetime = 200;
    r_group.add(redb);
}

function gballoons()
  {
    
    var greenb=createSprite(200,Math.round(random(15,190)),10,10);
    greenb.addImage(g_img);
    greenb.scale = 0.08;

    greenb.velocityX=-2;
    greenb.lifetime = 200;
    g_group.add(greenb);
  }
  
  function bballoons()
{
    var blueb=createSprite(200,Math.round(random(25,380)),10,10);
    blueb.addImage(b_img);
    blueb.scale = 0.08;

    blueb.velocityX=-2;
    blueb.lifetime = 200;
    b_group.add(blueb);
}

function yballoons()
 {
    var yellowb=createSprite(200,Math.round(random(30,270)),10,10);
    yellowb.addImage(y_img);
    yellowb.scale = 0.08;

    yellowb.velocityX=-2;
    yellowb.lifetime = 200;
    y_group.add(yellowb);
    
}