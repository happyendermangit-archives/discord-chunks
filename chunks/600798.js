function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvalidKeywordError: function() {
            return r
        },
        InvalidRegexPatternError: function() {
            return u
        },
        AUTOMOD_ERROR_CODES: function() {
            return d
        },
        getAutomodErrorMessageFromErrorResponse: function() {
            return o
        },
        getAutomodErrorMessage: function() {
            return c
        }
    }), n("70102"), n("222007");
    var a = n("979911"),
        l = n("42203"),
        s = n("49111"),
        i = n("782340");
    class r extends Error {}
    class u extends Error {}
    let d = new Set([s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, s.AbortCodes.AUTOMOD_TITLE_BLOCKED, s.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

    function o(e, t) {
        if (null == e) return null;
        let {
            code: n,
            message: a
        } = e;
        if (!d.has(n)) return null;
        if (null != a) return a;
        if (null == t) return null;
        let r = l.default.getChannel(t);
        return (null == r ? void 0 : r.isThread()) ? i.default.Messages.THREAD_AUTOMOD_ERROR : ((null == r ? void 0 : r.isForumPost()) || (null == r ? void 0 : r.isForumLikeChannel())) && (n === s.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === s.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
    }

    function c(e, t) {
        let n = o(t);
        return null != n ? n : null == e ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
            let t = l.default.getChannel(e.message.channelId);
            return (0, a.isMessageDataEdit)(e) ? i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? i.default.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? i.default.Messages.FORUM_POST_AUTOMOD_ERROR : i.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
        }(e)
    }
}