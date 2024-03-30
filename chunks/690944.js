function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUnscannedAttachmentsAndEmbedIdsForTimeout: function() {
            return c
        },
        hasAttachmentsOrEmbeds: function() {
            return r
        },
        hasAttachmentsOrEmbedsRequiringScan: function() {
            return u
        },
        hasUnscannedAttachmentsOrEmbedsForTimeout: function() {
            return f
        },
        shouldScanAttachment: function() {
            return i
        },
        shouldScanEmbed: function() {
            return a
        }
    });

    function r(e) {
        return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
    }

    function o(e) {
        return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null
    }

    function i(e, t) {
        return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1)
    }

    function a(e, t) {
        var n, r, i, a, u, s, l, c = o(e);
        return !((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0 || (null === (u = e.image) || void 0 === u ? void 0 : u.width) === 0 && (null === (s = e.image) || void 0 === s ? void 0 : s.height) === 0 || "images" in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some(function(e) {
            return 0 === e.width && 0 === e.height
        }))) && (null == c || c < (null != t ? t : 1))
    }

    function u(e) {
        var t = function(e) {
                var t, n, r, o, u, s, l, c, f = null !== (u = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== u ? u : 0,
                    d = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
                if (0 === f && 0 === d) return {
                    attachmentIds: [],
                    embedIds: []
                };
                var _ = null !== (l = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(i)) && void 0 !== l ? l : [],
                    E = null !== (c = null == e ? void 0 : null === (o = e.embeds) || void 0 === o ? void 0 : o.filter(a)) && void 0 !== c ? c : [];
                return {
                    attachmentIds: _.map(function(e) {
                        return e.id
                    }).filter(Boolean),
                    embedIds: E.map(function(e, t) {
                        return "embed_".concat(t)
                    }).filter(Boolean)
                }
            }(e),
            n = t.attachmentIds,
            r = t.embedIds;
        return n.length > 0 || r.length > 0
    }

    function s(e) {
        return null == e.content_scan_version
    }

    function l(e) {
        var t, n, r, i, a, u, s, l = o(e);
        return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (r = e.thumbnail) || void 0 === r ? void 0 : r.width) === 0 && (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.height) === 0 || (null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (u = e.image) || void 0 === u ? void 0 : u.height) === 0 || "images" in e && (null === (s = e.images) || void 0 === s ? void 0 : s.some(function(e) {
            return 0 === e.width && 0 === e.height
        }))) && null == l
    }

    function c(e) {
        var t, n, r, o, i, a, u, c, f = null !== (i = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== i ? i : 0,
            d = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
        if (0 === f && 0 === d) return {
            attachmentIds: [],
            embedIds: []
        };
        var _ = null !== (u = null == e ? void 0 : null === (r = e.attachments) || void 0 === r ? void 0 : r.filter(s)) && void 0 !== u ? u : [],
            E = null !== (c = null == e ? void 0 : null === (o = e.embeds) || void 0 === o ? void 0 : o.filter(l)) && void 0 !== c ? c : [];
        return {
            attachmentIds: _.map(function(e) {
                return e.id
            }).filter(Boolean),
            embedIds: E.map(function(e, t) {
                return "embed_".concat(t)
            }).filter(Boolean)
        }
    }

    function f(e) {
        var t = c(e),
            n = t.attachmentIds,
            r = t.embedIds;
        return n.length > 0 || r.length > 0
    }
}