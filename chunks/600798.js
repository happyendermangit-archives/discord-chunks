function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvalidKeywordError: function() {
            return o
        },
        InvalidRegexPatternError: function() {
            return l
        },
        AUTOMOD_ERROR_CODES: function() {
            return u
        },
        getAutomodErrorMessageFromErrorResponse: function() {
            return d
        },
        getAutomodErrorMessage: function() {
            return c
        }
    }), n("70102"), n("222007");
    var i = n("979911"),
        s = n("42203"),
        r = n("49111"),
        a = n("782340");
    class o extends Error {}
    class l extends Error {}
    let u = new Set([r.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, r.AbortCodes.AUTOMOD_TITLE_BLOCKED, r.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

    function d(e, t) {
        if (null == e) return null;
        let {
            code: n,
            message: i
        } = e;
        if (!u.has(n)) return null;
        if (null != i) return i;
        if (null == t) return null;
        let o = s.default.getChannel(t);
        return (null == o ? void 0 : o.isThread()) ? a.default.Messages.THREAD_AUTOMOD_ERROR : ((null == o ? void 0 : o.isForumPost()) || (null == o ? void 0 : o.isForumLikeChannel())) && (n === r.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === r.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? a.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
    }

    function c(e, t) {
        let n = d(t);
        return null != n ? n : null == e ? a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
            let t = s.default.getChannel(e.message.channelId);
            return (0, i.isMessageDataEdit)(e) ? a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? a.default.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? a.default.Messages.FORUM_POST_AUTOMOD_ERROR : a.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
        }(e)
    }
}