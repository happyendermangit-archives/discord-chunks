function(e, t) {
    "use strict";
    var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    t.assign = function(e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
            var n, r, i = t.shift();
            if (!!i) {
                if ("object" != typeof i) throw TypeError(i + "must be non-object");
                for (var a in i) {
                    ;
                    if (n = i, r = a, Object.prototype.hasOwnProperty.call(n, r)) e[a] = i[a]
                }
            }
        }
        return e
    }, t.shrinkBuf = function(e, t) {
        return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
    };
    var r = {
            arraySet: function(e, t, n, r, i) {
                if (t.subarray && e.subarray) {
                    e.set(t.subarray(n, n + r), i);
                    return
                }
                for (var a = 0; a < r; a++) e[i + a] = t[n + a]
            },
            flattenChunks: function(e) {
                var t, n, r, i, a, o;
                for (t = 0, r = 0, n = e.length; t < n; t++) r += e[t].length;
                for (t = 0, o = new Uint8Array(r), i = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
                return o
            }
        },
        i = {
            arraySet: function(e, t, n, r, i) {
                for (var a = 0; a < r; a++) e[i + a] = t[n + a]
            },
            flattenChunks: function(e) {
                return [].concat.apply([], e)
            }
        };
    t.setTyped = function(e) {
        e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, r)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, i))
    }, t.setTyped(n)
}