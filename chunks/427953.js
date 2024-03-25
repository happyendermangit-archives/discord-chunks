function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivityInTextSupportedForChannelType: function() {
            return u
        },
        isActivitiesInTextEnabled: function() {
            return d
        },
        useIsActivitiesInTextEnabled: function() {
            return c
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

    function u(e) {
        return [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(e)
    }

    function d(e, t) {
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

    function c(e, t) {
        let {
            isActivitiesInTextEnabledForChannelType: n,
            channelGuildId: i
        } = (0, s.useStateFromStoresObject)([o.default], () => {
            var t;
            let n = o.default.getChannel(e);
            return {
                isActivitiesInTextEnabledForChannelType: null != (t = n) && u(t.type),
                channelGuildId: null == n ? void 0 : n.guild_id
            }
        }), a = null != i, d = r.default.useExperiment({
            guildId: i,
            location: t
        }, {
            autoTrackExposure: a,
            disable: !a
        }), c = l.useExperiment({
            location: t
        }, {
            autoTrackExposure: !a,
            disable: a
        });
        return a ? d.activitiesInTextEnabled && n : c.activitiesInTextEnabled && n
    }

    function _(e, t) {
        let n = (0, s.useStateFromStores)([o.default], () => {
                var t;
                return null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.guild_id
            }),
            i = null != n,
            a = r.default.useExperiment({
                guildId: n,
                location: t
            }, {
                autoTrackExposure: i,
                disable: !i
            }),
            u = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: !i,
                disable: i
            });
        return i ? a : u
    }
}