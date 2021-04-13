// Node packages for file system
import * as path from "path";
import * as fs from "fs";


export const parseCsv = (filePath: string) => {
    const pathFromRoot = path.join(__dirname, filePath);
    // Read CSV
    let f = fs.readFileSync(pathFromRoot, 'utf-8');
    // Split on row
    const rows: string[] = f.split("\n");
    // Get first row for column headers
    const headers = rows.shift().split(';');

    return rows.reduce((acc, row) => {
        //split every element by ; and determine if its a number or not
        let rowElements = row.split(';').map(element => isNaN(element as unknown as number) ? element : +element);
        let tmp = {};
        for (let i = 0; i < headers.length; i++) {
            tmp[headers[i]] = rowElements[i];
        }
        acc.push(tmp);
        return acc;
    }, []);
}
