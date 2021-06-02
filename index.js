const languages = ["en","fr"] 

let Lists = [
    ["Underweight",
    "Normal Weight",
    "Overweight",
    "Obesity",
    "Obesity",
    "Obesity"],

    ["Insuffisance pondérale",
    "Corpulence Normale",
    "Surpoids",
    "Obésité modérée",
    "Obésité sévère",
    "Obésité mordbide ou massive"]
]

let chooseAdjs = Lists[0]

exports.bmi = function (height,weight){

    if(isNaN(height) || isNaN(weight)){
        return console.error("ERR ! \n The height or weight isn't a number")
    }



    let bmi = Math.round(weight/(height * height) * 10)/10
    
    var str;

    if(bmi < 18.5){
        str = chooseAdjs[0]
    } else if(18.5 <= bmi && bmi < 25){
        str = chooseAdjs[1]
    } else if( 25 <= bmi && bmi < 30){
        str = chooseAdjs[2]
    } else if( 35 <= bmi && bmi < 40){
        str = chooseAdjs[3]
    } else if(40 <= bmi){
        str = chooseAdjs[4]
    }


    return result = {
        bmi : bmi,
        adjective : str
    }


}

exports.setLanguage = function(language){
    if(languages.includes(language)){
        chooseAdjs = Lists[languages.indexOf(language)]
    }
}
