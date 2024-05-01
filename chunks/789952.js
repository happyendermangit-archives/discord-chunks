function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasDomParent: function() {
            return s
        },
        normalizeDOMPoint: function() {
            return a
        }
    }), n("411104"), n("47120");
    var i = n("207470");
    let r = !1;
    {
        i.ReactEditor.toSlateRange = (e, t, n) => {
            let r, s, a, o, l, {
                exactMatch: u,
                suppressThrow: _
            } = n;
            if (function(e) {
                    let t = e && e.anchorNode && d(e.anchorNode);
                    return null != t && e instanceof t.Selection
                }(t) ? (r = t.anchorNode, s = t.anchorOffset, a = t.focusNode, o = t.focusOffset, l = t.isCollapsed) : (r = t.startContainer, s = t.startOffset, a = t.endContainer, o = t.endOffset, l = t.collapsed), null == r || null == a || null == s || null == o) {
                if (_) return null;
                throw Error("Cannot resolve a Slate range from DOM range")
            }
            let c = i.ReactEditor.toSlatePoint(e, [r, s], {
                    exactMatch: u,
                    suppressThrow: _
                }),
                E = l ? c : i.ReactEditor.toSlatePoint(e, [a, o], {
                    exactMatch: u,
                    suppressThrow: _
                });
            return null != c && null != E ? {
                anchor: c,
                focus: E
            } : null
        };
        let e = i.ReactEditor.toSlatePoint;
        i.ReactEditor.toSlatePoint = (t, n, i) => {
            let {
                exactMatch: r,
                suppressThrow: s,
                direction: o = "forward"
            } = i;
            !r && (n = a(n, o));
            try {
                return e(t, n, {
                    exactMatch: !0,
                    suppressThrow: s
                })
            } catch (e) {
                if (s) return null;
                throw e
            }
        }, r = !0
    }

    function s(e, t) {
        if (null == t) return !1;
        for (; null != e;) {
            if (e === t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function a(e, t) {
        let n, [i, r] = e;
        if (!l(i) || 0 === i.childNodes.length) return e;
        for ("forward" === t && r === i.childNodes.length && (t = "backward"), "backward" === t && r--, [i, n] = o(i, r, t), "forward" === t && n < r ? t = "backward" : "backward" === t && n > r && (t = "forward"), r = n; l(i) && i.childNodes.length > 0;) {
            let e = "backward" === t ? i.childNodes.length - 1 : 0;
            i = o(i, e, t)[0]
        }
        let s = "backward" === t && null != i.textContent ? i.textContent.length : 0;
        return [i, s]
    }

    function o(e, t, n) {
        let {
            childNodes: i
        } = e, r = i[t], s = t, a = !1, o = !1;
        for (;
            (function(e) {
                return u(e) && 8 === e.nodeType
            }(r) || l(r) && 0 === r.childNodes.length || l(r) && "false" === r.getAttribute("contenteditable")) && (!a || !o);) {
            ;
            if (s >= i.length) {
                a = !0, s = t - 1, n = "backward";
                continue
            }
            if (s < 0) {
                o = !0, s = t + 1, n = "forward";
                continue
            }
            r = i[s], t = s, s += "forward" === n ? 1 : -1
        }
        return [r, t]
    }

    function l(e) {
        return u(e) && 1 === e.nodeType
    }

    function u(e) {
        let t = d(e);
        return null != t && e instanceof t.Node
    }

    function d(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || null
    }
}