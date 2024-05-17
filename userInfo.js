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