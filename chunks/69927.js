function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setPageTitleNotificationCount: function() {
            return d
        },
        flashPageTitle: function() {
            return c
        },
        usePageTitle: function() {
            return _
        },
        AppPageTitle: function() {
            return E
        },
        usePageTitleManager: function() {
            return h
        }
    }), n("222007");
    var i = n("884691"),
        s = n("308503"),
        r = n("773336");
    let a = {
            base: r.isPlatformEmbedded ? void 0 : "Discord"
        },
        o = 0,
        l = {
            count: 3,
            onlyWhenBlurred: !1,
            interval: 1e3
        },
        u = (0, s.default)(() => ({
            titles: [a],
            notificationCount: void 0,
            flashQueue: []
        }));

    function d(e) {
        u.setState({
            notificationCount: e
        })
    }

    function c(e) {
        let t = {
            ...l,
            ...e,
            id: o++
        };
        return t.count = Math.max(t.count, t.messages.length), u.setState(e => ({
            flashQueue: [...e.flashQueue, t]
        })), () => f(t.id)
    }

    function f(e) {
        u.setState(t => ({
            flashQueue: t.flashQueue.filter(t => t.id !== e)
        }))
    }

    function _(e) {
        i.useEffect(() => {
            var t;
            return t = e, u.setState(e => ({
                titles: [t, ...e.titles]
            })), () => {
                u.setState(e => ({
                    titles: e.titles.filter(e => e !== t)
                }))
            }
        }, [...Object.values(e)])
    }

    function E(e) {
        return _(e), null
    }

    function h() {
        let {
            skipsSettingDefaultPageTitle: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i.useEffect(() => {
            function e() {
                u.setState({
                    flashQueue: []
                })
            }
            return document.addEventListener("focusin", e, {
                capture: !0
            }), () => document.removeEventListener("focusin", e, {
                capture: !0
            })
        }, []);
        let t = function() {
            let [e, t] = u(e => {
                let {
                    flashQueue: t
                } = e, n = (function(e) {
                    let t, n, i;
                    for (let s of e.titles) {
                        if (null != t && null != n) break;
                        t = null != t ? t : s.base, n = null != n ? n : s.location, i = null != i ? i : s.subsection
                    }
                    return [t, i, n]
                })(e).filter(e => null != e).join(" | "), i = function(e) {
                    let {
                        notificationCount: t
                    } = e;
                    return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                }(e);
                return ["".concat(i).concat(n), t[0]]
            }), [n, s] = i.useState(!1), r = i.useRef(0), a = null == t ? void 0 : t.messages[r.current % t.messages.length];
            return i.useEffect(() => {
                if (null == t) {
                    r.current = 0, s(!1);
                    return
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    f(t.id), s(!1);
                    return
                }
                let e = setInterval(() => {
                    if (r.current >= t.count) {
                        f(t.id), s(!1);
                        return
                    }
                    s(e => !e || (r.current += 1, !1))
                }, t.interval);
                return () => clearInterval(e)
            }, [t]), n ? a : e
        }();
        i.useEffect(() => {
            let n = t === a.base;
            (!e || !n) && (document.title = t)
        }, [e, t])
    }
}