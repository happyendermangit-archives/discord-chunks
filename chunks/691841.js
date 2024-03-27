function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("924826"),
        s = n("536895"),
        a = n("40851"),
        o = n("590921");

    function l(e) {
        var t, n, l;
        let {
            navId: u,
            scrollerRef: d,
            state: _,
            onFocus: c
        } = e, {
            renderWindow: E
        } = i.useContext(a.default), I = (e, t) => {
            var n;
            if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != _.query) {
                let e = _.query.typeInfo.focusMode,
                    n = !(e === o.FocusMode.MANUAL || e === o.FocusMode.AUTO_WHEN_FILTERED && 0 === _.query.queryText.length);
                _.isVisible && (!0 !== t || !1 !== n) ? (f.setFocus("0"), null == c || c(0)) : (f.setFocus(null), null == c || c(null))
            }
        }, T = e => {
            var t;
            if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != _.query && _.query.resultCount > 0) {
                let e = _.query.resultCount - 1;
                f.setFocus(e.toString()), null == c || c(e)
            }
        }, f = (0, r.default)({
            id: u,
            isEnabled: _.isVisible,
            orientation: s.Orientations.VERTICAL,
            useVirtualFocus: !0,
            setFocus: (e, t) => {
                let n = E.document.querySelector(e);
                if (null != n) {
                    var i;
                    null === (i = d.current) || void 0 === i || i.scrollIntoViewNode({
                        node: n
                    })
                }
                null == c || c(+t)
            },
            onNavigateNextAtEnd: () => I(!0),
            onNavigatePreviousAtStart: () => T(!0),
            scrollToStart: () => (I(!1, !1), Promise.resolve()),
            scrollToEnd: () => (T(!1), Promise.resolve())
        });
        return i.useEffect(() => {
            I(!0, !0)
        }, [null === (t = _.query) || void 0 === t ? void 0 : t.type, null === (n = _.query) || void 0 === n ? void 0 : n.queryText, null === (l = _.query) || void 0 === l ? void 0 : l.isLoading, _.isVisible]), f
    }
}