function(e, t, n) {
    "use strict";
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("659510"), n("527135"), n("70102");
    var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    t.assign = function(e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
            var n, r, i = t.shift();
            if (!!i) {
                if ("object" != typeof i) throw TypeError(i + "must be non-object");
                for (var o in i) {
                    ;
                    if (n = i, r = o, Object.prototype.hasOwnProperty.call(n, r)) e[o] = i[o]
                }
            }
        }
        return e
    }, t.shrinkBuf = function(e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
    };
    var i = {
            arraySet: function(e, t, n, r, i) {
                if (t.subarray && e.subarray) {
                    e.set(t.subarray(n, n + r), i);
                    return
                }
                for (var o = 0; o < r; o++) e[i + o] = t[n + o]
            },
            flattenChunks: function(e) {
                var t, n, r, i, o, s;
                for (t = 0, r = 0, n = e.length; t < n; t++) r += e[t].length;
                for (t = 0, s = new Uint8Array(r), i = 0, n = e.length; t < n; t++) o = e[t], s.set(o, i), i += o.length;
                return s
            }
        },
        o = {
            arraySet: function(e, t, n, r, i) {
                for (var o = 0; o < r; o++) e[i + o] = t[n + o]
            },
            flattenChunks: function(e) {
                return [].concat.apply([], e)
            }
        };
    t.setTyped = function(e) {
        e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, i)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, o))
    }, t.setTyped(r)
}