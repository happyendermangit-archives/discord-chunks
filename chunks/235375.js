function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        baseRules: function() {
            return m
        },
        customRules: function() {
            return N
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("302454"),
        l = n.n(o),
        u = n("481060"),
        d = n("37234"),
        _ = n("230711"),
        c = n("454585"),
        E = n("703656"),
        I = n("626135"),
        T = n("981631"),
        f = n("596401");
    let S = l().defaultRules.link,
        h = {
            section: T.AnalyticsSections.SETTINGS_CHANGELOG
        },
        A = e => {
            var t, n;
            let {
                level: i,
                children: a,
                className: o = null,
                styleSheet: l = {}
            } = e, d = (0, u.usePrivateHeadingLevel)(), _ = parseInt(i, 10), c = isNaN(_) ? 1 : _;
            return r.createElement("h".concat(d + c - 1), {
                className: s()(...(t = l, null == (n = o) ? [] : n.split(" ").map(e => t[e])))
            }, a)
        },
        m = c.default.defaultRules,
        N = {
            link: {
                parse(e, t, n) {
                    let i;
                    let r = e[2],
                        a = r.startsWith("https://discordapp.com/nitro") || r.startsWith("https://discord.com/nitro"),
                        s = r.startsWith("https://discordapp.com/hypesquad") || r.startsWith("https://discord.com/hypesquad"),
                        o = r.startsWith("/shop/fullscreen?source=1") || r.startsWith("/activities");
                    return i = a || s ? e => {
                        I.default.track(T.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location: h
                        }), a ? _.default.open(T.UserSettingsSections.PREMIUM) : s && _.default.open(T.UserSettingsSections.HYPESQUAD_ONLINE), n.changeLog.track(T.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            cta_type: "nitro"
                        }), (0, u.closeModal)(f.CHANGELOG_MODAL_KEY), e.preventDefault()
                    } : o ? e => {
                        (0, E.transitionTo)(r), n.changeLog.track(T.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            ...I.default.getCampaignParams(r)
                        }), (0, d.popAllLayers)(), (0, u.closeModal)(f.CHANGELOG_MODAL_KEY), e.preventDefault()
                    } : () => {
                        n && "function" == typeof n.onLinkClick && n.onLinkClick(r), n.changeLog.track(T.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                            ...I.default.getCampaignParams(r)
                        })
                    }, {
                        ...S.parse(e, t, n),
                        callToAction: i
                    }
                },
                react: (e, t, n) => (0, i.jsx)(u.Anchor, {
                    href: l().sanitizeUrl(e.target),
                    title: e.title,
                    onClick: e.callToAction,
                    target: "_blank",
                    className: e.callToAction ? "cta" : void 0,
                    children: t(e.content, n)
                }, n.key)
            },
            lheading: e => ({
                react: (t, n, r) => (0, i.jsx)(A, {
                    level: t.level,
                    className: t.className,
                    styleSheet: e,
                    children: n(t.content, r)
                }, r.key)
            }),
            heading: {
                react: (e, t, n) => (0, i.jsx)(A, {
                    level: e.level,
                    children: t(e.content, n)
                }, n.key)
            },
            image: {
                react(e, t, r) {
                    let a = n("866483")("../../images/change-log/".concat(e.target).replace("../../images/change-log/", "./"));
                    return (0, i.jsx)("img", {
                        alt: e.alt,
                        src: a
                    }, r.key)
                }
            },
            blockQuote: {
                react: m.blockQuote.react
            },
            paragraph: {
                react: (e, t, n) => (0, i.jsx)("p", {
                    children: t(e.content, n)
                }, n.key)
            }
        }
}