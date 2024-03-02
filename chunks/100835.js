function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvitesDisabledExperiment: function() {
            return u
        },
        useInvitesDisabledPermission: function() {
            return d
        },
        useInvitesDisabledExperiment: function() {
            return c
        },
        setInvitesDisabled: function() {
            return f
        },
        useShouldShowInvitesDisabledNotif: function() {
            return m
        }
    }), n("222007");
    var l = n("446674"),
        i = n("862205"),
        a = n("54346"),
        s = n("957255"),
        r = n("592407"),
        o = n("49111");
    let u = (0, i.createExperiment)({
        kind: "guild",
        id: "2022-07_invites_disabled",
        label: "Report Raids",
        defaultConfig: {
            enableInvitesDisabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Reporting Of Raids",
            config: {
                enableInvitesDisabled: !0
            }
        }]
    });

    function d(e) {
        return (0, l.useStateFromStores)([s.default], () => null != e && s.default.can(o.Permissions.MANAGE_GUILD, e), [e])
    }

    function c(e) {
        return u.useExperiment({
            guildId: e.id,
            location: "108f83_1"
        }, {
            autoTrackExposure: !1
        })
    }
    async function f(e, t) {
        if (e.hasFeature(o.GuildFeatures.INVITES_DISABLED) === t) return;
        let n = new Set(e.features);
        t ? n.add(o.GuildFeatures.INVITES_DISABLED) : n.delete(o.GuildFeatures.INVITES_DISABLED), await r.default.saveGuild(e.id, {
            features: n
        }, {
            throwErr: !0
        })
    }

    function m(e) {
        var t;
        let n = d(e),
            i = (0, l.useStateFromStores)([a.default], () => null != e ? a.default.getGuildIncident(e.id) : null),
            s = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, o.GuildFeatures.INVITES_DISABLED)) || (null == i ? void 0 : i.invitesDisabledUntil) != null && new Date(i.invitesDisabledUntil) > new Date;
        return n && s
    }
}