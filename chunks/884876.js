function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        APP_VERSION: function() {
            return c
        },
        getAPIEndpoint: function() {
            return f
        },
        getBuildOverride: function() {
            return d
        },
        getBuildOverrideExperiments: function() {
            return p
        },
        getBuildOverrideMeta: function() {
            return _
        },
        isBuildOverrideLink: function() {
            return y
        },
        probablyHasBuildOverride: function() {
            return E
        },
        validateURL: function() {
            return S
        }
    });
    var r = n("973361"),
        o = n("729594"),
        i = n("967888"),
        a = n("374550"),
        u = n("822853"),
        s = n("256768");
    n("281767");
    var l = void 0,
        c = (0, a.isAndroid)() ? l.Version.split(" - ")[0] : (0, a.isIOS)() ? l.Version : void 0;

    function f(e) {
        return "".concat(location.protocol, "//").concat(location.host).concat(e)
    }

    function d() {
        var e = u.default.safeParseWithQuery(f("/__development/build_overrides"));
        return null == e ? Promise.resolve(null) : (e.search = null, c && (e.query.version = c), i.HTTP.get({
            url: o.format(e),
            oldFormErrors: !0
        }).then(function(e) {
            return e.body || null
        }, function() {
            return null
        }))
    }

    function _(e) {
        if (h(e)) return Promise.resolve(function(e) {
            var t, n, r, o = e.match(I);
            if (null == o || 2 !== o.length) return null;
            var i = (0, a.getNativePlatform)(),
                u = o[1];
            return {
                targetBuildOverride: (t = {}, n = "discord_".concat(i), r = {
                    type: "branch",
                    id: u
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t),
                validForUserIds: [],
                expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT"
            }
        }(e));
        var t = u.default.safeParseWithQuery(e);
        return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", c && (t.query.version = c), t.host = window.location.host, i.HTTP.get({
            url: o.format(t),
            oldFormErrors: !0
        }).then(function(e) {
            return e.body || null
        }, function() {
            return null
        }))
    }

    function E() {
        return -1 !== window.document.cookie.indexOf("".concat(s.BUILD_OVERRIDE_COOKIE_NAME, "="))
    }

    function p() {
        try {
            var e, t = r.parse(window.document.cookie)[s.BUILD_OVERRIDE_COOKIE_NAME];
            if (null == t) return {};
            var n = JSON.parse(atob(t.substring(t.indexOf(".") + 1)));
            return null !== (e = n.$meta.experiments) && void 0 !== e ? e : {}
        } catch (e) {
            return {}
        }
    }
    var m = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

    function y(e) {
        return null != e && m.test(e)
    }
    var I = RegExp("^dev://branch/([\\w-./]+)$", "i");

    function h(e) {
        return null != e && I.test(e)
    }
    var O = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
        T = new Set(["/__development/link", "/__development/link/"]);

    function S(e) {
        if (h(e)) return {
            payload: null,
            url: e
        };
        var t = u.default.safeParseWithQuery(e);
        if (null == t || !O.has(t.hostname) || !("s" in t.query) || !T.has(t.pathname)) return null;
        for (var n in t.query) "s" !== n && delete t.query[n];
        return {
            payload: t.query.s,
            url: o.format(t)
        }
    }
}