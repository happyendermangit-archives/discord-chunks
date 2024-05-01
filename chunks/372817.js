function(e, t, n) {
    "use strict";

    function i(e) {
        let {
            getFocusableElements: t,
            getActiveElement: n,
            scrollToStart: i,
            scrollToEnd: r
        } = e;
        async function a(e) {
            var r, a;
            let o = (null == e ? void 0 : e.from) || n();
            if (null == o) return null;
            let l = (r = o, null !== (a = t().find(e => !!(r.compareDocumentPosition(e) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) && void 0 !== a ? a : null);
            return null == l && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), s()) : l
        }

        function s() {
            var e;
            return null !== (e = t()[0]) && void 0 !== e ? e : null
        }

        function o() {
            var e;
            let n = t();
            return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null
        }
        return {
            getNextFocusableElement: a,
            getPreviousFocusableElement: async function e(e) {
                let i = (null == e ? void 0 : e.from) || n();
                if (null == i) return null;
                let a = function(e) {
                    let n = t();
                    for (let t = n.length - 1; t >= 0; t--) {
                        let i = n[t];
                        if (e.compareDocumentPosition(i) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return i
                    }
                    return null
                }(i);
                return null == a && (null == e ? void 0 : e.wrap) ? (await (null == r ? void 0 : r()), o()) : a
            },
            getFirstFocusableElement: s,
            getLastFocusableElement: o
        }
    }
    n.r(t), n.d(t, {
        createFocusManager: function() {
            return i
        }
    })
}