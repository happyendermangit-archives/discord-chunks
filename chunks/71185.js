function(e, t, n) {
    "use strict";

    function i(e) {
        let {
            getFocusableElements: t,
            getActiveElement: n,
            scrollToStart: i,
            scrollToEnd: s
        } = e;
        async function r(e) {
            let s = (null == e ? void 0 : e.from) || n();
            if (null == s) return null;
            let r = function(e) {
                var n;
                let i = t();
                return null !== (n = i.find(t => !!(e.compareDocumentPosition(t) & (Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY)))) && void 0 !== n ? n : null
            }(s);
            return null == r && (null == e ? void 0 : e.wrap) ? (await (null == i ? void 0 : i()), a()) : r
        }

        function a() {
            var e;
            let n = t();
            return null !== (e = n[0]) && void 0 !== e ? e : null
        }

        function o() {
            var e;
            let n = t();
            return null !== (e = n[n.length - 1]) && void 0 !== e ? e : null
        }
        return {
            getNextFocusableElement: r,
            getPreviousFocusableElement: async function e(e) {
                let i = (null == e ? void 0 : e.from) || n();
                if (null == i) return null;
                let r = function(e) {
                    let n = t();
                    for (let t = n.length - 1; t >= 0; t--) {
                        let i = n[t];
                        if (e.compareDocumentPosition(i) & (Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY)) return i
                    }
                    return null
                }(i);
                return null == r && (null == e ? void 0 : e.wrap) ? (await (null == s ? void 0 : s()), o()) : r
            },
            getFirstFocusableElement: a,
            getLastFocusableElement: o
        }
    }
    n.r(t), n.d(t, {
        createFocusManager: function() {
            return i
        }
    })
}