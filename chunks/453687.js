function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessageAccessoriesId: function() {
            return d
        },
        getMessageAriaDescribedBy: function() {
            return f
        },
        getMessageAriaLabelledBy: function() {
            return m
        },
        getMessageContentId: function() {
            return s
        },
        getMessageReactionsId: function() {
            return c
        },
        getMessageReplyId: function() {
            return l
        },
        getMessageTimestampId: function() {
            return u
        },
        getMessageUsernameId: function() {
            return o
        }
    });
    var a = n("446108"),
        r = n("901461"),
        i = n("981631");

    function s(e) {
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
        let c = e.type === i.MessageTypes.REPLY && null != e.messageReference,
            m = e.embeds.length > 0,
            f = e.attachments.length > 0,
            g = e.stickerItems.length > 0,
            p = e.codedLinks.length > 0,
            E = e.hasFlag(i.MessageFlags.HAS_THREAD),
            S = m || f || g || p || E || e.type === i.MessageTypes.THREAD_CREATED,
            A = m && e.content === e.embeds[0].url && e.embeds[0].type === i.MessageEmbedTypes.GIFV,
            h = e.type !== i.MessageTypes.DEFAULT || !A && "" !== e.content,
            I = (0, r.default)(e),
            T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
            y = o(e, t),
            M = l(e),
            v = I ? "" : "".concat(c ? M : y, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
        if (h) {
            let t = s(e);
            v += " ".concat(t)
        }
        if (S) {
            let t = d(e);
            v += " ".concat(t)
        }
        if (T) {
            let t = u(e);
            v += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
        }
        return v.trim()
    }

    function f(e) {
        if (0 === e.reactions.length) return;
        let t = c(e);
        return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
    }
}