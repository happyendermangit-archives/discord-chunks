function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAttachmentUrl: function() {
            return c
        },
        maybeRefreshAttachmentUrl: function() {
            return m
        },
        messageHasExpiredAttachmentUrl: function() {
            return A
        },
        removeSignedUrlParameters: function() {
            return E
        }
    }), n("47120");
    var i, r = n("544891"),
        s = n("70956"),
        a = n("591759"),
        o = n("796798"),
        l = n("981631");
    let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)]),
        d = new Set(["/attachments/", "/ephemeral-attachments/"]),
        _ = 1 * s.default.Millis.HOUR;

    function c(e) {
        return u.has(e.hostname) && Array.from(d).some(t => e.pathname.startsWith(t))
    }

    function E(e) {
        let t = a.default.toURLSafe(e);
        if (null == t) return e;
        for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
        return t
    }

    function I(e) {
        let t = function(e) {
            let t = e.searchParams.get("ex"),
                n = parseInt(null != t ? t : "", 16);
            return isNaN(n) ? void 0 : n * s.default.Millis.SECOND
        }(e);
        return null == t || t <= Date.now() + _
    }

    function T(e) {
        let t = a.default.toURLSafe(e.url);
        return null != t && I(t)
    }

    function f(e) {
        if (null == e) return !1;
        let t = a.default.toURLSafe(e.url);
        return !!(null != t && c(t)) && I(t)
    }

    function S(e) {
        var t;
        return f(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(f)) || f(e.video)
    }

    function A(e) {
        return e.attachments.some(T) || e.embeds.some(S)
    }
    async function h(e) {
        let t = await r.HTTP.post({
            url: l.Endpoints.ATTACHMENTS_REFRESH_URLS,
            body: {
                attachment_urls: [e]
            }
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
    }
    async function m(e) {
        if (!o.AttachmentLinkRefreshExperiment.getCurrentConfig({
                location: "link_clicked"
            }).enabled) return e;
        let t = a.default.toURLSafe(e);
        if (null == t || !I(t)) return e;
        let n = await h(e);
        return null != n ? n : e
    }
}