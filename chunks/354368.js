function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getIsBroadcastingToAnyone: function() {
            return _
        },
        isBroadcastingInChannel: function() {
            return d
        },
        useIsBroadcastingInChannel: function() {
            return f
        },
        useSelfBroadcast: function() {
            return l
        }
    });
    var r = n("898511"),
        o = n("53867");
    n("73013");
    var i = n("217014"),
        a = n("935741");
    n("894288");
    var u = n("575098"),
        s = n("904393");

    function l() {
        var e = (0, r.useStateFromStores)([i.default], function() {
                return i.default.getId()
            }),
            t = s.default.useExperiment({
                location: "use_self_broadcast"
            }, {
                autoTrackExposure: !1
            }).canBroadcast,
            n = (0, r.useStateFromStores)([u.default], function() {
                return u.default.getBroadcast()
            });
        return t && (null == n ? void 0 : n.userId) === e ? n : null
    }

    function c() {
        return null != l()
    }

    function f(e) {
        var t = l(),
            n = (0, r.useStateFromStores)([a.default], function() {
                return a.default.getChannel(e)
            });
        return null != t && null != n && n.ownerId === t.userId && n.isBroadcastChannel()
    }

    function d(e) {
        var t = i.default.getId(),
            n = s.default.getCurrentConfig({
                location: "is_broadcasting_in_channel"
            }, {
                autoTrackExposure: !1
            }).canBroadcast,
            r = u.default.getBroadcast();
        if (!n || null == r || r.userId !== t) return !1;
        var o = a.default.getChannel(e);
        return null != o && o.ownerId === r.userId && o.isBroadcastChannel()
    }

    function _() {
        var e = o.BroadcastAllowedGuildIds.getSetting(),
            t = o.BroadcastAllowedUserIds.getSetting();
        return o.BroadcastAllowFriends.getSetting() || e.length > 0 || t.length > 0
    }
    n("3928")
}