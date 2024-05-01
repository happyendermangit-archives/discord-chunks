function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useChannelAutocompleteLayerPosition: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("40851"),
        a = n("590921");

    function s(e) {
        let {
            editorHeight: t,
            type: n,
            state: s,
            isInPopoutExperiment: o = !1
        } = e, [l, u] = i.useState(void 0), d = null == s ? void 0 : s.query, _ = null == s ? void 0 : s.isVisible, {
            renderWindow: c
        } = i.useContext(r.default), E = i.useCallback(() => {
            var e, t, i, r;
            if (null != s && (null == d || !_)) {
                u(void 0);
                return
            }
            if ((null == d ? void 0 : d.type) === a.AutocompleteOptionTypes.GIFS || null != n && !o && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
                u(null);
                return
            }
            let l = c.document.getSelection(),
                E = null != l && l.rangeCount > 0 ? l.getRangeAt(0) : null;
            if (null == E) return;
            let I = E.startContainer,
                T = E.startOffset;
            for (; null != I;) {
                if (I.nodeType !== Node.TEXT_NODE || null == I.nodeValue) {
                    u(null);
                    return
                }
                if ((null === (t = I.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                    T = null !== (r = null == (I = I.previousSibling) ? void 0 : null === (i = I.nodeValue) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0;
                    continue
                }
                null != d && (T >= d.queryText.length ? T -= d.queryText.length : T = 0);
                break
            }
            if (null == I) return;
            let f = c.document.createRange();
            f.setStart(I, T), f.setEnd(I, T);
            let S = f.getBoundingClientRect();
            (null == S ? void 0 : S.height) !== 0 && u(null != S ? S : null)
        }, [o, c.document, s, _, d, n]);
        return i.useEffect(() => (c.document.addEventListener("selectionchange", E), () => c.document.removeEventListener("selectionchange", E)), [c.document, E]), i.useEffect(() => {
            E()
        }, [E, t]), l
    }
}