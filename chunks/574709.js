function(e, t, n) {
    "use strict";
    n.r(t), n("724458");
    var i, r = n("180650"),
        a = n("979554"),
        s = n("442837"),
        o = n("570140"),
        l = n("597688");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = new Date(2023, 8, 25),
        _ = new Date(2023, 9, 5),
        c = () => ({
            categoryItemViews: {
                [r.CollectiblesCategorySkuId.FANTASY]: {
                    [a.CollectiblesItemType.AVATAR_DECORATION]: d,
                    [a.CollectiblesItemType.PROFILE_EFFECT]: _
                },
                [r.CollectiblesCategorySkuId.ANIME]: {
                    [a.CollectiblesItemType.AVATAR_DECORATION]: d,
                    [a.CollectiblesItemType.PROFILE_EFFECT]: _
                },
                [r.CollectiblesCategorySkuId.BREAKFAST]: {
                    [a.CollectiblesItemType.AVATAR_DECORATION]: d,
                    [a.CollectiblesItemType.PROFILE_EFFECT]: _
                },
                [r.CollectiblesCategorySkuId.DISXCORE]: {
                    [a.CollectiblesItemType.AVATAR_DECORATION]: d
                }
            }
        }),
        E = c();
    class I extends(i = s.default.PersistedStore) {
        initialize(e) {
            null != e && (E = e)
        }
        getState() {
            return E
        }
        isItemViewed(e) {
            var t, n;
            let i = null === (t = l.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
            return null != i && (null === (n = E.categoryItemViews[i]) || void 0 === n ? void 0 : n[e.type]) != null
        }
        reset() {
            E = c()
        }
    }
    u(I, "displayName", "CollectiblesPersistedStore"), u(I, "persistKey", "CollectiblesPersistedStoreV2"), new I(o.default, {
        COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
            let {
                categories: t,
                itemTypes: n
            } = e, i = new Date;
            return t.reduce((e, t) => {
                let {
                    skuId: r
                } = t, a = n.reduce((e, t) => {
                    var n;
                    return (null === (n = E.categoryItemViews[r]) || void 0 === n ? void 0 : n[t]) != null ? e : (null == E.categoryItemViews[r] && (E.categoryItemViews[r] = {}), E.categoryItemViews[r][t] = i, !0)
                }, !1);
                return e || a
            }, !1)
        }
    })
}