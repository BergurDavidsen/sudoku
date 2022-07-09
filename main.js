function Solve(){
    
    var startTime = new Date().getTime()
    
    var possibleValues = []
    let values = []
    var resultArr = []
    var finalArr = []
    var testArr = []
    var numbersLeft = []

    
    let form = document.getElementById("my-form")
    
    
    Array.from(form.elements).forEach(element=>{
        if (element.value == ""){
            values.push(0)
            count += 1
        }
        else{
        values.push(parseInt(element.value))
        }
    })

    var ones = values.filter(element => element==1).length
    var twos = values.filter(element => element==2).length
    var threes = values.filter(element => element==3).length
    var fours = values.filter(element => element==4).length
    var fives = values.filter(element => element==5).length
    var six = values.filter(element => element==6).length
    var sevens = values.filter(element => element==7).length
    var eights = values.filter(element => element==8).length
    var nines =values.filter(element => element==9).length

    console.log(ones,twos,threes,fours,fives,six,sevens,eights,nines)
    var numbersUsed=[ones,twos,threes,fours,fives,six,sevens,eights,nines]
    
    for(let j=1;j<numbersUsed.length+1;j++){
        for(let i=0;i<(9-numbersUsed[j]);i++){
            numbersLeft.push(j)
    }
}
console.log(numbersLeft)

    var count = 0
    for(i of values){
        if(i==0){
            count+=1
        }
        if(count>=65){
            document.getElementById("result").innerHTML = "There are two few numbers to solve this puzzle"
            return

        }

    }
    


    document.getElementById("status").innerHTML = "Solving this sudoku puzzle for you. this may take a while..."

    //console.log(values)
    let line1 = values.slice(0,9)
    let line2 = values.slice(9,18)
    let line3 = values.slice(18,27)
    let line4 = values.slice(27,36)
    let line5 = values.slice(36,45)
    let line6 = values.slice(45,54)
    let line7 = values.slice(54,63)
    let line8 = values.slice(63,72)
    let line9 = values.slice(72,81)
    
    var board = [line1,line2,line3,line4,line5,line6,line7,line8,line9]
    console.log(board)

    //for(let i=0;i<board.length;i++){
    //    document.getElementById("result").innerHTML += board[i] + "<br/>"
    //}
    

    function possible(y,x,n){
        
        for(let i=0;i<9;i++){
            if(board[y][i]==n){
                return false
            }
        }
        for(let i=0;i<9;i++){
            if(board[i][x]==n){
                return false
            }
        }
        x0=(Math.floor(x/3))*3
        y0=(Math.floor(y/3))*3
    
       
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[y0+i][x0+j] == n){
                    return false
                }
            }
        }
        
        return true
        
    }
    
    function allowed(n){
        for(let y=0;y<9;y++){
            for(let x=0;x<9;x++){
                if(board[y][x]==0){            
                        if(possible(y,x,n)){
                            possibleValues.push(n)
                        }
                }
            }
    
           
        }
        console.log(possibleValues)
    }
    
    //for(let n=1;n<10;n++){
    //    allowed(n)
    //}
    
    function solver(){
        
        for(let y=0;y<9;y++){
            for(let x=0;x<9;x++){
                if(board[y][x]==0){
                for(let n=1;n<10;n++){
                    if(possible(y,x,n)){
                        console.log("replacing number")
                        board[y][x]=n
                        console.log(board[y][x])
                        solver()
                        board[y][x]=0
                    }
                }
                
                console.log('returning')
                return
            }
        
        }
        
        }
        for(i of board){
            testArr.push(i)
        }
        
        Array.from(form.elements).forEach(element=>{
            resultArr.push(element)
            }
            
        )
        console.log(resultArr)
        
        var counter = 0
        for(let y=0;y<9;y++){
            for(let x=0;x<9;x++){
                finalArr.push(testArr[y][x])
            }
            
                
        
        }
        
        
        for(let j=0;j<finalArr.length;j++){
            resultArr[j].value = finalArr[j]
            
        }
        document.getElementById("result").innerHTML="The puzzle is solved!"
        document.getElementById("status").innerHTML = ""
}
solver()
var endTime = new Date().getTime()

let exTime= endTime-startTime

document.getElementById("Time").innerHTML = "The solver took " + exTime + "ms" + " to solve the puzzle."
}

function Clear(){
    let form = document.getElementById("my-form")
    
    Array.from(form.elements).forEach(element=>{
        element.value = ""
}
    )
    document.getElementById("result").innerHTML = "It may take a while when you click the button while the algorithm solves the puzzle. You just have to wait patiently..."
    
}

    
