function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140"),
        r = n("496675"),
        a = n("751189"),
        s = n("981631");
    t.default = {
        async checkGuildTemplateDirty(e) {
            if (!r.default.canWithPartialContext(s.Permissions.MANAGE_GUILD, {
                    guildId: e
                })) return;
            let t = await a.default.loadTemplatesForGuild(e);
            t.body.length > 0 && i.default.dispatch({
                type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                guildTemplate: t.body[0]
            })
        },
        hideGuildTemplateDirtyTooltip(e) {
            i.default.dispatch({
                type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                guildId: e
            })
        },
        hideGuildTemplatePromotionTooltip() {
            i.default.dispatch({
                type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
            })
        }
    }
}