describe('variables and constants and stuff', () => {
    it('union a type', () => {
        let p;
        p = 'tacos';
        p = 3.14;
        p = [];
        let x: number | string;
        x = 12;
        x = 'tacos';

    });

    it('declaring an initializing a variable', () => {
        let y = 'tacos';

        let z: string | number = 'red';
    });
    it('constants must be initialized and cannot be reassigned', () => {
        const PI = 3.14;
        const favoriteNumbers = [9, 20, 108];
        favoriteNumbers[0] = 10;
        const movie = {
            title: 'Avengers End-Game',
            yearReleased: 2018
        }
        movie.yearReleased = 2019;
    });
    it('var is broken because it does not have block scope', () => {
        let age = 22;
        if (age > 21) {
            var message = 'Old Enough';//do not do. Use let.
        }
        expect(message).toBe('Old Enough');
    });
});

describe('literals', () => {

    it('number literals', () => {
        let z = 99;
        let n1 = 1_000_000; //commas don't work
        expect(1000000).toBe(n1);
        let favColor = 0xff;
        let binary = 0b010101;
        let n3 = 1.2;
    });

});
describe('string literals', () => {
    it('no difference between single or double', () => {
        let name = 'Darth';
        expect(name).toBe("Darth");

        let story = 'She told him "Never!!!" and then stormed off';
        let author = "Flanner O'Conner";
        let story2 = "She told him \"Never!!!\" and then stormed off";
    });
    it('has string literals', () => {
        let story = `It was a dark and stormy night.
                The End`;
        console.log(story);
        expect('beer').toBe(`beer`);
    });
    it('has template strings', () => {
        //old skool string concatenation
        const name = 'Bob', age = 63;
        const info = 'His name is ' + name + ' and he is ' + age + ' years old';
        const info2 = `His name is ${name} and he is ${age} years old`;
        expect(info).toBe(info2);
    });
    describe('function literals', () => {
        it('how to declare a function', () => {
            //named function
            function add(a: number, b: number) {
                a + b;
            }
            //an anonymous function with the function keyword
            const subtract = function (a: number, b: number) {
                return a - b;
            }
            //an anonymous arrow function
            const multiply = (a: number, b: number) => a * b;

            expect(subtract(20, 8)).toBe(12);
            expect(multiply(20, 8)).toBe(160);
        });
    });
    describe('object literals & interfaces', () => {
        it('has them', () => {
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
            };
            const movie: Movie = {
                title: 'Thor Ragnorak',
                director: 'Waititi',
                yearReleased: 2017
            }
            const antMan: Movie = {
                title: 'Ant Man',
                director: 'Jones',
                yearReleased: 2014
            }
            expect(movie.title).toBe('Thor Ragnorak');
            expect(movie['title']).toBe('Thor Ragnorak');
            const dataFromApi = {
                data: 'All is good',
                'generated at': 'Server in DC'
            }
            expect(dataFromApi.data).toBe('All is good');
            expect(dataFromApi["generated at"]).toBe('Server in DC');
        });
    });
    describe('array literals', () => {
        it('has them', () => {
            const friends = ['Reggie', 'David', 'Sara', 'Sean'];
            expect(friends[1]).toBe('David');
            expect(friends[999]).toBeUndefined();
            friends[999] = 'Billy';

            expect(friends[999]).toBe('Billy');

            let colors: string[];
            colors = ['Red', 'Green', 'Orange'];
            let numbers: Array<number>;
            numbers = [1, 2, 3];
            let jumbled: (string | number)[] = [1, 'dog', 'cat'];
            let jumbled1: Array<number | string>;
        });
        it('using tuple types', () => {
            let jumbled1: Array<number | string> = [12, 'cat', 'bird', 82];
            const x = jumbled1[2];

            let settings: [boolean, string, number] = [true, 'shirt', 12];

            const s = settings[2];

            // interface NameInfo { fullName: string, numberOfLetters: number };
            // function formatName(first: string, last: string): NameInfo {
            //     let fullName = `${last}, ${first}`;
            //     return {
            //         fullName,
            //         numberOfLetters: fullName.length
            //     };
            // }

            function formatName(first: string, last: string): [string, number] {
                let fullName = `${last}, ${first}`;
                return [fullName, fullName.length];
            }

            // const answer = formatName('Han', 'Solo');
            // expect(answer.fullName).toBe('Solo, Han');
            // expect(answer.numberOfLetters).toBe(9);

            const [theName, howLong] = formatName('Han', 'Solo');

            expect(theName).toBe('Solo, Han');
            expect(howLong).toBe(9);
        });
        it('unions of literals over enums', () => {
            type seatType = 'aisle' | 'window' | 'middle';
            let myseat: seatType = 'window';
        });
    });
});
