// userInfo.js file
let id;
id = 1;

function createUserProfiles(names, modifiedNames) {
    return names.map(( name, index) => {
        return {
            originalName: name,
            modifiedNames: modifiedNames[index],
            id: id++,
        };
    });
}
// for example, using the names and modified names in Task 2
const number = [1, 2, 3, 4];
const processedNumber = processArray(number);
const names = ['King', 'fred', 'sheep', 'cat']
const modifiedNames = formatArrayStrings(names, processedNumber)
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);