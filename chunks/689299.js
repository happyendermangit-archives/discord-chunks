function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("884691"),
        i = n("974667"),
        a = n("942367"),
        s = n("244201"),
        r = n("851745");

    function o(e) {
        var t, n, o;
        let {
            navId: u,
            scrollerRef: d,
            state: c,
            onFocus: f
        } = e, {
            renderWindow: m
        } = l.useContext(s.default), p = (e, t) => {
            var n;
            if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
                let e = c.query.typeInfo.focusMode,
                    n = !(e === r.FocusMode.MANUAL || e === r.FocusMode.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
                c.isVisible && (!0 !== t || !1 !== n) ? (E.setFocus("0"), null == f || f(0)) : (E.setFocus(null), null == f || f(null))
            }
        }, h = e => {
            var t;
            if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
                let e = c.query.resultCount - 1;
                E.setFocus(e.toString()), null == f || f(e)
            }
        }, E = (0, i.default)({
            id: u,
            isEnabled: c.isVisible,
            orientation: a.Orientations.VERTICAL,
            useVirtualFocus: !0,
            setFocus: (e, t) => {
                let n = m.document.querySelector(e);
                if (null != n) {
                    var l;
                    null === (l = d.current) || void 0 === l || l.scrollIntoViewNode({
                        node: n
                    })
                }
                null == f || f(+t)
            },
            onNavigateNextAtEnd: () => p(!0),
            onNavigatePreviousAtStart: () => h(!0),
            scrollToStart: () => (p(!1, !1), Promise.resolve()),
            scrollToEnd: () => (h(!1), Promise.resolve())
        });
        return l.useEffect(() => {
            p(!0, !0)
        }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (o = c.query) || void 0 === o ? void 0 : o.isLoading, c.isVisible]), E
    }
}