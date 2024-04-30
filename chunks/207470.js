function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Editable: function() {
            return tf
        },
        ReactEditor: function() {
            return eE
        },
        Slate: function() {
            return tS
        },
        useFocused: function() {
            return tv
        },
        useSelected: function() {
            return eH
        },
        useSlateStatic: function() {
            return eI
        },
        withReact: function() {
            return tO
        }
    });
    var r = n("653603"),
        i = n.n(r),
        a = n("889678"),
        o = n.n(a),
        s = n("123763"),
        u = n.n(s),
        c = n("470079"),
        l = n.n(c),
        d = n("367989"),
        f = n("327432"),
        p = n("690096"),
        h = n("247187"),
        m = n("699581"),
        g = n.n(m);

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) {
                if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
        }
        return i
    }
    var v = 0;
    class y {
        constructor() {
            this.id = "".concat(v++)
        }
    }
    var E = new WeakMap,
        S = new WeakMap,
        x = new WeakMap,
        w = new WeakMap,
        T = new WeakMap,
        C = new WeakMap,
        D = new WeakMap,
        O = new WeakMap,
        M = new WeakMap,
        A = new WeakMap,
        k = new WeakMap,
        R = new WeakMap,
        N = new WeakMap,
        I = new WeakMap,
        L = new WeakMap,
        P = new WeakMap,
        F = new WeakMap,
        B = new WeakMap,
        U = new WeakMap,
        Y = new WeakMap,
        j = new WeakMap,
        z = Symbol("placeholder"),
        H = Symbol("mark-placeholder"),
        G = globalThis.Text,
        V = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
        $ = e => K(e) && 8 === e.nodeType,
        W = e => K(e) && 1 === e.nodeType,
        K = e => {
            var t = V(e);
            return !!t && e instanceof t.Node
        },
        q = e => {
            var t = e && e.anchorNode && V(e.anchorNode);
            return !!t && e instanceof t.Selection
        },
        Q = e => K(e) && 3 === e.nodeType,
        Z = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
        X = e => {
            var [t, n] = e;
            if (W(t) && t.childNodes.length) {
                var r = n === t.childNodes.length,
                    i = r ? n - 1 : n;
                for ([t, i] = ee(t, i, r ? "backward" : "forward"), r = i < n; W(t) && t.childNodes.length;) {
                    var a = r ? t.childNodes.length - 1 : 0;
                    t = et(t, a, r ? "backward" : "forward")
                }
                n = r && null != t.textContent ? t.textContent.length : 0
            }
            return [t, n]
        },
        J = e => {
            for (var t = e && e.parentNode; t;) {
                if ("[object ShadowRoot]" === t.toString()) return !0;
                t = t.parentNode
            }
            return !1
        },
        ee = (e, t, n) => {
            for (var {
                    childNodes: r
                } = e, i = r[t], a = t, o = !1, s = !1;
                ($(i) || W(i) && 0 === i.childNodes.length || W(i) && "false" === i.getAttribute("contenteditable")) && (!o || !s);) {
                ;
                if (a >= r.length) {
                    o = !0, a = t - 1, n = "backward";
                    continue
                }
                if (a < 0) {
                    s = !0, a = t + 1, n = "forward";
                    continue
                }
                i = r[a], t = a, a += "forward" === n ? 1 : -1
            }
            return [i, t]
        },
        et = (e, t, n) => {
            var [r] = ee(e, t, n);
            return r
        },
        en = e => {
            var t = "";
            if (Q(e) && e.nodeValue) return e.nodeValue;
            if (W(e)) {
                for (var n of Array.from(e.childNodes)) t += en(n);
                var r = getComputedStyle(e).getPropertyValue("display");
                ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n")
            }
            return t
        },
        er = /data-slate-fragment="(.+?)"/m,
        ei = e => {
            var [, t] = e.getData("text/html").match(er) || [];
            return t
        },
        ea = (e, t, n) => {
            var {
                target: r
            } = t;
            if (W(r) && r.matches('[contentEditable="false"]')) return !1;
            var {
                document: i
            } = eE.getWindow(e);
            if (i.contains(r)) return eE.hasDOMNode(e, r, {
                editable: !0
            });
            var a = n.find(e => {
                var {
                    addedNodes: t,
                    removedNodes: n
                } = e;
                for (var i of t)
                    if (i === r || i.contains(r)) return !0;
                for (var a of n)
                    if (a === r || a.contains(r)) return !0
            });
            return !!a && a !== t && ea(e, a, n)
        },
        eo = parseInt(l().version.split(".")[0], 10) >= 17,
        es = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        eu = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
        ec = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
        el = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        ef = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        ep = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
        eh = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        em = ec && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        eg = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
        e_ = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        eb = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
        ev = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
        ey = (!eh || !em) && !ef && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        eE = {
            isComposing: e => !!R.get(e),
            getWindow(e) {
                var t = x.get(e);
                if (!t) throw Error("Unable to find a host window element for this editor");
                return t
            },
            findKey(e, t) {
                var n = O.get(t);
                return !n && (n = new y, O.set(t, n)), n
            },
            findPath(e, t) {
                for (var n = [], r = t;;) {
                    var i = S.get(r);
                    if (null == i) {
                        if (f.Editor.isEditor(r)) return n;
                        break
                    }
                    var a = E.get(r);
                    if (null == a) break;
                    n.unshift(a), r = i
                }
                throw Error("Unable to find the path for Slate node: ".concat(f.Scrubber.stringify(t)))
            },
            findDocumentOrShadowRoot(e) {
                var t = eE.toDOMNode(e, e),
                    n = t.getRootNode();
                return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument
            },
            isFocused: e => !!k.get(e),
            isReadOnly: e => !!A.get(e),
            blur(e) {
                var t = eE.toDOMNode(e, e),
                    n = eE.findDocumentOrShadowRoot(e);
                k.set(e, !1), n.activeElement === t && t.blur()
            },
            focus(e) {
                var t = eE.toDOMNode(e, e),
                    n = eE.findDocumentOrShadowRoot(e);
                k.set(e, !0), n.activeElement !== t && t.focus({
                    preventScroll: !0
                })
            },
            deselect(e) {
                var {
                    selection: t
                } = e, n = eE.findDocumentOrShadowRoot(e).getSelection();
                n && n.rangeCount > 0 && n.removeAllRanges(), t && f.Transforms.deselect(e)
            },
            hasDOMNode(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        editable: i = !1
                    } = r,
                    a = eE.toDOMNode(e, e);
                try {
                    n = W(t) ? t : t.parentElement
                } catch (e) {
                    if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                }
                return !!n && n.closest("[data-slate-editor]") === a && (!i || !!n.isContentEditable || "boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a || !!n.getAttribute("data-slate-zero-width"))
            },
            insertData(e, t) {
                e.insertData(t)
            },
            insertFragmentData: (e, t) => e.insertFragmentData(t),
            insertTextData: (e, t) => e.insertTextData(t),
            setFragmentData(e, t, n) {
                e.setFragmentData(t, n)
            },
            toDOMNode(e, t) {
                var n = M.get(e),
                    r = f.Editor.isEditor(t) ? w.get(e) : null == n ? void 0 : n.get(eE.findKey(e, t));
                if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.Scrubber.stringify(t)));
                return r
            },
            toDOMPoint(e, t) {
                var [n] = f.Editor.node(e, t.path), r = eE.toDOMNode(e, n);
                f.Editor.void(e, {
                    at: t
                }) && (t = {
                    path: t.path,
                    offset: 0
                });
                for (var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0; o < i.length; o++) {
                    var s = i[o],
                        u = s.childNodes[0];
                    if (null != u && null != u.textContent) {
                        var {
                            length: c
                        } = u.textContent, l = s.getAttribute("data-slate-length"), d = a + (null == l ? c : parseInt(l, 10)), p = i[o + 1];
                        if (t.offset === d && null != p && p.hasAttribute("data-slate-mark-placeholder")) {
                            var h, m, g = p.childNodes[0];
                            h = [g instanceof G ? g : p, null !== (m = p.textContent) && void 0 !== m && m.startsWith("\uFEFF") ? 1 : 0];
                            break
                        }
                        if (t.offset <= d) {
                            h = [u, Math.min(c, Math.max(0, t.offset - a))];
                            break
                        }
                        a = d
                    }
                }
                if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.Scrubber.stringify(t)));
                return h
            },
            toDOMRange(e, t) {
                var {
                    anchor: n,
                    focus: r
                } = t, i = f.Range.isBackward(t), a = eE.toDOMPoint(e, n), o = f.Range.isCollapsed(t) ? a : eE.toDOMPoint(e, r), s = eE.getWindow(e).document.createRange(), [u, c] = i ? o : a, [l, d] = i ? a : o, p = !!(W(u) ? u : u.parentElement).getAttribute("data-slate-zero-width"), h = !!(W(l) ? l : l.parentElement).getAttribute("data-slate-zero-width");
                return s.setStart(u, p ? 1 : c), s.setEnd(l, h ? 1 : d), s
            },
            toSlateNode(e, t) {
                var n = W(t) ? t : t.parentElement;
                n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
                var r = n ? C.get(n) : null;
                if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
                return r
            },
            findEventRange(e, t) {
                "nativeEvent" in t && (t = t.nativeEvent);
                var n, {
                    clientX: r,
                    clientY: i,
                    target: a
                } = t;
                if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                var o = eE.toSlateNode(e, t.target),
                    s = eE.findPath(e, o);
                if (f.Element.isElement(o) && f.Editor.isVoid(e, o)) {
                    var u = a.getBoundingClientRect(),
                        c = e.isInline(o) ? r - u.left < u.left + u.width - r : i - u.top < u.top + u.height - i,
                        l = f.Editor.point(e, s, {
                            edge: c ? "start" : "end"
                        }),
                        d = c ? f.Editor.before(e, l) : f.Editor.after(e, l);
                    if (d) return f.Editor.range(e, d)
                }
                var {
                    document: p
                } = eE.getWindow(e);
                if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, i);
                else {
                    var h = p.caretPositionFromPoint(r, i);
                    h && ((n = p.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset))
                }
                if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                return eE.toSlateRange(e, n, {
                    exactMatch: !1,
                    suppressThrow: !1
                })
            },
            toSlatePoint(e, t, n) {
                var {
                    exactMatch: r,
                    suppressThrow: i
                } = n, [a, o] = r ? t : X(t), s = a.parentNode, u = null, c = 0;
                if (s) {
                    var l, d, p = eE.toDOMNode(e, e),
                        h = s.closest('[data-slate-void="true"]'),
                        m = h && p.contains(h) ? h : null,
                        g = s.closest("[data-slate-leaf]"),
                        _ = null;
                    if (g) {
                        if (u = g.closest('[data-slate-node="text"]')) {
                            var b = eE.getWindow(e).document.createRange();
                            b.setStart(u, 0), b.setEnd(a, o);
                            var v = b.cloneContents();
                            [...Array.prototype.slice.call(v.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(v.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                if (ec && !r && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                    e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                    return
                                }
                                e.parentNode.removeChild(e)
                            }), c = v.textContent.length, _ = u
                        }
                    } else if (m) {
                        for (var y = m.querySelectorAll("[data-slate-leaf]"), E = 0; E < y.length; E++) {
                            var S = y[E];
                            if (eE.hasDOMNode(e, S)) {
                                g = S;
                                break
                            }
                        }
                        g ? (u = g.closest('[data-slate-node="text"]'), c = (_ = g).textContent.length, _.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                            c -= e.textContent.length
                        })) : c = 1
                    }
                    _ && c === _.textContent.length && ec && "z" === _.getAttribute("data-slate-zero-width") && null !== (l = _.textContent) && void 0 !== l && l.startsWith("\uFEFF") && (s.hasAttribute("data-slate-zero-width") || el && null !== (d = _.textContent) && void 0 !== d && d.endsWith("\n\n")) && c--
                }
                if (ec && !u && !r) {
                    var x = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
                    if (x && eE.hasDOMNode(e, x, {
                            editable: !0
                        })) {
                        var w = eE.toSlateNode(e, x),
                            {
                                path: T,
                                offset: C
                            } = f.Editor.start(e, eE.findPath(e, w));
                        return !x.querySelector("[data-slate-leaf]") && (C = o), {
                            path: T,
                            offset: C
                        }
                    }
                }
                if (!u) {
                    if (i) return null;
                    throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                }
                var D = eE.toSlateNode(e, u);
                return {
                    path: eE.findPath(e, D),
                    offset: c
                }
            },
            toSlateRange(e, t, n) {
                var r, i, a, o, s, u, {
                    exactMatch: c,
                    suppressThrow: l
                } = n;
                if ((q(t) ? t.anchorNode : t.startContainer) && (q(t) ? (r = t.anchorNode, i = t.anchorOffset, a = t.focusNode, o = t.focusOffset, s = ep && J(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (r = t.startContainer, i = t.startOffset, a = t.endContainer, o = t.endOffset, s = t.collapsed)), null == r || null == a || null == i || null == o) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                "getAttribute" in a && "false" === a.getAttribute("contenteditable") && (a = r, o = (null === (u = r.textContent) || void 0 === u ? void 0 : u.length) || 0);
                var d = eE.toSlatePoint(e, [r, i], {
                    exactMatch: c,
                    suppressThrow: l
                });
                if (!d) return null;
                var p = s ? d : eE.toSlatePoint(e, [a, o], {
                    exactMatch: c,
                    suppressThrow: l
                });
                if (!p) return null;
                if (el && !s && r !== a) {
                    var h = f.Editor.isEnd(e, d, d.path),
                        m = f.Editor.isStart(e, p, p.path);
                    h && (d = f.Editor.after(e, d) || d), m && (p = f.Editor.before(e, p) || p)
                }
                var g = {
                    anchor: d,
                    focus: p
                };
                return f.Range.isExpanded(g) && f.Range.isForward(g) && W(a) && f.Editor.void(e, {
                    at: g.focus,
                    mode: "highest"
                }) && (g = f.Editor.unhangRange(e, g, {
                    voids: !0
                })), g
            },
            hasRange(e, t) {
                var {
                    anchor: n,
                    focus: r
                } = t;
                return f.Editor.hasPath(e, n.path) && f.Editor.hasPath(e, r.path)
            },
            hasTarget: (e, t) => K(t) && eE.hasDOMNode(e, t),
            hasEditableTarget: (e, t) => K(t) && eE.hasDOMNode(e, t, {
                editable: !0
            }),
            hasSelectableTarget: (e, t) => eE.hasEditableTarget(e, t) || eE.isTargetInsideNonReadonlyVoid(e, t),
            isTargetInsideNonReadonlyVoid(e, t) {
                if (A.get(e)) return !1;
                var n = eE.hasTarget(e, t) && eE.toSlateNode(e, t);
                return f.Element.isElement(n) && f.Editor.isVoid(e, n)
            },
            androidScheduleFlush(e) {
                var t;
                null === (t = L.get(e)) || void 0 === t || t()
            },
            androidPendingDiffs: e => B.get(e)
        },
        eS = ["anchor", "focus"],
        ex = ["anchor", "focus"],
        ew = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(n => t.hasOwnProperty(n) && e[n] === t[n]),
        eT = (e, t) => {
            var n = b(e, eS),
                r = b(t, ex);
            return e[z] === t[z] && ew(n, r)
        },
        eC = (e, t) => {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = t[n];
                if (!f.Range.equals(r, i) || !eT(r, i)) return !1
            }
            return !0
        },
        eD = (e, t) => {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = t[n];
                if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eT(r, i)) return !1
            }
            return !0
        },
        eO = ev ? c.useLayoutEffect : c.useEffect,
        eM = e => {
            var {
                isLast: t,
                leaf: n,
                parent: r,
                text: i
            } = e, a = eI(), o = eE.findPath(a, i), s = f.Path.parent(o), u = !0 === n[H];
            return a.isVoid(r) ? l().createElement(eR, {
                length: f.Node.string(r).length
            }) : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== f.Editor.string(a, s) ? "" === n.text ? l().createElement(eR, {
                isMarkPlaceholder: u
            }) : t && "\n" === n.text.slice(-1) ? l().createElement(eA, {
                isTrailing: !0,
                text: n.text
            }) : l().createElement(eA, {
                text: n.text
            }) : l().createElement(eR, {
                isLineBreak: !0,
                isMarkPlaceholder: u
            })
        },
        eA = e => {
            var {
                text: t,
                isTrailing: n = !1
            } = e, r = (0, c.useRef)(null), i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""), [a] = (0, c.useState)(i);
            return eO(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e)
            }), l().createElement(ek, {
                ref: r
            }, a)
        },
        ek = (0, c.memo)((0, c.forwardRef)((e, t) => l().createElement("span", {
            "data-slate-string": !0,
            ref: t
        }, e.children))),
        eR = e => {
            var {
                length: t = 0,
                isLineBreak: n = !1,
                isMarkPlaceholder: r = !1
            } = e, i = {
                "data-slate-zero-width": n ? "n" : "z",
                "data-slate-length": t
            };
            return r && (i["data-slate-mark-placeholder"] = !0), l().createElement("span", Object.assign({}, i), ec && n ? null : "\uFEFF", n ? l().createElement("br", null) : null)
        },
        eN = (0, c.createContext)(null),
        eI = () => {
            var e = (0, c.useContext)(eN);
            if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
            return e
        },
        eL = l().memo(e => {
            var {
                leaf: t,
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: a,
                renderLeaf: o = e => l().createElement(eP, Object.assign({}, e))
            } = e, s = (0, c.useRef)(null), u = (0, c.useRef)(null), d = eI(), f = (0, c.useRef)(null);
            (0, c.useEffect)(() => () => {
                f.current && f.current.disconnect()
            }, []), (0, c.useEffect)(() => {
                var e = null == u ? void 0 : u.current;
                if (e ? T.set(d, e) : T.delete(d), f.current) f.current.disconnect(), e && f.current.observe(e);
                else if (e) {
                    var t = window.ResizeObserver || p.ResizeObserver;
                    f.current = new t(() => {
                        var e = j.get(d);
                        null == e || e()
                    }), f.current.observe(e)
                }
                if (!e && s.current) {
                    var n = j.get(d);
                    null == n || n()
                }
                return s.current = u.current, () => {
                    T.delete(d)
                }
            }, [u, t]);
            var h = l().createElement(eM, {
                isLast: n,
                leaf: t,
                parent: i,
                text: r
            });
            if (t[z]) {
                var m = {
                    children: t.placeholder,
                    attributes: {
                        "data-slate-placeholder": !0,
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            width: "100%",
                            maxWidth: "100%",
                            display: "block",
                            opacity: "0.333",
                            userSelect: "none",
                            textDecoration: "none"
                        },
                        contentEditable: !1,
                        ref: u
                    }
                };
                h = l().createElement(l().Fragment, null, a(m), h)
            }
            return o({
                attributes: {
                    "data-slate-leaf": !0
                },
                children: h,
                leaf: t,
                text: r
            })
        }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && f.Text.equals(t.leaf, e.leaf) && t.leaf[z] === e.leaf[z]),
        eP = e => {
            var {
                attributes: t,
                children: n
            } = e;
            return l().createElement("span", Object.assign({}, t), n)
        },
        eF = l().memo(e => {
            for (var {
                    decorations: t,
                    isLast: n,
                    parent: r,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    text: o
                } = e, s = eI(), u = (0, c.useRef)(null), d = f.Text.decorations(o, t), p = eE.findKey(s, o), h = [], m = 0; m < d.length; m++) {
                var g = d[m];
                h.push(l().createElement(eL, {
                    isLast: n && m === d.length - 1,
                    key: "".concat(p.id, "-").concat(m),
                    renderPlaceholder: i,
                    leaf: g,
                    text: o,
                    parent: r,
                    renderLeaf: a
                }))
            }
            var _ = (0, c.useCallback)(e => {
                var t = M.get(s);
                e ? (null == t || t.set(p, e), D.set(o, e), C.set(e, o)) : (null == t || t.delete(p), D.delete(o), u.current && C.delete(u.current)), u.current = e
            }, [u, s, p, o]);
            return l().createElement("span", {
                "data-slate-node": "text",
                ref: _
            }, h)
        }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eD(t.decorations, e.decorations)),
        eB = l().memo(e => {
            var {
                decorations: t,
                element: n,
                renderElement: r = e => l().createElement(eU, Object.assign({}, e)),
                renderPlaceholder: a,
                renderLeaf: o,
                selection: s
            } = e, u = eI(), d = e$(), p = u.isInline(n), h = eE.findKey(u, n), m = (0, c.useCallback)(e => {
                var t = M.get(u);
                e ? (null == t || t.set(h, e), D.set(n, e), C.set(e, n)) : (null == t || t.delete(h), D.delete(n))
            }, [u, h, n]), g = eG({
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: a,
                renderLeaf: o,
                selection: s
            }), _ = {
                "data-slate-node": "element",
                ref: m
            };
            if (p && (_["data-slate-inline"] = !0), !p && f.Editor.hasInlines(u, n)) {
                var b = f.Node.string(n),
                    v = i()(b);
                "rtl" === v && (_.dir = v)
            }
            if (f.Editor.isVoid(u, n)) {
                _["data-slate-void"] = !0, !d && p && (_.contentEditable = !1);
                var [
                    [y]
                ] = f.Node.texts(n);
                g = l().createElement(p ? "span" : "div", {
                    "data-slate-spacer": !0,
                    style: {
                        height: "0",
                        color: "transparent",
                        outline: "none",
                        position: "absolute"
                    }
                }, l().createElement(eF, {
                    renderPlaceholder: a,
                    decorations: [],
                    isLast: !1,
                    parent: n,
                    text: y
                })), E.set(y, 0), S.set(y, n)
            }
            return r({
                attributes: _,
                children: g,
                element: n,
                decorations: t
            })
        }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eC(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && f.Range.equals(e.selection, t.selection))),
        eU = e => {
            var {
                attributes: t,
                children: n,
                element: r
            } = e, i = eI().isInline(r) ? "span" : "div";
            return l().createElement(i, Object.assign({}, t, {
                style: {
                    position: "relative"
                }
            }), n)
        },
        eY = (0, c.createContext)(() => []),
        ej = () => (0, c.useContext)(eY),
        ez = (0, c.createContext)(!1),
        eH = () => (0, c.useContext)(ez),
        eG = e => {
            for (var {
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    selection: o
                } = e, s = ej(), u = eI(), c = eE.findPath(u, n), d = [], p = f.Element.isElement(n) && !u.isInline(n) && f.Editor.hasInlines(u, n), h = 0; h < n.children.length; h++) {
                var m = c.concat(h),
                    g = n.children[h],
                    _ = eE.findKey(u, g),
                    b = f.Editor.range(u, m),
                    v = o && f.Range.intersection(b, o),
                    y = s([g, m]);
                for (var x of t) {
                    var w = f.Range.intersection(x, b);
                    w && y.push(w)
                }
                f.Element.isElement(g) ? d.push(l().createElement(ez.Provider, {
                    key: "provider-".concat(_.id),
                    value: !!v
                }, l().createElement(eB, {
                    decorations: y,
                    element: g,
                    key: _.id,
                    renderElement: r,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    selection: v
                }))) : d.push(l().createElement(eF, {
                    decorations: y,
                    key: _.id,
                    isLast: p && h === n.children.length - 1,
                    parent: n,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    text: g
                })), E.set(g, h), S.set(g, n)
            }
            return d
        },
        eV = (0, c.createContext)(!1),
        e$ = () => (0, c.useContext)(eV),
        eW = (0, c.createContext)(null),
        eK = () => {
            var e = (0, c.useContext)(eW);
            if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
            var {
                editor: t
            } = e;
            return t
        },
        eq = {
            bold: "mod+b",
            compose: ["down", "left", "right", "up", "backspace", "enter"],
            moveBackward: "left",
            moveForward: "right",
            moveWordBackward: "ctrl+left",
            moveWordForward: "ctrl+right",
            deleteBackward: "shift?+backspace",
            deleteForward: "shift?+delete",
            extendBackward: "shift+left",
            extendForward: "shift+right",
            italic: "mod+i",
            insertSoftBreak: "shift+enter",
            splitBlock: "enter",
            undo: "mod+z"
        },
        eQ = {
            moveLineBackward: "opt+up",
            moveLineForward: "opt+down",
            moveWordBackward: "opt+left",
            moveWordForward: "opt+right",
            deleteBackward: ["ctrl+backspace", "ctrl+h"],
            deleteForward: ["ctrl+delete", "ctrl+d"],
            deleteLineBackward: "cmd+shift?+backspace",
            deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
            deleteWordBackward: "opt+shift?+backspace",
            deleteWordForward: "opt+shift?+delete",
            extendLineBackward: "opt+shift+up",
            extendLineForward: "opt+shift+down",
            redo: "cmd+shift+z",
            transposeCharacter: "ctrl+t"
        },
        eZ = {
            deleteWordBackward: "ctrl+shift?+backspace",
            deleteWordForward: "ctrl+shift?+delete",
            redo: ["ctrl+y", "ctrl+shift+z"]
        },
        eX = e => {
            var t = eq[e],
                n = eQ[e],
                r = eZ[e],
                i = t && (0, h.isKeyHotkey)(t),
                a = n && (0, h.isKeyHotkey)(n),
                o = r && (0, h.isKeyHotkey)(r);
            return e => !!(i && i(e) || eu && a && a(e) || !eu && o && o(e)) || !1
        },
        eJ = {
            isBold: eX("bold"),
            isCompose: eX("compose"),
            isMoveBackward: eX("moveBackward"),
            isMoveForward: eX("moveForward"),
            isDeleteBackward: eX("deleteBackward"),
            isDeleteForward: eX("deleteForward"),
            isDeleteLineBackward: eX("deleteLineBackward"),
            isDeleteLineForward: eX("deleteLineForward"),
            isDeleteWordBackward: eX("deleteWordBackward"),
            isDeleteWordForward: eX("deleteWordForward"),
            isExtendBackward: eX("extendBackward"),
            isExtendForward: eX("extendForward"),
            isExtendLineBackward: eX("extendLineBackward"),
            isExtendLineForward: eX("extendLineForward"),
            isItalic: eX("italic"),
            isMoveLineBackward: eX("moveLineBackward"),
            isMoveLineForward: eX("moveLineForward"),
            isMoveWordBackward: eX("moveWordBackward"),
            isMoveWordForward: eX("moveWordForward"),
            isRedo: eX("redo"),
            isSoftBreak: eX("insertSoftBreak"),
            isSplitBlock: eX("splitBlock"),
            isTransposeCharacter: eX("transposeCharacter"),
            isUndo: eX("undo")
        },
        e0 = (e, t) => {
            var n = [],
                r = () => {
                    n = []
                };
            return {
                registerMutations: r => {
                    if (t.current) {
                        var i = r.filter(t => ea(e, t, r));
                        n.push(...i)
                    }
                },
                restoreDOM: function() {
                    n.length > 0 && (n.reverse().forEach(e => {
                        "characterData" !== e.type && (e.removedNodes.forEach(t => {
                            e.target.insertBefore(t, e.nextSibling)
                        }), e.addedNodes.forEach(t => {
                            e.target.removeChild(t)
                        }))
                    }), r())
                },
                clear: r
            }
        },
        e1 = {
            subtree: !0,
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0
        };
    class e2 extends c.Component {
        constructor() {
            super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
        }
        observe() {
            var e, {
                node: t
            } = this.props;
            if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e1)
        }
        componentDidMount() {
            var {
                receivedUserInput: e
            } = this.props, t = this.context;
            this.manager = e0(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
        }
        getSnapshotBeforeUpdate() {
            var e, t, n, r, i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
            return null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null
        }
        componentDidUpdate() {
            var e;
            null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
        }
        componentWillUnmount() {
            var e;
            null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
        }
        render() {
            return this.props.children
        }
    }
    e2.contextType = eN;
    var e3 = ec ? e2 : e => {
        var {
            children: t
        } = e;
        return l().createElement(l().Fragment, null, t)
    };

    function e4(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
    }

    function e6(e, t) {
        var {
            start: n,
            end: r,
            text: i
        } = t, a = e.slice(n, r), o = function(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
                if (e.charAt(r) !== t.charAt(r)) return r;
            return n
        }(a, i), s = Math.min(a.length - o, i.length - o), u = function(e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r
        }(a, i, s), c = {
            start: n + o,
            end: r - u,
            text: i.slice(o, i.length - u)
        };
        return c.start === c.end && 0 === c.text.length ? null : c
    }

    function e5(e, t) {
        var {
            path: n,
            offset: r
        } = t;
        if (!f.Editor.hasPath(e, n)) return null;
        var i = f.Node.get(e, n);
        if (!f.Text.isText(i)) return null;
        var a = f.Editor.above(e, {
            match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
            at: n
        });
        if (!a) return null;
        for (; r > i.text.length;) {
            var o = f.Editor.next(e, {
                at: n,
                match: f.Text.isText
            });
            if (!o || !f.Path.isDescendant(o[1], a[1])) return null;
            r -= i.text.length, i = o[0], n = o[1]
        }
        return {
            path: n,
            offset: r
        }
    }

    function e8(e, t) {
        var n = e5(e, t.anchor);
        if (!n) return null;
        if (f.Range.isCollapsed(t)) return {
            anchor: n,
            focus: n
        };
        var r = e5(e, t.focus);
        return r ? {
            anchor: n,
            focus: r
        } : null
    }

    function e9(e, t, n) {
        var r = B.get(e),
            i = null == r ? void 0 : r.find(e => {
                var {
                    path: n
                } = e;
                return f.Path.equals(n, t.path)
            });
        if (!i || t.offset <= i.diff.start) return f.Point.transform(t, n, {
            affinity: "backward"
        });
        var {
            diff: a
        } = i;
        if (t.offset <= a.start + a.text.length) {
            var o = {
                    path: t.path,
                    offset: a.start
                },
                s = f.Point.transform(o, n, {
                    affinity: "backward"
                });
            return s ? {
                path: s.path,
                offset: s.offset + t.offset - a.start
            } : null
        }
        var u = {
                path: t.path,
                offset: t.offset - a.text.length + a.end - a.start
            },
            c = f.Point.transform(u, n, {
                affinity: "backward"
            });
        return c ? "split_node" === n.type && f.Path.equals(n.path, t.path) && u.offset < n.position && a.start < n.position ? c : {
            path: c.path,
            offset: c.offset + a.text.length - a.end + a.start
        } : null
    }

    function e7(e, t, n) {
        var r = e9(e, t.anchor, n);
        if (!r) return null;
        if (f.Range.isCollapsed(t)) return {
            anchor: r,
            focus: r
        };
        var i = e9(e, t.focus, n);
        return i ? {
            anchor: r,
            focus: i
        } : null
    }

    function te(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function tt(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? te(Object(n), !0).forEach(function(t) {
                _(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var tn = function() {},
        tr = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
        ti = ["node"];

    function ta(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }
    var to = {
            subtree: !0,
            childList: !0,
            characterData: !0
        },
        ts = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
        tu = ["text"];

    function tc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function tl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tc(Object(n), !0).forEach(function(t) {
                _(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var td = e => l().createElement(l().Fragment, null, eG(e)),
        tf = e => {
            var t, n, r, a, s, d, p = (0, c.useCallback)(e => l().createElement(tp, Object.assign({}, e)), []),
                {
                    autoFocus: h,
                    decorate: m = th,
                    onDOMBeforeInput: g,
                    placeholder: v,
                    readOnly: y = !1,
                    renderElement: E,
                    renderLeaf: S,
                    renderPlaceholder: O = p,
                    scrollSelectionIntoView: M = tm,
                    style: I = {},
                    as: G = "div",
                    disableDefaultStyles: $ = !1
                } = e,
                Q = b(e, ts),
                X = eK(),
                [J, ee] = (0, c.useState)(!1),
                et = (0, c.useRef)(null),
                en = (0, c.useRef)([]);
            var {
                onUserInput: er,
                receivedUserInput: ei
            } = (t = eI(), n = (0, c.useRef)(!1), r = (0, c.useRef)(0), a = (0, c.useCallback)(() => {
                if (!n.current) {
                    n.current = !0;
                    var e = eE.getWindow(t);
                    e.cancelAnimationFrame(r.current), r.current = e.requestAnimationFrame(() => {
                        n.current = !1
                    })
                }
            }, []), (0, c.useEffect)(() => () => cancelAnimationFrame(r.current), []), {
                receivedUserInput: n,
                onUserInput: a
            }), [, eo] = (0, c.useReducer)(e => e + 1, 0);
            j.set(X, eo), A.set(X, y);
            var eu = (0, c.useMemo)(() => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }), []);
            (0, c.useLayoutEffect)(() => () => {
                if (null != eu) null != eu.latestElement && (eu.latestElement.remove(), eu.latestElement = null)
            }, []), (0, c.useEffect)(() => {
                et.current && h && et.current.focus()
            }, [h]);
            var ef = (0, c.useCallback)(u()(() => {
                    if ((ec || !eE.isComposing(X)) && (!eu.isUpdatingSelection || null != em && em.isFlushing()) && !eu.isDraggingInternally) {
                        var e = eE.findDocumentOrShadowRoot(X),
                            {
                                activeElement: t
                            } = e,
                            n = eE.toDOMNode(X, X),
                            r = e.getSelection();
                        if (t === n ? (eu.latestElement = t, k.set(X, !0)) : k.delete(X), !r) return f.Transforms.deselect(X);
                        var {
                            anchorNode: i,
                            focusNode: a
                        } = r, o = eE.hasEditableTarget(X, i) || eE.isTargetInsideNonReadonlyVoid(X, i), s = eE.hasEditableTarget(X, a) || eE.isTargetInsideNonReadonlyVoid(X, a);
                        if (o && s) {
                            var u = eE.toSlateRange(X, r, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            u && (eE.isComposing(X) || null != em && em.hasPendingChanges() || null != em && em.isFlushing() ? null == em || em.handleUserSelect(u) : f.Transforms.select(X, u))
                        }
                        y && (!o || !s) && f.Transforms.deselect(X)
                    }
                }, 100), [y]),
                eh = (0, c.useMemo)(() => o()(ef, 0), [ef]),
                em = function(e) {
                    var t, {
                            node: n
                        } = e,
                        r = b(e, ti);
                    if (!ec) return null;
                    var i = eI();
                    var a = (t = (0, c.useRef)(!1), (0, c.useEffect)(() => (t.current = !0, () => {
                            t.current = !1
                        }), []), t.current),
                        [o] = (0, c.useState)(() => (function(e) {
                            var {
                                editor: t,
                                scheduleOnDOMSelectionChange: n,
                                onDOMSelectionChange: r
                            } = e, i = !1, a = null, o = null, s = null, u = 0, c = !1, l = () => {
                                var e = Y.get(t);
                                if (Y.delete(t), e) {
                                    var {
                                        selection: n
                                    } = t, r = e8(t, e);
                                    r && (!n || !f.Range.equals(r, n)) && f.Transforms.select(t, r)
                                }
                            }, d = () => {
                                var e = U.get(t);
                                if (U.delete(t), e) {
                                    if (e.at) {
                                        var n = f.Point.isPoint(e.at) ? e5(t, e.at) : e8(t, e.at);
                                        if (!n) return;
                                        var r = f.Editor.range(t, n);
                                        (!t.selection || !f.Range.equals(t.selection, r)) && f.Transforms.select(t, n)
                                    }
                                    e.run()
                                }
                            }, p = () => {
                                if (o && (clearTimeout(o), o = null), s && (clearTimeout(s), s = null), !b() && !_()) {
                                    l();
                                    return
                                }!i && (i = !0, setTimeout(() => i = !1)), _() && (i = "action");
                                var e = t.selection && f.Editor.rangeRef(t, t.selection, {
                                    affinity: "forward"
                                });
                                F.set(t, t.marks), tn("flush", U.get(t), B.get(t));
                                for (var a = b(); u = null === (p = B.get(t)) || void 0 === p ? void 0 : p[0];) {
                                    var u, p, h, m = P.get(t);
                                    void 0 !== m && (P.delete(t), t.marks = m), m && !1 === c && (c = null);
                                    var g = function(e) {
                                        var {
                                            path: t,
                                            diff: n
                                        } = e;
                                        return {
                                            anchor: {
                                                path: t,
                                                offset: n.start
                                            },
                                            focus: {
                                                path: t,
                                                offset: n.end
                                            }
                                        }
                                    }(u);
                                    (!t.selection || !f.Range.equals(t.selection, g)) && f.Transforms.select(t, g), u.diff.text ? f.Editor.insertText(t, u.diff.text) : f.Editor.deleteFragment(t), B.set(t, null === (h = B.get(t)) || void 0 === h ? void 0 : h.filter(e => {
                                        var {
                                            id: t
                                        } = e;
                                        return t !== u.id
                                    })), ! function(e, t) {
                                        var {
                                            path: n,
                                            diff: r
                                        } = t;
                                        if (!f.Editor.hasPath(e, n)) return !1;
                                        var i = f.Node.get(e, n);
                                        if (!f.Text.isText(i)) return !1;
                                        if (r.start !== i.text.length || 0 === r.text.length) return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                        var a = f.Path.next(n);
                                        if (!f.Editor.hasPath(e, a)) return !1;
                                        var o = f.Node.get(e, a);
                                        return f.Text.isText(o) && o.text.startsWith(r.text)
                                    }(t, u) && (a = !1, U.delete(t), F.delete(t), i = "action", Y.delete(t), n.cancel(), r.cancel(), null == e || e.unref())
                                }
                                var v = null == e ? void 0 : e.unref();
                                if (v && !Y.get(t) && (!t.selection || !f.Range.equals(v, t.selection)) && f.Transforms.select(t, v), _()) {
                                    d();
                                    return
                                }
                                a && n(), n.flush(), r.flush(), l();
                                var y = F.get(t);
                                F.delete(t), void 0 !== y && (t.marks = y, t.onChange())
                            }, h = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = T.get(t);
                                if (n) {
                                    if (b() || e) {
                                        n.style.display = "none";
                                        return
                                    }
                                    n.style.removeProperty("display")
                                }
                            }, m = (e, n) => {
                                var r, i, a, o, s, c, l, d, p, m = null !== (p = B.get(t)) && void 0 !== p ? p : [];
                                B.set(t, m);
                                var g = f.Node.leaf(t, e),
                                    _ = m.findIndex(t => f.Path.equals(t.path, e));
                                if (_ < 0) {
                                    e6(g.text, n) && m.push({
                                        path: e,
                                        diff: n,
                                        id: u++
                                    }), h();
                                    return
                                }
                                var b = (r = g.text, i = m[_].diff, a = n, o = Math.min(i.start, a.start), s = Math.max(0, Math.min(i.start + i.text.length, a.end) - a.start), c = e4(r, i, a), l = Math.max(a.start + a.text.length, i.start + i.text.length + (i.start + i.text.length > a.start ? a.text.length : 0) - s), d = c.slice(o, l), e6(r, {
                                    start: o,
                                    end: Math.max(i.end, a.end - i.text.length + (i.end - i.start)),
                                    text: d
                                }));
                                if (!b) {
                                    m.splice(_, 1), h();
                                    return
                                }
                                m[_] = tt(tt({}, m[_]), {}, {
                                    diff: b
                                })
                            }, g = function(e) {
                                var {
                                    at: i
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                c = !1, Y.delete(t), n.cancel(), r.cancel(), _() && p(), U.set(t, {
                                    at: i,
                                    run: e
                                }), s = setTimeout(p)
                            }, _ = () => !!U.get(t), b = () => {
                                var e;
                                return !!(null !== (e = B.get(t)) && void 0 !== e && e.length)
                            }, v = e => {
                                Y.set(t, e), o && (clearTimeout(o), o = null);
                                var {
                                    selection: n
                                } = t;
                                if (e) {
                                    var r = !n || !f.Path.equals(n.anchor.path, e.anchor.path),
                                        i = !n || !f.Path.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                    (r && c || i) && (c = !1), (r || b()) && (o = setTimeout(p, 200))
                                }
                            }, y = () => {
                                !_() && (s = setTimeout(p))
                            };
                            return {
                                flush: p,
                                scheduleFlush: y,
                                hasPendingDiffs: b,
                                hasPendingAction: _,
                                hasPendingChanges: () => _() || b(),
                                isFlushing: () => i,
                                handleUserSelect: v,
                                handleCompositionEnd: e => {
                                    a && clearTimeout(a), a = setTimeout(() => {
                                        R.set(t, !1), p()
                                    }, 25)
                                },
                                handleCompositionStart: e => {
                                    R.set(t, !0), a && (clearTimeout(a), a = null)
                                },
                                handleDOMBeforeInput: e => {
                                    o && (clearTimeout(o), o = null);
                                    var {
                                        inputType: n
                                    } = e, r = null, i = e.dataTransfer || e.data || void 0;
                                    !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
                                    var [a] = e.getTargetRanges();
                                    a && (r = eE.toSlateRange(t, a, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    }));
                                    var s = eE.getWindow(t).getSelection();
                                    if (!r && s && (a = s, r = eE.toSlateRange(t, s, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        })), r = null !== (A = r) && void 0 !== A ? A : t.selection) {
                                        var u = !0;
                                        if (n.startsWith("delete")) {
                                            if (f.Range.isExpanded(r)) {
                                                var [l, d] = f.Range.edges(r);
                                                if (f.Node.leaf(t, l.path).text.length === l.offset && 0 === d.offset) {
                                                    var p = f.Editor.next(t, {
                                                        at: l.path,
                                                        match: f.Text.isText
                                                    });
                                                    p && f.Path.equals(p[1], d.path) && (r = {
                                                        anchor: d,
                                                        focus: d
                                                    })
                                                }
                                            }
                                            var h = n.endsWith("Backward") ? "backward" : "forward",
                                                [_, b] = f.Range.edges(r),
                                                [E, S] = f.Editor.leaf(t, _.path),
                                                x = {
                                                    text: "",
                                                    start: _.offset,
                                                    end: b.offset
                                                },
                                                w = B.get(t),
                                                T = null == w ? void 0 : w.find(e => f.Path.equals(e.path, S)),
                                                C = T ? [T.diff, x] : [x];
                                            if (0 === e4(E.text, ...C).length && (u = !1), f.Range.isExpanded(r)) {
                                                if (u && f.Path.equals(r.anchor.path, r.focus.path)) {
                                                    var D = {
                                                        path: r.anchor.path,
                                                        offset: _.offset
                                                    };
                                                    return v(f.Editor.range(t, D, D)), m(r.anchor.path, {
                                                        text: "",
                                                        end: b.offset,
                                                        start: _.offset
                                                    })
                                                }
                                                return g(() => f.Editor.deleteFragment(t, {
                                                    direction: h
                                                }), {
                                                    at: r
                                                })
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return g(() => f.Editor.deleteFragment(t), {
                                                    at: r
                                                });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var {
                                                    anchor: O
                                                } = r;
                                                if (u && f.Range.isCollapsed(r)) {
                                                    var M = f.Node.leaf(t, O.path);
                                                    if (O.offset < M.text.length) return m(O.path, {
                                                        text: "",
                                                        start: O.offset,
                                                        end: O.offset + 1
                                                    })
                                                }
                                                return g(() => f.Editor.deleteForward(t), {
                                                    at: r
                                                });
                                            case "deleteContentBackward":
                                                var A, k, {
                                                        anchor: R
                                                    } = r,
                                                    N = q(a) ? a.isCollapsed : !!(null !== (k = a) && void 0 !== k && k.collapsed);
                                                if (u && N && f.Range.isCollapsed(r) && R.offset > 0) return m(R.path, {
                                                    text: "",
                                                    start: R.offset - 1,
                                                    end: R.offset
                                                });
                                                return g(() => f.Editor.deleteBackward(t), {
                                                    at: r
                                                });
                                            case "deleteEntireSoftLine":
                                                return g(() => {
                                                    f.Editor.deleteBackward(t, {
                                                        unit: "line"
                                                    }), f.Editor.deleteForward(t, {
                                                        unit: "line"
                                                    })
                                                }, {
                                                    at: r
                                                });
                                            case "deleteHardLineBackward":
                                                return g(() => f.Editor.deleteBackward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: r
                                                });
                                            case "deleteSoftLineBackward":
                                                return g(() => f.Editor.deleteBackward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: r
                                                });
                                            case "deleteHardLineForward":
                                                return g(() => f.Editor.deleteForward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: r
                                                });
                                            case "deleteSoftLineForward":
                                                return g(() => f.Editor.deleteForward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: r
                                                });
                                            case "deleteWordBackward":
                                                return g(() => f.Editor.deleteBackward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: r
                                                });
                                            case "deleteWordForward":
                                                return g(() => f.Editor.deleteForward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: r
                                                });
                                            case "insertLineBreak":
                                                return g(() => f.Editor.insertSoftBreak(t), {
                                                    at: r
                                                });
                                            case "insertParagraph":
                                                return g(() => f.Editor.insertBreak(t), {
                                                    at: r
                                                });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if (tr(i)) return g(() => eE.insertData(t, i), {
                                                    at: r
                                                });
                                                var I = null != i ? i : "";
                                                if (P.get(t) && (I = I.replace("\uFEFF", "")), "insertText" === n && /.*\n.*\n$/.test(I) && (I = I.slice(0, -1)), I.includes("\n")) return g(() => {
                                                    var e = I.split("\n");
                                                    e.forEach((n, r) => {
                                                        n && f.Editor.insertText(t, n), r !== e.length - 1 && f.Editor.insertSoftBreak(t)
                                                    })
                                                }, {
                                                    at: r
                                                });
                                                if (f.Path.equals(r.anchor.path, r.focus.path)) {
                                                    var [L, F] = f.Range.edges(r), U = {
                                                        start: L.offset,
                                                        end: F.offset,
                                                        text: I
                                                    };
                                                    if (I && c && "insertCompositionText" === n) {
                                                        var Y = c.start + c.text.search(/\S|$/);
                                                        U.start + U.text.search(/\S|$/) === Y + 1 && U.end === c.start + c.text.length ? (U.start -= 1, c = null, y()) : c = !1
                                                    } else c = "insertText" === n && (null === c ? U : !!(c && f.Range.isCollapsed(r)) && c.end + c.text.length === L.offset && tt(tt({}, c), {}, {
                                                        text: c.text + I
                                                    }));
                                                    if (u) {
                                                        m(L.path, U);
                                                        return
                                                    }
                                                }
                                                return g(() => f.Editor.insertText(t, I), {
                                                    at: r
                                                })
                                        }
                                    }
                                },
                                handleKeyDown: e => {
                                    !b() && (h(!0), setTimeout(h))
                                },
                                handleDomMutations: e => {
                                    if (!(b() || _()) && e.some(n => ea(t, n, e))) {
                                        var n;
                                        null === (n = j.get(t)) || void 0 === n || n()
                                    }
                                },
                                handleInput: () => {
                                    (_() || !b()) && p()
                                }
                            }
                        })(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ta(Object(n), !0).forEach(function(t) {
                                    _(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({
                            editor: i
                        }, r)));
                    return ! function(e, t, n) {
                        var [r] = (0, c.useState)(() => new MutationObserver(t));
                        eO(() => {
                            r.takeRecords()
                        }), (0, c.useEffect)(() => {
                            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                            return r.observe(e.current, n), () => r.disconnect()
                        }, [])
                    }(n, o.handleDomMutations, to), L.set(i, o.scheduleFlush), a && o.flush(), o
                }({
                    node: et,
                    onDOMSelectionChange: ef,
                    scheduleOnDOMSelectionChange: eh
                });
            eO(() => {
                et.current && (e = V(et.current)) ? (x.set(X, e), w.set(X, et.current), D.set(X, et.current), C.set(et.current, X)) : D.delete(X);
                var e, {
                        selection: t
                    } = X,
                    n = eE.findDocumentOrShadowRoot(X).getSelection();
                if (!(!n || !eE.isFocused(X) || null != em && em.hasPendingAction())) {
                    var r = e => {
                            var r = "None" !== n.type;
                            if (t || r) {
                                var i = w.get(X),
                                    a = !1;
                                if (i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e) {
                                    var o = eE.toSlateRange(X, n, {
                                        exactMatch: !0,
                                        suppressThrow: !0
                                    });
                                    if (o && f.Range.equals(o, t)) {
                                        if (!eu.hasMarkPlaceholder) return;
                                        var s, {
                                            anchorNode: u
                                        } = n;
                                        if (null != u && null !== (s = u.parentElement) && void 0 !== s && s.hasAttribute("data-slate-mark-placeholder")) return
                                    }
                                }
                                if (t && !eE.hasRange(X, t)) {
                                    X.selection = eE.toSlateRange(X, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    return
                                }
                                eu.isUpdatingSelection = !0;
                                var c = t && eE.toDOMRange(X, t);
                                return c ? (f.Range.isBackward(t) ? n.setBaseAndExtent(c.endContainer, c.endOffset, c.startContainer, c.startOffset) : n.setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset), M(X, c)) : n.removeAllRanges(), c
                            }
                        },
                        i = r(),
                        a = (null == em ? void 0 : em.isFlushing()) === "action";
                    if (!ec || !a) {
                        setTimeout(() => {
                            i && el && eE.toDOMNode(X, X).focus(), eu.isUpdatingSelection = !1
                        });
                        return
                    }
                    var o = null,
                        s = requestAnimationFrame(() => {
                            if (a) {
                                var e = e => {
                                    try {
                                        eE.toDOMNode(X, X).focus(), r(e)
                                    } catch (e) {}
                                };
                                e(), o = setTimeout(() => {
                                    e(!0), eu.isUpdatingSelection = !1
                                })
                            }
                        });
                    return () => {
                        cancelAnimationFrame(s), o && clearTimeout(o)
                    }
                }
            });
            var eS = (0, c.useCallback)(e => {
                    if (er(), !y && eE.hasEditableTarget(X, e.target) && !t_(e, g)) {
                        if (em) return em.handleDOMBeforeInput(e);
                        eh.flush(), ef.flush();
                        var {
                            selection: t
                        } = X, {
                            inputType: n
                        } = e, r = e.dataTransfer || e.data || void 0, i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (i && eE.isComposing(X)) return;
                        var a = !1;
                        if ("insertText" === n && t && f.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                            a = !0, X.marks && (a = !1);
                            var {
                                anchor: o
                            } = t, [s, u] = eE.toDOMPoint(X, o), c = null === (p = s.parentElement) || void 0 === p ? void 0 : p.closest("a"), l = eE.getWindow(X);
                            if (a && c && eE.hasDOMNode(X, c)) {
                                var d, p, h, m, _ = null == l ? void 0 : l.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                                _ === s && (null === (m = _.textContent) || void 0 === m ? void 0 : m.length) === u && (a = !1)
                            }
                            if (a && s.parentElement && (null == l ? void 0 : null === (h = l.getComputedStyle(s.parentElement)) || void 0 === h ? void 0 : h.whiteSpace) === "pre") {
                                var b = f.Editor.above(X, {
                                    at: o.path,
                                    match: e => f.Element.isElement(e) && f.Editor.isBlock(X, e)
                                });
                                b && f.Node.string(b[0]).includes("	") && (a = !1)
                            }
                        }
                        if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                            var [v] = e.getTargetRanges();
                            if (v) {
                                var E = eE.toSlateRange(X, v, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                if (!t || !f.Range.equals(t, E)) {
                                    a = !1;
                                    var S = !i && X.selection && f.Editor.rangeRef(X, X.selection);
                                    f.Transforms.select(X, E), S && N.set(X, S)
                                }
                            }
                        }
                        if (!i) {
                            if (!a && e.preventDefault(), t && f.Range.isExpanded(t) && n.startsWith("delete")) {
                                var x = n.endsWith("Backward") ? "backward" : "forward";
                                f.Editor.deleteFragment(X, {
                                    direction: x
                                });
                                return
                            }
                            switch (n) {
                                case "deleteByComposition":
                                case "deleteByCut":
                                case "deleteByDrag":
                                    f.Editor.deleteFragment(X);
                                    break;
                                case "deleteContent":
                                case "deleteContentForward":
                                    f.Editor.deleteForward(X);
                                    break;
                                case "deleteContentBackward":
                                    f.Editor.deleteBackward(X);
                                    break;
                                case "deleteEntireSoftLine":
                                    f.Editor.deleteBackward(X, {
                                        unit: "line"
                                    }), f.Editor.deleteForward(X, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineBackward":
                                    f.Editor.deleteBackward(X, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineBackward":
                                    f.Editor.deleteBackward(X, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineForward":
                                    f.Editor.deleteForward(X, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineForward":
                                    f.Editor.deleteForward(X, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteWordBackward":
                                    f.Editor.deleteBackward(X, {
                                        unit: "word"
                                    });
                                    break;
                                case "deleteWordForward":
                                    f.Editor.deleteForward(X, {
                                        unit: "word"
                                    });
                                    break;
                                case "insertLineBreak":
                                    f.Editor.insertSoftBreak(X);
                                    break;
                                case "insertParagraph":
                                    f.Editor.insertBreak(X);
                                    break;
                                case "insertFromComposition":
                                case "insertFromDrop":
                                case "insertFromPaste":
                                case "insertFromYank":
                                case "insertReplacementText":
                                case "insertText":
                                    "insertFromComposition" === n && eE.isComposing(X) && (ee(!1), R.set(X, !1)), (null == r ? void 0 : r.constructor.name) === "DataTransfer" ? eE.insertData(X, r) : "string" == typeof r && (a ? en.current.push(() => f.Editor.insertText(X, r)) : f.Editor.insertText(X, r))
                            }
                            var w = null === (d = N.get(X)) || void 0 === d ? void 0 : d.unref();
                            N.delete(X), w && (!X.selection || !f.Range.equals(X.selection, w)) && f.Transforms.select(X, w)
                        }
                    }
                }, [y, g]),
                ex = (0, c.useCallback)(e => {
                    null == e ? (ef.cancel(), eh.cancel(), w.delete(X), D.delete(X), et.current && ey && et.current.removeEventListener("beforeinput", eS)) : ey && e.addEventListener("beforeinput", eS), et.current = e
                }, [et, eS, ef, eh]);
            eO(() => {
                var e = eE.getWindow(X);
                return e.document.addEventListener("selectionchange", eh), () => {
                    e.document.removeEventListener("selectionchange", eh)
                }
            }, [eh]);
            var ew = m([X, []]);
            if (v && 1 === X.children.length && 1 === Array.from(f.Node.texts(X)).length && "" === f.Node.string(X) && !J) {
                var eT = f.Editor.start(X, []);
                ew.push({
                    [z]: !0,
                    placeholder: v,
                    anchor: eT,
                    focus: eT
                })
            }
            var {
                marks: eC
            } = X;
            if (eu.hasMarkPlaceholder = !1, X.selection && f.Range.isCollapsed(X.selection) && eC) {
                var {
                    anchor: eD
                } = X.selection, eM = f.Node.leaf(X, eD.path), eA = b(eM, tu);
                if (!f.Text.equals(eM, eC, {
                        loose: !0
                    })) {
                    eu.hasMarkPlaceholder = !0;
                    var ek = Object.fromEntries(Object.keys(eA).map(e => [e, null]));
                    ew.push(tl(tl(tl({
                        [H]: !0
                    }, ek), eC), {}, {
                        anchor: eD,
                        focus: eD
                    }))
                }
            }(0, c.useEffect)(() => {
                setTimeout(() => {
                    var {
                        selection: e
                    } = X;
                    if (e) {
                        var {
                            anchor: t
                        } = e, n = f.Node.leaf(X, t.path);
                        if (eC && !f.Text.equals(n, eC, {
                                loose: !0
                            })) {
                            P.set(X, eC);
                            return
                        }
                    }
                    P.delete(X)
                })
            });
            var eR = null === (s = T.get(X)) || void 0 === s ? void 0 : null === (d = s.getBoundingClientRect()) || void 0 === d ? void 0 : d.height;
            return l().createElement(eV.Provider, {
                value: y
            }, l().createElement(eY.Provider, {
                value: m
            }, l().createElement(e3, {
                node: et,
                receivedUserInput: ei
            }, l().createElement(G, Object.assign({
                role: y ? void 0 : "textbox",
                "aria-multiline": !y || void 0
            }, Q, {
                spellCheck: (!!ey || !ev) && Q.spellCheck,
                autoCorrect: ey || !ev ? Q.autoCorrect : "false",
                autoCapitalize: ey || !ev ? Q.autoCapitalize : "false",
                "data-slate-editor": !0,
                "data-slate-node": "value",
                contentEditable: !y,
                zindex: -1,
                suppressContentEditableWarning: !0,
                ref: ex,
                style: tl(tl({}, $ ? {} : tl({
                    position: "relative",
                    outline: "none",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word"
                }, eR ? {
                    minHeight: eR
                } : {})), I),
                onBeforeInput: (0, c.useCallback)(e => {
                    if (!ey && !y && !tg(e, Q.onBeforeInput) && eE.hasSelectableTarget(X, e.target) && (e.preventDefault(), !eE.isComposing(X))) {
                        var t = e.data;
                        f.Editor.insertText(X, t)
                    }
                }, [y]),
                onInput: (0, c.useCallback)(e => {
                    if (!tg(e, Q.onInput)) {
                        if (em) {
                            em.handleInput();
                            return
                        }
                        for (var t of en.current) t();
                        en.current = []
                    }
                }, []),
                onBlur: (0, c.useCallback)(e => {
                    if (y || eu.isUpdatingSelection || !eE.hasSelectableTarget(X, e.target) || tg(e, Q.onBlur)) return;
                    var t = eE.findDocumentOrShadowRoot(X);
                    if (eu.latestElement === t.activeElement) return;
                    var {
                        relatedTarget: n
                    } = e;
                    if (n !== eE.toDOMNode(X, X)) {
                        if (!(W(n) && n.hasAttribute("data-slate-spacer"))) {
                            if (null != n && K(n) && eE.hasDOMNode(X, n)) {
                                var r = eE.toSlateNode(X, n);
                                if (f.Element.isElement(r) && !X.isVoid(r)) return
                            }
                            if (ed) {
                                var i = t.getSelection();
                                null == i || i.removeAllRanges()
                            }
                            k.delete(X)
                        }
                    }
                }, [y, Q.onBlur]),
                onClick: (0, c.useCallback)(e => {
                    if (eE.hasTarget(X, e.target) && !tg(e, Q.onClick) && K(e.target)) {
                        var t = eE.toSlateNode(X, e.target),
                            n = eE.findPath(X, t);
                        if (!!f.Editor.hasPath(X, n) && f.Node.get(X, n) === t) {
                            if (3 === e.detail && n.length >= 1) {
                                var r = n;
                                if (!(f.Element.isElement(t) && f.Editor.isBlock(X, t))) {
                                    var i, a = f.Editor.above(X, {
                                        match: e => f.Element.isElement(e) && f.Editor.isBlock(X, e),
                                        at: n
                                    });
                                    r = null !== (i = null == a ? void 0 : a[1]) && void 0 !== i ? i : n.slice(0, 1)
                                }
                                var o = f.Editor.range(X, r);
                                f.Transforms.select(X, o);
                                return
                            }
                            if (!y) {
                                var s = f.Editor.start(X, n),
                                    u = f.Editor.end(X, n),
                                    c = f.Editor.void(X, {
                                        at: s
                                    }),
                                    l = f.Editor.void(X, {
                                        at: u
                                    });
                                if (c && l && f.Path.equals(c[1], l[1])) {
                                    var d = f.Editor.range(X, s);
                                    f.Transforms.select(X, d)
                                }
                            }
                        }
                    }
                }, [y, Q.onClick]),
                onCompositionEnd: (0, c.useCallback)(e => {
                    if (eE.hasSelectableTarget(X, e.target) && (eE.isComposing(X) && (ee(!1), R.set(X, !1)), null == em || em.handleCompositionEnd(e), !tg(e, Q.onCompositionEnd) && !ec && !ed && !eg && !es && !eb && !e_ && e.data)) {
                        var t = P.get(X);
                        P.delete(X), void 0 !== t && (F.set(X, X.marks), X.marks = t), f.Editor.insertText(X, e.data);
                        var n = F.get(X);
                        F.delete(X), void 0 !== n && (X.marks = n)
                    }
                }, [Q.onCompositionEnd]),
                onCompositionUpdate: (0, c.useCallback)(e => {
                    eE.hasSelectableTarget(X, e.target) && !tg(e, Q.onCompositionUpdate) && !eE.isComposing(X) && (ee(!0), R.set(X, !0))
                }, [Q.onCompositionUpdate]),
                onCompositionStart: (0, c.useCallback)(e => {
                    if (eE.hasSelectableTarget(X, e.target) && (null == em || em.handleCompositionStart(e), !tg(e, Q.onCompositionStart) && !ec)) {
                        ee(!0);
                        var {
                            selection: t
                        } = X;
                        if (t) {
                            if (f.Range.isExpanded(t)) {
                                f.Editor.deleteFragment(X);
                                return
                            }
                            var n = f.Editor.above(X, {
                                match: e => f.Element.isElement(e) && f.Editor.isInline(X, e),
                                mode: "highest"
                            });
                            if (n) {
                                var [, r] = n;
                                if (f.Editor.isEnd(X, t.anchor, r)) {
                                    var i = f.Editor.after(X, r);
                                    f.Transforms.setSelection(X, {
                                        anchor: i,
                                        focus: i
                                    })
                                }
                            }
                        }
                    }
                }, [Q.onCompositionStart]),
                onCopy: (0, c.useCallback)(e => {
                    eE.hasSelectableTarget(X, e.target) && !tg(e, Q.onCopy) && (e.preventDefault(), eE.setFragmentData(X, e.clipboardData, "copy"))
                }, [Q.onCopy]),
                onCut: (0, c.useCallback)(e => {
                    if (!y && eE.hasSelectableTarget(X, e.target) && !tg(e, Q.onCut)) {
                        e.preventDefault(), eE.setFragmentData(X, e.clipboardData, "cut");
                        var {
                            selection: t
                        } = X;
                        if (t) {
                            if (f.Range.isExpanded(t)) f.Editor.deleteFragment(X);
                            else {
                                var n = f.Node.parent(X, t.anchor.path);
                                f.Editor.isVoid(X, n) && f.Transforms.delete(X)
                            }
                        }
                    }
                }, [y, Q.onCut]),
                onDragOver: (0, c.useCallback)(e => {
                    if (eE.hasTarget(X, e.target) && !tg(e, Q.onDragOver)) {
                        var t = eE.toSlateNode(X, e.target);
                        f.Element.isElement(t) && f.Editor.isVoid(X, t) && e.preventDefault()
                    }
                }, [Q.onDragOver]),
                onDragStart: (0, c.useCallback)(e => {
                    if (!y && eE.hasTarget(X, e.target) && !tg(e, Q.onDragStart)) {
                        var t = eE.toSlateNode(X, e.target),
                            n = eE.findPath(X, t);
                        if (f.Element.isElement(t) && f.Editor.isVoid(X, t) || f.Editor.void(X, {
                                at: n,
                                voids: !0
                            })) {
                            var r = f.Editor.range(X, n);
                            f.Transforms.select(X, r)
                        }
                        eu.isDraggingInternally = !0, eE.setFragmentData(X, e.dataTransfer, "drag")
                    }
                }, [y, Q.onDragStart]),
                onDrop: (0, c.useCallback)(e => {
                    if (!y && eE.hasTarget(X, e.target) && !tg(e, Q.onDrop)) {
                        e.preventDefault();
                        var t = X.selection,
                            n = eE.findEventRange(X, e),
                            r = e.dataTransfer;
                        f.Transforms.select(X, n), eu.isDraggingInternally && t && !f.Range.equals(t, n) && !f.Editor.void(X, {
                            at: n,
                            voids: !0
                        }) && f.Transforms.delete(X, {
                            at: t
                        }), eE.insertData(X, r), !eE.isFocused(X) && eE.focus(X)
                    }
                    eu.isDraggingInternally = !1
                }, [y, Q.onDrop]),
                onDragEnd: (0, c.useCallback)(e => {
                    !y && eu.isDraggingInternally && Q.onDragEnd && eE.hasTarget(X, e.target) && Q.onDragEnd(e), eu.isDraggingInternally = !1
                }, [y, Q.onDragEnd]),
                onFocus: (0, c.useCallback)(e => {
                    if (!y && !eu.isUpdatingSelection && eE.hasEditableTarget(X, e.target) && !tg(e, Q.onFocus)) {
                        var t = eE.toDOMNode(X, X),
                            n = eE.findDocumentOrShadowRoot(X);
                        if (eu.latestElement = n.activeElement, el && e.target !== t) {
                            t.focus();
                            return
                        }
                        k.set(X, !0)
                    }
                }, [y, Q.onFocus]),
                onKeyDown: (0, c.useCallback)(e => {
                    if (!y && eE.hasEditableTarget(X, e.target)) {
                        null == em || em.handleKeyDown(e);
                        var {
                            nativeEvent: t
                        } = e;
                        if (eE.isComposing(X) && !1 === t.isComposing && (R.set(X, !1), ee(!1)), !(tg(e, Q.onKeyDown) || eE.isComposing(X))) {
                            var {
                                selection: n
                            } = X, r = X.children[null !== n ? n.focus.path[0] : 0], a = "rtl" === i()(f.Node.string(r));
                            if (eJ.isRedo(t)) {
                                e.preventDefault();
                                "function" == typeof X.redo && X.redo();
                                return
                            }
                            if (eJ.isUndo(t)) {
                                e.preventDefault();
                                "function" == typeof X.undo && X.undo();
                                return
                            }
                            if (eJ.isMoveLineBackward(t)) {
                                e.preventDefault(), f.Transforms.move(X, {
                                    unit: "line",
                                    reverse: !0
                                });
                                return
                            }
                            if (eJ.isMoveLineForward(t)) {
                                e.preventDefault(), f.Transforms.move(X, {
                                    unit: "line"
                                });
                                return
                            }
                            if (eJ.isExtendLineBackward(t)) {
                                e.preventDefault(), f.Transforms.move(X, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0
                                });
                                return
                            }
                            if (eJ.isExtendLineForward(t)) {
                                e.preventDefault(), f.Transforms.move(X, {
                                    unit: "line",
                                    edge: "focus"
                                });
                                return
                            }
                            if (eJ.isMoveBackward(t)) {
                                e.preventDefault(), n && f.Range.isCollapsed(n) ? f.Transforms.move(X, {
                                    reverse: !a
                                }) : f.Transforms.collapse(X, {
                                    edge: "start"
                                });
                                return
                            }
                            if (eJ.isMoveForward(t)) {
                                e.preventDefault(), n && f.Range.isCollapsed(n) ? f.Transforms.move(X, {
                                    reverse: a
                                }) : f.Transforms.collapse(X, {
                                    edge: "end"
                                });
                                return
                            }
                            if (eJ.isMoveWordBackward(t)) {
                                e.preventDefault(), n && f.Range.isExpanded(n) && f.Transforms.collapse(X, {
                                    edge: "focus"
                                }), f.Transforms.move(X, {
                                    unit: "word",
                                    reverse: !a
                                });
                                return
                            }
                            if (eJ.isMoveWordForward(t)) {
                                e.preventDefault(), n && f.Range.isExpanded(n) && f.Transforms.collapse(X, {
                                    edge: "focus"
                                }), f.Transforms.move(X, {
                                    unit: "word",
                                    reverse: a
                                });
                                return
                            }
                            if (ey) {
                                if ((ep || ed) && n && (eJ.isDeleteBackward(t) || eJ.isDeleteForward(t)) && f.Range.isCollapsed(n)) {
                                    var o = f.Node.parent(X, n.anchor.path);
                                    if (f.Element.isElement(o) && f.Editor.isVoid(X, o) && (f.Editor.isInline(X, o) || f.Editor.isBlock(X, o))) {
                                        e.preventDefault(), f.Editor.deleteBackward(X, {
                                            unit: "block"
                                        });
                                        return
                                    }
                                }
                            } else {
                                if (eJ.isBold(t) || eJ.isItalic(t) || eJ.isTransposeCharacter(t)) {
                                    e.preventDefault();
                                    return
                                }
                                if (eJ.isSoftBreak(t)) {
                                    e.preventDefault(), f.Editor.insertSoftBreak(X);
                                    return
                                }
                                if (eJ.isSplitBlock(t)) {
                                    e.preventDefault(), f.Editor.insertBreak(X);
                                    return
                                }
                                if (eJ.isDeleteBackward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(X);
                                    return
                                }
                                if (eJ.isDeleteForward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(X);
                                    return
                                }
                                if (eJ.isDeleteLineBackward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(X, {
                                        unit: "line"
                                    });
                                    return
                                }
                                if (eJ.isDeleteLineForward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(X, {
                                        unit: "line"
                                    });
                                    return
                                }
                                if (eJ.isDeleteWordBackward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(X, {
                                        unit: "word"
                                    });
                                    return
                                }
                                if (eJ.isDeleteWordForward(t)) {
                                    e.preventDefault(), n && f.Range.isExpanded(n) ? f.Editor.deleteFragment(X, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(X, {
                                        unit: "word"
                                    });
                                    return
                                }
                            }
                        }
                    }
                }, [y, Q.onKeyDown]),
                onPaste: (0, c.useCallback)(e => {
                    !y && eE.hasEditableTarget(X, e.target) && !tg(e, Q.onPaste) && (!ey || Z(e.nativeEvent) || ed) && (e.preventDefault(), eE.insertData(X, e.clipboardData))
                }, [y, Q.onPaste])
            }), l().createElement(td, {
                decorations: ew,
                node: X,
                renderElement: E,
                renderPlaceholder: O,
                renderLeaf: S,
                selection: X.selection
            })))))
        },
        tp = e => {
            var {
                attributes: t,
                children: n
            } = e;
            return l().createElement("span", Object.assign({}, t), n, ec && l().createElement("br", null))
        },
        th = () => [],
        tm = (e, t) => {
            if (t.getBoundingClientRect && (!e.selection || e.selection && f.Range.isCollapsed(e.selection))) {
                var n = t.startContainer.parentElement;
                n.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, d.default)(n, {
                    scrollMode: "if-needed"
                }), delete n.getBoundingClientRect
            }
        },
        tg = (e, t) => {
            if (!t) return !1;
            var n = t(e);
            return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped()
        },
        t_ = (e, t) => {
            if (!t) return !1;
            var n = t(e);
            return null != n ? n : e.defaultPrevented
        },
        tb = (0, c.createContext)(!1),
        tv = () => (0, c.useContext)(tb),
        ty = (0, c.createContext)({}),
        tE = ["editor", "children", "onChange", "value"],
        tS = e => {
            var t, n, r, i, {
                    editor: a,
                    children: o,
                    onChange: s,
                    value: u
                } = e,
                d = b(e, tE),
                p = (0, c.useRef)(!1),
                [h, m] = l().useState(() => {
                    if (!f.Node.isNodeList(u)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(f.Scrubber.stringify(u)));
                    if (!f.Editor.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.Scrubber.stringify(a)));
                    return a.children = u, Object.assign(a, d), {
                        v: 0,
                        editor: a
                    }
                });
            var {
                selectorContext: g,
                onChange: _
            } = (t = a, n = (0, c.useRef)([]).current, r = (0, c.useRef)({
                editor: t
            }).current, i = (0, c.useCallback)(e => {
                r.editor = e, n.forEach(t => t(e))
            }, []), {
                selectorContext: (0, c.useMemo)(() => ({
                    getSlate: () => r.editor,
                    addEventListener: e => (n.push(e), () => {
                        n.splice(n.indexOf(e), 1)
                    })
                }), [n, r]),
                onChange: i
            }), v = (0, c.useCallback)(() => {
                s && s(a.children), m(e => ({
                    v: e.v + 1,
                    editor: a
                })), _(a)
            }, [s]);
            (0, c.useEffect)(() => (I.set(a, v), () => {
                I.set(a, () => {}), p.current = !0
            }), [v]);
            var [y, E] = (0, c.useState)(eE.isFocused(a));
            return (0, c.useEffect)(() => {
                E(eE.isFocused(a))
            }), eO(() => {
                var e = () => E(eE.isFocused(a));
                return eo ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                    document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                })
            }, []), l().createElement(ty.Provider, {
                value: g
            }, l().createElement(eW.Provider, {
                value: h
            }, l().createElement(eN.Provider, {
                value: h.editor
            }, l().createElement(tb.Provider, {
                value: y
            }, o))))
        },
        tx = (e, t) => {
            var n = (t.top + t.bottom) / 2;
            return e.top <= n && e.bottom >= n
        },
        tw = (e, t, n) => {
            var r = eE.toDOMRange(e, t).getBoundingClientRect(),
                i = eE.toDOMRange(e, n).getBoundingClientRect();
            return tx(r, i) && tx(i, r)
        },
        tT = (e, t) => {
            var n = f.Editor.range(e, f.Range.end(t)),
                r = Array.from(f.Editor.positions(e, {
                    at: t
                })),
                i = 0,
                a = r.length,
                o = Math.floor(a / 2);
            if (tw(e, f.Editor.range(e, r[i]), n)) return f.Editor.range(e, r[i], n);
            if (r.length < 2) return f.Editor.range(e, r[r.length - 1], n);
            for (; o !== r.length && o !== i;) tw(e, f.Editor.range(e, r[o]), n) ? a = o : i = o, o = Math.floor((i + a) / 2);
            return f.Editor.range(e, r[a], n)
        };

    function tC(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function tD(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tC(Object(n), !0).forEach(function(t) {
                _(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tC(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var tO = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                {
                    apply: n,
                    onChange: r,
                    deleteBackward: i,
                    addMark: a,
                    removeMark: o
                } = e;
            return M.set(e, new WeakMap), e.addMark = (t, n) => {
                var r, i;
                null === (r = L.get(e)) || void 0 === r || r(), !P.get(e) && null !== (i = B.get(e)) && void 0 !== i && i.length && P.set(e, null), F.delete(e), a(t, n)
            }, e.removeMark = t => {
                var n;
                !P.get(e) && null !== (n = B.get(e)) && void 0 !== n && n.length && P.set(e, null), F.delete(e), o(t)
            }, e.deleteBackward = t => {
                if ("line" !== t) return i(t);
                if (e.selection && f.Range.isCollapsed(e.selection)) {
                    var n = f.Editor.above(e, {
                        match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                        at: e.selection
                    });
                    if (n) {
                        var [, r] = n, a = f.Editor.range(e, r, e.selection.anchor), o = tT(e, a);
                        !f.Range.isCollapsed(o) && f.Transforms.delete(e, {
                            at: o
                        })
                    }
                }
            }, e.apply = t => {
                var r, i = [],
                    a = B.get(e);
                if (null != a && a.length) {
                    var o = a.map(e => (function(e, t) {
                        var {
                            path: n,
                            diff: r,
                            id: i
                        } = e;
                        switch (t.type) {
                            case "insert_text":
                                if (!f.Path.equals(t.path, n) || t.offset >= r.end) return e;
                                if (t.offset <= r.start) return {
                                    diff: {
                                        start: t.text.length + r.start,
                                        end: t.text.length + r.end,
                                        text: r.text
                                    },
                                    id: i,
                                    path: n
                                };
                                return {
                                    diff: {
                                        start: r.start,
                                        end: r.end + t.text.length,
                                        text: r.text
                                    }, id: i, path: n
                                };
                            case "remove_text":
                                if (!f.Path.equals(t.path, n) || t.offset >= r.end) return e;
                                if (t.offset + t.text.length <= r.start) return {
                                    diff: {
                                        start: r.start - t.text.length,
                                        end: r.end - t.text.length,
                                        text: r.text
                                    },
                                    id: i,
                                    path: n
                                };
                                return {
                                    diff: {
                                        start: r.start,
                                        end: r.end - t.text.length,
                                        text: r.text
                                    }, id: i, path: n
                                };
                            case "split_node":
                                if (!f.Path.equals(t.path, n) || t.position >= r.end) return {
                                    diff: r,
                                    id: i,
                                    path: f.Path.transform(n, t, {
                                        affinity: "backward"
                                    })
                                };
                                if (t.position > r.start) return {
                                    diff: {
                                        start: r.start,
                                        end: Math.min(t.position, r.end),
                                        text: r.text
                                    },
                                    id: i,
                                    path: n
                                };
                                return {
                                    diff: {
                                        start: r.start - t.position,
                                        end: r.end - t.position,
                                        text: r.text
                                    }, id: i, path: f.Path.transform(n, t, {
                                        affinity: "forward"
                                    })
                                };
                            case "merge_node":
                                if (!f.Path.equals(t.path, n)) return {
                                    diff: r,
                                    id: i,
                                    path: f.Path.transform(n, t)
                                };
                                return {
                                    diff: {
                                        start: r.start + t.position,
                                        end: r.end + t.position,
                                        text: r.text
                                    }, id: i, path: f.Path.transform(n, t)
                                }
                        }
                        var a = f.Path.transform(n, t);
                        return a ? {
                            diff: r,
                            path: a,
                            id: i
                        } : null
                    })(e, t)).filter(Boolean);
                    B.set(e, o)
                }
                var s = Y.get(e);
                s && Y.set(e, e7(e, s, t));
                var u = U.get(e);
                if (null != u && u.at) {
                    var c = f.Point.isPoint(null == u ? void 0 : u.at) ? e9(e, u.at, t) : e7(e, u.at, t);
                    U.set(e, c ? tD(tD({}, u), {}, {
                        at: c
                    }) : null)
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tM(e, t.path));
                        break;
                    case "set_selection":
                        null === (r = N.get(e)) || void 0 === r || r.unref(), N.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tM(e, f.Path.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...tM(e, f.Path.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...tM(e, f.Path.common(f.Path.parent(t.path), f.Path.parent(t.newPath))))
                }
                for (var [l, d] of(n(t), i)) {
                    var [p] = f.Editor.node(e, l);
                    O.set(p, d)
                }
            }, e.setFragmentData = n => {
                var {
                    selection: r
                } = e;
                if (!!r) {
                    var [i, a] = f.Range.edges(r), o = f.Editor.void(e, {
                        at: i.path
                    }), s = f.Editor.void(e, {
                        at: a.path
                    });
                    if (!f.Range.isCollapsed(r) || o) {
                        var u = eE.toDOMRange(e, r),
                            c = u.cloneContents(),
                            l = c.childNodes[0];
                        if (c.childNodes.forEach(e => {
                                e.textContent && "" !== e.textContent.trim() && (l = e)
                            }), s) {
                            var [d] = s, p = u.cloneRange(), h = eE.toDOMNode(e, d);
                            p.setEndAfter(h), c = p.cloneContents()
                        }
                        if (o && (l = c.querySelector("[data-slate-spacer]")), Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : ""
                            }), Q(l)) {
                            var m = l.ownerDocument.createElement("span");
                            m.style.whiteSpace = "pre", m.appendChild(l), c.appendChild(m), l = m
                        }
                        var g = JSON.stringify(e.getFragment()),
                            _ = window.btoa(encodeURIComponent(g));
                        l.setAttribute("data-slate-fragment", _), n.setData("application/".concat(t), _);
                        var b = c.ownerDocument.createElement("div");
                        return b.appendChild(c), b.setAttribute("hidden", "true"), c.ownerDocument.body.appendChild(b), n.setData("text/html", b.innerHTML), n.setData("text/plain", en(b)), c.ownerDocument.body.removeChild(b), n
                    }
                }
            }, e.insertData = t => {
                !e.insertFragmentData(t) && e.insertTextData(t)
            }, e.insertFragmentData = n => {
                var r = n.getData("application/".concat(t)) || ei(n);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return e.insertFragment(i), !0
                }
                return !1
            }, e.insertTextData = t => {
                var n = t.getData("text/plain");
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && f.Transforms.splitNodes(e, {
                        always: !0
                    }), e.insertText(a), i = !0;
                    return !0
                }
                return !1
            }, e.onChange = t => {
                g().unstable_batchedUpdates(() => {
                    var n = I.get(e);
                    n && n(), r(t)
                })
            }, e
        },
        tM = (e, t) => {
            var n = [];
            for (var [r, i] of f.Editor.levels(e, {
                    at: t
                })) {
                var a = eE.findKey(e, r);
                n.push([i, a])
            }
            return n
        }
}