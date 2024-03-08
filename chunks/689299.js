function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("884691"),
        l = n("974667"),
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
            renderWindow: p
        } = i.useContext(s.default), m = (e, t) => {
            var n;
            if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
                let e = c.query.typeInfo.focusMode,
                    n = !(e === r.FocusMode.MANUAL || e === r.FocusMode.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
                c.isVisible && (!0 !== t || !1 !== n) ? (x.setFocus("0"), null == f || f(0)) : (x.setFocus(null), null == f || f(null))
            }
        }, h = e => {
            var t;
            if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
                let e = c.query.resultCount - 1;
                x.setFocus(e.toString()), null == f || f(e)
            }
        }, x = (0, l.default)({
            id: u,
            isEnabled: c.isVisible,
            orientation: a.Orientations.VERTICAL,
            useVirtualFocus: !0,
            setFocus: (e, t) => {
                let n = p.document.querySelector(e);
                if (null != n) {
                    var i;
                    null === (i = d.current) || void 0 === i || i.scrollIntoViewNode({
                        node: n
                    })
                }
                null == f || f(+t)
            },
            onNavigateNextAtEnd: () => m(!0),
            onNavigatePreviousAtStart: () => h(!0),
            scrollToStart: () => (m(!1, !1), Promise.resolve()),
            scrollToEnd: () => (h(!1), Promise.resolve())
        });
        return i.useEffect(() => {
            m(!0, !0)
        }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (o = c.query) || void 0 === o ? void 0 : o.isLoading, c.isVisible]), x
    }
}