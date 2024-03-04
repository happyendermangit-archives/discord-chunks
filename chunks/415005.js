function(e, t, n) {
    "use strict";
    var r, i = n("390493");
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("492311"), n("70102");
    var o = n("446825"),
        s = o.Buffer,
        a = {};
    for (r in o) {
        if (!!o.hasOwnProperty(r)) "SlowBuffer" !== r && "Buffer" !== r && (a[r] = o[r])
    }
    var c = a.Buffer = {};
    for (r in s) {
        if (!!s.hasOwnProperty(r)) "allocUnsafe" !== r && "allocUnsafeSlow" !== r && (c[r] = s[r])
    }
    if (a.Buffer.prototype = s.prototype, (!c.from || c.from === Uint8Array.from) && (c.from = function(e, t, n) {
            if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
            if (e && void 0 === e.length) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            return s(e, t, n)
        }), !c.alloc && (c.alloc = function(e, t, n) {
            if ("number" != typeof e) throw TypeError('The "size" argument must be of type number. Received type ' + typeof e);
            if (e < 0 || e >= 2147483648) throw RangeError('The value "' + e + '" is invalid for option "size"');
            var r = s(e);
            return t && 0 !== t.length ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }), !a.kStringMaxLength) try {
        a.kStringMaxLength = i.binding("buffer").kStringMaxLength
    } catch (e) {}!a.constants && (a.constants = {
        MAX_LENGTH: a.kMaxLength
    }, a.kStringMaxLength && (a.constants.MAX_STRING_LENGTH = a.kStringMaxLength)), e.exports = a
}