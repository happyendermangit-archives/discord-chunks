function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return _
        }
    }), r("808653");
    var u = r("635058"),
        n = r("265586"),
        i = r("446674"),
        E = r("913144"),
        s = r("853987");
    let l = new Date(2023, 8, 25),
        c = new Date(2023, 9, 5),
        o = () => ({
            categoryItemViews: {
                [u.CollectiblesCategorySkuId.FANTASY]: {
                    [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                    [n.CollectiblesItemType.PROFILE_EFFECT]: c
                },
                [u.CollectiblesCategorySkuId.ANIME]: {
                    [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                    [n.CollectiblesItemType.PROFILE_EFFECT]: c
                },
                [u.CollectiblesCategorySkuId.BREAKFAST]: {
                    [n.CollectiblesItemType.AVATAR_DECORATION]: l,
                    [n.CollectiblesItemType.PROFILE_EFFECT]: c
                },
                [u.CollectiblesCategorySkuId.DISXCORE]: {
                    [n.CollectiblesItemType.AVATAR_DECORATION]: l
                }
            }
        }),
        a = o();
    class C extends i.default.PersistedStore {
        initialize(e) {
            null != e && (a = e)
        }
        getState() {
            return a
        }
        isItemViewed(e) {
            var t, r;
            let u = null === (t = s.default.getProduct(e.skuId)) || void 0 === t ? void 0 : t.categorySkuId;
            return null != u && (null === (r = a.categoryItemViews[u]) || void 0 === r ? void 0 : r[e.type]) != null
        }
        reset() {
            a = o()
        }
    }
    C.displayName = "CollectiblesPersistedStore", C.persistKey = "CollectiblesPersistedStoreV2";
    var _ = new C(E.default, {
        COLLECTIBLES_CATEGORY_ITEMS_VIEWED: e => {
            let {
                categories: t,
                itemTypes: r
            } = e, u = new Date;
            return t.reduce((e, t) => {
                let {
                    skuId: n
                } = t, i = r.reduce((e, t) => {
                    var r;
                    return (null === (r = a.categoryItemViews[n]) || void 0 === r ? void 0 : r[t]) != null ? e : (null == a.categoryItemViews[n] && (a.categoryItemViews[n] = {}), a.categoryItemViews[n][t] = u, !0)
                }, !1);
                return e || i
            }, !1)
        }
    })
}