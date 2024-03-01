function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelfBroadcast: function() {
            return o
        },
        default: function() {
            return d
        },
        useIsBroadcastingInChannel: function() {
            return c
        },
        isBroadcastingInChannel: function() {
            return f
        },
        getIsBroadcastingToAnyone: function() {
            return h
        }
    });
    var a = n("446674"),
        r = n("845579");
    n("373469");
    var s = n("271938"),
        l = n("42203");
    n("18494");
    var i = n("101125"),
        u = n("9759");

    function o() {
        let e = (0, a.useStateFromStores)([s.default], () => s.default.getId()),
            {
                canBroadcast: t
            } = u.default.useExperiment({
                location: "use_self_broadcast"
            }, {
                autoTrackExposure: !1
            }),
            n = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcast());
        return t && (null == n ? void 0 : n.userId) === e ? n : null
    }

    function d() {
        let e = o();
        return null != e
    }

    function c(e) {
        let t = o(),
            n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e));
        return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
    }

    function f(e) {
        let t = s.default.getId(),
            {
                canBroadcast: n
            } = u.default.getCurrentConfig({
                location: "is_broadcasting_in_channel"
            }, {
                autoTrackExposure: !1
            }),
            a = i.default.getBroadcast();
        if (!n || null == a || a.userId !== t) return !1;
        let r = l.default.getChannel(e);
        return null != r && r.ownerId === a.userId && r.isBroadcastChannel()
    }

    function h() {
        let e = r.BroadcastAllowedGuildIds.getSetting(),
            t = r.BroadcastAllowedUserIds.getSetting(),
            n = r.BroadcastAllowFriends.getSetting();
        return n || e.length > 0 || t.length > 0
    }
    n("194051")
}