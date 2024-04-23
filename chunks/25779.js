function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        initSentry: function() {
            return A
        },
        usesClientMods: function() {
            return R
        }
    }), e("47120");
    var I = e("887117"),
        o = e("97145");
    let a = ["oppobrowser", "realmebrowser", "heytapbrowser"];

    function R() {
        let _ = window;
        return null != _.jQuery || null != _.$ || null != _.BetterDiscord || null != _.BdApi || null != _.rambox
    }
    let t = (0, o.filterThrottle)({
        maxBudgetMinute: 1,
        maxBudgetHour: 3
    });

    function A() {
        var _;
        I.init({
            tunnel: "/error-reporting-proxy/web",
            dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
            autoSessionTracking: !1,
            environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
            release: "discord_web-4a797779495ccc42544f8eac49cd25de45c821f9",
            beforeSend: _ => {
                var E, e;
                return !(null != (E = _).exception && null != E.exception.values && E.exception.values.every(_ => null == _.stacktrace || null != _.stacktrace.frames && 1 === _.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || a.some(_ => window.navigator.appVersion.toLowerCase().indexOf(_) >= 0)) && !R() && !("Aborted" === (e = _).message || "cancel captcha" === e.message) && t() ? _ : null
            },
            integrations: [new I.Integrations.GlobalHandlers({
                onerror: !0,
                onunhandledrejection: !0
            }), new I.Integrations.Breadcrumbs({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })],
            ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
            denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
        }), I.setTag("buildNumber", (_ = "286936", "286936")), I.setTag("builtAt", String("1713835998677"));
        let E = window.GLOBAL_ENV.SENTRY_TAGS;
        if (null != E && "object" == typeof E)
            for (let _ in E) I.setTag(_, E[_]);
        return I
    }
}