function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUnscannedAttachmentsAndEmbedIdsForTimeout: function() {
            return d
        },
        hasAttachmentsOrEmbeds: function() {
            return i
        },
        hasAttachmentsOrEmbedsRequiringScan: function() {
            return o
        },
        hasUnscannedAttachmentsOrEmbedsForTimeout: function() {
            return _
        },
        shouldScanAttachment: function() {
            return a
        },
        shouldScanEmbed: function() {
            return s
        }
    });

    function i(e) {
        return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
    }

    function r(e) {
        return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null
    }

    function a(e, t) {
        return null == e.content_scan_version || e.content_scan_version < (null != t ? t : 1)
    }

    function s(e, t) {
        var n, i, a, s, o, l, u;
        let d = r(e);
        return !((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (i = e.video) || void 0 === i ? void 0 : i.height) === 0 || (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0 || (null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (l = e.image) || void 0 === l ? void 0 : l.height) === 0 || "images" in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some(e => 0 === e.width && 0 === e.height))) && (null == d || d < (null != t ? t : 1))
    }

    function o(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = function(e) {
            var t, n, i, r, o, l, u, d;
            let _ = null !== (o = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== o ? o : 0,
                c = null !== (l = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0;
            if (0 === _ && 0 === c) return {
                attachmentIds: [],
                embedIds: []
            };
            let E = null !== (u = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(a)) && void 0 !== u ? u : [],
                I = null !== (d = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(s)) && void 0 !== d ? d : [];
            return {
                attachmentIds: E.map(e => e.id).filter(Boolean),
                embedIds: I.map((e, t) => "embed_".concat(t)).filter(Boolean)
            }
        }(e);
        return t.length > 0 || n.length > 0
    }

    function l(e) {
        return null == e.content_scan_version
    }

    function u(e) {
        var t, n, i, a, s, o, l;
        let u = r(e);
        return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0 || (null === (s = e.image) || void 0 === s ? void 0 : s.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0 || "images" in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some(e => 0 === e.width && 0 === e.height))) && null == u
    }

    function d(e) {
        var t, n, i, r, a, s, o, d;
        let _ = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
            c = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
        if (0 === _ && 0 === c) return {
            attachmentIds: [],
            embedIds: []
        };
        let E = null !== (o = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(l)) && void 0 !== o ? o : [],
            I = null !== (d = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(u)) && void 0 !== d ? d : [];
        return {
            attachmentIds: E.map(e => e.id).filter(Boolean),
            embedIds: I.map((e, t) => "embed_".concat(t)).filter(Boolean)
        }
    }

    function _(e) {
        let {
            attachmentIds: t,
            embedIds: n
        } = d(e);
        return t.length > 0 || n.length > 0
    }
}