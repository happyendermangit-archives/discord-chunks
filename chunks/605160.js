function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscureReason: function() {
            return l
        },
        getObscureReason: function() {
            return C
        },
        getObscureReasonForEmbed: function() {
            return S
        },
        getForumPostShouldObscure: function() {
            return T
        },
        useShouldObscure: function() {
            return v
        },
        getObscuredAlt: function() {
            return I
        }
    }), n("702976"), n("794252");
    var l, i, a = n("506838"),
        s = n("65597"),
        r = n("676574"),
        o = n("447435"),
        u = n("963119"),
        d = n("791234"),
        c = n("845579"),
        f = n("377253"),
        m = n("957255"),
        p = n("568734"),
        h = n("70845"),
        E = n("49111"),
        g = n("782340");
    (i = l || (l = {})).SPOILER = "spoiler", i.EXPLICIT_CONTENT = "explicit_content", i.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
    let C = (e, t) => {
            let {
                spoiler: n,
                flags: l = 0,
                content_scan_version: i
            } = e;
            return t && (0, o.isPendingScan)(i) ? "potential_explicit_content" : t && ((0, p.hasFlag)(l, E.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : n || (0, p.hasFlag)(l, E.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
        },
        S = (e, t, n, l, i) => {
            let {
                flags: a = 0,
                contentScanVersion: s
            } = e, u = f.default.getMessage(t, n);
            return null == u ? null : i && !u.author.bot && (0, o.isPendingScan)(s) ? "potential_explicit_content" : i && ((0, p.hasFlag)(a, E.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || r.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : l ? "spoiler" : null
        };

    function T(e, t, n) {
        if (null == e) return [!1, void 0];
        if (n && (0, o.isPendingScan)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
        let l = function(e) {
            switch (e) {
                case d.ForumPostMediaTypes.EMBED:
                    return o.ObscuredMediaTypes.Embed;
                case d.ForumPostMediaTypes.ATTACHMENT:
                    return o.ObscuredMediaTypes.Attachment;
                default:
                    return
            }
        }(e.type);
        return null != l && (0, o.isMediaObscured)({
            type: l,
            media: e
        }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
    }

    function v(e) {
        let {
            channel: t,
            media: n
        } = e, l = (0, s.default)([m.default], () => null != t && m.default.can(E.Permissions.MANAGE_MESSAGES, t)), i = c.RenderSpoilers.useSetting(), a = (0, u.useShouldRedactExplicitContentForForum)();
        return T(n, !(0, h.default)(i, l), a)
    }
    let I = e => (0, a.match)(e).with("explicit_content", () => g.default.Messages.EXPLICIT_CONTENT_ALT).with("spoiler", () => g.default.Messages.SPOILER_HIDDEN_A11Y_LABEL).otherwise(() => void 0)
}