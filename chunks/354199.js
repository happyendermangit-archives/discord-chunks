function(e, t, n) {
    var r = n("754675"),
        i = n("39493"),
        a = n("855543"),
        o = n("143866"),
        s = n("142670");
    e.exports = function(e, t, n) {
        var u = e.constructor;
        switch (t) {
            case "[object ArrayBuffer]":
                return r(e);
            case "[object Boolean]":
            case "[object Date]":
                return new u(+e);
            case "[object DataView]":
                return i(e, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return s(e, n);
            case "[object Map]":
            case "[object Set]":
                return new u;
            case "[object Number]":
            case "[object String]":
                return new u(e);
            case "[object RegExp]":
                return a(e);
            case "[object Symbol]":
                return o(e)
        }
    }
}