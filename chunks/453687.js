function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessageAccessoriesId: function() {
            return _
        },
        getMessageAriaDescribedBy: function() {
            return E
        },
        getMessageAriaLabelledBy: function() {
            return c
        },
        getMessageContentId: function() {
            return s
        },
        getMessageReactionsId: function() {
            return d
        },
        getMessageReplyId: function() {
            return o
        },
        getMessageTimestampId: function() {
            return u
        },
        getMessageUsernameId: function() {
            return l
        }
    });
    var i = n("446108"),
        r = n("901461"),
        a = n("981631");

    function s(e) {
        return "message-content-".concat(e.id)
    }

    function o(e) {
        return "message-reply-context-".concat(e.id)
    }

    function l(e, t) {
        let n = null != t ? t : e.id;
        return "message-username-".concat(n)
    }

    function u(e) {
        return "message-timestamp-".concat(e.id)
    }

    function d(e) {
        return "message-reactions-".concat(e.id)
    }

    function _(e) {
        return "message-accessories-".concat(e.id)
    }

    function c(e, t, n) {
        let d = e.type === a.MessageTypes.REPLY && null != e.messageReference,
            c = e.embeds.length > 0,
            E = e.attachments.length > 0,
            I = e.stickerItems.length > 0,
            T = e.codedLinks.length > 0,
            f = e.hasFlag(a.MessageFlags.HAS_THREAD),
            S = c || E || I || T || f || e.type === a.MessageTypes.THREAD_CREATED,
            h = c && e.content === e.embeds[0].url && e.embeds[0].type === a.MessageEmbedTypes.GIFV,
            A = e.type !== a.MessageTypes.DEFAULT || !h && "" !== e.content,
            m = (0, r.default)(e),
            N = !m && (null == n ? void 0 : n.hasTimestamp) !== !1,
            p = l(e, t),
            O = o(e),
            R = m ? "" : "".concat(d ? O : p, " ").concat(i.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
        if (A) {
            let t = s(e);
            R += " ".concat(t)
        }
        if (S) {
            let t = _(e);
            R += " ".concat(t)
        }
        if (N) {
            let t = u(e);
            R += " ".concat(i.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
        }
        return R.trim()
    }

    function E(e) {
        if (0 === e.reactions.length) return;
        let t = d(e);
        return "".concat(i.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
    }
}