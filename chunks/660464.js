function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasAttachmentsOrEmbeds: function() {
            return i
        },
        shouldScanAttachment: function() {
            return r
        },
        shouldScanEmbed: function() {
            return a
        },
        hasAttachmentsOrEmbedsRequiringScan: function() {
            return o
        },
        getUnscannedAttachmentsAndEmbedIdsForTimeout: function() {
            return d
        },
        hasUnscannedAttachmentsOrEmbedsForTimeout: function() {
            return c
        }
    });

    function i(e) {
        return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
    }

    function s(e) {
        return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null
    }

    function r(e) {
        return null == e.content_scan_version || e.content_scan_version < 1
    }

    function a(e) {
        var t, n, i, r, a, o, l;
        let u = s(e);
        return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (r = e.thumbnail) || void 0 === r ? void 0 : r.height) === 0 || (null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0 || "images" in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some(e => 0 === e.width && 0 === e.height))) && (null == u || u < 1)
    }

    function o(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = function(e) {
            var t, n, i, s, o, l, u, d;
            let c = null !== (o = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== o ? o : 0,
                f = null !== (l = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0;
            if (0 === c && 0 === f) return {
                attachmentIds: [],
                embedIds: []
            };
            let _ = null !== (u = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(r)) && void 0 !== u ? u : [],
                E = null !== (d = null == e ? void 0 : null === (s = e.embeds) || void 0 === s ? void 0 : s.filter(a)) && void 0 !== d ? d : [];
            return {
                attachmentIds: _.map(e => e.id).filter(Boolean),
                embedIds: E.map((e, t) => "embed_".concat(t)).filter(Boolean)
            }
        }(e);
        return t.length > 0 || n.length > 0
    }

    function l(e) {
        return null == e.content_scan_version
    }

    function u(e) {
        var t, n, i, r, a, o, l;
        let u = s(e);
        return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (r = e.thumbnail) || void 0 === r ? void 0 : r.height) === 0 || (null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0 || "images" in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some(e => 0 === e.width && 0 === e.height))) && null == u
    }

    function d(e) {
        var t, n, i, s, r, a, o, d;
        let c = null !== (r = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0,
            f = null !== (a = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0;
        if (0 === c && 0 === f) return {
            attachmentIds: [],
            embedIds: []
        };
        let _ = null !== (o = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(l)) && void 0 !== o ? o : [],
            E = null !== (d = null == e ? void 0 : null === (s = e.embeds) || void 0 === s ? void 0 : s.filter(u)) && void 0 !== d ? d : [];
        return {
            attachmentIds: _.map(e => e.id).filter(Boolean),
            embedIds: E.map((e, t) => "embed_".concat(t)).filter(Boolean)
        }
    }

    function c(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = d(e);
        return t.length > 0 || n.length > 0
    }
}