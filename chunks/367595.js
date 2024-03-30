function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2AuthorizedPage: function() {
            return N
        },
        OAuth2AuthorizedSuccess: function() {
            return A
        },
        OAuth2Error: function() {
            return b
        },
        OAuth2ErrorPage: function() {
            return R
        },
        OAuth2Success: function() {
            return g
        },
        default: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("593473"),
        u = n("613828"),
        s = n("729594"),
        l = n("147391"),
        c = n("680799"),
        f = n("135983"),
        d = n("784184"),
        _ = n("738700"),
        E = n("163291"),
        p = n("909080"),
        m = n("870331"),
        y = n("96176"),
        I = n("281767"),
        h = n("941504"),
        O = n("771160");

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function S(e, t) {
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

    function v(e) {
        var t = e.message,
            n = e.footer,
            o = e.headerClassName,
            a = e.showsCloseWindowText,
            u = e.spinner,
            s = e.onClose;
        return (0, _.usePageTitle)({
            location: h.default.Messages.OAUTH2_TITLE
        }), r.createElement(r.Fragment, null, null != s ? r.createElement(l.ModalCloseButton, {
            onClick: s,
            className: O.closeButton
        }) : null, r.createElement("div", {
            className: O.wrapper
        }, u ? r.createElement(c.Spinner, null) : null, r.createElement("div", {
            className: i()(O.header, o)
        }), r.createElement(f.Text, {
            variant: "text-md/normal",
            className: O.text
        }, t), null != n ? n : null, a ? r.createElement(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: O.cta
        }, h.default.Messages.OAUTH2_MESSAGE_CTA) : null))
    }

    function g(e) {
        return r.createElement(v, S(T({}, e), {
            headerClassName: O.headerSuccess
        }))
    }

    function A(e) {
        var t = e.guild,
            n = e.application,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["guild", "application"]),
            i = o.onClose,
            a = h.default.Messages.AUTHORIZED_SUCCESS,
            u = r.useCallback(function() {
                (null == t ? void 0 : t.id) != null && ((0, p.transitionToGuild)(null == t ? void 0 : t.id), null == i || i(), m.default.track(I.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                    application_id: null == n ? void 0 : n.id,
                    guild_id: null == t ? void 0 : t.id
                }))
            }, [i, null == n ? void 0 : n.id, null == t ? void 0 : t.id]),
            s = r.useCallback(function() {
                null == i || i(), m.default.track(I.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                    application_id: null == n ? void 0 : n.id
                })
            }, [i, null == n ? void 0 : n.id]),
            l = r.useMemo(function() {
                if (null != n) return null != t ? h.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                    installedApplicationName: null == n ? void 0 : n.name,
                    guildName: null == t ? void 0 : t.name
                }) : h.default.Messages.AUTHORIZED_APP.format({
                    installedApplicationName: null == n ? void 0 : n.name
                });
                return h.default.Messages.AUTHORIZED_GENERIC
            }, [n, t]),
            c = r.createElement(r.Fragment, null, r.createElement(f.Text, {
                variant: "text-sm/normal",
                className: O.authorizedSuccessSubtext
            }, l), (null != t || null != i) && r.createElement("div", {
                className: O.buttonsContainer
            }, null != t && r.createElement(d.Button, {
                fullWidth: !0,
                color: d.Button.Colors.BRAND,
                onClick: u,
                className: O.button
            }, (null == t ? void 0 : t.name.length) > 30 ? h.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : h.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                guildName: null == t ? void 0 : t.name
            })), null != i && r.createElement(d.Button, {
                fullWidth: !0,
                color: d.Button.Colors.PRIMARY,
                onClick: s,
                className: O.button
            }, h.default.Messages.CLOSE)));
        return r.useEffect(function() {
            m.default.track(I.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [null == n ? void 0 : n.id]), r.createElement("div", {
            className: O.authorizedSuccessWrapper
        }, r.createElement(g, T({
            message: a,
            footer: c
        }, o)))
    }

    function b(e) {
        return r.createElement(v, S(T({}, e), {
            headerClassName: O.headerFailure
        }))
    }

    function N() {
        var e, t, n = (0, u.useLocation)();
        return r.createElement(y.OAuth2Page, null, r.createElement(A, {
            guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
            application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
            showsCloseWindowText: !0
        }))
    }

    function R(e) {
        var t, n, o = e.location;
        r.useEffect(function() {
            if (null != o) {
                var e = null != document.referrer && "" !== document.referrer ? s.parse(document.referrer) : null;
                (null == e || e.host !== window.location.host || e.pathname !== I.Routes.OAUTH2_AUTHORIZE) && (0, E.transitionTo)(I.Routes.INDEX)
            }
        }, [o]);
        var i = null != o ? (0, a.parse)(o.search) : {},
            u = null !== (n = null !== (t = i.error_description) && void 0 !== t ? t : i.error) && void 0 !== n ? n : h.default.Messages.OAUTH2_UNKNOWN_ERROR;
        return r.createElement(y.OAuth2Page, null, r.createElement(b, {
            message: u,
            showsCloseWindowText: !0
        }))
    }
}