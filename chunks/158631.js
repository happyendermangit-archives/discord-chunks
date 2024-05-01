function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getIsBroadcastingToAnyone: function() {
            return E
        },
        isBroadcastingInChannel: function() {
            return c
        },
        useIsBroadcastingInChannel: function() {
            return _
        },
        useSelfBroadcast: function() {
            return u
        }
    });
    var i = n("442837"),
        r = n("695346");
    n("199902");
    var a = n("314897"),
        s = n("592125");
    n("944486");
    var o = n("885110"),
        l = n("770471");

    function u() {
        let e = (0, i.useStateFromStores)([a.default], () => a.default.getId()),
            {
                canBroadcast: t
            } = l.default.useExperiment({
                location: "use_self_broadcast"
            }, {
                autoTrackExposure: !1
            }),
            n = (0, i.useStateFromStores)([o.default], () => o.default.getBroadcast());
        return t && (null == n ? void 0 : n.userId) === e ? n : null
    }

    function d() {
        return null != u()
    }

    function _(e) {
        let t = u(),
            n = (0, i.useStateFromStores)([s.default], () => s.default.getChannel(e));
        return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
    }

    function c(e) {
        let t = a.default.getId(),
            {
                canBroadcast: n
            } = l.default.getCurrentConfig({
                location: "is_broadcasting_in_channel"
            }, {
                autoTrackExposure: !1
            }),
            i = o.default.getBroadcast();
        if (!n || null == i || i.userId !== t) return !1;
        let r = s.default.getChannel(e);
        return null != r && r.ownerId === i.userId && r.isBroadcastChannel()
    }

    function E() {
        let e = r.BroadcastAllowedGuildIds.getSetting(),
            t = r.BroadcastAllowedUserIds.getSetting();
        return r.BroadcastAllowFriends.getSetting() || e.length > 0 || t.length > 0
    }
    n("292584")
}