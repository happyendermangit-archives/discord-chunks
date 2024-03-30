function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasDomParent: function() {
            return l
        },
        normalizeDOMPoint: function() {
            return c
        }
    });
    var r = n("136035");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function a(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = !1;
    r.ReactEditor.toSlateRange = function(e, t, n) {
        var o, a, u, s, l, c = n.exactMatch,
            f = n.suppressThrow;
        if (function(e) {
                var t = e && e.anchorNode && E(e.anchorNode);
                return null != t && i(e, t.Selection)
            }(t) ? (o = t.anchorNode, a = t.anchorOffset, u = t.focusNode, s = t.focusOffset, l = t.isCollapsed) : (o = t.startContainer, a = t.startOffset, u = t.endContainer, s = t.endOffset, l = t.collapsed), null == o || null == u || null == a || null == s) {
            if (f) return null;
            throw Error("Cannot resolve a Slate range from DOM range")
        }
        var d = r.ReactEditor.toSlatePoint(e, [o, a], {
                exactMatch: c,
                suppressThrow: f
            }),
            _ = l ? d : r.ReactEditor.toSlatePoint(e, [u, s], {
                exactMatch: c,
                suppressThrow: f
            });
        return null != d && null != _ ? {
            anchor: d,
            focus: _
        } : null
    };
    var s = r.ReactEditor.toSlatePoint;
    r.ReactEditor.toSlatePoint = function(e, t, n) {
        var r = n.exactMatch,
            o = n.suppressThrow,
            i = n.direction;
        !r && (t = c(t, void 0 === i ? "forward" : i));
        try {
            return s(e, t, {
                exactMatch: !0,
                suppressThrow: o
            })
        } catch (e) {
            if (o) return null;
            throw e
        }
    }, u = !0;

    function l(e, t) {
        if (null == t) return !1;
        for (; null != e;) {
            if (e === t) return !0;
            e = e.parentNode
        }
        return !1
    }

    function c(e, t) {
        var n, r, o = a(e, 2),
            i = o[0],
            u = o[1];
        if (!d(i) || 0 === i.childNodes.length) return e;
        for ("forward" === t && u === i.childNodes.length && (t = "backward"), "backward" === t && u--, i = (r = a(f(i, u, t), 2))[0], n = r[1], "forward" === t && n < u ? t = "backward" : "backward" === t && n > u && (t = "forward"), u = n; d(i) && i.childNodes.length > 0;) {
            var s = "backward" === t ? i.childNodes.length - 1 : 0;
            i = f(i, s, t)[0]
        }
        var l = "backward" === t && null != i.textContent ? i.textContent.length : 0;
        return [i, l]
    }

    function f(e, t, n) {
        for (var r = e.childNodes, o = r[t], i = t, a = !1, u = !1;
            (function(e) {
                return _(e) && 8 === e.nodeType
            }(o) || d(o) && 0 === o.childNodes.length || d(o) && "false" === o.getAttribute("contenteditable")) && (!a || !u);) {
            ;
            if (i >= r.length) {
                a = !0, i = t - 1, n = "backward";
                continue
            }
            if (i < 0) {
                u = !0, i = t + 1, n = "forward";
                continue
            }
            o = r[i], t = i, i += "forward" === n ? 1 : -1
        }
        return [o, t]
    }

    function d(e) {
        return _(e) && 1 === e.nodeType
    }

    function _(e) {
        var t = E(e);
        return null != t && i(e, t.Node)
    }

    function E(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || null
    }
}