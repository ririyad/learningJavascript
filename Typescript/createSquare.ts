interface SquareConfig{
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig):{ color: string; area: number}{
    let newSquare = {color: "white", area: 100};
    if(config.color) {
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }

    return newSquare;
}

let mySquare = createSquare({color: "black"});


interface Point{
    x: number;
    y: number;
}

let myPoint: Point

interface Point{
    z: string;
}

myPoint.x
myPoint.z

interface SearchFunc{
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    if(result == -1) {
        return false;
    }
    else{
        return true;
    }
}