function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useIsMessageInteractionForcedEphemeral: function() {
            return a
        },
        useShouldShowUserAppBetaBar: function() {
            return u
        }
    });
    var r = n("571979"),
        o = n("455866"),
        i = n("653754");

    function a(e, t, n) {
        var o = (0, i.useIsGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e.interactionMetadata || o) return !1;
        var a = e.interactionMetadata.authorizing_integration_owners;
        return 1 === Object.keys(a).length && r.ApplicationIntegrationType.USER_INSTALL in a
    }

    function u(e, t, n) {
        var r, a, u = (0, o.useUserIndexState)(!0, !1),
            s = (0, i.isGuildInUserAppExperiment)(null == t ? void 0 : t.guild_id, n);
        if (null == e || s) return !1;
        var l = null === (a = u.result) || void 0 === a ? void 0 : null === (r = a.sections[e.applicationId]) || void 0 === r ? void 0 : r.commands;
        return null != l && e.id in l
    }
}