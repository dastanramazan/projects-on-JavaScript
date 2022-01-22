function my_hamming_dna(param1, param2){
    var counter=0;
    if(param1.length !=param2.length){
        return -1;
    } else {

    for(var i=0; i<=param1.length-1;i++) {
        if(param1[i]!=param2[i]){
            counter++;
        }
        if(counter==param1.length-1){
            return 0;
        }

        }
    return counter;
    }

};
