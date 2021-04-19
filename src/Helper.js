

//Izveidot funkciju fill ,kas izveido masīvu ar padoto vērtību, un skaitu masīvā:
export function fill(arraySize, value) {
    return new Array(arraySize).fill(value)
}


//Izveidot funkciju, kas atgriež masīvu reversa secība:

export function reverse(array) {
    const reversed = []
    for (let i = array.length - 1; i >= 0; i -= 1){
        reversed.push(array[i]);
    };
    return reversed
}


//Izveidot funkciju, kas iztīra masīvu no visām nevajadzīgajām vērtībām: false, undefined, empty strings, zero, null
export function compact(array){
    return array.filter(x => x);
}

//Izveidot funkciju, kas pārveido masīvu, objektā:



export const arrayFromPairs = (array) => 

     array.reduce((acc, value) => {
        if(Array.isArray(value)){
            acc[value[0]] = value[1];
        
    }
    
    return acc;},{});


    //Izveidot funkciju, kas atgriež masīvu ar bez vērtībām, kas padotas funkcijai:



    //Izveidot funkciju, kas atgriež masīvu bez dublikātiem:

   export function removeDuplicates(array_){
        var ret_array = new Array();
        for (var a = array_.length - 1; a >= 0; a--) {
            for (var b = array_.length - 1; b >= 0; b--) {
                if(array_[a] == array_[b] && a != b){
                    delete array_[b];
                }
            };
            if(array_[a] != undefined)
                ret_array.push(array_[a]);
        };
        return ret_array;
    }
    
    
    



    //Izveidot funkciju, kas atgriež true, ja 2 padotie masīvi ir vienādi, citādi funkcijā atgriež false: 

    export function arraysEqual(a1,a2) {
        /* WARNING: arrays must not contain {objects} or behavior may be undefined */
        return JSON.stringify(a1)==JSON.stringify(a2);
    }
    



    //Izveidot funkciju, kas pārveido [1,2,3[4,5,[6]]] =>[1,2,3,4,5,6], nav atļauts izmantot array.flat()


    //Izveidot funkciju, kas sadala masīvu, daļas:

    



//Izveidot funkciju, kas atgriež unikālās vērtības visos padotajos masīvos:

export function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique);

console.log(unique);
