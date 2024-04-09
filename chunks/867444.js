function(e, t, n) {
    var i = {
            "./ggsans-400-normal.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-400-normalitalic.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-500-medium.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-500-mediumitalic.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-600-semibold.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-600-semibolditalic.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-700-bold.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-700-bolditalic.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-800-extrabold.woff2": function() {
                return Promise.resolve()
            },
            "./ggsans-800-extrabolditalic.woff2": function() {
                return Promise.resolve()
            }
        },
        r = {
            "./ggsans-400-normal.woff2": "776764",
            "./ggsans-400-normalitalic.woff2": "963686",
            "./ggsans-500-medium.woff2": "5983",
            "./ggsans-500-mediumitalic.woff2": "811135",
            "./ggsans-600-semibold.woff2": "151859",
            "./ggsans-600-semibolditalic.woff2": "480854",
            "./ggsans-700-bold.woff2": "909671",
            "./ggsans-700-bolditalic.woff2": "228978",
            "./ggsans-800-extrabold.woff2": "362799",
            "./ggsans-800-extrabolditalic.woff2": "69891"
        };

    function s(e) {
        if (!n.o(r, e)) return Promise.resolve().then(function() {
            var t = Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        });
        var t = i[e],
            s = r[e];
        return t().then(function() {
            return n.t(s, 17)
        })
    }
    s.keys = function() {
        return Object.keys(r)
    }, s.id = "867444", e.exports = s
}