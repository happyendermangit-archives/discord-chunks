function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildAlertModeEnabled: function() {
            return c
        },
        useGuildAlertModeEnabled: function() {
            return _
        }
    });
    var i = n("149765"),
        r = n("442837"),
        s = n("818083"),
        a = n("430824"),
        o = n("496675"),
        l = n("676770");
    let u = (0, s.createExperiment)({
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
        d = (0, s.createExperiment)({
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

    function _(e) {
        let t = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(e)),
            n = (0, r.useStateFromStores)([o.default], () => null != t && i.hasAny(o.default.computePermissions(t), l.IncidentAlertModeratorPermissions)),
            s = u.useExperiment({
                guildId: e,
                location: "c3fae3_1"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            _ = d.useExperiment({
                guildId: e,
                location: "c3fae3_2"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: s.showAlertMode || _.showAlertMode,
            alsoShowMemberSafety: s.alsoShowMemberSafety || _.alsoShowMemberSafety
        }
    }

    function c(e) {
        let t = a.default.getGuild(e),
            n = null != t && i.hasAny(o.default.computePermissions(t), l.IncidentAlertModeratorPermissions),
            r = u.getCurrentConfig({
                guildId: e,
                location: "c3fae3_3"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            s = d.getCurrentConfig({
                guildId: e,
                location: "c3fae3_4"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: r.showAlertMode || s.showAlertMode,
            alsoShowMemberSafety: r.alsoShowMemberSafety || s.alsoShowMemberSafety
        }
    }
}