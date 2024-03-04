function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("579033");

    function s(e) {
        var t;
        return {
            code: e.code,
            state: i.GuildTemplateStates.RESOLVED,
            name: e.name,
            description: null !== (t = e.description) && void 0 !== t ? t : "",
            creatorId: e.creator_id,
            creator: e.creator,
            createdAt: e.created_at,
            updatedAt: e.updated_at,
            sourceGuildId: e.source_guild_id,
            serializedSourceGuild: e.serialized_source_guild,
            usageCount: e.usage_count,
            isDirty: e.is_dirty
        }
    }
}