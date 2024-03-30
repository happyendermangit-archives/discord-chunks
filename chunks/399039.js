function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        initSentry: function() {
            return R
        },
        usesClientMods: function() {
            return a
        }
    });
    var o = e("887117"),
        t = e("363175"),
        I = ["oppobrowser", "realmebrowser", "heytapbrowser"];

    function a() {
        var _ = window;
        return null != _.jQuery || null != _.$ || null != _.BetterDiscord || null != _.BdApi || null != _.rambox
    }
    var r = (0, t.filterThrottle)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3
    });

    function R() {
        o.init({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-75deb52754478645a06720cb5c965a8d4169e246",
            beforeSend: function(_) {
                var E, e;
                return !(null != (E = _).exception && null != E.exception.values && E.exception.values.every(function(_) {
                    return null == _.stacktrace || null != _.stacktrace.frames && 1 === _.stacktrace.frames.length
                }) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || I.some(function(_) {
                    return window.navigator.appVersion.toLowerCase().indexOf(_) >= 0
                })) && !a() && !("Aborted" === (e = _).message || "cancel captcha" === e.message) && r() ? _ : null
            },
            integrations: [new o.Integrations.GlobalHandlers({
                onerror: !0,
                onunhandledrejection: !0
            }), new o.Integrations.Breadcrumbs({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })],
            ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
            denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
        }), o.setTag("buildNumber", (_ = "280219", "280219")), o.setTag("builtAt", String("1711764812641"));
        var _, E = window.GLOBAL_ENV.SENTRY_TAGS;
        if (null != E && "object" == typeof E)
            for (var e in E) o.setTag(e, E[e]);
        return o
    }
}