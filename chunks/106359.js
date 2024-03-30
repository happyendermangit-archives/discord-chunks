function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ForumPostMediaTypes: function() {
            return o
        },
        getEmbedColor: function() {
            return h
        },
        messageContainsGifOrVideo: function() {
            return P
        },
        shouldShowAddMediaToOriginalPostModal: function() {
            return C
        },
        useFindFirstMediaProperties: function() {
            return N
        },
        useFirstMediaIsEmbed: function() {
            return R
        },
        useForumPostMediaProperties: function() {
            return b
        },
        useForumPostMediaThumbnail: function() {
            return A
        }
    });
    var r, o, i = n("470079"),
        a = n("601096"),
        u = n("271408"),
        s = n("53867"),
        l = n("935741"),
        c = n("204394"),
        f = n("208454"),
        d = n("947248"),
        _ = n("162677"),
        E = n("523018"),
        p = n("822853"),
        m = n("281767");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e) {
        return function(e) {
            if (Array.isArray(e)) return y(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e, t) {
        if (null != e && null != e.embeds[0]) {
            var n = e.embeds[0].color;
            return null != n && "#ffffff" === n.toLowerCase() || t ? void 0 : n
        }
    }

    function O(e) {
        if (null == e) return !1;
        var t = e.filename,
            n = e.height,
            r = e.width;
        return (0, a.isImageFile)(t) && null != n && n > 0 && null != r && r > 0
    }

    function T(e) {
        return null != e && null != e && (0, a.isVideoFile)(e.filename) && null != e.proxy_url
    }

    function S(e) {
        return O(e) || T(e)
    }(r = o || (o = {})).EMBED = "embed", r.ATTACHMENT = "attachment";

    function v(e) {
        return function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.InlineAttachmentMedia.getSetting();
            if (!t) return [];
            var n = null == e ? void 0 : e.attachments;
            return null == e || null == n ? [] : n.filter(S).map(function(e) {
                var t = e.proxy_url,
                    n = e.url,
                    r = e.description,
                    o = e.spoiler,
                    i = e.flags,
                    u = e.width,
                    s = e.height,
                    l = e.filename,
                    c = e.content_scan_version;
                if (null == u || null == s) return null;
                var f = (0, a.isVideoFile)(l),
                    _ = null != e.flags && (0, d.hasFlag)(e.flags, m.MessageAttachmentFlags.IS_THUMBNAIL),
                    E = null != t ? t : n;
                if (f) {
                    var y = p.default.toURLSafe(t);
                    if (null == y) return null;
                    y.searchParams.append("format", "jpeg"), E = y.toString()
                }
                return {
                    src: E,
                    width: u,
                    height: s,
                    spoiler: null != o && o,
                    flags: i,
                    contentScanVersion: c,
                    alt: r,
                    isVideo: f,
                    isThumbnail: _,
                    type: "attachment"
                }
            }).filter(_.isNotNullish)
        }(e, s.InlineAttachmentMedia.useSetting())
    }

    function g(e, t) {
        var n = s.InlineEmbedMedia.useSetting(),
            r = s.RenderEmbeds.useSetting();
        if (null == e) return [];
        var o = e.embeds;
        return n && r && null != o ? o.map(function(e) {
            var n, r = null !== (n = e.image) && void 0 !== n ? n : e.thumbnail;
            if (null == r && null != e.images && (r = e.images[0]), null != r && null != r.url) {
                var o = r.height,
                    i = r.proxyURL,
                    u = r.url,
                    s = r.width,
                    l = null != i && (0, a.isVideoUrl)(i);
                return {
                    src: null != i && "" !== i ? i : u,
                    height: o,
                    width: s,
                    spoiler: t,
                    flags: e.flags,
                    contentScanVersion: e.contentScanVersion,
                    isVideo: l,
                    type: "embed"
                }
            }
        }).filter(_.isNotNullish) : []
    }

    function A(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = b(e, n);
        return i.useMemo(function() {
            if (null == t) return [];
            if (!t.isMediaChannel()) return r;
            var e = r.find(function(e) {
                return e.isThumbnail
            });
            return null != e ? [e] : r
        }, [t, r])
    }

    function b(e, t) {
        var n = v(e),
            r = g(e, t);
        return I(n).concat(I(r))
    }

    function N(e, t) {
        var n, r, o = v(e),
            i = g(e, t);
        return null !== (r = null !== (n = o[0]) && void 0 !== n ? n : i[0]) && void 0 !== r ? r : null
    }

    function R(e, t) {
        var n = v(e),
            r = g(e, t);
        return null == n[0] && null != r[0]
    }

    function C(e, t) {
        var n, r = l.default.getChannel(t);
        if (null == r) return !1;
        var o = c.default.getMessage(r.id, E.default.castChannelIdAsMessageId(r.id));
        return null != o && e.length > 0 && null != e.find(function(e) {
            return e.isImage || e.isVideo
        }) && r.isForumPost() && r.ownerId === (null === (n = f.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && 0 === u.default.getCount(r.id) && (0 === o.attachments.length || null == o.attachments.find(function(e) {
            return O(e) || T(e)
        }))
    }

    function P(e) {
        return e.reduce(function(e, t) {
            return {
                containsVideo: e.containsVideo || t.isVideo,
                containsGif: e.containsGif || (0, a.isAnimatedImageUrl)(t.src)
            }
        }, {
            containsVideo: !1,
            containsGif: !1
        })
    }
}