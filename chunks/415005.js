function(t, e, s) {
    "use strict";
    var r, i = s("390493");
    s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("492311"), s("70102");
    var n = s("446825"),
        c = n.Buffer,
        o = {};
    for (r in n) {
        if (!!n.hasOwnProperty(r)) "SlowBuffer" !== r && "Buffer" !== r && (o[r] = n[r])
    }
    var f = o.Buffer = {};
    for (r in c) {
        if (!!c.hasOwnProperty(r)) "allocUnsafe" !== r && "allocUnsafeSlow" !== r && (f[r] = c[r])
    }
    if (o.Buffer.prototype = c.prototype, (!f.from || f.from === Uint8Array.from) && (f.from = function(t, e, s) {
            if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
            if (t && void 0 === t.length) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
            return c(t, e, s)
        }), !f.alloc && (f.alloc = function(t, e, s) {
            if ("number" != typeof t) throw TypeError('The "size" argument must be of type number. Received type ' + typeof t);
            if (t < 0 || t >= 2147483648) throw RangeError('The value "' + t + '" is invalid for option "size"');
            var r = c(t);
            return e && 0 !== e.length ? "string" == typeof s ? r.fill(e, s) : r.fill(e) : r.fill(0), r
        }), !o.kStringMaxLength) try {
        o.kStringMaxLength = i.binding("buffer").kStringMaxLength
    } catch (t) {}!o.constants && (o.constants = {
        MAX_LENGTH: o.kMaxLength
    }, o.kStringMaxLength && (o.constants.MAX_STRING_LENGTH = o.kStringMaxLength)), t.exports = o
}