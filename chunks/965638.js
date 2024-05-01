function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvitesDisabledExperiment: function() {
            return u
        },
        setInvitesDisabled: function() {
            return c
        },
        useInvitesDisabledExperiment: function() {
            return _
        },
        useInvitesDisabledPermission: function() {
            return d
        },
        useShouldShowInvitesDisabledNotif: function() {
            return E
        }
    }), n("47120");
    var i = n("442837"),
        r = n("818083"),
        s = n("487419"),
        a = n("496675"),
        o = n("434404"),
        l = n("981631");
    let u = (0, r.createExperiment)({
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
        return (0, i.useStateFromStores)([a.default], () => null != e && a.default.can(l.Permissions.MANAGE_GUILD, e), [e])
    }

    function _(e) {
        return u.useExperiment({
            guildId: e.id,
            location: "108f83_1"
        }, {
            autoTrackExposure: !1
        })
    }
    async function c(e, t) {
        if (e.hasFeature(l.GuildFeatures.INVITES_DISABLED) === t) return;
        let n = new Set(e.features);
        t ? n.add(l.GuildFeatures.INVITES_DISABLED) : n.delete(l.GuildFeatures.INVITES_DISABLED), await o.default.saveGuild(e.id, {
            features: n
        }, {
            throwErr: !0
        })
    }

    function E(e) {
        var t;
        let n = d(e),
            r = (0, i.useStateFromStores)([s.default], () => null != e ? s.default.getGuildIncident(e.id) : null),
            a = (null == e ? void 0 : null === (t = e.hasFeature) || void 0 === t ? void 0 : t.call(e, l.GuildFeatures.INVITES_DISABLED)) || (null == r ? void 0 : r.invitesDisabledUntil) != null && new Date(r.invitesDisabledUntil) > new Date;
        return n && a
    }
}