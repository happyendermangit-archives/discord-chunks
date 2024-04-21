function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OAuth2AuthorizedPage: function() {
            return g
        },
        OAuth2AuthorizedSuccess: function() {
            return R
        },
        OAuth2Error: function() {
            return C
        },
        OAuth2ErrorPage: function() {
            return L
        },
        OAuth2Success: function() {
            return O
        },
        default: function() {
            return p
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("593473"),
        l = n("613828"),
        u = n("729594"),
        d = n("466377"),
        _ = n("922770"),
        c = n("993365"),
        E = n("481060"),
        I = n("252618"),
        T = n("703656"),
        f = n("769654"),
        S = n("626135"),
        h = n("787025"),
        A = n("981631"),
        m = n("689938"),
        N = n("771160");

    function p(e) {
        let {
            message: t,
            footer: n,
            headerClassName: r,
            showsCloseWindowText: s,
            spinner: o,
            onClose: l
        } = e;
        return (0, I.usePageTitle)({
            location: m.default.Messages.OAUTH2_TITLE
        }), (0, i.jsxs)(i.Fragment, {
            children: [null != l ? (0, i.jsx)(d.ModalCloseButton, {
                onClick: l,
                className: N.closeButton
            }) : null, (0, i.jsxs)("div", {
                className: N.wrapper,
                children: [o ? (0, i.jsx)(_.Spinner, {}) : null, (0, i.jsx)("div", {
                    className: a()(N.header, r)
                }), (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: N.text,
                    children: t
                }), null != n ? n : null, s ? (0, i.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: N.cta,
                    children: m.default.Messages.OAUTH2_MESSAGE_CTA
                }) : null]
            })]
        })
    }

    function O(e) {
        return (0, i.jsx)(p, {
            ...e,
            headerClassName: N.headerSuccess
        })
    }

    function R(e) {
        let {
            guild: t,
            application: n,
            ...s
        } = e, {
            onClose: a
        } = s, o = m.default.Messages.AUTHORIZED_SUCCESS, l = r.useCallback(() => {
            (null == t ? void 0 : t.id) != null && ((0, f.transitionToGuild)(null == t ? void 0 : t.id), null == a || a(), S.default.track(A.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                application_id: null == n ? void 0 : n.id,
                guild_id: null == t ? void 0 : t.id
            }))
        }, [a, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), u = r.useCallback(() => {
            null == a || a(), S.default.track(A.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [a, null == n ? void 0 : n.id]), d = r.useMemo(() => {
            if (null != n) return null != t ? m.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                installedApplicationName: null == n ? void 0 : n.name,
                guildName: null == t ? void 0 : t.name
            }) : m.default.Messages.AUTHORIZED_APP.format({
                installedApplicationName: null == n ? void 0 : n.name
            });
            return m.default.Messages.AUTHORIZED_GENERIC
        }, [n, t]), _ = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                className: N.authorizedSuccessSubtext,
                children: d
            }), (null != t || null != a) && (0, i.jsxs)("div", {
                className: N.buttonsContainer,
                children: [null != t && (0, i.jsx)(E.Button, {
                    fullWidth: !0,
                    color: E.Button.Colors.BRAND,
                    onClick: l,
                    className: N.button,
                    children: (null == t ? void 0 : t.name.length) > 30 ? m.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : m.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                        guildName: null == t ? void 0 : t.name
                    })
                }), null != a && (0, i.jsx)(E.Button, {
                    fullWidth: !0,
                    color: E.Button.Colors.PRIMARY,
                    onClick: u,
                    className: N.button,
                    children: m.default.Messages.CLOSE
                })]
            })]
        });
        return r.useEffect(() => {
            S.default.track(A.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [null == n ? void 0 : n.id]), (0, i.jsx)("div", {
            className: N.authorizedSuccessWrapper,
            children: (0, i.jsx)(O, {
                message: o,
                footer: _,
                ...s
            })
        })
    }

    function C(e) {
        return (0, i.jsx)(p, {
            ...e,
            headerClassName: N.headerFailure
        })
    }

    function g() {
        var e, t;
        let n = (0, l.useLocation)();
        return (0, i.jsx)(h.OAuth2Page, {
            children: (0, i.jsx)(R, {
                guild: null === (e = n.state) || void 0 === e ? void 0 : e.guild,
                application: null === (t = n.state) || void 0 === t ? void 0 : t.application,
                showsCloseWindowText: !0
            })
        })
    }

    function L(e) {
        var t, n;
        let {
            location: s
        } = e;
        r.useEffect(() => {
            if (null == s) return;
            let e = null != document.referrer && "" !== document.referrer ? u.parse(document.referrer) : null;
            (null == e || e.host !== window.location.host || e.pathname !== A.Routes.OAUTH2_AUTHORIZE) && (0, T.transitionTo)(A.Routes.INDEX)
        }, [s]);
        let a = null != s ? (0, o.parse)(s.search) : {},
            l = null !== (n = null !== (t = a.error_description) && void 0 !== t ? t : a.error) && void 0 !== n ? n : m.default.Messages.OAUTH2_UNKNOWN_ERROR;
        return (0, i.jsx)(h.OAuth2Page, {
            children: (0, i.jsx)(C, {
                message: l,
                showsCloseWindowText: !0
            })
        })
    }
}