export default class MaximumSubarray{
    constructor(){}

    calculate(input){

        var sum=0;
        var arraySum = [];

        if (input.length==1) return input[0];
        if (input.length == 0) return null;

        for(var i=0;i<input.length;i++){
            sum=0;
            for(var j=i;j<input.length;j++){
                sum+=input[j];
                arraySum.push(sum);
            }
            this.cleanMinusValuesArray(arraySum);
        }
        return this.cleanMinusValuesArray(arraySum);
    }

    cleanMinusValuesArray(input) {
        var higherValue;
        for (var i=0; i<input.length;i++) {
            if (i==0) higherValue=input[i];
            if ((i>0) && (higherValue<input[i])){
                higherValue=input[i];
            }
        }
        return higherValue;
    }
}