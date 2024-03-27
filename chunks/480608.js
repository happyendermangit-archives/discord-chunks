function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchMemberCounts: function() {
            return _
        },
        requestMembersForRole: function() {
            return E
        }
    });
    var i = n("31775"),
        r = n.n(i),
        s = n("544891"),
        a = n("570140"),
        o = n("749210"),
        l = n("243730"),
        u = n("981631");
    async function d(e) {
        try {
            a.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                guildId: e
            });
            let t = (await s.HTTP.get({
                url: u.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
            })).body;
            a.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                guildId: e,
                roleMemberCount: t
            })
        } catch (t) {
            a.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                guildId: e
            })
        }
    }
    async function _(e) {
        l.default.shouldFetch(e) && await d(e)
    }
    let c = new(r())({
        maxAge: 1e4
    });

    function E(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = "".concat(e, "-").concat(t);
        if (!n || null == c.get(i)) {
            var r, a;
            return c.set(i, !0), r = e, a = t, s.HTTP.get({
                url: u.Endpoints.GUILD_ROLE_MEMBER_IDS(r, a)
            }).then(e => (o.default.requestMembersById(r, e.body, !1), e.body.length))
        }
        return Promise.resolve(null)
    }
}