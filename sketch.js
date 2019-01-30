function setup() {
  createCanvas(400, 400 );
  background(220);
  noStroke();
  fill((minute() % 2)*120+60);
  if( second() > 15 && second() <= 30 ){
    rect( 30,20,300,20)
  }
  if( second() >= 30 && second() <= 45 ){
    rect( 30,20,300,20)
    rect( 330,20,20,300)
  }
  if( second() >= 45 && second() <= 60 ){
    rect( 30,20,300,20)
    rect( 330,20,20,300)
    rect( 350,320,-300,20)
  }
  if( second() == 0){
    fill(((minute()+1) % 2)*120+60);
    rect( 30,20,300,20)
    rect( 330,20,20,300)
    rect( 350,320,-300,20)
    rect( 30,340,20,-300)
  }
  for( i = 0; i <= minute(); i++)
  {
  fill(((i+1) % 2)*120+60);
  rect(50,i*(280/60)+40,280,280/60);
  }
  stroke(200);
  for( i = 0; i < hour(); i++)
  {
 	fill(((Math.round((i+6)/12))%2)*140+60)
  rect(350,20+(i%12)*(320/12),20,(320/12))
  }
  noStroke();
  fill(((minute()) % 2)*120+60);
}


function draw() {
  if( minute() == 0)
  {
  rect( 50,40,280,280);
  }
  if( second() <= 15 ){
    rect( 30,20,second()*20, 20);
  }
  if( second() > 15 && second() <= 30 ){
    rect( 330,20,20,(second()-15)*20);
  }
  if( second() >= 30 && second() <= 45 ){
    rect( 350,320,-(second()-30)*20,20);
  }
  if( second() >= 45 && second() <= 60 ){
    rect( 30,340,20,-(second()-45)*20);
  }
  if( second() == 0){
    fill(((minute()+1) % 2)*120+60);
    rect( 30,340,20,-300);
    rect(50,minute()*(280/60)+40,280,280/60);
    stroke(200);
    fill(((Math.round((hour()+6)/12))%2)*140+60)
  	rect(350,20+((hour()-1)%12)*(320/12),20,(320/12))
    noStroke();
    fill((minute() % 2)*120+60);
  }

}
