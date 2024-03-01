function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasDomParent: function() {
            return a
        },
        normalizeDOMPoint: function() {
            return s
        }
    }), n("70102"), n("222007");
    var l = n("371621");
    let i = !1;
    {
        l.ReactEditor.toSlateRange = (e, t, n) => {
            let i, a, s, r, o, {
                exactMatch: u,
                suppressThrow: c
            } = n;
            if (function(e) {
                    let t = e && e.anchorNode && d(e.anchorNode);
                    return null != t && e instanceof t.Selection
                }(t) ? (i = t.anchorNode, a = t.anchorOffset, s = t.focusNode, r = t.focusOffset, o = t.isCollapsed) : (i = t.startContainer, a = t.startOffset, s = t.endContainer, r = t.endOffset, o = t.collapsed), null == i || null == s || null == a || null == r) {
                if (c) return null;
                throw Error("Cannot resolve a Slate range from DOM range")
            }
            let f = l.ReactEditor.toSlatePoint(e, [i, a], {
                    exactMatch: u,
                    suppressThrow: c
                }),
                m = o ? f : l.ReactEditor.toSlatePoint(e, [s, r], {
                    exactMatch: u,
                    suppressThrow: c
                });
            return null != f && null != m ? {
                anchor: f,
                focus: m
            } : null
        };
        let e = l.ReactEditor.toSlatePoint;
        l.ReactEditor.toSlatePoint = (t, n, l) => {
            let {
                exactMatch: i,
                suppressThrow: a,
                direction: r = "forward"
            } = l;
            !i && (n = s(n, r));
            try {
                return e(t, n, {
                    exactMatch: !0,
                    suppressThrow: a
                })
            } catch (e) {
                if (a) return null;
                throw e
            }
        }, i = !0
    }

    function a(e, t) {
        if (null == t) return !1;
        for (; null != e;) {
            if (e === t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function s(e, t) {
        let n, [l, i] = e;
        if (!o(l) || 0 === l.childNodes.length) return e;
        for ("forward" === t && i === l.childNodes.length && (t = "backward"), "backward" === t && i--, [l, n] = r(l, i, t), "forward" === t && n < i ? t = "backward" : "backward" === t && n > i && (t = "forward"), i = n; o(l) && l.childNodes.length > 0;) {
            let e = "backward" === t ? l.childNodes.length - 1 : 0;
            l = r(l, e, t)[0]
        }
        let a = "backward" === t && null != l.textContent ? l.textContent.length : 0;
        return [l, a]
    }

    function r(e, t, n) {
        let {
            childNodes: l
        } = e, i = l[t], a = t, s = !1, r = !1;
        for (;
            (function(e) {
                return u(e) && 8 === e.nodeType
            }(i) || o(i) && 0 === i.childNodes.length || o(i) && "false" === i.getAttribute("contenteditable")) && (!s || !r);) {
            ;
            if (a >= l.length) {
                s = !0, a = t - 1, n = "backward";
                continue
            }
            if (a < 0) {
                r = !0, a = t + 1, n = "forward";
                continue
            }
            i = l[a], t = a, a += "forward" === n ? 1 : -1
        }
        return [i, t]
    }

    function o(e) {
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