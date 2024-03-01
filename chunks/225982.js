function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        searchGuildMembers: function() {
            return a
        }
    });
    var n = r("913144"),
        u = r("127421"),
        l = r("828434");
    async function a(e, t, r) {
        let a = await (0, u.searchAllGuildMembers)(e, t, r);
        if (a.type === l.GuildMemberSearchResponseType.ERROR) throw a.body;
        let {
            body: i
        } = a;
        n.default.dispatch({
            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
            guildId: e,
            members: i.members,
            page_result_count: i.page_result_count,
            total_result_count: i.total_result_count
        })
    }
}