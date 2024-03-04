function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        isAttachmentUrl: function() {
            return h
        },
        removeSignedUrlParameters: function() {
            return f
        },
        messageHasExpiredAttachmentUrl: function() {
            return _
        },
        maybeRefreshAttachmentUrl: function() {
            return R
        }
    }), r("222007");
    var s, n = r("872717"),
        l = r("718517"),
        i = r("253981"),
        a = r("519841"),
        o = r("49111");
    let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (s = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === s ? void 0 : s.substring(2)]),
        c = new Set(["/attachments/", "/ephemeral-attachments/"]),
        d = 1 * l.default.Millis.HOUR;

    function h(e) {
        return u.has(e.hostname) && Array.from(c).some(t => e.pathname.startsWith(t))
    }

    function f(e) {
        let t = i.default.toURLSafe(e);
        if (null == t) return e;
        for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
        return t
    }

    function m(e) {
        let t = function(e) {
            let t = e.searchParams.get("ex"),
                r = parseInt(null != t ? t : "", 16);
            return isNaN(r) ? void 0 : r * l.default.Millis.SECOND
        }(e);
        return null == t || t <= Date.now() + d
    }

    function p(e) {
        let t = i.default.toURLSafe(e.url);
        return null != t && m(t)
    }

    function I(e) {
        if (null == e) return !1;
        let t = i.default.toURLSafe(e.url);
        return !!(null != t && h(t)) && m(t)
    }

    function g(e) {
        var t;
        return I(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(I)) || I(e.video)
    }

    function _(e) {
        return e.attachments.some(p) || e.embeds.some(g)
    }
    async function E(e) {
        let t = await n.default.post({
            url: o.Endpoints.ATTACHMENTS_REFRESH_URLS,
            body: {
                attachment_urls: [e]
            }
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
    }
    async function R(e) {
        if (!a.AttachmentLinkRefreshExperiment.getCurrentConfig({
                location: "link_clicked"
            }).enabled) return e;
        let t = i.default.toURLSafe(e);
        if (null == t || !m(t)) return e;
        let r = await E(e);
        return null != r ? r : e
    }
}