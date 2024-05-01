function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMessageInteractionForcedEphemeral: function() {
            return o
        },
        useShouldShowUserAppBetaBar: function() {
            return l
        }
    });
    var i = n("373793"),
        r = n("213459"),
        a = n("581364"),
        s = n("104793");

    function o(e, t, n) {
        let r = (0, a.useIsGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e.interactionMetadata || r) return !1;
        let s = e.interactionMetadata.authorizing_integration_owners;
        return 1 === Object.keys(s).length && i.ApplicationIntegrationType.USER_INSTALL in s
    }

    function l(e, t, n) {
        var i, o, l, u;
        let d = (0, r.useUserIndexState)(!0, !1),
            _ = (0, r.useGuildIndexState)(null == t ? void 0 : t.guild_id, !1),
            c = (0, a.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e || c) return !1;
        let E = null === (o = _.result) || void 0 === o ? void 0 : null === (i = o.sections[e.applicationId]) || void 0 === i ? void 0 : i.descriptor.permissions;
        if ((0, s.computeAllowedForChannel)(E, t, null == t ? void 0 : t.guild_id)) return !1;
        let I = null === (u = d.result) || void 0 === u ? void 0 : null === (l = u.sections[e.applicationId]) || void 0 === l ? void 0 : l.commands;
        return null != I && e.id in I
    }
}