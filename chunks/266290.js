function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("784184"),
        l = n("691600"),
        c = n("438398"),
        f = n("620053"),
        d = n("53053"),
        _ = n("481971"),
        E = n("374550"),
        p = n("43215"),
        m = n("281767"),
        y = n("941504"),
        I = n("362568");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(e) {
        var t = e.url,
            n = O(r.useState(!1), 2),
            o = n[0],
            a = n[1],
            u = r.useRef(void 0),
            l = r.useCallback(function() {
                !o && ((0, d.copy)(t) && a(!0), u.current = setTimeout(function() {
                    return a(!1)
                }, 2e3))
            }, [t, o]);
        return r.useEffect(function() {
            return function() {
                return clearTimeout(u.current)
            }
        }, []), d.SUPPORTS_COPY ? r.createElement(s.Clickable, {
            className: i()(I.copyLink, o ? I.copied : null),
            onClick: l
        }, r.createElement(c.default, {
            className: I.copyLinkIcon
        }), o ? y.default.Messages.BUILD_OVERRIDE_LINK_COPIED : y.default.Messages.BUILD_OVERRIDE_LINK_COPY) : null
    }

    function S(e) {
        var t = e.subHead,
            n = e.buildDetails,
            o = e.buttonColor,
            a = e.buttonClick,
            u = e.buttonText,
            l = e.disabled,
            c = void 0 !== l && l,
            f = e.submitting;
        return r.createElement(r.Fragment, null, r.createElement("div", {
            className: I.buildInfo
        }, r.createElement(s.Text, {
            variant: "text-sm/medium",
            className: I.subHead
        }, t), r.createElement("div", {
            className: I.buildDetails
        }, n)), r.createElement(s.Button, {
            submitting: void 0 !== f && f,
            color: o,
            onClick: a,
            className: i()(I.button, c ? I.disabledButtonOverride : null),
            size: I.buttonSize,
            disabled: c
        }, u))
    }
    t.default = function(e) {
        var t, n, o, a = e.loading,
            c = void 0 !== a && a,
            d = e.currentOverrides,
            h = e.linkMeta,
            v = e.url,
            g = e.applyBuildOverride,
            A = e.clearBuildOverride,
            b = O(r.useState(!1), 2),
            N = b[0],
            R = b[1],
            C = r.useCallback(function() {
                !N && (R(!0), g().catch(function() {
                    return R(!1)
                }))
            }, [g, N]),
            P = r.useCallback(function() {
                !N && (R(!0), A().catch(function() {
                    return R(!1)
                }))
            }, [A, N]);
        return r.createElement("div", {
            className: I.wrapper
        }, (t = h, n = v, o = c, r.createElement(s.Text, {
            variant: "text-xs/normal",
            className: I.titleRegion
        }, r.createElement("strong", {
            className: I.title
        }, null != t && null != t.releaseChannel ? y.default.Messages.BUILD_OVERRIDE_FOR.format({
            releaseChannel: t.releaseChannel
        }) : y.default.Messages.BUILD_OVERRIDE), r.createElement(s.Anchor, {
            className: I.infoLink,
            href: _.default.getArticleURL(m.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
            target: "_blank"
        }, r.createElement(l.default, {
            className: I.infoIcon
        })), o ? null : r.createElement(T, {
            url: n
        }))), r.createElement("div", {
            className: I.content
        }, r.createElement(f.default, {
            className: I.icon
        }), c ? r.createElement(r.Fragment, null, r.createElement("div", {
            className: I.buildInfo
        }, r.createElement("div", {
            className: i()(I.barLoader, I.barTitle)
        }), r.createElement("div", {
            className: I.barLoader
        })), r.createElement("div", {
            className: I.buttonLoader
        })) : function(e) {
            var t, n, r, o, i, a = e.currentOverrides,
                l = e.linkMeta,
                c = e.applyBuildOverride,
                f = e.clearBuildOverride,
                d = e.submitting,
                _ = ["discord_web"];
            !E.isPlatformEmbedded && _.push("discord_marketing", "discord_developers");
            var m = (0, p.default)(l, _);
            if (!m.valid) return function(e) {
                return S({
                    subHead: y.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                    buttonColor: s.Button.Colors.TRANSPARENT,
                    buttonText: "Invalid",
                    buildDetails: e,
                    disabled: !0
                })
            }(m.reason);
            u()(null != l, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
            var I = l.targetBuildOverride.discord_web;
            if (u()(null != I, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = I, null == (n = a) || null == n.discord_web ? 1 : t.id !== n.discord_web.id || t.type !== n.discord_web.type) o = y.default.Messages.BUILD_OVERRIDE_APPLY, r = c, i = s.Button.Colors.GREEN;
            else o = y.default.Messages.BUILD_OVERRIDE_CLEAR, r = f, i = s.Button.Colors.RED;
            return S({
                subHead: y.default.Messages.BUILD_OVERRIDE_ID,
                buildDetails: I.id,
                buttonClick: r,
                buttonText: o,
                buttonColor: i,
                submitting: d
            })
        }({
            currentOverrides: d,
            linkMeta: h,
            applyBuildOverride: C,
            clearBuildOverride: P,
            submitting: N
        })))
    }
}