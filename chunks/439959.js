function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NONE_ITEM: function() {
            return E
        },
        SHOP_ITEM: function() {
            return I
        },
        Section: function() {
            return i
        }
    }), n("47120"), n("724458"), n("653041");
    var i, r, s = n("470079"),
        a = n("399606"),
        o = n("597688"),
        l = n("1870"),
        u = n("884697"),
        d = n("594174"),
        _ = n("74538"),
        c = n("689938");
    (r = i || (i = {})).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r.PREMIUM_PREVIEW = "premium_preview";
    let E = {
            id: "None"
        },
        I = {
            id: "Shop"
        };
    t.default = () => {
        let e = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
            t = _.default.canUseCollectibles(e),
            n = (0, a.useStateFromStores)([l.default], () => l.default.purchases),
            [i, r] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.products]);
        return (0, s.useMemo)(() => {
            let e = (0, u.getAvatarDecorations)(n, i).reduce((e, i) => {
                let s = n.get(i.skuId),
                    a = (0, u.isPremiumCollectiblesPurchase)(s);
                return (a && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), a) ? (e.premium_purchase.push(i), e) : null != s ? (e.purchase.push(i), e) : !t && (0, u.isPremiumCollectiblesProduct)(r.get(i.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(i), e) : (e.preview.push(i), e)
            }, {
                purchase: [],
                premium_purchase: [],
                preview: [],
                premium_preview: []
            });
            return [{
                section: "purchase",
                items: [E, I, ...e.purchase],
                height: 12,
                header: c.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
            }, {
                section: e.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
                items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                height: 12,
                header: c.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
            }, {
                section: "preview",
                items: e.preview,
                height: 12,
                header: c.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
            }].filter(e => {
                let {
                    items: t
                } = e;
                return t.length > 0
            })
        }, [i, r, n, t])
    }
}