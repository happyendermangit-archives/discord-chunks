function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessageAccessoriesId: function() {
            return d
        },
        getMessageAriaDescribedBy: function() {
            return m
        },
        getMessageAriaLabelledBy: function() {
            return f
        },
        getMessageContentId: function() {
            return i
        },
        getMessageReactionsId: function() {
            return u
        },
        getMessageReplyId: function() {
            return l
        },
        getMessageTimestampId: function() {
            return c
        },
        getMessageUsernameId: function() {
            return s
        }
    });
    var r = n("839582"),
        a = n("746373"),
        o = n("281767");

    function i(e) {
        return "message-content-".concat(e.id)
    }

    function l(e) {
        return "message-reply-context-".concat(e.id)
    }

    function s(e, t) {
        var n = null != t ? t : e.id;
        return "message-username-".concat(n)
    }

    function c(e) {
        return "message-timestamp-".concat(e.id)
    }

    function u(e) {
        return "message-reactions-".concat(e.id)
    }

    function d(e) {
        return "message-accessories-".concat(e.id)
    }

    function f(e, t, n) {
        var u = e.type === o.MessageTypes.REPLY && null != e.messageReference,
            f = e.embeds.length > 0,
            m = e.attachments.length > 0,
            p = e.stickerItems.length > 0,
            g = e.codedLinks.length > 0,
            y = e.hasFlag(o.MessageFlags.HAS_THREAD),
            b = f || m || p || g || y || e.type === o.MessageTypes.THREAD_CREATED,
            E = f && e.content === e.embeds[0].url && e.embeds[0].type === o.MessageEmbedTypes.GIFV,
            v = e.type !== o.MessageTypes.DEFAULT || !E && "" !== e.content,
            O = (0, a.default)(e),
            S = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
            h = s(e, t),
            I = l(e),
            A = O ? "" : "".concat(u ? I : h, " ").concat(r.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
        if (v) {
            var T = i(e);
            A += " ".concat(T)
        }
        if (b) {
            var M = d(e);
            A += " ".concat(M)
        }
        if (S) {
            var P = c(e);
            A += " ".concat(r.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(P)
        }
        return A.trim()
    }

    function m(e) {
        if (0 !== e.reactions.length) {
            var t = u(e);
            return "".concat(r.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
        }
    }
}