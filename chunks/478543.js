function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("481060"),
        d = n("41542"),
        _ = n("757698"),
        c = n("942389"),
        E = n("572004"),
        I = n("63063"),
        T = n("358085"),
        f = n("145022"),
        S = n("981631"),
        h = n("689938"),
        A = n("436391");

    function m(e) {
        let {
            url: t
        } = e, [n, s] = r.useState(!1), o = r.useRef(void 0), l = r.useCallback(() => {
            !n && ((0, E.copy)(t) && s(!0), o.current = setTimeout(() => s(!1), 2e3))
        }, [t, n]);
        return r.useEffect(() => () => clearTimeout(o.current), []), E.SUPPORTS_COPY ? (0, i.jsxs)(u.Clickable, {
            className: a()(A.copyLink, n ? A.copied : null),
            onClick: l,
            children: [(0, i.jsx)(_.default, {
                className: A.copyLinkIcon
            }), n ? h.default.Messages.BUILD_OVERRIDE_LINK_COPIED : h.default.Messages.BUILD_OVERRIDE_LINK_COPY]
        }) : null
    }

    function N(e) {
        let {
            subHead: t,
            buildDetails: n,
            buttonColor: s,
            buttonClick: o,
            buttonText: l,
            disabled: d = !1,
            submitting: _ = !1
        } = e;
        return (0, i.jsxs)(r.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: A.buildInfo,
                children: [(0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    className: A.subHead,
                    children: t
                }), (0, i.jsx)("div", {
                    className: A.buildDetails,
                    children: n
                })]
            }), (0, i.jsx)(u.Button, {
                submitting: _,
                color: s,
                onClick: o,
                className: a()(A.button, d ? A.disabledButtonOverride : null),
                size: A.buttonSize,
                disabled: d,
                children: l
            })]
        })
    }
    t.default = e => {
        var t, n, s;
        let {
            loading: o = !1,
            currentOverrides: _,
            linkMeta: E,
            url: p,
            applyBuildOverride: O,
            clearBuildOverride: R
        } = e, [C, g] = r.useState(!1), L = r.useCallback(() => {
            !C && (g(!0), O().catch(() => g(!1)))
        }, [O, C]), D = r.useCallback(() => {
            !C && (g(!0), R().catch(() => g(!1)))
        }, [R, C]);
        return (0, i.jsxs)("div", {
            className: A.wrapper,
            children: [(t = E, n = p, s = o, (0, i.jsxs)(u.Text, {
                variant: "text-xs/normal",
                className: A.titleRegion,
                children: [(0, i.jsx)("strong", {
                    className: A.title,
                    children: null != t && null != t.releaseChannel ? h.default.Messages.BUILD_OVERRIDE_FOR.format({
                        releaseChannel: t.releaseChannel
                    }) : h.default.Messages.BUILD_OVERRIDE
                }), (0, i.jsx)(u.Anchor, {
                    className: A.infoLink,
                    href: I.default.getArticleURL(S.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
                    target: "_blank",
                    children: (0, i.jsx)(d.default, {
                        className: A.infoIcon
                    })
                }), s ? null : (0, i.jsx)(m, {
                    url: n
                })]
            })), (0, i.jsxs)("div", {
                className: A.content,
                children: [(0, i.jsx)(c.default, {
                    className: A.icon
                }), o ? (0, i.jsxs)(r.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: A.buildInfo,
                        children: [(0, i.jsx)("div", {
                            className: a()(A.barLoader, A.barTitle)
                        }), (0, i.jsx)("div", {
                            className: A.barLoader
                        })]
                    }), (0, i.jsx)("div", {
                        className: A.buttonLoader
                    })]
                }) : function(e) {
                    var t, n;
                    let i, r, s, {
                            currentOverrides: a,
                            linkMeta: o,
                            applyBuildOverride: d,
                            clearBuildOverride: _,
                            submitting: c
                        } = e,
                        E = ["discord_web"];
                    !T.isPlatformEmbedded && E.push("discord_marketing", "discord_developers");
                    let I = (0, f.default)(o, E);
                    if (!I.valid) return function(e) {
                        return N({
                            subHead: h.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                            buttonColor: u.Button.Colors.TRANSPARENT,
                            buttonText: "Invalid",
                            buildDetails: e,
                            disabled: !0
                        })
                    }(I.reason);
                    l()(null != o, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
                    let {
                        discord_web: S
                    } = o.targetBuildOverride;
                    if (l()(null != S, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = S, null == (n = a) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type) r = h.default.Messages.BUILD_OVERRIDE_APPLY, i = d, s = u.Button.Colors.GREEN;
                    else r = h.default.Messages.BUILD_OVERRIDE_CLEAR, i = _, s = u.Button.Colors.RED;
                    return N({
                        subHead: h.default.Messages.BUILD_OVERRIDE_ID,
                        buildDetails: S.id,
                        buttonClick: i,
                        buttonText: r,
                        buttonColor: s,
                        submitting: c
                    })
                }({
                    currentOverrides: _,
                    linkMeta: E,
                    applyBuildOverride: L,
                    clearBuildOverride: D,
                    submitting: C
                })]
            })]
        })
    }
}