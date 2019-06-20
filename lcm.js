//PF-Exer-16
num1=5
num2=10
function lcm(x,y){
    if (x>y){
        greater=x
    }
    else {
        greater=y
    }
    while(true){
        if ((greater%x==0)&&(greater%y==0)){
            lcm=greater
        }
        greater+=1
    return lcm
document.write("The lcm is",lcm(num1,num2))
}
