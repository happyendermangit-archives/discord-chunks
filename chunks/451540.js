function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return _
        }
    }), r("222007"), r("424973");
    var n = r("37983"),
        l = r("884691"),
        i = r("414456"),
        a = r.n(i),
        s = r("627445"),
        u = r.n(s),
        d = r("77078"),
        o = r("68238"),
        c = r("83900"),
        f = r("626820"),
        v = r("306160"),
        g = r("701909"),
        h = r("773336"),
        E = r("161449"),
        C = r("49111"),
        I = r("782340"),
        p = r("602302");

    function R(e) {
        let {
            url: t
        } = e, [r, i] = l.useState(!1), s = l.useRef(void 0), u = l.useCallback(() => {
            !r && ((0, v.copy)(t) && i(!0), s.current = setTimeout(() => i(!1), 2e3))
        }, [t, r]);
        return l.useEffect(() => () => clearTimeout(s.current), []), v.SUPPORTS_COPY ? (0, n.jsxs)(d.Clickable, {
            className: a(p.copyLink, r ? p.copied : null),
            onClick: u,
            children: [(0, n.jsx)(c.default, {
                className: p.copyLinkIcon
            }), r ? I.default.Messages.BUILD_OVERRIDE_LINK_COPIED : I.default.Messages.BUILD_OVERRIDE_LINK_COPY]
        }) : null
    }

    function m(e) {
        let {
            subHead: t,
            buildDetails: r,
            buttonColor: i,
            buttonClick: s,
            buttonText: u,
            disabled: o = !1,
            submitting: c = !1
        } = e;
        return (0, n.jsxs)(l.Fragment, {
            children: [(0, n.jsxs)("div", {
                className: p.buildInfo,
                children: [(0, n.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    className: p.subHead,
                    children: t
                }), (0, n.jsx)("div", {
                    className: p.buildDetails,
                    children: r
                })]
            }), (0, n.jsx)(d.Button, {
                submitting: c,
                color: i,
                onClick: s,
                className: a(p.button, o ? p.disabledButtonOverride : null),
                size: p.buttonSize,
                disabled: o,
                children: u
            })]
        })
    }
    var _ = e => {
        var t, r, i;
        let {
            loading: s = !1,
            currentOverrides: c,
            linkMeta: v,
            url: _,
            applyBuildOverride: L,
            clearBuildOverride: O
        } = e, [B, b] = l.useState(!1), D = l.useCallback(() => {
            !B && (b(!0), L().catch(() => b(!1)))
        }, [L, B]), x = l.useCallback(() => {
            !B && (b(!0), O().catch(() => b(!1)))
        }, [O, B]);
        return (0, n.jsxs)("div", {
            className: p.wrapper,
            children: [(t = v, r = _, i = s, (0, n.jsxs)(d.Text, {
                variant: "text-xs/normal",
                className: p.titleRegion,
                children: [(0, n.jsx)("strong", {
                    className: p.title,
                    children: null != t && null != t.releaseChannel ? I.default.Messages.BUILD_OVERRIDE_FOR.format({
                        releaseChannel: t.releaseChannel
                    }) : I.default.Messages.BUILD_OVERRIDE
                }), (0, n.jsx)(d.Anchor, {
                    className: p.infoLink,
                    href: g.default.getArticleURL(C.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
                    target: "_blank",
                    children: (0, n.jsx)(o.default, {
                        className: p.infoIcon
                    })
                }), i ? null : (0, n.jsx)(R, {
                    url: r
                })]
            })), (0, n.jsxs)("div", {
                className: p.content,
                children: [(0, n.jsx)(f.default, {
                    className: p.icon
                }), s ? (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: p.buildInfo,
                        children: [(0, n.jsx)("div", {
                            className: a(p.barLoader, p.barTitle)
                        }), (0, n.jsx)("div", {
                            className: p.barLoader
                        })]
                    }), (0, n.jsx)("div", {
                        className: p.buttonLoader
                    })]
                }) : function(e) {
                    var t, r;
                    let n, l, i, {
                            currentOverrides: a,
                            linkMeta: s,
                            applyBuildOverride: o,
                            clearBuildOverride: c,
                            submitting: f
                        } = e,
                        v = ["discord_web"];
                    !h.isPlatformEmbedded && v.push("discord_marketing", "discord_developers");
                    let g = (0, E.default)(s, v);
                    if (!g.valid) return function(e) {
                        return m({
                            subHead: I.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                            buttonColor: d.Button.Colors.TRANSPARENT,
                            buttonText: "Invalid",
                            buildDetails: e,
                            disabled: !0
                        })
                    }(g.reason);
                    u(null != s, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
                    let {
                        discord_web: C
                    } = s.targetBuildOverride;
                    if (u(null != C, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = C, null == (r = a) || null == r.discord_web ? 1 : t.id !== r.discord_web.id || t.type !== r.discord_web.type) l = I.default.Messages.BUILD_OVERRIDE_APPLY, n = o, i = d.Button.Colors.GREEN;
                    else l = I.default.Messages.BUILD_OVERRIDE_CLEAR, n = c, i = d.Button.Colors.RED;
                    return m({
                        subHead: I.default.Messages.BUILD_OVERRIDE_ID,
                        buildDetails: C.id,
                        buttonClick: n,
                        buttonText: l,
                        buttonColor: i,
                        submitting: f
                    })
                }({
                    currentOverrides: c,
                    linkMeta: v,
                    applyBuildOverride: D,
                    clearBuildOverride: x,
                    submitting: B
                })]
            })]
        })
    }
}