function findMax(a1) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    var x = a1[Math.floor(Math.random() * a1.length)];
    var max = 0;
    for (var _a = 0, strings_1 = strings; _a < strings_1.length; _a++) {
        var s = strings_1[_a];
        console.log(s);
        if (Math.abs(x.length - s.length) > max) {
            max = Math.abs(x.length - s.length);
        }
    }
    // tslint:disable-next-line
    console.log("Our line ", x, ", max abs = ", max);
}
findMax(["123", "12345", "1234567", "1234567", "123456789"], "1234567890", "123456789012345", "1234", "123456");
