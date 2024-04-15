function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ForumPostMediaTypes: function() {
            return i
        },
        getEmbedColor: function() {
            return S
        },
        messageContainsGifOrVideo: function() {
            return D
        },
        shouldShowAddMediaToOriginalPostModal: function() {
            return L
        },
        useFindFirstMediaProperties: function() {
            return C
        },
        useFirstMediaIsEmbed: function() {
            return g
        },
        useForumPostMediaProperties: function() {
            return R
        },
        useForumPostMediaThumbnail: function() {
            return O
        }
    }), n("789020"), n("47120"), n("724458");
    var i, r, s = n("470079"),
        a = n("118139"),
        o = n("144140"),
        l = n("695346"),
        u = n("592125"),
        d = n("375954"),
        _ = n("594174"),
        c = n("630388"),
        E = n("823379"),
        I = n("709054"),
        T = n("591759"),
        f = n("981631");

    function S(e, t) {
        if (null == e || null == e.embeds[0]) return;
        let {
            color: n
        } = e.embeds[0];
        return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
    }

    function h(e) {
        if (null == e) return !1;
        let {
            filename: t,
            height: n,
            width: i
        } = e;
        return (0, a.isImageFile)(t) && null != n && n > 0 && null != i && i > 0
    }

    function A(e) {
        return null != e && null != e && (0, a.isVideoFile)(e.filename) && null != e.proxy_url
    }

    function m(e) {
        return h(e) || A(e)
    }(r = i || (i = {})).EMBED = "embed", r.ATTACHMENT = "attachment";

    function N(e) {
        return function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.InlineAttachmentMedia.getSetting();
            if (!t) return [];
            let n = null == e ? void 0 : e.attachments;
            return null == e || null == n ? [] : n.filter(m).map(e => {
                let {
                    proxy_url: t,
                    url: n,
                    description: i,
                    spoiler: r,
                    flags: s,
                    width: o,
                    height: l,
                    filename: u,
                    content_scan_version: d
                } = e;
                if (null == o || null == l) return null;
                let _ = (0, a.isVideoFile)(u),
                    E = null != e.flags && (0, c.hasFlag)(e.flags, f.MessageAttachmentFlags.IS_THUMBNAIL),
                    I = null != t ? t : n;
                if (_) {
                    let e = T.default.toURLSafe(t);
                    if (null == e) return null;
                    e.searchParams.append("format", "jpeg"), I = e.toString()
                }
                return {
                    src: I,
                    width: o,
                    height: l,
                    spoiler: null != r && r,
                    flags: s,
                    contentScanVersion: d,
                    alt: i,
                    isVideo: _,
                    isThumbnail: E,
                    type: "attachment"
                }
            }).filter(E.isNotNullish)
        }(e, l.InlineAttachmentMedia.useSetting())
    }

    function p(e, t) {
        let n = l.InlineEmbedMedia.useSetting(),
            i = l.RenderEmbeds.useSetting();
        if (null == e) return [];
        let r = e.embeds;
        return n && i && null != r ? r.map(e => {
            var n;
            let i = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
            if (null == i && null != e.images && (i = e.images[0]), null != i && null != i.url) {
                let {
                    height: n,
                    proxyURL: r,
                    url: s,
                    width: o
                } = i, l = null != r && (0, a.isVideoUrl)(r);
                return {
                    src: null != r && "" !== r ? r : s,
                    height: n,
                    width: o,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: l,
                    type: "embed"
                }
            }
        }).filter(E.isNotNullish) : []
    }

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = R(e, n);
        return s.useMemo(() => {
            if (null == t) return [];
            if (!t.isMediaChannel()) return i;
            {
                let e = i.find(e => e.isThumbnail);
                return null != e ? [e] : i
            }
        }, [t, i])
    }

    function R(e, t) {
        let n = N(e);
        return [...n, ...p(e, t)]
    }

    function C(e, t) {
        var n, i;
        let r = N(e),
            s = p(e, t);
        return null !== (i = null !== (n = r[0]) && void 0 !== n ? n : s[0]) && void 0 !== i ? i : null
    }

    function g(e, t) {
        let n = N(e),
            i = p(e, t);
        return null == n[0] && null != i[0]
    }

    function L(e, t) {
        var n;
        let i = u.default.getChannel(t);
        if (null == i) return !1;
        let r = d.default.getMessage(i.id, I.default.castChannelIdAsMessageId(i.id));
        return null != r && e.length > 0 && null != e.find(e => e.isImage || e.isVideo) && i.isForumPost() && i.ownerId === (null === (n = _.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === o.default.getCount(i.id) && (0 === r.attachments.length || null == r.attachments.find(e => h(e) || A(e)))
    }

    function D(e) {
        return e.reduce((e, t) => ({
            containsVideo: e.containsVideo || t.isVideo,
            containsGif: e.containsGif || (0, a.isAnimatedImageUrl)(t.src)
        }), {
            containsVideo: !1,
            containsGif: !1
        })
    }
}