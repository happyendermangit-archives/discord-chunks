function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivitiesInTextEnabled: function() {
            return c
        },
        isActivityInTextSupportedForChannelType: function() {
            return l
        },
        useActivitiesInTextButtonVisibility: function() {
            return d
        },
        useIsActivitiesInTextEnabled: function() {
            return f
        }
    });
    var r = n("317955"),
        o = n("898511"),
        i = n("601065"),
        a = n("94498"),
        u = n("935741"),
        s = (0, a.createExperiment)({
            kind: "user",
            id: "2023-08_activities_in_text",
            label: "Activities in Text User",
            defaultConfig: {
                entryPointEnabled: !1,
                desktopThrobberEnabled: !1,
                activitiesInTextEnabled: !1,
                showInOmniButtonMenu: !1
            },
            treatments: [{
                id: 1,
                label: "Enable Activities in Text, DM, and GDM channels",
                config: {
                    entryPointEnabled: !0,
                    activitiesInTextEnabled: !0,
                    desktopThrobberEnabled: !1,
                    showInOmniButtonMenu: !0
                }
            }]
        });

    function l(e) {
        return [r.ChannelTypes.GUILD_TEXT, r.ChannelTypes.GROUP_DM, r.ChannelTypes.DM].includes(e)
    }

    function c(e, t) {
        if (null == e) return !1;
        var n = l(e.type);
        return (null == e ? void 0 : e.guild_id) != null ? i.default.getCurrentConfig({
            guildId: e.guild_id,
            location: t
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && n : s.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && n
    }

    function f(e, t) {
        var n = (0, o.useStateFromStoresObject)([u.default], function() {
                var t, n = u.default.getChannel(e);
                return {
                    isActivitiesInTextEnabledForChannelType: null != (t = n) && l(t.type),
                    channelGuildId: null == n ? void 0 : n.guild_id
                }
            }),
            r = n.isActivitiesInTextEnabledForChannelType,
            a = n.channelGuildId,
            c = null != a,
            f = i.default.useExperiment({
                guildId: a,
                location: t
            }, {
                autoTrackExposure: c,
                disable: !c
            }),
            d = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: !c,
                disable: c
            });
        return c ? f.activitiesInTextEnabled && r : d.activitiesInTextEnabled && r
    }

    function d(e, t) {
        var n = (0, o.useStateFromStores)([u.default], function() {
                var t;
                return null === (t = u.default.getChannel(e)) || void 0 === t ? void 0 : t.guild_id
            }),
            r = null != n,
            a = i.default.useExperiment({
                guildId: n,
                location: t
            }, {
                autoTrackExposure: r,
                disable: !r
            }),
            l = s.useExperiment({
                location: t
            }, {
                autoTrackExposure: !r,
                disable: r
            });
        return r ? a : l
    }
}