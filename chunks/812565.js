function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("382966"),
        a = n("485619"),
        u = n("332716"),
        s = n("868615");

    function l(e) {
        var t = e.applicationId,
            n = e.skuIDs,
            l = e.currentPaymentSourceId,
            c = e.isGift,
            f = r.useMemo(function() {
                return n.filter(function(e) {
                    return !s.ACTIVE_PREMIUM_SKUS.includes(e)
                })
            }, [JSON.stringify(n)]),
            d = (0, o.useStateFromStores)([u.default], function() {
                return f.every(function(e) {
                    return !u.default.isFetching(e) && null != u.default.get(e)
                })
            }),
            _ = (0, o.useStateFromStoresObject)([u.default], function() {
                var e = {},
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = f[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a, s = o.value;
                        e[s] = null !== (a = u.default.get(s)) && void 0 !== a ? a : void 0
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return e
            }, [f]);
        r.useEffect(function() {
            var e = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, a = f[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
                    var s = o.value;
                    !u.default.isFetching(s) && null == u.default.get(s) && (0, i.fetchSKU)(t, s)
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !e && null != a.return && a.return()
                } finally {
                    if (n) throw r
                }
            }
        }, [t, f]);
        var E = (0, o.useStateFromStoresObject)([a.default], function() {
            var e = {},
                t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = f[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var u, s = o.value;
                    e[s] = null !== (u = a.default.getPricesForSku(s)) && void 0 !== u ? u : void 0
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
            return e
        }, [f]);
        return r.useEffect(function() {
            var e = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, u = f[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
                    var s = o.value;
                    !a.default.isFetchingSKU(s) && (0, i.fetchPurchasePreview)(t, s, l, {
                        isGift: c
                    })
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !e && null != u.return && u.return()
                } finally {
                    if (n) throw r
                }
            }
        }, [t, f, l, c]), {
            hasFetchedSkus: d,
            skusById: _,
            skuPricePreviewsById: E
        }
    }
}