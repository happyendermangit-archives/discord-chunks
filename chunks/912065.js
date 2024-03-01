function(t, e, s) {
    s("70102");
    var r = s("446825"),
        i = r.Buffer;

    function n(t, e) {
        for (var s in t) e[s] = t[s]
    }

    function c(t, e, s) {
        return i(t, e, s)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (n(r, e), e.Buffer = c), c.prototype = Object.create(i.prototype), n(i, c), c.from = function(t, e, s) {
        if ("number" == typeof t) throw TypeError("Argument must not be a number");
        return i(t, e, s)
    }, c.alloc = function(t, e, s) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        var r = i(t);
        return void 0 !== e ? "string" == typeof s ? r.fill(e, s) : r.fill(e) : r.fill(0), r
    }, c.allocUnsafe = function(t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return i(t)
    }, c.allocUnsafeSlow = function(t) {
        if ("number" != typeof t) throw TypeError("Argument must be a number");
        return r.SlowBuffer(t)
    }
}