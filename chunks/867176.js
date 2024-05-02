function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isActivitiesInTextEnabled: function() {
            return _
        },
        isActivityInTextSupportedForChannel: function() {
            return d
        },
        useIsActivitiesInTextEnabled: function() {
            return c
        },
        useShowActivitiesInOmniButtonMenu: function() {
            return E
        }
    });
    var i = n("106351"),
        r = n("442837"),
        a = n("818083"),
        s = n("592125"),
        o = n("496675"),
        l = n("231338");
    let u = (0, a.createExperiment)({
        kind: "user",
        id: "2023-08_activities_in_text",
        label: "Activities in Text User",
        defaultConfig: {
            entryPointEnabled: !1,
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
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !1
            }
        }, {
            id: 2,
            label: "Enable Activities in Text, DM, and GDM channels with new mobile leave UI",
            config: {
                entryPointEnabled: !0,
                activitiesInTextEnabled: !0,
                showInOmniButtonMenu: !0,
                showNewMobileLeaveUI: !0
            }
        }]
    });

    function d(e) {
        var t;
        if (null == e || void 0 === e) return !1;
        let n = s.default.getChannel(e.parent_id);
        if (null != n && (null == n ? void 0 : n.type) !== i.ChannelTypes.GUILD_CATEGORY) return !1;
        return t = e.type, [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(t)
    }

    function _(e, t, n) {
        if (null == e) return !1;
        let i = d(e),
            r = o.default.can(l.Permissions.USE_EMBEDDED_ACTIVITIES, e),
            a = r && o.default.can(l.Permissions.SEND_MESSAGES | l.Permissions.USE_APPLICATION_COMMANDS, e);
        if ((null == e ? void 0 : e.guild_id) != null) return t ? a && i : r && i;
        return t ? u.getCurrentConfig({
            location: n
        }, {
            autoTrackExposure: !0
        }).activitiesInTextEnabled && i : i
    }

    function c(e, t, n) {
        let {
            isActivitiesInTextEnabledForChannelType: i,
            channelGuildId: a,
            hasPermission: _
        } = (0, r.useStateFromStoresObject)([s.default, o.default], () => {
            let n = s.default.getChannel(e),
                i = o.default.can(l.Permissions.USE_EMBEDDED_ACTIVITIES, n),
                r = i && o.default.can(l.Permissions.SEND_MESSAGES | l.Permissions.USE_APPLICATION_COMMANDS, n);
            return {
                isActivitiesInTextEnabledForChannelType: d(n),
                channelGuildId: null == n ? void 0 : n.guild_id,
                hasPermission: t ? r : i
            }
        }), c = null != a, E = u.useExperiment({
            location: n
        }, {
            autoTrackExposure: !c,
            disable: c
        });
        return c ? _ && i : t ? E.activitiesInTextEnabled && i : i
    }

    function E(e, t) {
        let n = (0, r.useStateFromStores)([s.default], () => s.default.getChannel(e)),
            i = (0, r.useStateFromStores)([o.default], () => o.default.can(l.Permissions.USE_EMBEDDED_ACTIVITIES, n)),
            a = d(n),
            _ = null == n ? void 0 : n.guild_id,
            c = null != _,
            E = u.useExperiment({
                location: t
            }, {
                autoTrackExposure: !c,
                disable: c
            });
        return c ? i && a : E.showInOmniButtonMenu && a
    }
}