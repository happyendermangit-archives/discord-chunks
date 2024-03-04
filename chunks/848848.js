function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        getChannelRoleSubscriptionStatus: function() {
            return d
        }
    });
    var i = n("446674"),
        s = n("203288"),
        r = n("42203"),
        a = n("957255"),
        o = n("49111");
    let l = {
        needSubscriptionToAccess: !1,
        isSubscriptionGated: !1
    };

    function u(e) {
        return (0, i.useStateFromStoresObject)([r.default, s.default, a.default], () => d(e, r.default, s.default, a.default), [e])
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default,
            u = t.getChannel(e);
        if (null == u ? void 0 : u.isRoleSubscriptionTemplatePreviewChannel()) return {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: !0
        };
        if (null == u || !n.isChannelGated(u.guild_id, u.id)) return l;
        let d = u.isGuildVocal() ? !i.can(o.Permissions.CONNECT, u) : !i.can(o.Permissions.VIEW_CHANNEL, u);
        return {
            isSubscriptionGated: !0,
            needSubscriptionToAccess: d
        }
    }
}