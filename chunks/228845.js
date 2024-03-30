function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getChannelRoleSubscriptionStatus: function() {
            return c
        }
    });
    var r = n("898511"),
        o = n("291178"),
        i = n("935741"),
        a = n("29884"),
        u = n("281767"),
        s = {
            needSubscriptionToAccess: !1,
            isSubscriptionGated: !1
        };

    function l(e) {
        return (0, r.useStateFromStoresObject)([i.default, o.default, a.default], function() {
            return c(e, i.default, o.default, a.default)
        }, [e])
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            l = t.getChannel(e);
        return (null == l ? void 0 : l.isRoleSubscriptionTemplatePreviewChannel()) ? {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: !0
        } : null != l && n.isChannelGated(l.guild_id, l.id) ? {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: l.isGuildVocal() ? !r.can(u.Permissions.CONNECT, l) : !r.can(u.Permissions.VIEW_CHANNEL, l)
        } : s
    }
}