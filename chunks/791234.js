function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmbedColor: function() {
            return g
        },
        ForumPostMediaTypes: function() {
            return l
        },
        useForumPostMediaThumbnail: function() {
            return _
        },
        useForumPostMediaProperties: function() {
            return N
        },
        useFindFirstMediaProperties: function() {
            return A
        },
        useFirstMediaIsEmbed: function() {
            return x
        },
        shouldShowAddMediaToOriginalPostModal: function() {
            return y
        },
        messageContainsGifOrVideo: function() {
            return O
        }
    }), n("702976"), n("222007"), n("808653");
    var l, i, a = n("884691"),
        s = n("651693"),
        r = n("610730"),
        o = n("845579"),
        u = n("42203"),
        d = n("377253"),
        c = n("697218"),
        f = n("568734"),
        m = n("449008"),
        p = n("299039"),
        h = n("253981"),
        E = n("49111");

    function g(e, t) {
        if (null == e || null == e.embeds[0]) return;
        let {
            color: n
        } = e.embeds[0];
        return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
    }

    function S(e) {
        if (null == e) return !1;
        let {
            filename: t,
            height: n,
            width: l
        } = e;
        return (0, s.isImageFile)(t) && null != n && n > 0 && null != l && l > 0
    }

    function C(e) {
        return null != e && null != e && (0, s.isVideoFile)(e.filename) && null != e.proxy_url
    }

    function T(e) {
        return S(e) || C(e)
    }(i = l || (l = {})).EMBED = "embed", i.ATTACHMENT = "attachment";

    function v(e) {
        let t = o.InlineAttachmentMedia.useSetting();
        return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.InlineAttachmentMedia.getSetting();
            if (!t) return [];
            let n = null == e ? void 0 : e.attachments;
            return null == e || null == n ? [] : n.filter(T).map(e => {
                let {
                    proxy_url: t,
                    url: n,
                    description: l,
                    spoiler: i,
                    flags: a,
                    width: r,
                    height: o,
                    filename: u,
                    content_scan_version: d
                } = e;
                if (null == r || null == o) return null;
                let c = (0, s.isVideoFile)(u),
                    m = null != e.flags && (0, f.hasFlag)(e.flags, E.MessageAttachmentFlags.IS_THUMBNAIL),
                    p = null != t ? t : n;
                if (c) {
                    let e = h.default.toURLSafe(t);
                    if (null == e) return null;
                    e.searchParams.append("format", "jpeg"), p = e.toString()
                }
                return {
                    src: p,
                    width: r,
                    height: o,
                    spoiler: null != i && i,
                    flags: a,
                    contentScanVersion: d,
                    alt: l,
                    isVideo: c,
                    isThumbnail: m,
                    type: "attachment"
                }
            }).filter(m.isNotNullish)
        }(e, t)
    }

    function I(e, t) {
        let n = o.InlineEmbedMedia.useSetting(),
            l = o.RenderEmbeds.useSetting();
        if (null == e) return [];
        let i = e.embeds;
        return n && l && null != i ? i.map(e => {
            var n;
            let l = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
            if (null == l && null != e.images && (l = e.images[0]), null != l && null != l.url) {
                let {
                    height: n,
                    proxyURL: i,
                    url: a,
                    width: r
                } = l, o = null != i && (0, s.isVideoUrl)(i);
                return {
                    src: null != i && "" !== i ? i : a,
                    height: n,
                    width: r,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: o,
                    type: "embed"
                }
            }
        }).filter(m.isNotNullish) : []
    }

    function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = N(e, n);
        return a.useMemo(() => {
            if (null == t) return [];
            if (!t.isMediaChannel()) return l;
            {
                let e = l.find(e => e.isThumbnail);
                return null != e ? [e] : l
            }
        }, [t, l])
    }

    function N(e, t) {
        let n = v(e),
            l = I(e, t);
        return [...n, ...l]
    }

    function A(e, t) {
        var n, l;
        let i = v(e),
            a = I(e, t);
        return null !== (l = null !== (n = i[0]) && void 0 !== n ? n : a[0]) && void 0 !== l ? l : null
    }

    function x(e, t) {
        let n = v(e),
            l = I(e, t);
        return null == n[0] && null != l[0]
    }

    function y(e, t) {
        var n;
        let l = u.default.getChannel(t);
        if (null == l) return !1;
        let i = d.default.getMessage(l.id, p.default.castChannelIdAsMessageId(l.id));
        return null != i && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && l.isForumPost() && l.ownerId === (null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === r.default.getCount(l.id) && (0 === i.attachments.length || null == i.attachments.find(e => S(e) || C(e)))
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