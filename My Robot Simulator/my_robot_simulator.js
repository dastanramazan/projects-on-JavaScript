function my_robot_simulator(param){
        var dir = 0;
        var x = 0;
        var y = 0;
        var direction;
            for (i=0; i < param.length; i++){
                if (param[i] == `R`) {funR();}
                if (param[i] == `L`) {funL();}
                if (param[i] == `A`) {funA();}
            }
            if (dir == 4 || dir == 0 || dir == 4){direction = 'north';}
            if (dir == 3 || dir == -1){direction = 'west';}
            if (dir == 2 || dir == -2){direction = 'south';}
            if (dir == 1 || dir == -3){direction = 'east';}

        function funR(){dir++;}
        function funL(){dir--;}
        function funA(){
            if (dir == 2){y++;}
            if (dir == 1){x++;}
            if (dir == 0){y--;}
            if (dir == -1){x--;}
            if (dir == -2){y++;}
        }
            //console.log(`"{x: `+ x +`, y: `+ y +`, bearing: ` + direction + `}"`);
            return `{x: `+ x +`, y: `+ y +`, bearing: '`+ direction + `'}`;
}




//move("");
