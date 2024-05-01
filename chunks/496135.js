function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchGuildMembers: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("576007"),
        a = n("672458");
    async function s(e, t, n) {
        let s = await (0, r.searchAllGuildMembers)(e, t, n);
        if (s.type === a.GuildMemberSearchResponseType.ERROR) throw s.body;
        let {
            body: o
        } = s;
        i.default.dispatch({
            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
            guildId: e,
            members: o.members,
            page_result_count: o.page_result_count,
            total_result_count: o.total_result_count
        })
    }
}