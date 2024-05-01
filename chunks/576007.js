function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchAllGuildMembers: function() {
            return u
        }
    }), n("411104");
    var i = n("544891"),
        r = n("570140"),
        a = n("881052"),
        s = n("70956"),
        o = n("672458"),
        l = n("981631");
    async function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (d > 3) throw Error("Unable to search guild members after max retries");
        let {
            autoRetry: _ = !0,
            signal: c
        } = n;
        try {
            var E;
            let a = await i.HTTP.post({
                url: l.Endpoints.GUILD_MEMBER_SEARCH(e),
                body: t,
                signal: c
            });
            if (a.status === o.INDEXING_RESPONSE_CODE) {
                if (null == a.body.retry_after) throw Error("Indexing response did not include retry_after");
                if (!_) throw Error("Indexing response received but autoRetry is disabled");
                return await r.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                    guildId: e
                }), await new Promise(e => setTimeout(e, a.body.retry_after * s.default.Millis.SECOND)), u(e, t, n, d + 1)
            }
            return {
                type: o.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                body: {
                    guild_id: (E = a.body).guild_id,
                    members: E.members,
                    page_result_count: E.page_result_count,
                    total_result_count: E.total_result_count
                }
            }
        } catch (t) {
            let e = new a.APIError(t);
            return {
                type: o.GuildMemberSearchResponseType.ERROR,
                body: e
            }
        }
    }
}