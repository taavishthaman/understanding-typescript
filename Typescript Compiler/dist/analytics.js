"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics("The Data");
//# sourceMappingURL=analytics.js.map