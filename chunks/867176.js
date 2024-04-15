function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivitiesInTextEnabled: function() {
            return u
        },
        isActivityInTextSupportedForChannel: function() {
            return l
        },
        useIsActivitiesInTextEnabled: function() {
            return d
        },
        useShowActivitiesInOmniButtonMenu: function() {
            return _
        }
    });
    var i = n("106351"),
        r = n("442837"),
        s = n("818083"),
        a = n("592125");
    let o = (0, s.createExperiment)({
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

    function l(e) {
        var t;
        if (null == e || void 0 === e) return !1;
        let n = a.default.getChannel(e.parent_id);
        if (null != n && (null == n ? void 0 : n.type) !== i.ChannelTypes.GUILD_CATEGORY) return !1;
        return t = e.type, [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(t)
    }

    function u(e, t) {
        if (null == e) return !1;
        let n = l(e);
        return (null == e ? void 0 : e.guild_id) != null ? n : o.getCurrentConfig({
            location: t
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && n
    }

    function d(e, t) {
        let {
            isActivitiesInTextEnabledForChannelType: n,
            channelGuildId: i
        } = (0, r.useStateFromStoresObject)([a.default], () => {
            let t = a.default.getChannel(e);
            return {
                isActivitiesInTextEnabledForChannelType: l(t),
                channelGuildId: null == t ? void 0 : t.guild_id
            }
        }), s = null != i, u = o.useExperiment({
            location: t
        }, {
            autoTrackExposure: !s,
            disable: s
        });
        return s ? n : u.activitiesInTextEnabled && n
    }

    function _(e, t) {
        let n = (0, r.useStateFromStores)([a.default], () => a.default.getChannel(e)),
            i = l(n),
            s = null == n ? void 0 : n.guild_id,
            u = null != s,
            d = o.useExperiment({
                location: t
            }, {
                autoTrackExposure: !u,
                disable: u
            });
        return u ? i : d.showInOmniButtonMenu && i
    }
}