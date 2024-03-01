function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APP_VERSION: function() {
            return c
        },
        getAPIEndpoint: function() {
            return d
        },
        getBuildOverride: function() {
            return f
        },
        getBuildOverrideMeta: function() {
            return E
        },
        probablyHasBuildOverride: function() {
            return p
        },
        getBuildOverrideExperiments: function() {
            return h
        },
        isBuildOverrideLink: function() {
            return S
        },
        validateURL: function() {
            return C
        }
    }), n("101997"), n("222007");
    var i = n("160679"),
        r = n("746379"),
        s = n("872717"),
        a = n("773336"),
        o = n("253981"),
        l = n("180855");
    n("49111");
    let u = void 0,
        c = (0, a.isAndroid)() ? u.Version.split(" - ")[0] : (0, a.isIOS)() ? u.Version : void 0;

    function d(e) {
        return "".concat(location.protocol, "//").concat(location.host).concat(e)
    }

    function f() {
        let e = o.default.safeParseWithQuery(d("/__development/build_overrides"));
        return null == e ? Promise.resolve(null) : (e.search = null, c && (e.query.version = c), s.default.get({
            url: r.format(e),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function E(e) {
        if (T(e)) return Promise.resolve(function(e) {
            let t = e.match(m);
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
        return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", c && (t.query.version = c), t.host = window.location.host, s.default.get({
            url: r.format(t),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function p() {
        return -1 !== window.document.cookie.indexOf("".concat(l.BUILD_OVERRIDE_COOKIE_NAME, "="))
    }

    function h() {
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
    let _ = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

    function S(e) {
        return null != e && _.test(e)
    }
    let m = RegExp("^dev://branch/([\\w-./]+)$", "i");

    function T(e) {
        return null != e && m.test(e)
    }
    let g = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
        I = new Set(["/__development/link", "/__development/link/"]);

    function C(e) {
        if (T(e)) return {
            payload: null,
            url: e
        };
        let t = o.default.safeParseWithQuery(e);
        if (null == t || !g.has(t.hostname) || !("s" in t.query) || !I.has(t.pathname)) return null;
        for (let e in t.query) "s" !== e && delete t.query[e];
        return {
            payload: t.query.s,
            url: r.format(t)
        }
    }
}