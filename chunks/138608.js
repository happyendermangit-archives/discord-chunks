function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.id,
            n = e.username,
            r = e.discriminator,
            o = e.globalName,
            i = e.avatar,
            a = e.avatarDecoration,
            u = e.bot,
            s = e.flags,
            l = e.premiumType;
        return {
            id: t,
            username: n,
            discriminator: r,
            global_name: o,
            avatar: i,
            avatar_decoration_data: null != a ? {
                asset: a.asset,
                sku_id: a.skuId
            } : null,
            bot: u,
            flags: s,
            premium_type: null != l ? l : 0
        }
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}