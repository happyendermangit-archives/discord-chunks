function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppPageTitle: function() {
            return E
        },
        flashPageTitle: function() {
            return d
        },
        setPageTitleNotificationCount: function() {
            return u
        },
        usePageTitle: function() {
            return c
        },
        usePageTitleManager: function() {
            return I
        }
    }), n("47120");
    var i = n("470079"),
        r = n("652874");
    let s = {
            base: n("358085").isPlatformEmbedded ? void 0 : "Discord"
        },
        a = 0,
        o = {
            count: 3,
            onlyWhenBlurred: !1,
            interval: 1e3
        },
        l = (0, r.default)(() => ({
            titles: [s],
            notificationCount: void 0,
            flashQueue: []
        }));

    function u(e) {
        l.setState({
            notificationCount: e
        })
    }

    function d(e) {
        let t = {
            ...o,
            ...e,
            id: a++
        };
        return t.count = Math.max(t.count, t.messages.length), l.setState(e => ({
            flashQueue: [...e.flashQueue, t]
        })), () => _(t.id)
    }

    function _(e) {
        l.setState(t => ({
            flashQueue: t.flashQueue.filter(t => t.id !== e)
        }))
    }

    function c(e) {
        i.useEffect(() => {
            var t;
            return t = e, l.setState(e => ({
                titles: [t, ...e.titles]
            })), () => {
                l.setState(e => ({
                    titles: e.titles.filter(e => e !== t)
                }))
            }
        }, [...Object.values(e)])
    }

    function E(e) {
        return c(e), null
    }

    function I() {
        let {
            skipsSettingDefaultPageTitle: e
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i.useEffect(() => {
            function e() {
                l.setState({
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
            let [e, t] = l(e => {
                let {
                    flashQueue: t
                } = e, n = (function(e) {
                    let t, n, i;
                    for (let r of e.titles) {
                        if (null != t && null != n) break;
                        t = null != t ? t : r.base, n = null != n ? n : r.location, i = null != i ? i : r.subsection
                    }
                    return [t, i, n]
                })(e).filter(e => null != e).join(" | "), i = function(e) {
                    let {
                        notificationCount: t
                    } = e;
                    return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                }(e);
                return ["".concat(i).concat(n), t[0]]
            }), [n, r] = i.useState(!1), s = i.useRef(0), a = null == t ? void 0 : t.messages[s.current % t.messages.length];
            return i.useEffect(() => {
                if (null == t) {
                    s.current = 0, r(!1);
                    return
                }
                if (document.hasFocus() && t.onlyWhenBlurred) {
                    _(t.id), r(!1);
                    return
                }
                let e = setInterval(() => {
                    if (s.current >= t.count) {
                        _(t.id), r(!1);
                        return
                    }
                    r(e => !e || (s.current += 1, !1))
                }, t.interval);
                return () => clearInterval(e)
            }, [t]), n ? a : e
        }();
        i.useEffect(() => {
            let n = t === s.base;
            (!e || !n) && (document.title = t)
        }, [e, t])
    }
}