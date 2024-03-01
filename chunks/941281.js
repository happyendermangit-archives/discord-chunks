function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        },
        OAuth2Success: function() {
            return S
        },
        OAuth2AuthorizedSuccess: function() {
            return A
        },
        OAuth2Error: function() {
            return D
        },
        OAuth2AuthorizedPage: function() {
            return N
        },
        OAuth2ErrorPage: function() {
            return O
        }
    });
    var s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("730290"),
        d = n("90915"),
        u = n("746379"),
        l = n.n(u),
        f = n("516256"),
        _ = n("242670"),
        c = n("577776"),
        g = n("77078"),
        m = n("69927"),
        h = n("393414"),
        v = n("239380"),
        E = n("599110"),
        p = n("267570"),
        y = n("49111"),
        T = n("782340"),
        C = n("977396");

    function I(e) {
        let {
            message: t,
            footer: n,
            headerClassName: i,
            showsCloseWindowText: r,
            spinner: o,
            onClose: d
        } = e;
        return (0, m.usePageTitle)({
            location: T.default.Messages.OAUTH2_TITLE
        }), (0, s.jsxs)(s.Fragment, {
            children: [null != d ? (0, s.jsx)(f.ModalCloseButton, {
                onClick: d,
                className: C.closeButton
            }) : null, (0, s.jsxs)("div", {
                className: C.wrapper,
                children: [o ? (0, s.jsx)(_.Spinner, {}) : null, (0, s.jsx)("div", {
                    className: a(C.header, i)
                }), (0, s.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: C.text,
                    children: t
                }), null != n ? n : null, r ? (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: C.cta,
                    children: T.default.Messages.OAUTH2_MESSAGE_CTA
                }) : null]
            })]
        })
    }

    function S(e) {
        return (0, s.jsx)(I, {
            ...e,
            headerClassName: C.headerSuccess
        })
    }

    function A(e) {
        let {
            guild: t,
            application: n,
            ...r
        } = e, {
            onClose: a
        } = r, o = T.default.Messages.AUTHORIZED_SUCCESS, d = i.useCallback(() => {
            (null == t ? void 0 : t.id) != null && ((0, v.transitionToGuild)(null == t ? void 0 : t.id), null == a || a(), E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                application_id: null == n ? void 0 : n.id,
                guild_id: null == t ? void 0 : t.id
            }))
        }, [a, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), u = i.useCallback(() => {
            null == a || a(), E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [a, null == n ? void 0 : n.id]), l = i.useMemo(() => {
            if (null != n) return null != t ? T.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                installedApplicationName: null == n ? void 0 : n.name,
                guildName: null == t ? void 0 : t.name
            }) : T.default.Messages.AUTHORIZED_APP.format({
                installedApplicationName: null == n ? void 0 : n.name
            });
            return T.default.Messages.AUTHORIZED_GENERIC
        }, [n, t]), f = (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: C.authorizedSuccessSubtext,
                children: l
            }), (null != t || null != a) && (0, s.jsxs)("div", {
                className: C.buttonsContainer,
                children: [null != t && (0, s.jsx)(g.Button, {
                    fullWidth: !0,
                    color: g.Button.Colors.BRAND,
                    onClick: d,
                    className: C.button,
                    children: (null == t ? void 0 : t.name.length) > 30 ? T.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : T.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                        guildName: null == t ? void 0 : t.name
                    })
                }), null != a && (0, s.jsx)(g.Button, {
                    fullWidth: !0,
                    color: g.Button.Colors.PRIMARY,
                    onClick: u,
                    className: C.button,
                    children: T.default.Messages.CLOSE
                })]
            })]
        });
        return i.useEffect(() => {
            E.default.track(y.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [null == n ? void 0 : n.id]), (0, s.jsx)("div", {
            className: C.authorizedSuccessWrapper,
            children: (0, s.jsx)(S, {
                message: o,
                footer: f,
                ...r
            })
        })
    }

    function D(e) {
        return (0, s.jsx)(I, {
            ...e,
            headerClassName: C.headerFailure
        })
    }

    function N() {
        var e, t;
        let n = (0, d.useLocation)();
        return (0, s.jsx)(p.OAuth2Page, {
            children: (0, s.jsx)(A, {
                guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
                application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
                showsCloseWindowText: !0
            })
        })
    }

    function O(e) {
        var t, n;
        let {
            location: r
        } = e;
        i.useEffect(() => {
            if (null == r) return;
            let e = null != document.referrer && "" !== document.referrer ? l.parse(document.referrer) : null;
            (null == e || e.host !== window.location.host || e.pathname !== y.Routes.OAUTH2_AUTHORIZE) && (0, h.transitionTo)(y.Routes.INDEX)
        }, [r]);
        let a = null != r ? (0, o.parse)(r.search) : {},
            d = null !== (n = null !== (t = a.error_description) && void 0 !== t ? t : a.error) && void 0 !== n ? n : T.default.Messages.OAUTH2_UNKNOWN_ERROR;
        return (0, s.jsx)(p.OAuth2Page, {
            children: (0, s.jsx)(D, {
                message: d,
                showsCloseWindowText: !0
            })
        })
    }
}