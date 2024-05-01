function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateGuildSelfMember: function() {
            return l
        }
    }), n("789020");
    var i = n("544891"),
        r = n("570140"),
        a = n("962086"),
        s = n("160404"),
        o = n("981631");

    function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (s.default.isFullServerPreview(e)) {
            (0, a.updateImpersonatedData)(e, {
                memberOptions: t
            });
            return
        }
        return r.default.dispatch({
            type: "GUILD_MEMBER_UPDATE_LOCAL",
            guildId: e,
            roles: t.roles,
            flags: t.flags
        }), i.HTTP.patch({
            url: o.Endpoints.SET_GUILD_MEMBER(e),
            body: t,
            oldFormErrors: !!n || void 0
        })
    }
}