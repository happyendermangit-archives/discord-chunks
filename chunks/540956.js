function(e, t, n) {
    n("222007");
    var DataView = n("864259"),
        Map = n("516863"),
        Promise = n("23588"),
        Set = n("892933"),
        WeakMap = n("445269"),
        r = n("33426"),
        i = n("6906"),
        o = "[object Map]",
        s = "[object Promise]",
        a = "[object Set]",
        c = "[object WeakMap]",
        u = "[object DataView]",
        d = i(DataView),
        l = i(Map),
        f = i(Promise),
        p = i(Set),
        h = i(WeakMap),
        v = r;
    (DataView && v(new DataView(new ArrayBuffer(1))) != u || Map && v(new Map) != o || Promise && v(Promise.resolve()) != s || Set && v(new Set) != a || WeakMap && v(new WeakMap) != c) && (v = function(e) {
        var t = r(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            v = n ? i(n) : "";
        if (v) switch (v) {
            case d:
                return u;
            case l:
                return o;
            case f:
                return s;
            case p:
                return a;
            case h:
                return c
        }
        return t
    }), e.exports = v
}