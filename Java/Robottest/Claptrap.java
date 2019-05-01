package botpackage;

import java.awt.Color;

import robocode.*;

public class Claptrap extends Robot {
	public void run(){
		setAllColors(Color.pink);
		
	while(true){
		int a = getOthers();
		if(a>3){
			ahead(Math.random()*500);
			turnRight(33);
			}
		else{
			ahead(100);
			turnGunLeft(360);
			}
		}
	}
	//N�r roboten ser en annen robot: 
	public void onScannedRobot(ScannedRobotEvent e) {
		//Hvis distansen er mer en 200 bruker den bare fire(1.9) er ikke s� kritisk med tanke p� energy fordi roboten kj�rer bare rundt
		//som en idiot p� starten uansett
		if(e.getDistance() > 200){
			fire(1.9);
		}
		else if(e.getDistance() > 50){
			fire(2);
		}
		else{
			fire(3);
		}
		
	}
	//N�r roboten treffer en vegg
	public void onHitWall(HitWallEvent e) {
		int a = getOthers();
		//Hvis det er det er mindre enn 3 p� banen rygg
		//N�r det er flere klarer den � komme seg bort fra veggen p� egenh�nd ved hjelp av move when shot
		if(a<3){
		back(200);
		turnRight(33);
		}
		else{
			
		}
	}
	//N�r roboten kr�sjer med annen robot
	public void onHitRobot(HitRobotEvent e){
		//Hvis det er mindre enn 3 p� banen s� rygger den, eller hvis det er jeg som kr�sjer inn i en annen..
		int a = getOthers();
		if(a<3 || e.isMyFault() == true){
		back(200);
		turnLeft(33);
		}
		else{
			//Hadde tenkt � ha isMyFault() her isteden med en fire 3 men siden jeg har det i onScannedRobot hvis den er n�rme s� er ikke det behov
		}
	}
	
	//N�r roboten blir truffet
	public void onHitByBullet(HitByBulletEvent e){
		int a = getOthers();
		//Hvis den blir truffet n�r det er mange p� banen s� fortsetter den bare � kj�re i random pattern i h�p om � overleve...
		if(a>3){
			return;
		}
		else{
			if(e.getBearing() > -90 && e.getBearing() < 90){
				turnLeft(33);
			}
			else{
				
			}
		}
		
	}
	public void onBulletHit(BulletHitEvent e){
		double a = e.getEnergy();
		int b = getOthers();
		if(10>a){
			setAllColors(Color.BLACK);
		}
		else if(a>10 && a<20){
			setAllColors(Color.cyan);
		}
		else if(a>20 && a<50){
			setAllColors(Color.green);
		}
		else{
			setAllColors(Color.orange);
			setBulletColor(Color.green);
		}
		//g�r litt til h�yre hver gang den treffer noen n�r det er mindre enn 3 p� banen for litt mer movement
		if(b<3){
			turnRight(33);
			ahead(20);
		}
		else{	
			
			}

		}
}