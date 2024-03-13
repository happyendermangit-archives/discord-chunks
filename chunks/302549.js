function(e, t, n) {
    var r = n("127704"),
        i = n("663008"),
        o = n("697244"),
        s = n("646767"),
        a = n("260333");
    e.exports = function(e, t, n) {
        var c = e.constructor;
        switch (t) {
            case "[object ArrayBuffer]":
                return r(e);
            case "[object Boolean]":
            case "[object Date]":
                return new c(+e);
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
                return a(e, n);
            case "[object Map]":
            case "[object Set]":
                return new c;
            case "[object Number]":
            case "[object String]":
                return new c(e);
            case "[object RegExp]":
                return o(e);
            case "[object Symbol]":
                return s(e)
        }
    }
}