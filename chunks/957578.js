function(e, t, n) {
    var r = n("413135"),
        i = r.Buffer;

    function a(e, t) {
        for (var n in e) t[n] = e[n]
    }

    function o(e, t, n) {
        return i(e, t, n)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (a(r, t), t.Buffer = o), o.prototype = Object.create(i.prototype), a(i, o), o.from = function(e, t, n) {
        if ("number" == typeof e) throw TypeError("Argument must not be a number");
        return i(e, t, n)
    }, o.alloc = function(e, t, n) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        var r = i(e);
        return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
    }, o.allocUnsafe = function(e) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        return i(e)
    }, o.allocUnsafeSlow = function(e) {
        if ("number" != typeof e) throw TypeError("Argument must be a number");
        return r.SlowBuffer(e)
    }
}