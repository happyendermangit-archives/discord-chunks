function(t, e, s) {
    "use strict";
    s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("659510"), s("527135"), s("70102");
    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    e.assign = function(t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
            var s, r, i = e.shift();
            if (!!i) {
                if ("object" != typeof i) throw TypeError(i + "must be non-object");
                for (var n in i) {
                    ;
                    if (s = i, r = n, Object.prototype.hasOwnProperty.call(s, r)) t[n] = i[n]
                }
            }
        }
        return t
    }, e.shrinkBuf = function(t, e) {
        return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
    };
    var i = {
            arraySet: function(t, e, s, r, i) {
                if (e.subarray && t.subarray) {
                    t.set(e.subarray(s, s + r), i);
                    return
                }
                for (var n = 0; n < r; n++) t[i + n] = e[s + n]
            },
            flattenChunks: function(t) {
                var e, s, r, i, n, c;
                for (e = 0, r = 0, s = t.length; e < s; e++) r += t[e].length;
                for (e = 0, c = new Uint8Array(r), i = 0, s = t.length; e < s; e++) n = t[e], c.set(n, i), i += n.length;
                return c
            }
        },
        n = {
            arraySet: function(t, e, s, r, i) {
                for (var n = 0; n < r; n++) t[i + n] = e[s + n]
            },
            flattenChunks: function(t) {
                return [].concat.apply([], t)
            }
        };
    e.setTyped = function(t) {
        t ? (e.Buf8 = Uint8Array, e.Buf16 = Uint16Array, e.Buf32 = Int32Array, e.assign(e, i)) : (e.Buf8 = Array, e.Buf16 = Array, e.Buf32 = Array, e.assign(e, n))
    }, e.setTyped(r)
}