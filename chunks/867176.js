function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivitiesInTextEnabled: function() {
            return d
        },
        isActivityInTextSupportedForChannelType: function() {
            return u
        },
        useActivitiesInTextButtonVisibility: function() {
            return c
        },
        useIsActivitiesInTextEnabled: function() {
            return _
        }
    });
    var i = n("106351"),
        r = n("442837"),
        s = n("802171"),
        a = n("818083"),
        o = n("592125");
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
        return (null == e ? void 0 : e.guild_id) != null ? s.default.getCurrentConfig({
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

    function _(e, t) {
        let {
            isActivitiesInTextEnabledForChannelType: n,
            channelGuildId: i
        } = (0, r.useStateFromStoresObject)([o.default], () => {
            var t;
            let n = o.default.getChannel(e);
            return {
                isActivitiesInTextEnabledForChannelType: null != (t = n) && u(t.type),
                channelGuildId: null == n ? void 0 : n.guild_id
            }
        }), a = null != i, d = s.default.useExperiment({
            guildId: i,
            location: t
        }, {
            autoTrackExposure: a,
            disable: !a
        }), _ = l.useExperiment({
            location: t
        }, {
            autoTrackExposure: !a,
            disable: a
        });
        return a ? d.activitiesInTextEnabled && n : _.activitiesInTextEnabled && n
    }

    function c(e, t) {
        let n = (0, r.useStateFromStores)([o.default], () => {
                var t;
                return null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.guild_id
            }),
            i = null != n,
            a = s.default.useExperiment({
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