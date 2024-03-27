function(t, e, n) {
    var r, i = n("54640");
    var a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!a && a in t
    }
}