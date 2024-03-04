function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        },
        OAuth2Success: function() {
            return A
        },
        OAuth2AuthorizedSuccess: function() {
            return y
        },
        OAuth2Error: function() {
            return N
        },
        OAuth2AuthorizedPage: function() {
            return R
        },
        OAuth2ErrorPage: function() {
            return O
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("730290"),
        l = n("90915"),
        u = n("746379"),
        d = n.n(u),
        c = n("516256"),
        f = n("242670"),
        _ = n("577776"),
        h = n("77078"),
        E = n("69927"),
        g = n("393414"),
        m = n("239380"),
        p = n("599110"),
        S = n("267570"),
        v = n("49111"),
        T = n("782340"),
        I = n("977396");

    function C(e) {
        let {
            message: t,
            footer: n,
            headerClassName: s,
            showsCloseWindowText: r,
            spinner: o,
            onClose: l
        } = e;
        return (0, E.usePageTitle)({
            location: T.default.Messages.OAUTH2_TITLE
        }), (0, i.jsxs)(i.Fragment, {
            children: [null != l ? (0, i.jsx)(c.ModalCloseButton, {
                onClick: l,
                className: I.closeButton
            }) : null, (0, i.jsxs)("div", {
                className: I.wrapper,
                children: [o ? (0, i.jsx)(f.Spinner, {}) : null, (0, i.jsx)("div", {
                    className: a(I.header, s)
                }), (0, i.jsx)(_.Text, {
                    variant: "text-md/normal",
                    className: I.text,
                    children: t
                }), null != n ? n : null, r ? (0, i.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: I.cta,
                    children: T.default.Messages.OAUTH2_MESSAGE_CTA
                }) : null]
            })]
        })
    }

    function A(e) {
        return (0, i.jsx)(C, {
            ...e,
            headerClassName: I.headerSuccess
        })
    }

    function y(e) {
        let {
            guild: t,
            application: n,
            ...r
        } = e, {
            onClose: a
        } = r, o = T.default.Messages.AUTHORIZED_SUCCESS, l = s.useCallback(() => {
            (null == t ? void 0 : t.id) != null && ((0, m.transitionToGuild)(null == t ? void 0 : t.id), null == a || a(), p.default.track(v.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
                application_id: null == n ? void 0 : n.id,
                guild_id: null == t ? void 0 : t.id
            }))
        }, [a, null == n ? void 0 : n.id, null == t ? void 0 : t.id]), u = s.useCallback(() => {
            null == a || a(), p.default.track(v.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [a, null == n ? void 0 : n.id]), d = s.useMemo(() => {
            if (null != n) return null != t ? T.default.Messages.AUTHORIZED_APP_TO_SERVER.format({
                installedApplicationName: null == n ? void 0 : n.name,
                guildName: null == t ? void 0 : t.name
            }) : T.default.Messages.AUTHORIZED_APP.format({
                installedApplicationName: null == n ? void 0 : n.name
            });
            return T.default.Messages.AUTHORIZED_GENERIC
        }, [n, t]), c = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(_.Text, {
                variant: "text-sm/normal",
                className: I.authorizedSuccessSubtext,
                children: d
            }), (null != t || null != a) && (0, i.jsxs)("div", {
                className: I.buttonsContainer,
                children: [null != t && (0, i.jsx)(h.Button, {
                    fullWidth: !0,
                    color: h.Button.Colors.BRAND,
                    onClick: l,
                    className: I.button,
                    children: (null == t ? void 0 : t.name.length) > 30 ? T.default.Messages.OAUTH2_GO_TO_SERVER_DEFAULT_CTA : T.default.Messages.OAUTH2_GO_TO_SERVER_NAME_CTA.format({
                        guildName: null == t ? void 0 : t.name
                    })
                }), null != a && (0, i.jsx)(h.Button, {
                    fullWidth: !0,
                    color: h.Button.Colors.PRIMARY,
                    onClick: u,
                    className: I.button,
                    children: T.default.Messages.CLOSE
                })]
            })]
        });
        return s.useEffect(() => {
            p.default.track(v.AnalyticEvents.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
                application_id: null == n ? void 0 : n.id
            })
        }, [null == n ? void 0 : n.id]), (0, i.jsx)("div", {
            className: I.authorizedSuccessWrapper,
            children: (0, i.jsx)(A, {
                message: o,
                footer: c,
                ...r
            })
        })
    }

    function N(e) {
        return (0, i.jsx)(C, {
            ...e,
            headerClassName: I.headerFailure
        })
    }

    function R() {
        var e, t;
        let n = (0, l.useLocation)();
        return (0, i.jsx)(S.OAuth2Page, {
            children: (0, i.jsx)(y, {
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
        s.useEffect(() => {
            if (null == r) return;
            let e = null != document.referrer && "" !== document.referrer ? d.parse(document.referrer) : null;
            (null == e || e.host !== window.location.host || e.pathname !== v.Routes.OAUTH2_AUTHORIZE) && (0, g.transitionTo)(v.Routes.INDEX)
        }, [r]);
        let a = null != r ? (0, o.parse)(r.search) : {},
            l = null !== (n = null !== (t = a.error_description) && void 0 !== t ? t : a.error) && void 0 !== n ? n : T.default.Messages.OAUTH2_UNKNOWN_ERROR;
        return (0, i.jsx)(S.OAuth2Page, {
            children: (0, i.jsx)(N, {
                message: l,
                showsCloseWindowText: !0
            })
        })
    }
}