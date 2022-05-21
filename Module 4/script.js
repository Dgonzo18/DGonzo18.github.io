var names=new Array();
names[0]="Diego";
names[1]="Joe";
names[2]="Joshua";
names[3]="Gabriel";
names[4]="Derrick";
names[5]="Jensen";
names[6]="Trey";
names[7]="Lam";
names[8]="Jeremy";
names[9]="Cameron";

for (var i=0; i < names.length; i++) 
{
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j')
	{
	console.log("Goodbye " + names[i])
	}
	else 
	{
	console.log("Hello " + names[i])
	}
}