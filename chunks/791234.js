function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmbedColor: function() {
            return E
        },
        ForumPostMediaTypes: function() {
            return i
        },
        useForumPostMediaThumbnail: function() {
            return T
        },
        useForumPostMediaProperties: function() {
            return I
        },
        useFindFirstMediaProperties: function() {
            return v
        },
        useFirstMediaIsEmbed: function() {
            return N
        },
        shouldShowAddMediaToOriginalPostModal: function() {
            return A
        },
        messageContainsGifOrVideo: function() {
            return O
        }
    }), n("702976"), n("222007"), n("808653");
    var i, l, a = n("884691"),
        s = n("651693"),
        r = n("610730"),
        o = n("845579"),
        u = n("42203"),
        d = n("377253"),
        c = n("697218"),
        f = n("568734"),
        p = n("449008"),
        m = n("299039"),
        h = n("253981"),
        x = n("49111");

    function E(e, t) {
        if (null == e || null == e.embeds[0]) return;
        let {
            color: n
        } = e.embeds[0];
        return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
    }

    function y(e) {
        if (null == e) return !1;
        let {
            filename: t,
            height: n,
            width: i
        } = e;
        return (0, s.isImageFile)(t) && null != n && n > 0 && null != i && i > 0
    }

    function g(e) {
        return null != e && null != e && (0, s.isVideoFile)(e.filename) && null != e.proxy_url
    }

    function S(e) {
        return y(e) || g(e)
    }(l = i || (i = {})).EMBED = "embed", l.ATTACHMENT = "attachment";

    function C(e) {
        let t = o.InlineAttachmentMedia.useSetting();
        return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
            if (!t) return [];
            let n = null == e ? void 0 : e.attachments;
            return null == e || null == n ? [] : n.filter(S).map(e => {
                let {
                    proxy_url: t,
                    url: n,
                    description: i,
                    spoiler: l,
                    flags: a,
                    width: r,
                    height: o,
                    filename: u,
                    content_scan_version: d
                } = e;
                if (null == r || null == o) return null;
                let c = (0, s.isVideoFile)(u),
                    p = null != e.flags && (0, f.hasFlag)(e.flags, x.MessageAttachmentFlags.IS_THUMBNAIL),
                    m = null != t ? t : n;
                if (c) {
                    let e = h.default.toURLSafe(t);
                    if (null == e) return null;
                    e.searchParams.append("format", "jpeg"), m = e.toString()
                }
                return {
                    src: m,
                    width: r,
                    height: o,
                    spoiler: null != l && l,
                    flags: a,
                    contentScanVersion: d,
                    alt: i,
                    isVideo: c,
                    isThumbnail: p,
                    type: "attachment"
                }
            }).filter(p.isNotNullish)
        }(e, t)
    }

    function _(e, t) {
        let n = o.InlineEmbedMedia.useSetting(),
            i = o.RenderEmbeds.useSetting();
        if (null == e) return [];
        let l = e.embeds;
        return n && i && null != l ? l.map(e => {
            var n;
            let i = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
            if (null == i && null != e.images && (i = e.images[0]), null != i && null != i.url) {
                let {
                    height: n,
                    proxyURL: l,
                    url: a,
                    width: r
                } = i, o = null != l && (0, s.isVideoUrl)(l);
                return {
                    src: null != l && "" !== l ? l : a,
                    height: n,
                    width: r,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: o,
                    type: "embed"
                }
            }
        }).filter(p.isNotNullish) : []
    }

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = I(e, n);
        return a.useMemo(() => {
            if (null == t) return [];
            if (!t.isMediaChannel()) return i;
            {
                let e = i.find(e => e.isThumbnail);
                return null != e ? [e] : i
            }
        }, [t, i])
    }

    function I(e, t) {
        let n = C(e),
            i = _(e, t);
        return [...n, ...i]
    }

    function v(e, t) {
        var n, i;
        let l = C(e),
            a = _(e, t);
        return null !== (i = null !== (n = l[0]) && void 0 !== n ? n : a[0]) && void 0 !== i ? i : null
    }

    function N(e, t) {
        let n = C(e),
            i = _(e, t);
        return null == n[0] && null != i[0]
    }

    function A(e, t) {
        var n;
        let i = u.default.getChannel(t);
        if (null == i) return !1;
        let l = d.default.getMessage(i.id, m.default.castChannelIdAsMessageId(i.id));
        return null != l && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(i.id) && (0 === l.attachments.length || null == l.attachments.find(e => y(e) || g(e)))
    }

    function O(e) {
        return e.reduce((e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, s.isAnimatedImageUrl)(t.src)
        }), {
            containsVideo: !1,
            containsGif: !1
        })
    }
}