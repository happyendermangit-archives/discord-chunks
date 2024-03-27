function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useChannelAutocompleteLayerPosition: function() {
            return s
        }
    }), n("222007");
    var i = n("884691"),
        l = n("244201"),
        a = n("851745");

    function s(e) {
        let {
            editorHeight: t,
            type: n,
            state: s,
            isInPopoutExperiment: r = !1
        } = e, [o, u] = i.useState(void 0), d = null == s ? void 0 : s.query, c = null == s ? void 0 : s.isVisible, {
            renderWindow: f
        } = i.useContext(l.default), m = i.useCallback(() => {
            var e, t, i, l;
            if (null != s && (null == d || !c)) {
                u(void 0);
                return
            }
            if ((null == d ? void 0 : d.type) === a.AutocompleteOptionTypes.GIFS || null != n && !r && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
                u(null);
                return
            }
            let o = f.document.getSelection(),
                m = null != o && o.rangeCount > 0 ? o.getRangeAt(0) : null;
            if (null == m) return;
            let p = m.startContainer,
                h = m.startOffset;
            for (; null != p;) {
                if (p.nodeType !== Node.TEXT_NODE || null == p.nodeValue) {
                    u(null);
                    return
                }
                if ((null === (t = p.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    h = null !== (l = null == (p = p.previousSibling) ? void 0 : null === (i = p.nodeValue) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0;
                    continue
                }
                null != d && (h >= d.queryText.length ? h -= d.queryText.length : h = 0);
                break
            }
            if (null == p) return;
            let x = f.document.createRange();
            x.setStart(p, h), x.setEnd(p, h);
            let E = x.getBoundingClientRect();
            (null == E ? void 0 : E.height) !== 0 && u(null != E ? E : null)
        }, [r, f.document, s, c, d, n]);
        return i.useEffect(() => (f.document.addEventListener("selectionchange", m), () => f.document.removeEventListener("selectionchange", m)), [f.document, m]), i.useEffect(() => {
            m()
        }, [m, t]), o
    }
}