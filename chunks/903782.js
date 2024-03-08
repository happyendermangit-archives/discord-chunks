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
    var i = n("371621");
    let l = !1;
    {
        i.ReactEditor.toSlateRange = (e, t, n) => {
            let l, a, s, r, o, {
                exactMatch: u,
                suppressThrow: c
            } = n;
            if (function(e) {
                    let t = e && e.anchorNode && d(e.anchorNode);
                    return null != t && e instanceof t.Selection
                }(t) ? (l = t.anchorNode, a = t.anchorOffset, s = t.focusNode, r = t.focusOffset, o = t.isCollapsed) : (l = t.startContainer, a = t.startOffset, s = t.endContainer, r = t.endOffset, o = t.collapsed), null == l || null == s || null == a || null == r) {
                if (c) return null;
                throw Error("Cannot resolve a Slate range from DOM range")
            }
            let f = i.ReactEditor.toSlatePoint(e, [l, a], {
                    exactMatch: u,
                    suppressThrow: c
                }),
                p = o ? f : i.ReactEditor.toSlatePoint(e, [s, r], {
                    exactMatch: u,
                    suppressThrow: c
                });
            return null != f && null != p ? {
                anchor: f,
                focus: p
            } : null
        };
        let e = i.ReactEditor.toSlatePoint;
        i.ReactEditor.toSlatePoint = (t, n, i) => {
            let {
                exactMatch: l,
                suppressThrow: a,
                direction: r = "forward"
            } = i;
            !l && (n = s(n, r));
            try {
                return e(t, n, {
                    exactMatch: !0,
                    suppressThrow: a
                })
            } catch (e) {
                if (a) return null;
                throw e
            }
        }, l = !0
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
        let n, [i, l] = e;
        if (!o(i) || 0 === i.childNodes.length) return e;
        for ("forward" === t && l === i.childNodes.length && (t = "backward"), "backward" === t && l--, [i, n] = r(i, l, t), "forward" === t && n < l ? t = "backward" : "backward" === t && n > l && (t = "forward"), l = n; o(i) && i.childNodes.length > 0;) {
            let e = "backward" === t ? i.childNodes.length - 1 : 0;
            i = r(i, e, t)[0]
        }
        let a = "backward" === t && null != i.textContent ? i.textContent.length : 0;
        return [i, a]
    }

    function r(e, t, n) {
        let {
            childNodes: i
        } = e, l = i[t], a = t, s = !1, r = !1;
        for (;
            (function(e) {
                return u(e) && 8 === e.nodeType
            }(l) || o(l) && 0 === l.childNodes.length || o(l) && "false" === l.getAttribute("contenteditable")) && (!s || !r);) {
            ;
            if (a >= i.length) {
                s = !0, a = t - 1, n = "backward";
                continue
            }
            if (a < 0) {
                r = !0, a = t + 1, n = "forward";
                continue
            }
            l = i[a], t = a, a += "forward" === n ? 1 : -1
        }
        return [l, t]
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