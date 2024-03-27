function(e) {
    "use strict";
    var t = String.prototype.replace,
        n = /%20/g,
        r = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        };
    e.exports = {
        default: r.RFC3986,
        formatters: {
            RFC1738: function(e) {
                return t.call(e, n, "+")
            },
            RFC3986: function(e) {
                return String(e)
            }
        },
        RFC1738: r.RFC1738,
        RFC3986: r.RFC3986
    }
}