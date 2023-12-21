
function f(param:any) {
    return function name(target:any,props:any) {
        console.log("Deco "+param)
    }
}

class Person{
    private _name:String

    constructor(a:String){
        console.log('constructor (a:string)')
        this._name=a
    }

    get name():String{
        return this._name
    }

    @f("un param")
    direBonjour(){
        console.log("Bonjour je m'appelle : "+this._name)
    }
}

let a = new Person('Robert')
a.direBonjour()
