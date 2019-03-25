function findMax(a1: string[], ...strings: string[]): void {
    const x = a1[Math.floor(Math.random() * a1.length)];
    let max = 0;
    for (const s of strings) {
        if (Math.abs(x.length - s.length) > max) {
            max = Math.abs(x.length - s.length);
        }
    }
    // tslint:disable-next-line
    console.log("Our line ",x,", max abs = ",max);
}
findMax(["123", "12345", "1234567", "1234567", "123456789"], "1234567890", "123456789012345", "1234", "123456");
