function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateGuildSelfMember: function() {
            return s
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("686785"),
        a = n("717744"),
        u = n("281767");

    function s(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (a.default.isFullServerPreview(e)) {
            (0, i.updateImpersonatedData)(e, {
                memberOptions: t
            });
            return
        }
        return o.default.dispatch({
            type: "GUILD_MEMBER_UPDATE_LOCAL",
            guildId: e,
            roles: t.roles,
            flags: t.flags
        }), r.HTTP.patch({
            url: u.Endpoints.SET_GUILD_MEMBER(e),
            body: t,
            oldFormErrors: !!n || void 0
        })
    }
}