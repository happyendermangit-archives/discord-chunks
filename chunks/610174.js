function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildAlertModeEnabled: function() {
            return c
        },
        getGuildAlertModeEnabled: function() {
            return f
        }
    });
    var l = n("316693"),
        i = n("446674"),
        r = n("862205"),
        u = n("305961"),
        a = n("957255"),
        d = n("421127");
    let s = (0, r.createExperiment)({
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
        o = (0, r.createExperiment)({
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

    function c(e) {
        let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(e)),
            n = (0, i.useStateFromStores)([a.default], () => null != t && l.default.hasAny(a.default.computePermissions(t), d.IncidentAlertModeratorPermissions)),
            r = s.useExperiment({
                guildId: e,
                location: "c3fae3_1"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            c = o.useExperiment({
                guildId: e,
                location: "c3fae3_2"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: r.showAlertMode || c.showAlertMode,
            alsoShowMemberSafety: r.alsoShowMemberSafety || c.alsoShowMemberSafety
        }
    }

    function f(e) {
        let t = u.default.getGuild(e),
            n = null != t && l.default.hasAny(a.default.computePermissions(t), d.IncidentAlertModeratorPermissions),
            i = s.getCurrentConfig({
                guildId: e,
                location: "c3fae3_3"
            }, {
                disable: !n,
                autoTrackExposure: !0
            }),
            r = o.getCurrentConfig({
                guildId: e,
                location: "c3fae3_4"
            }, {
                disable: !n,
                autoTrackExposure: !0
            });
        return {
            showAlertMode: i.showAlertMode || r.showAlertMode,
            alsoShowMemberSafety: i.alsoShowMemberSafety || r.alsoShowMemberSafety
        }
    }
}