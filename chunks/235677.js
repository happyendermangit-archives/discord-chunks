function(t, r, e) {
    e("222007");
    var n, o = e("734777");
    var i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(t) {
        return !!i && i in t
    }
}