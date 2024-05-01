function(e, t, n) {
    "use strict";

    function i(e) {
        let {
            id: t,
            username: n,
            discriminator: i,
            globalName: r,
            avatar: a,
            avatarDecoration: s,
            bot: o,
            flags: l,
            premiumType: u
        } = e;
        return {
            id: t,
            username: n,
            discriminator: i,
            global_name: r,
            avatar: a,
            avatar_decoration_data: null != s ? {
                asset: s.asset,
                sku_id: s.skuId
            } : null,
            bot: o,
            flags: l,
            premium_type: null != u ? u : 0
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("789020")
}