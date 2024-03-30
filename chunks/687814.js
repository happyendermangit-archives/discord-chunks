function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("762624"),
        i = n("639340"),
        a = n("813970"),
        u = n("209610");

    function s(e) {
        var t, n, s, l = e.navId,
            c = e.scrollerRef,
            f = e.state,
            d = e.onFocus,
            _ = r.useContext(a.default).renderWindow,
            E = function(e, t) {
                var n;
                if (null === (n = c.current) || void 0 === n || n.scrollToTop(), e && null != f.query) {
                    var r = f.query.typeInfo.focusMode,
                        o = !(r === u.FocusMode.MANUAL || r === u.FocusMode.AUTO_WHEN_FILTERED && 0 === f.query.queryText.length);
                    f.isVisible && (!0 !== t || !1 !== o) ? (m.setFocus("0"), null == d || d(0)) : (m.setFocus(null), null == d || d(null))
                }
            },
            p = function(e) {
                var t;
                if (null === (t = c.current) || void 0 === t || t.scrollToBottom(), e && null != f.query && f.query.resultCount > 0) {
                    var n = f.query.resultCount - 1;
                    m.setFocus(n.toString()), null == d || d(n)
                }
            },
            m = (0, o.default)({
                id: l,
                isEnabled: f.isVisible,
                orientation: i.Orientations.VERTICAL,
                useVirtualFocus: !0,
                setFocus: function(e, t) {
                    var n, r = _.document.querySelector(e);
                    null != r && (null === (n = c.current) || void 0 === n || n.scrollIntoViewNode({
                        node: r
                    })), null == d || d(+t)
                },
                onNavigateNextAtEnd: function() {
                    return E(!0)
                },
                onNavigatePreviousAtStart: function() {
                    return p(!0)
                },
                scrollToStart: function() {
                    return E(!1, !1), Promise.resolve()
                },
                scrollToEnd: function() {
                    return p(!1), Promise.resolve()
                }
            });
        return r.useEffect(function() {
            E(!0, !0)
        }, [null === (t = f.query) || void 0 === t ? void 0 : t.type, null === (n = f.query) || void 0 === n ? void 0 : n.queryText, null === (s = f.query) || void 0 === s ? void 0 : s.isLoading, f.isVisible]), m
    }
}