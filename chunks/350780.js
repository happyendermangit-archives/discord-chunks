function(e, t, n) {
    var r, i = n("608282");
    var a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function(e) {
        return !!a && a in e
    }
}