function(t, r, e) {
    e("222007");
    var DataView = e("568958"),
        Map = e("316923"),
        Promise = e("42852"),
        Set = e("817909"),
        WeakMap = e("798614"),
        n = e("60297"),
        o = e("521532"),
        i = "[object Map]",
        a = "[object Promise]",
        u = "[object Set]",
        s = "[object WeakMap]",
        f = "[object DataView]",
        c = o(DataView),
        l = o(Map),
        h = o(Promise),
        p = o(Set),
        v = o(WeakMap),
        d = n;
    (DataView && d(new DataView(new ArrayBuffer(1))) != f || Map && d(new Map) != i || Promise && d(Promise.resolve()) != a || Set && d(new Set) != u || WeakMap && d(new WeakMap) != s) && (d = function(t) {
        var r = n(t),
            e = "[object Object]" == r ? t.constructor : void 0,
            d = e ? o(e) : "";
        if (d) switch (d) {
            case c:
                return f;
            case l:
                return i;
            case h:
                return a;
            case p:
                return u;
            case v:
                return s
        }
        return r
    }), t.exports = d
}