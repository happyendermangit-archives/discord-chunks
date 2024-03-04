function(e, t, n) {
    "use strict";
    var r = n("390493");

    function i() {
        throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
    }
    n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var o = n("912065"),
        s = n("664813"),
        a = o.Buffer,
        c = o.kMaxLength,
        u = n.g.crypto || n.g.msCrypto,
        d = 4294967295;

    function l(e, t) {
        if ("number" != typeof e || e != e) throw TypeError("offset must be a number");
        if (e > d || e < 0) throw TypeError("offset must be a uint32");
        if (e > c || e > t) throw RangeError("offset out of range")
    }

    function f(e, t, n) {
        if ("number" != typeof e || e != e) throw TypeError("size must be a number");
        if (e > d || e < 0) throw TypeError("size must be a uint32");
        if (e + t > n || e > c) throw RangeError("buffer too small")
    }
    u && u.getRandomValues || !r.browser ? (t.randomFill = function(e, t, r, i) {
        if (!a.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
        if ("function" == typeof t) i = t, t = 0, r = e.length;
        else if ("function" == typeof r) i = r, r = e.length - t;
        else if ("function" != typeof i) throw TypeError('"cb" argument must be a function');
        return l(t, e.length), f(r, t, e.length), p(e, t, r, i)
    }, t.randomFillSync = function(e, t, r) {
        if (void 0 === t && (t = 0), !a.isBuffer(e) && !(e instanceof n.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
        return l(t, e.length), void 0 === r && (r = e.length - t), f(r, t, e.length), p(e, t, r)
    }) : (t.randomFill = i, t.randomFillSync = i);

    function p(e, t, n, i) {
        if (r.browser) {
            var o = e.buffer,
                a = new Uint8Array(o, t, n);
            if (u.getRandomValues(a), i) {
                r.nextTick(function() {
                    i(null, e)
                });
                return
            }
            return e
        }
        if (i) {
            s(n, function(n, r) {
                if (n) return i(n);
                r.copy(e, t), i(null, e)
            });
            return
        }
        return s(n).copy(e, t), e
    }
}