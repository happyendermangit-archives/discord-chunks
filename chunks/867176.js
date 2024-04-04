function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivitiesInTextEnabled: function() {
            return d
        },
        isActivityInTextSupportedForChannel: function() {
            return u
        },
        useActivitiesInTextExperimentConfig: function() {
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
            showInOmniButtonMenu: !1,
            showNewMobileLeaveUI: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Activities in Text, DM, and GDM channels",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !1
            }
        }, {
            id: 2,
            label: "Enable Activities in Text, DM, and GDM channels with new mobile leave UI",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                desktopThrobberEnabled: !1,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !0
            }
        }]
    });

    function u(e) {
        var t;
        if (null == e || void 0 === e) return !1;
        let n = o.default.getChannel(e.parent_id);
        if (null != n && (null == n ? void 0 : n.type) !== i.ChannelTypes.GUILD_CATEGORY) return !1;
        return t = e.type, [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(t)
    }

    function d(e, t) {
        if (null == e) return !1;
        let n = u(e);
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
            let t = o.default.getChannel(e);
            return {
                isActivitiesInTextEnabledForChannelType: u(t),
                channelGuildId: null == t ? void 0 : t.guild_id
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
        let n = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(e)),
            i = u(n),
            a = null == n ? void 0 : n.guild_id,
            d = null != a,
            _ = s.default.useExperiment({
                guildId: a,
                location: t
            }, {
                autoTrackExposure: d,
                disable: !d
            }),
            c = l.useExperiment({
                location: t
            }, {
                autoTrackExposure: !d,
                disable: d
            });
        return i ? d ? _ : c : null
    }
}