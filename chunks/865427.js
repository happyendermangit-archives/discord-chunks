function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APP_VERSION: function() {
            return d
        },
        getAPIEndpoint: function() {
            return _
        },
        getBuildOverride: function() {
            return c
        },
        getBuildOverrideExperiments: function() {
            return T
        },
        getBuildOverrideMeta: function() {
            return E
        },
        isBuildOverrideLink: function() {
            return S
        },
        probablyHasBuildOverride: function() {
            return I
        },
        validateURL: function() {
            return O
        }
    }), n("642549"), n("47120");
    var i = n("973361"),
        r = n("729594"),
        s = n("544891"),
        a = n("358085"),
        o = n("591759"),
        l = n("908442");
    n("981631");
    let u = void 0,
        d = (0, a.isAndroid)() ? u.Version.split(" - ")[0] : (0, a.isIOS)() ? u.Version : void 0;

    function _(e) {
        return "".concat(location.protocol, "//").concat(location.host).concat(e)
    }

    function c() {
        let e = o.default.safeParseWithQuery(_("/__development/build_overrides"));
        return null == e ? Promise.resolve(null) : (e.search = null, d && (e.query.version = d), s.HTTP.get({
            url: r.format(e),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function E(e) {
        if (A(e)) return Promise.resolve(function(e) {
            let t = e.match(h);
            if (null == t || 2 !== t.length) return null;
            let n = (0, a.getNativePlatform)(),
                i = t[1];
            return {
                targetBuildOverride: {
                    ["discord_".concat(n)]: {
                        type: "branch",
                        id: i
                    }
                },
                validForUserIds: [],
                expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT"
            }
        }(e));
        let t = o.default.safeParseWithQuery(e);
        return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", d && (t.query.version = d), t.host = window.location.host, s.HTTP.get({
            url: r.format(t),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function I() {
        return -1 !== window.document.cookie.indexOf("".concat(l.BUILD_OVERRIDE_COOKIE_NAME, "="))
    }

    function T() {
        try {
            var e;
            let t = i.parse(window.document.cookie)[l.BUILD_OVERRIDE_COOKIE_NAME];
            if (null == t) return {};
            let n = JSON.parse(atob(t.substring(t.indexOf(".") + 1)));
            return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {}
        } catch (e) {
            return {}
        }
    }
    let f = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

    function S(e) {
        return null != e && f.test(e)
    }
    let h = RegExp("^dev://branch/([\\w-./]+)$", "i");

    function A(e) {
        return null != e && h.test(e)
    }
    let m = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
        N = new Set(["/__development/link", "/__development/link/"]);

    function O(e) {
        if (A(e)) return {
            payload: null,
            url: e
        };
        let t = o.default.safeParseWithQuery(e);
        if (null == t || !m.has(t.hostname) || !("s" in t.query) || !N.has(t.pathname)) return null;
        for (let e in t.query) "s" !== e && delete t.query[e];
        return {
            payload: t.query.s,
            url: r.format(t)
        }
    }
}