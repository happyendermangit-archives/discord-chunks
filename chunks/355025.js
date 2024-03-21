function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APP_VERSION: function() {
            return d
        },
        getAPIEndpoint: function() {
            return c
        },
        getBuildOverride: function() {
            return _
        },
        getBuildOverrideMeta: function() {
            return f
        },
        probablyHasBuildOverride: function() {
            return E
        },
        getBuildOverrideExperiments: function() {
            return h
        },
        isBuildOverrideLink: function() {
            return m
        },
        validateURL: function() {
            return I
        }
    }), n("101997"), n("222007");
    var i = n("160679"),
        s = n("746379"),
        r = n("872717"),
        a = n("773336"),
        o = n("253981"),
        l = n("180855");
    n("49111");
    let u = void 0,
        d = (0, a.isAndroid)() ? u.Version.split(" - ")[0] : (0, a.isIOS)() ? u.Version : void 0;

    function c(e) {
        return "".concat(location.protocol, "//").concat(location.host).concat(e)
    }

    function _() {
        let e = o.default.safeParseWithQuery(c("/__development/build_overrides"));
        return null == e ? Promise.resolve(null) : (e.search = null, d && (e.query.version = d), r.default.get({
            url: s.format(e),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function f(e) {
        if (S(e)) return Promise.resolve(function(e) {
            let t = e.match(p);
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
        return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", d && (t.query.version = d), t.host = window.location.host, r.default.get({
            url: s.format(t),
            oldFormErrors: !0
        }).then(e => e.body || null, () => null))
    }

    function E() {
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
    let g = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

    function m(e) {
        return null != e && g.test(e)
    }
    let p = RegExp("^dev://branch/([\\w-./]+)$", "i");

    function S(e) {
        return null != e && p.test(e)
    }
    let v = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
        T = new Set(["/__development/link", "/__development/link/"]);

    function I(e) {
        if (S(e)) return {
            payload: null,
            url: e
        };
        let t = o.default.safeParseWithQuery(e);
        if (null == t || !v.has(t.hostname) || !("s" in t.query) || !T.has(t.pathname)) return null;
        for (let e in t.query) "s" !== e && delete t.query[e];
        return {
            payload: t.query.s,
            url: s.format(t)
        }
    }
}