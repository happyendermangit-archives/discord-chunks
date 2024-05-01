function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscureReason: function() {
            return i
        },
        getForumPostShouldObscure: function() {
            return p
        },
        getObscureReasonForAttachment: function() {
            return A
        },
        getObscureReasonForEmbed: function() {
            return m
        },
        getObscureReasonForUnfurledMediaItem: function() {
            return N
        },
        getObscuredAlt: function() {
            return R
        },
        useShouldObscure: function() {
            return O
        }
    }), n("789020"), n("627341");
    var i, r, a = n("278074"),
        s = n("399606"),
        o = n("432877"),
        l = n("163268"),
        u = n("25610"),
        d = n("368844"),
        _ = n("768494"),
        c = n("695346"),
        E = n("375954"),
        I = n("496675"),
        T = n("630388"),
        f = n("255269"),
        S = n("981631"),
        h = n("689938");
    (r = i || (i = {})).SPOILER = "spoiler", r.EXPLICIT_CONTENT = "explicit_content", r.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
    let A = (e, t) => {
            let {
                spoiler: n,
                flags: i = 0,
                content_scan_version: r
            } = e;
            if (t) {
                if ((0, l.isPendingScanVersion)(r)) return "potential_explicit_content";
                if ((0, T.hasFlag)(i, S.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || o.default.get("obscure_blur_effect_enabled")) return "explicit_content"
            }
            return n || (0, T.hasFlag)(i, S.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
        },
        m = (e, t, n, i, r) => {
            let {
                flags: a = 0,
                contentScanVersion: s
            } = e, u = E.default.getMessage(t, n);
            if (null == u) return null;
            if (r) {
                if (!u.author.bot && (0, l.isPendingScanVersion)(s)) return "potential_explicit_content";
                if ((0, T.hasFlag)(a, S.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || o.default.get("obscure_blur_effect_enabled")) return "explicit_content"
            }
            return i ? "spoiler" : null
        },
        N = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                {
                    contentScanMetadata: i
                } = e;
            if (t) {
                if ((0, l.isPendingScan)(i)) return "potential_explicit_content";
                let {
                    contentScanFlags: e
                } = i;
                if ((0, T.hasFlag)(e, _.ContentScanFlags.EXPLICIT) || o.default.get("obscure_blur_effect_enabled")) return "explicit_content"
            }
            return n ? "spoiler" : null
        };

    function p(e, t, n) {
        if (null == e) return [!1, void 0];
        if (n && (0, l.isPendingScanVersion)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
        let i = function(e) {
            switch (e) {
                case d.ForumPostMediaTypes.EMBED:
                    return l.ObscuredMediaTypes.Embed;
                case d.ForumPostMediaTypes.ATTACHMENT:
                    return l.ObscuredMediaTypes.Attachment;
                default:
                    return
            }
        }(e.type);
        return null != i && (0, l.isMediaObscured)({
            type: i,
            media: e
        }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
    }

    function O(e) {
        let {
            channel: t,
            media: n
        } = e, i = (0, s.useStateFromStores)([I.default], () => null != t && I.default.can(S.Permissions.MANAGE_MESSAGES, t)), r = c.RenderSpoilers.useSetting(), a = (0, u.useShouldRedactExplicitContentForForum)();
        return p(n, !(0, f.default)(r, i), a)
    }
    let R = e => (0, a.match)(e).with("explicit_content", () => h.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => h.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
}