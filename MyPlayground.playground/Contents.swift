//: Playground - noun: a place where people can play

import UIKit

class Animal {
    var name: String = ""
    var age: Int = 0
    
    init(withName name:String, andAge age: Int) {
        self.name = name
        self.age = age
    }
    
    func sayName() -> Void {
        print(self.name)
    }
}

enum Gender {
    case Male
    case Female
    case other
}

protocol ICanTalk {
    func talk() -> Void
}

class Cat: Animal, ICanTalk {
    var gender: Gender
    
    init(withName name: String, age: Int, andGender gender: Gender) {
        self.gender = gender
        super.init(withName: name, andAge: age)
    }
    
    override func sayName() {
        super.sayName()
        print("and gender \(self.gender)")
    }
    
    func talk() {
        print("Talking")
    }
}

var cat: ICanTalk = Cat(withName: "Asd", age: 5, andGender: .Female)
cat.talk()

var cat2: Cat = Cat(withName: "Tom", age: 10, andGender: .Male)
cat2.sayName()


