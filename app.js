//arrays
console.log([1,2,3]);
console.table([1,2,3]);

//objects
console.log({a:1, b: "Hello", c: true});
console.table({a:1, b: "Hello", c: true});

//log levels
console.info("Info log");
console.warn("Warn log");
console.error("Error log");
console.clear();

console.time("timer-label");
    console.log([1,2,3]);
    console.table([1,2,3]);

    //objects
    console.log({a:1, b: "Hello", c: true});
    console.table({a:1, b: "Hello", c: true});

    //log levels
    console.info("An Info log");
    console.warn("A Warn log");
    console.error("An Error log");
console.timeEnd("timer-label");

//Types
const primitiveTypes = {
    aString: 'A String',
    aNumber: 3.142,
    aBoolean: true,
    aNull: null,
    aUndefined: undefined,
    aSymbol: Symbol()
};
console.log('primtive types');
console.table(primitiveTypes);

// The typeof each property
for (var key of Object.keys(primitiveTypes)) {
    console.log("typeof(" + key + ")==" + typeof(primitiveTypes[key]));
}

//typeof(null) == object; //A javascript bug
console.warn('This is a js bug!. typeof(null)==' + typeof(null));

//Reference types
const referenceTypes = {
    anArray: [1, 2, 3],
    anObject: {a: 1, b:"A String"},
    aDate: new Date()
};

// The typeof each property
for (var key of Object.keys(referenceTypes)) {
    console.log("typeof(" + key + ")==" + typeof(referenceTypes[key]));
}

//Type coercion
const val1 = 1;
const val2 = "2";
const sum = val1 + val2;

console.log(sum);
console.log('number + string ==' + typeof(sum));

// String templating
const buffer = `val1=${val1}`;
console.log(buffer);

