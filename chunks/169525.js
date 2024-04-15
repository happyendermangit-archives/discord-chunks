function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscureReason: function() {
            return i
        },
        getForumPostShouldObscure: function() {
            return m
        },
        getObscureReasonForAttachment: function() {
            return h
        },
        getObscureReasonForEmbed: function() {
            return A
        },
        getObscuredAlt: function() {
            return p
        },
        useShouldObscure: function() {
            return N
        }
    }), n("789020"), n("627341");
    var i, r, s = n("278074"),
        a = n("399606"),
        o = n("432877"),
        l = n("163268"),
        u = n("25610"),
        d = n("368844");
    n("768494");
    var _ = n("695346"),
        c = n("375954"),
        E = n("496675"),
        I = n("630388"),
        T = n("255269"),
        f = n("981631"),
        S = n("689938");
    (r = i || (i = {})).SPOILER = "spoiler", r.EXPLICIT_CONTENT = "explicit_content", r.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
    let h = (e, t) => {
            let {
                spoiler: n,
                flags: i = 0,
                content_scan_version: r
            } = e;
            if (t) {
                if ((0, l.isPendingScanVersion)(r)) return "potential_explicit_content";
                if ((0, I.hasFlag)(i, f.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || o.default.get("obscure_blur_effect_enabled")) return "explicit_content"
            }
            return n || (0, I.hasFlag)(i, f.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
        },
        A = (e, t, n, i, r) => {
            let {
                flags: s = 0,
                contentScanVersion: a
            } = e, u = c.default.getMessage(t, n);
            if (null == u) return null;
            if (r) {
                if (!u.author.bot && (0, l.isPendingScanVersion)(a)) return "potential_explicit_content";
                if ((0, I.hasFlag)(s, f.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || o.default.get("obscure_blur_effect_enabled")) return "explicit_content"
            }
            return i ? "spoiler" : null
        };

    function m(e, t, n) {
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

    function N(e) {
        let {
            channel: t,
            media: n
        } = e, i = (0, a.useStateFromStores)([E.default], () => null != t && E.default.can(f.Permissions.MANAGE_MESSAGES, t)), r = _.RenderSpoilers.useSetting(), s = (0, u.useShouldRedactExplicitContentForForum)();
        return m(n, !(0, T.default)(r, i), s)
    }
    let p = e => (0, s.match)(e).with("explicit_content", () => S.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => S.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
}