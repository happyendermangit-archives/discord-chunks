function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("913144"),
        s = n("957255"),
        r = n("883069"),
        a = n("49111"),
        o = {
            async checkGuildTemplateDirty(e) {
                if (!s.default.canWithPartialContext(a.Permissions.MANAGE_GUILD, {
                        guildId: e
                    })) return;
                let t = await r.default.loadTemplatesForGuild(e);
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