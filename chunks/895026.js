function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchMemberCounts: function() {
            return c
        },
        requestMembersForRole: function() {
            return p
        }
    });
    var i = n("693566"),
        l = n.n(i),
        a = n("872717"),
        s = n("913144"),
        r = n("851387"),
        o = n("36402"),
        u = n("49111");
    async function d(e) {
        try {
            s.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                guildId: e
            });
            let t = await a.default.get({
                    url: u.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                }),
                n = t.body;
            s.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                guildId: e,
                roleMemberCount: n
            })
        } catch (t) {
            s.default.dispatch({
                type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                guildId: e
            })
        }
    }
    async function c(e) {
        o.default.shouldFetch(e) && await d(e)
    }
    let f = new l({
        maxAge: 1e4
    });

    function p(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = "".concat(e, "-").concat(t);
        if (!n || null == f.get(i)) {
            var l, s;
            return f.set(i, !0), l = e, s = t, a.default.get({
                url: u.Endpoints.GUILD_ROLE_MEMBER_IDS(l, s)
            }).then(e => (r.default.requestMembersById(l, e.body, !1), e.body.length))
        }
        return Promise.resolve(null)
    }
}