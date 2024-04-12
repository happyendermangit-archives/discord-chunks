function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("442837"),
        s = n("335131"),
        a = n("946134");
    t.default = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, r.useStateFromStores)([a.default], () => a.default.getIsProductNew(e.skuId)),
            o = i.useRef(!1);
        return i.useEffect(() => {
            !o.current && t && ((0, s.productDetailsClosed)(e), o.current = !0)
        }, [t, e]), n
    }
}