function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return a
        }
    });
    var n = l("913144"),
        r = l("957255"),
        d = l("883069"),
        o = l("49111"),
        a = {
            async checkGuildTemplateDirty(e) {
                if (!r.default.canWithPartialContext(o.Permissions.MANAGE_GUILD, {
                        guildId: e
                    })) return;
                let t = await d.default.loadTemplatesForGuild(e);
                t.body.length > 0 && n.default.dispatch({
                    type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH",
                    guildTemplate: t.body[0]
                })
            },
            hideGuildTemplateDirtyTooltip(e) {
                n.default.dispatch({
                    type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE",
                    guildId: e
                })
            },
            hideGuildTemplatePromotionTooltip() {
                n.default.dispatch({
                    type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE"
                })
            }
        }
}