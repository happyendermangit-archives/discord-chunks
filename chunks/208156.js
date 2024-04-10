function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbedIFrameWithLoadingBackground: function() {
            return m
        }
    }), n("47120"), n("610138"), n("216116"), n("78328"), n("815648");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("482033"),
        l = n("153832"),
        u = n("442837"),
        d = n("928518"),
        _ = n("631467"),
        c = n("210887"),
        E = n("585483"),
        I = n("53289"),
        T = n("953101"),
        f = n("701488"),
        S = n("981631"),
        A = n("735809");

    function h(e) {
        let {
            url: t,
            className: n,
            style: s,
            onLoad: a,
            shouldRefocus: A,
            queryParams: h,
            allowPopups: m = !1,
            referrerPolicy: N = "origin"
        } = e, O = (0, u.useStateFromStores)([d.default], () => d.default.getWindow(S.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), p = (0, o.useMemoOne)(() => (0, l.v4)(), [t]), R = r.useRef(null), C = (0, I.default)(R, A, null == O ? window : O), g = {
            ...h,
            frame_id: p,
            platform: f.ActivityPlatform.DESKTOP
        }, [L, D] = r.useState(!1), v = c.default.theme, M = {
            ...s
        };
        return v === S.ThemeTypes.LIGHT ? M.colorScheme = "light" : M.colorScheme = "dark", r.useEffect(() => (E.ComponentDispatch.dispatch(S.ComponentActions.IFRAME_MOUNT, {
            id: p
        }), () => {
            E.ComponentDispatch.dispatch(S.ComponentActions.IFRAME_UNMOUNT, {
                id: p
            })
        }), [p]), E.ComponentDispatch.subscribe(S.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
            let {
                resizing: t
            } = e;
            D(t)
        }), L && (M.pointerEvents = "none"), null != t ? (0, i.jsx)("iframe", {
            style: M,
            allow: "autoplay; encrypted-media",
            referrerPolicy: N,
            onLoad: function(e) {
                var n;
                null == a || a(e.target), R.current = e.target, C(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([_.default.HELLO, g], null != t ? t : "")
            },
            sandbox: (0, T.default)({
                allowPopups: m
            }),
            className: n,
            src: "".concat(t, "?").concat(new URLSearchParams(g))
        }) : null
    }

    function m(e) {
        let {
            onLoad: t
        } = e, [n, s] = r.useState(!1), o = r.useCallback(e => {
            s(!0), null == t || t(e)
        }, [t]);
        return (0, i.jsxs)("div", {
            className: A.fillParent,
            children: [!n && (0, i.jsx)("div", {
                className: a()(A.fillParent, A.iframePlaceholder)
            }), (0, i.jsx)("div", {
                className: a()(A.fillParent, n ? void 0 : A.hiddenIframeContainer),
                children: (0, i.jsx)(h, {
                    ...e,
                    onLoad: o
                })
            })]
        })
    }
}