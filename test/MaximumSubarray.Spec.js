import MaximumSubarray from "../src/MaximumSubarray";
import {expect} from "chai";

describe("MaximumArray", function () {
    var maximum;

    beforeEach(()=>{
        maximum = new MaximumSubarray();
    });

    it("should return null when []", function () {
        expect(null).to.be.equal(maximum.calculate([]));
    });

    it("should return -1 when [-1]", function () {
        expect(-1).to.be.equal(maximum.calculate([-1]));
    });

    it("should return 3 when [1,2]", function () {
        expect(3).to.be.equal(maximum.calculate([1,2]));
    });

    it("should return 2 when [2,-2]", function () {
        expect(2).to.be.equal(maximum.calculate([2,-2]));
    });

    it("should return 2 when [3,-1,5]", function () {
        expect(7).to.be.equal(maximum.calculate([3,-1,5]));
    });

    it("should return 6 when [-2,1,-3,4,-1,2,1,-5,4]", function () {
        expect(6).to.be.equal(maximum.calculate([-2,1,-3,4,-1,2,1,-5,4]));
    });

});
