function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscureReason: function() {
            return o
        },
        getForumPostShouldObscure: function() {
            return O
        },
        getObscureReason: function() {
            return I
        },
        getObscureReasonForEmbed: function() {
            return h
        },
        getObscuredAlt: function() {
            return S
        },
        useShouldObscure: function() {
            return T
        }
    });
    var r, o, i = n("278074"),
        a = n("37295"),
        u = n("834704"),
        s = n("411372"),
        l = n("895708"),
        c = n("106359"),
        f = n("53867"),
        d = n("204394"),
        _ = n("29884"),
        E = n("947248"),
        p = n("837149"),
        m = n("281767"),
        y = n("941504");
    (r = o || (o = {})).SPOILER = "spoiler", r.EXPLICIT_CONTENT = "explicit_content", r.POTENTIAL_EXPLICIT_CONTENT = "potential_explicit_content";
    var I = function(e, t) {
            var n = e.spoiler,
                r = e.flags,
                o = void 0 === r ? 0 : r,
                i = e.content_scan_version;
            return t && (0, s.isPendingScan)(i) ? "potential_explicit_content" : t && ((0, E.hasFlag)(o, m.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) || u.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : n || (0, E.hasFlag)(o, m.MessageAttachmentFlags.IS_SPOILER) ? "spoiler" : null
        },
        h = function(e, t, n, r, o) {
            var i = e.flags,
                a = e.contentScanVersion,
                l = d.default.getMessage(t, n);
            return null == l ? null : o && !l.author.bot && (0, s.isPendingScan)(a) ? "potential_explicit_content" : o && ((0, E.hasFlag)(void 0 === i ? 0 : i, m.MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA) || u.default.get("obscure_blur_effect_enabled")) ? "explicit_content" : r ? "spoiler" : null
        };

    function O(e, t, n) {
        if (null == e) return [!1, void 0];
        if (n && (0, s.isPendingScan)(e.contentScanVersion)) return [!0, "potential_explicit_content"];
        var r = function(e) {
            switch (e) {
                case c.ForumPostMediaTypes.EMBED:
                    return s.ObscuredMediaTypes.Embed;
                case c.ForumPostMediaTypes.ATTACHMENT:
                    return s.ObscuredMediaTypes.Attachment;
                default:
                    return
            }
        }(e.type);
        return null != r && (0, s.isMediaObscured)({
            type: r,
            media: e
        }, n) ? [!0, "explicit_content"] : e.spoiler ? [t, "spoiler"] : [!1, void 0]
    }

    function T(e) {
        var t = e.channel,
            n = e.media,
            r = (0, a.useStateFromStores)([_.default], function() {
                return null != t && _.default.can(m.Permissions.MANAGE_MESSAGES, t)
            }),
            o = f.RenderSpoilers.useSetting(),
            i = (0, l.useShouldRedactExplicitContentForForum)();
        return O(n, !(0, p.default)(o, r), i)
    }
    var S = function(e) {
        return (0, i.match)(e).with("explicit_content", function() {
            return y.default.Messages.EXPLICIT_CONTENT_ALT
        }).with("spoiler", function() {
            return y.default.Messages.SPOILER_HIDDEN_A11Y_LABEL
        }).otherwise(function() {})
    }
}