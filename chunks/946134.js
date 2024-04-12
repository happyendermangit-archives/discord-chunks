function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        s = n("570140");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        let n = {};
        return e.forEach(e => {
            n[e] = t
        }), n
    }
    let l = {},
        u = new Date("2024-03-13").getTime(),
        d = new Date("2024-03-27").getTime(),
        _ = ["1212569433839636530", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581147675205652", "1212581390936178768", "1212582298893946880", "1212582372877541427", "1212582452640350238"],
        c = ["1217624148080332820", "1217625289681801316", "1217625572168044604", "1217625794382401577", "1217626024540508170", "1217626509737459852", "1217627051217911848", "1217627230818009171"];
    class E extends(i = r.default.PersistedStore) {
        initialize(e) {
            l = null != e ? e : {}
        }
        getState() {
            return l
        }
        getIsProductNew(e) {
            var t;
            return Date.now() < (null !== (t = l[e]) && void 0 !== t ? t : 0)
        }
    }
    a(E, "displayName", "CollectiblesProductFreshnessStore"), a(E, "persistKey", "CollectiblesProductFreshnessStore"), a(E, "migrations", [() => o(_, u), () => o(c, d), e => ({
        ...e,
        "1217626219651006495": d
    })]), t.default = new E(s.default, {
        COLLECTIBLES_PRODUCT_DETAILS_CLOSE: function(e) {
            delete l[e.item.skuId]
        }
    })
}