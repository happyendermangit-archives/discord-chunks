function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        searchGuildMembers: function() {
            return a
        }
    });
    var i = n("570140"),
        r = n("576007"),
        s = n("672458");
    async function a(e, t, n) {
        let a = await (0, r.searchAllGuildMembers)(e, t, n);
        if (a.type === s.GuildMemberSearchResponseType.ERROR) throw a.body;
        let {
            body: o
        } = a;
        i.default.dispatch({
            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
            guildId: e,
            members: o.members,
            page_result_count: o.page_result_count,
            total_result_count: o.total_result_count
        })
    }
}