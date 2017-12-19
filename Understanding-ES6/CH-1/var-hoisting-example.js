function test(condition) {
    if (condition) {
        var a = 1;
        return a;
    } else {
        console.warn(a);
    }
}

test(0);