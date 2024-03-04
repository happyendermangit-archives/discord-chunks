function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usesClientMods: function() {
            return l
        },
        initSentry: function() {
            return u
        }
    }), n("222007");
    var a = n("245123"),
        r = n("316217");
    let s = ["oppobrowser", "realmebrowser", "heytapbrowser"];

    function l() {
        let e = window;
        return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
    }
    let i = (0, r.filterThrottle)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3
    });

    function u() {
        var e;
        a.init({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-b78c834a506d56f30b58b2ae629d75e3d5df7c86",
            beforeSend: e => {
                var t, n;
                return !(null != (t = e).exception && null != t.exception.values && t.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || s.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !l() && !("Aborted" === (n = e).message || "cancel captcha" === n.message) && i() ? e : null
            },
            integrations: [new a.Integrations.GlobalHandlers({
                onerror: !0,
                onunhandledrejection: !0
            }), new a.Integrations.Breadcrumbs({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })],
            ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
            denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
        }), a.setTag("buildNumber", (e = "272036", "272036")), a.setTag("builtAt", String("1709589420169"));
        let t = window.GLOBAL_ENV.SENTRY_TAGS;
        if (null != t && "object" == typeof t)
            for (let e in t) a.setTag(e, t[e]);
        return a
    }
}