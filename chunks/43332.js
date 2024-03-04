function(e, t, n) {
    n("222007");
    var r, i = n("745011");
    var o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function(e) {
        return !!o && o in e
    }
}