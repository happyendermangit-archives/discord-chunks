function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscureReason: function() {
            return i
        },
        getObscureReason: function() {
            return y
        },
        getObscureReasonForEmbed: function() {
            return g
        },
        getForumPostShouldObscure: function() {
            return S
        },
        useShouldObscure: function() {
            return C
        },
        getObscuredAlt: function() {
            return I
        }
    }), n("702976"), n("794252");
    var i, l, a = n("506838"),
        s = n("65597"),
        r = n("676574"),
        o = n("447435"),
        u = n("963119"),
        d = n("791234"),
        c = n("845579"),
        f = n("377253"),
        p = n("957255"),
        m = n("568734"),
        h = n("70845"),
        x = n("49111"),
        E = n("782340");
    (l = i || (i = {})).SPOILER = "spoiler", l.EXPLICIT_CONTENT = "explicit_content", l.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
    let y = (e, t) => {
            let {
                spoiler: n,
                flags: i = 0,
                content_scan_version: l
            } = e;
            return t && (0, o.isPendingScan)(l) ? "potential_explicit_content" : t && ((0, m.hasFlag)(i, x.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : n || (0, m.hasFlag)(i, x.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
        },
        g = (e, t, n, i, l) => {
            let {
                flags: a = 0,
                contentScanVersion: s
            } = e, u = f.default.getMessage(t, n);
            return null == u ? null : l && !u.author.bot && (0, o.isPendingScan)(s) ? "potential_explicit_content" : l && ((0, m.hasFlag)(a, x.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : i ? "spoiler" : null
        };

    function S(e, t, n) {
        if (null == e) return [!1, void 0];
        if (n && (0, o.isPendingScan)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
        let i = function(e) {
            switch (e) {
                case d.ForumPostMediaTypes.EMBED:
                    return o.ObscuredMediaTypes.Embed;
                case d.ForumPostMediaTypes.ATTACHMENT:
                    return o.ObscuredMediaTypes.Attachment;
                default:
                    return
            }
        }(e.type);
        return null != i && (0, o.isMediaObscured)({
            type: i,
            media: e
        }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
    }

    function C(e) {
        let {
            channel: t,
            media: n
        } = e, i = (0, s.default)([p.default], () => null != t && p.default.can(x.Permissions.MANAGE_MESSAGES, t)), l = c.RenderSpoilers.useSetting(), a = (0, u.useShouldRedactExplicitContentForForum)();
        return S(n, !(0, h.default)(l, i), a)
    }
    let I = e => (0, a.match)(e).with("explicit_content", () => E.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => E.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
}