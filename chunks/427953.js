function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivityInTextSupportedForChannelType: function() {
            return u
        },
        isActivitiesInTextEnabled: function() {
            return c
        },
        useIsActivitiesInTextEnabled: function() {
            return f
        },
        useActivitiesInTextButtonVisibility: function() {
            return _
        }
    });
    var i = n("298386"),
        s = n("446674"),
        r = n("75789"),
        a = n("862205"),
        o = n("42203");
    let l = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_activities_in_text",
        label: "Activities in Text User",
        defaultConfig: {
            entryPointEnabled: !1,
            desktopThrobberEnabled: !1,
            activitiesInTextEnabled: !1,
            showInOmniButtonMenu: !1,
            showChatInputButton: !1
        },
        treatments: [{
            id: 1,
            label: "enable Activities in text channels",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !0,
                showChatInputButton: !1
            }
        }, {
            id: 3,
            label: "enable Activities in text with the rocket button in chat input",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !1,
                showChatInputButton: !0
            }
        }]
    });

    function u(e) {
        return [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(e)
    }

    function d(e) {
        return null != e && u(e.type)
    }

    function c(e, t) {
        if (null == e) return !1;
        let n = u(e.type);
        return (null == e ? void 0 : e.guild_id) != null ? r.default.getCurrentConfig({
            guildId: e.guild_id,
            location: t
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && n : l.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && n
    }

    function f(e, t) {
        let n = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(e)),
            i = d(n),
            a = (null == n ? void 0 : n.guild_id) != null ? r.default : l,
            u = a.useExperiment({
                guildId: null == n ? void 0 : n.guild_id,
                location: t
            }, {
                autoTrackExposure: !0
            });
        return u.activitiesInTextEnabled && i
    }

    function _(e, t) {
        let n = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(e)),
            i = d(n),
            a = (null == n ? void 0 : n.guild_id) != null ? r.default : l,
            u = a.useExperiment({
                guildId: null == n ? void 0 : n.guild_id,
                location: t
            }, {
                autoTrackExposure: !0
            });
        return u.activitiesInTextEnabled && i ? {
            showInOmniButtonMenu: "showInOmniButtonMenu" in u && u.showInOmniButtonMenu,
            showChatInputButton: "showChatInputButton" in u && u.showChatInputButton
        } : null
    }
}