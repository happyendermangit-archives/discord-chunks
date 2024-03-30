function(e) {
    "use strict";
    e.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
}