import { parseCsv } from "./parseCSV";

describe("parse csv to array of objects", () => {
    it("returns array of objects with numbers as integers and strings wrapped in quotes", () => {
        const expectedResponse = [{
            'Message Id': 1,
            Body: '"Hi there"',
            'Delivery Status': '"SUCCESS"'
        },
        {
            'Message Id': 2,
            Body: '"Please book appointment"',
            'Delivery Status': '"SUCCESS"'
        },
        {
            'Message Id': 3,
            Body: '"Emergency contact updated for your account"',
            'Delivery Status': '"UNDELIVERED"'
        },
        {
            'Message Id': 4,
            Body: '"You have a new friend request from Peter"',
            'Delivery Status': '"UNDELIVERED"'
        }]
        const actualResponse = parseCsv('/sample.csv');
        expect(expectedResponse).toEqual(actualResponse);
    });
});