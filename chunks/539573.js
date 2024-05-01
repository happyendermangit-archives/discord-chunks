function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AUTOMOD_ERROR_CODES: function() {
            return u
        },
        InvalidKeywordError: function() {
            return o
        },
        InvalidRegexPatternError: function() {
            return l
        },
        getAutomodErrorMessage: function() {
            return _
        },
        getAutomodErrorMessageFromErrorResponse: function() {
            return d
        }
    }), n("411104"), n("47120");
    var i = n("673750"),
        r = n("592125"),
        a = n("981631"),
        s = n("689938");
    class o extends Error {}
    class l extends Error {}
    let u = new Set([a.AbortCodes.AUTOMOD_MESSAGE_BLOCKED, a.AbortCodes.AUTOMOD_TITLE_BLOCKED, a.AbortCodes.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

    function d(e, t) {
        if (null == e) return null;
        let {
            code: n,
            message: i
        } = e;
        if (!u.has(n)) return null;
        if (null != i) return i;
        if (null == t) return null;
        let o = r.default.getChannel(t);
        return (null == o ? void 0 : o.isThread()) ? s.default.Messages.THREAD_AUTOMOD_ERROR : ((null == o ? void 0 : o.isForumPost()) || (null == o ? void 0 : o.isForumLikeChannel())) && (n === a.AbortCodes.AUTOMOD_TITLE_BLOCKED || n === a.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) ? s.default.Messages.FORUM_POST_AUTOMOD_ERROR : null
    }

    function _(e, t) {
        let n = d(t);
        return null != n ? n : null == e ? s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
            let t = r.default.getChannel(e.message.channelId);
            return (0, i.isMessageDataEdit)(e) ? s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? s.default.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? s.default.Messages.FORUM_POST_AUTOMOD_ERROR : s.default.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
        }(e)
    }
}