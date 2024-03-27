function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessageContentId: function() {
            return i
        },
        getMessageReplyId: function() {
            return l
        },
        getMessageUsernameId: function() {
            return o
        },
        getMessageTimestampId: function() {
            return u
        },
        getMessageReactionsId: function() {
            return c
        },
        getMessageAccessoriesId: function() {
            return d
        },
        getMessageAriaLabelledBy: function() {
            return m
        },
        getMessageAriaDescribedBy: function() {
            return f
        }
    });
    var a = n("862013"),
        s = n("913491"),
        r = n("49111");

    function i(e) {
        return "message-content-".concat(e.id)
    }

    function l(e) {
        return "message-reply-context-".concat(e.id)
    }

    function o(e, t) {
        let n = null != t ? t : e.id;
        return "message-username-".concat(n)
    }

    function u(e) {
        return "message-timestamp-".concat(e.id)
    }

    function c(e) {
        return "message-reactions-".concat(e.id)
    }

    function d(e) {
        return "message-accessories-".concat(e.id)
    }

    function m(e, t, n) {
        let c = e.type === r.MessageTypes.REPLY && null != e.messageReference,
            m = e.embeds.length > 0,
            f = e.attachments.length > 0,
            g = e.stickerItems.length > 0,
            p = e.codedLinks.length > 0,
            E = e.hasFlag(r.MessageFlags.HAS_THREAD),
            A = m || f || g || p || E || e.type === r.MessageTypes.THREAD_CREATED,
            S = m && e.content === e.embeds[0].url && e.embeds[0].type === r.MessageEmbedTypes.GIFV,
            h = e.type !== r.MessageTypes.DEFAULT || !S && "" !== e.content,
            I = (0, s.default)(e),
            T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
            y = o(e, t),
            M = l(e),
            x = I ? "" : "".concat(c ? M : y, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
        if (h) {
            let t = i(e);
            x += " ".concat(t)
        }
        if (A) {
            let t = d(e);
            x += " ".concat(t)
        }
        if (T) {
            let t = u(e);
            x += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
        }
        return x.trim()
    }

    function f(e) {
        if (0 === e.reactions.length) return;
        let t = c(e);
        return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
    }
}