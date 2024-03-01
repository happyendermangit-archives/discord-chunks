function(e, t, r) {
    r("781738");
    var n = r("84927"),
        i = /^\s+/;
    e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e
    }
}