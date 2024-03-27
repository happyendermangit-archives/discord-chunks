function(e, t, n) {
    "use strict";
    var r = n("444675");

    function i() {
        throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
    }
    var a = n("957578"),
        o = n("706178"),
        s = a.Buffer,
        u = a.kMaxLength,
        c = n.g.crypto || n.g.msCrypto,
        l = 4294967295;

    function d(e, t) {
        if ("number" != typeof e || e != e) throw TypeError("offset must be a number");
        if (e > l || e < 0) throw TypeError("offset must be a uint32");
        if (e > u || e > t) throw RangeError("offset out of range")
    }

    function f(e, t, n) {
        if ("number" != typeof e || e != e) throw TypeError("size must be a number");
        if (e > l || e < 0) throw TypeError("size must be a uint32");
        if (e + t > n || e > u) throw RangeError("buffer too small")
    }
    c && c.getRandomValues || !r.browser ? (t.randomFill = function(e, t, r, i) {
        if (!s.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
        if ("function" == typeof t) i = t, t = 0, r = e.length;
        else if ("function" == typeof r) i = r, r = e.length - t;
        else if ("function" != typeof i) throw TypeError('"cb" argument must be a function');
        return d(t, e.length), f(r, t, e.length), p(e, t, r, i)
    }, t.randomFillSync = function(e, t, r) {
        if (void 0 === t && (t = 0), !s.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
        return d(t, e.length), void 0 === r && (r = e.length - t), f(r, t, e.length), p(e, t, r)
    }) : (t.randomFill = i, t.randomFillSync = i);

    function p(e, t, n, i) {
        if (r.browser) {
            var a = e.buffer,
                s = new Uint8Array(a, t, n);
            if (c.getRandomValues(s), i) {
                r.nextTick(function() {
                    i(null, e)
                });
                return
            }
            return e
        }
        if (i) {
            o(n, function(n, r) {
                if (n) return i(n);
                r.copy(e, t), i(null, e)
            });
            return
        }
        return o(n).copy(e, t), e
    }
}