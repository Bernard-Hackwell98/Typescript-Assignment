let guyName = "Bernard";

import("title-case").then(titleCaseModule => {
const titleCase = titleCaseModule.titleCase;
console.log(guyName.toLowerCase());
console.log(guyName.toUpperCase());
console.log(titleCase(guyName));
});
