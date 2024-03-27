function(e, t, n) {
    "use strict";
    var r, i = n("444675"),
        a = n("413135"),
        o = a.Buffer,
        s = {};
    for (r in a) {
        if (!!a.hasOwnProperty(r)) "SlowBuffer" !== r && "Buffer" !== r && (s[r] = a[r])
    }
    var u = s.Buffer = {};
    for (r in o) {
        if (!!o.hasOwnProperty(r)) "allocUnsafe" !== r && "allocUnsafeSlow" !== r && (u[r] = o[r])
    }
    if (s.Buffer.prototype = o.prototype, (!u.from || u.from === Uint8Array.from) && (u.from = function(e, t, n) {
            if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            return o(e, t, n)
        }), !u.alloc && (u.alloc = function(e, t, n) {
            if ("number" != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2147483648) throw RangeError('The value "' + e + '" is invalid for option "size"');
            var r = o(e);
            return t && 0 !== t.length ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }), !s.kStringMaxLength) try {
        s.kStringMaxLength = i.binding("buffer").kStringMaxLength
    } catch (e) {}!s.constants && (s.constants = {
        MAX_LENGTH: s.kMaxLength
    }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), e.exports = s
}