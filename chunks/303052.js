function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("582444"),
        u = n("996116"),
        s = n("728664"),
        l = n("292851"),
        c = n("941504"),
        f = n("868598");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var p = function(e) {
        var t, n = e.invertColor,
            o = e.type,
            p = void 0 === o ? l.BotTagTypes.BOT : o,
            m = e.className,
            y = e.verified,
            I = e.hideIcon,
            h = void 0 !== I && I,
            O = e.useRemSizes,
            T = void 0 !== O && O,
            S = e.children,
            v = void 0 === S ? [] : S,
            g = null,
            A = c.default.Messages.VERIFIED_BOT_TOOLTIP,
            b = u.AppLauncherOnboardingExperiment.useExperiment({
                location: "Bot Tag"
            }, {
                autoTrackExposure: !1
            }).enabled;
        switch (p) {
            case l.BotTagTypes.SYSTEM_DM:
            case l.BotTagTypes.OFFICIAL:
                y = !0, A = c.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, g = c.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                break;
            case l.BotTagTypes.SERVER:
                g = c.default.Messages.BOT_TAG_SERVER;
                break;
            case l.BotTagTypes.ORIGINAL_POSTER:
                g = c.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                break;
            case l.BotTagTypes.STAFF_ONLY_DM:
                g = c.default.Messages.STAFF_BADGE_TOOLTIP;
                break;
            case l.BotTagTypes.AI:
                y = !0, A = c.default.Messages.AI_GENERATED_TOOLTIP, g = c.default.Messages.AI_TAG;
                break;
            case l.BotTagTypes.REMIX:
                y = !1, g = c.default.Messages.REMIXING_TAG;
                break;
            case l.BotTagTypes.BOT:
            default:
                g = b ? c.default.Messages.APP_TAG : c.default.Messages.BOT_TAG_BOT
        }
        var N = p === l.BotTagTypes.ORIGINAL_POSTER,
            R = p === l.BotTagTypes.REMIX,
            C = null;
        y && (C = r.createElement(a.Tooltip, {
            text: A,
            align: "center",
            position: "top"
        }, function(e) {
            return r.createElement(s.default, E(_({}, e), {
                className: f.botTagVerified
            }))
        })), t = p === l.BotTagTypes.AI ? f.botTagAI : void 0 !== n && n ? f.botTagInvert : f.botTagRegular;
        var P = function(e) {
            var n;
            return r.createElement("span", E(_({}, e), {
                className: i()(m, t, T ? f.rem : f.px, (d(n = {}, f.botTagOP, N), d(n, f.botTagRemix, R), n))
            }), h ? null : C, v, r.createElement("span", {
                className: f.botText
            }, g))
        };
        switch (p) {
            case l.BotTagTypes.REMIX:
                return r.createElement(a.Tooltip, {
                    text: c.default.Messages.REMIXING_DOWNLOAD_APP,
                    position: "top"
                }, function(e) {
                    return P(e)
                });
            case l.BotTagTypes.ORIGINAL_POSTER:
                return r.createElement(a.Tooltip, {
                    text: c.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                    position: "top"
                }, function(e) {
                    return P(e)
                });
            default:
                return P()
        }
    };
    p.Types = l.BotTagTypes, t.default = p
}