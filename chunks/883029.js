function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDescriptiveInviteError: function() {
            return u
        },
        getInviteError: function() {
            return o
        }
    });
    var s = n("697218"),
        a = n("701909"),
        l = n("719923"),
        i = n("49111"),
        r = n("782340");

    function u(e) {
        switch (e) {
            case i.AbortCodes.TOO_MANY_USER_GUILDS:
                let t = s.default.getCurrentUser(),
                    n = l.default.canUseIncreasedGuildCap(t) || (null == t ? void 0 : t.isStaff()),
                    a = n ? i.MAX_USER_GUILDS_PREMIUM : i.MAX_USER_GUILDS;
                return {
                    title: r.default.Messages.TOO_MANY_USER_GUILDS_TITLE_2.format({
                        quantity: a
                    }), description: r.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION
                };
            case i.AbortCodes.GUILD_AT_CAPACITY:
                return {
                    title: r.default.Messages.SERVER_IS_CURRENTLY_FULL, description: r.default.Messages.PLEASE_TRY_AGAIN_LATER
                };
            case i.AbortCodes.GUILD_JOIN_INVITE_LIMITED_ACCESS:
                return {
                    title: r.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING, description: r.default.Messages.PLEASE_TRY_AGAIN_LATER
                };
            default:
                return null
        }
    }

    function o(e) {
        switch (e) {
            case i.AbortCodes.TOO_MANY_USER_GUILDS:
                return r.default.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION;
            case i.AbortCodes.GUILD_AT_CAPACITY:
                return r.default.Messages.MAX_GUILD_MEMBERS_REACHED_ERROR;
            case i.AbortCodes.INVALID_COUNTRY_CODE:
                return r.default.Messages.INVALID_COUNTRY_CODE;
            case i.AbortCodes.INVALID_CANNOT_FRIEND_SELF:
                return r.default.Messages.INVALID_CANNOT_FRIEND_SELF;
            case i.AbortCodes.INVITES_DISABLED:
                return r.default.Messages.INVITES_DISABLED_MODAL_DESCRIPTION.format({
                    articleLink: a.default.getArticleURL(i.HelpdeskArticles.INVITE_DISABLED)
                });
            default:
                return r.default.Messages.INVITE_MODAL_ERROR_DEFAULT
        }
    }
}