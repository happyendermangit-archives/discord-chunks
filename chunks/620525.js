function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildAlertModeEnabled: function() {
            return d
        },
        useGuildAlertModeEnabled: function() {
            return f
        }
    });
    var r = n("22287"),
        o = n("898511"),
        i = n("94498"),
        a = n("306912"),
        u = n("29884"),
        s = n("247967"),
        l = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-04_guild_alert_mode",
            label: "Guild Alert Mode",
            defaultConfig: {
                showAlertMode: !1,
                alsoShowMemberSafety: !1
            },
            treatments: [{
                id: 1,
                label: "Show alert mode experience",
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            }, {
                id: 2,
                label: "Show alert mode experience with member safety",
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !0
                }
            }]
        }),
        c = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-08_guild_alert_mode_friend_server",
            label: "Guild Alert Mode (friend servers only)",
            defaultConfig: {
                showAlertMode: !1,
                alsoShowMemberSafety: !1
            },
            treatments: [{
                id: 1,
                label: "Show alert mode experience",
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            }, {
                id: 2,
                label: "Show alert mode experience with member safety",
                config: {
                    showAlertMode: !0,
                    alsoShowMemberSafety: !1
                }
            }]
        });

    function f(e) {
        var t = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getGuild(e)
            }),
            n = (0, o.useStateFromStores)([u.default], function() {
                return null != t && r.hasAny(u.default.computePermissions(t), s.IncidentAlertModeratorPermissions)
            }),
            i = l.useExperiment({
                guildId: e,
                location: "c3fae3_1"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            f = c.useExperiment({
                guildId: e,
                location: "c3fae3_2"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: i.showAlertMode || f.showAlertMode,
            alsoShowMemberSafety: i.alsoShowMemberSafety || f.alsoShowMemberSafety
        }
    }

    function d(e) {
        var t = a.default.getGuild(e),
            n = null != t && r.hasAny(u.default.computePermissions(t), s.IncidentAlertModeratorPermissions),
            o = l.getCurrentConfig({
                guildId: e,
                location: "c3fae3_3"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            i = c.getCurrentConfig({
                guildId: e,
                location: "c3fae3_4"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: o.showAlertMode || i.showAlertMode,
            alsoShowMemberSafety: o.alsoShowMemberSafety || i.alsoShowMemberSafety
        }
    }
}