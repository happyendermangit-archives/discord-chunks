function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        Editable: function() {
            return td
        },
        ReactEditor: function() {
            return eE
        },
        Slate: function() {
            return tE
        },
        useFocused: function() {
            return tC
        },
        useSelected: function() {
            return eq
        },
        useSlateStatic: function() {
            return eT
        },
        withReact: function() {
            return t_
        }
    }), r("222007"), r("70102"), r("843762"), r("424973"), r("808653"), r("106442"), r("175143"), r("781738"), r("101997");
    var n = r("717837"),
        i = r.n(n),
        o = r("478098"),
        a = r.n(o),
        u = r("229042"),
        s = r.n(u),
        l = r("884691"),
        c = r.n(l),
        d = r("390266"),
        f = r("987295"),
        h = r("871477"),
        p = r("165826"),
        v = r("817736"),
        D = r.n(v);

    function g(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function C(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++) {
                if (r = o[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
        }
        return i
    }
    var m = 0;
    class y {
        constructor() {
            this.id = "".concat(m++)
        }
    }
    var E = new WeakMap,
        B = new WeakMap,
        b = new WeakMap,
        A = new WeakMap,
        w = new WeakMap,
        F = new WeakMap,
        _ = new WeakMap,
        O = new WeakMap,
        x = new WeakMap,
        k = new WeakMap,
        P = new WeakMap,
        S = new WeakMap,
        T = new WeakMap,
        j = new WeakMap,
        M = new WeakMap,
        R = new WeakMap,
        I = new WeakMap,
        L = new WeakMap,
        N = new WeakMap,
        z = new WeakMap,
        W = new WeakMap,
        q = Symbol("placeholder"),
        V = Symbol("mark-placeholder"),
        U = globalThis.Text,
        H = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
        J = e => $(e) && 8 === e.nodeType,
        K = e => $(e) && 1 === e.nodeType,
        $ = e => {
            var t = H(e);
            return !!t && e instanceof t.Node
        },
        X = e => {
            var t = e && e.anchorNode && H(e.anchorNode);
            return !!t && e instanceof t.Selection
        },
        Q = e => $(e) && 3 === e.nodeType,
        G = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
        Y = e => {
            var [t, r] = e;
            if (K(t) && t.childNodes.length) {
                var n = r === t.childNodes.length,
                    i = n ? r - 1 : r;
                for ([t, i] = ee(t, i, n ? "backward" : "forward"), n = i < r; K(t) && t.childNodes.length;) {
                    var o = n ? t.childNodes.length - 1 : 0;
                    t = et(t, o, n ? "backward" : "forward")
                }
                r = n && null != t.textContent ? t.textContent.length : 0
            }
            return [t, r]
        },
        Z = e => {
            for (var t = e && e.parentNode; t;) {
                if ("[object ShadowRoot]" === t.toString()) return !0;
                t = t.parentNode
            }
            return !1
        },
        ee = (e, t, r) => {
            for (var {
                    childNodes: n
                } = e, i = n[t], o = t, a = !1, u = !1;
                (J(i) || K(i) && 0 === i.childNodes.length || K(i) && "false" === i.getAttribute("contenteditable")) && (!a || !u);) {
                ;
                if (o >= n.length) {
                    a = !0, o = t - 1, r = "backward";
                    continue
                }
                if (o < 0) {
                    u = !0, o = t + 1, r = "forward";
                    continue
                }
                i = n[o], t = o, o += "forward" === r ? 1 : -1
            }
            return [i, t]
        },
        et = (e, t, r) => {
            var [n] = ee(e, t, r);
            return n
        },
        er = e => {
            var t = "";
            if (Q(e) && e.nodeValue) return e.nodeValue;
            if (K(e)) {
                for (var r of Array.from(e.childNodes)) t += er(r);
                var n = getComputedStyle(e).getPropertyValue("display");
                ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n")
            }
            return t
        },
        en = /data-slate-fragment="(.+?)"/m,
        ei = e => {
            var [, t] = e.getData("text/html").match(en) || [];
            return t
        },
        eo = (e, t, r) => {
            var {
                target: n
            } = t;
            if (K(n) && n.matches('[contentEditable="false"]')) return !1;
            var {
                document: i
            } = eE.getWindow(e);
            if (i.contains(n)) return eE.hasDOMNode(e, n, {
                editable: !0
            });
            var o = r.find(e => {
                var {
                    addedNodes: t,
                    removedNodes: r
                } = e;
                for (var i of t)
                    if (i === n || i.contains(n)) return !0;
                for (var o of r)
                    if (o === n || o.contains(n)) return !0
            });
            return !!o && o !== t && eo(e, o, r)
        },
        ea = parseInt(c.version.split(".")[0], 10) >= 17,
        eu = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
        el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
        ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        ef = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        eh = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
        ep = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        ev = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        eD = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
        eg = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        eC = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
        em = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
        ey = (!ep || !ev) && !ef && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        eE = {
            isComposing: e => !!S.get(e),
            getWindow(e) {
                var t = b.get(e);
                if (!t) throw Error("Unable to find a host window element for this editor");
                return t
            },
            findKey(e, t) {
                var r = O.get(t);
                return !r && (r = new y, O.set(t, r)), r
            },
            findPath(e, t) {
                for (var r = [], n = t;;) {
                    var i = B.get(n);
                    if (null == i) {
                        if (f.Editor.isEditor(n)) return r;
                        break
                    }
                    var o = E.get(n);
                    if (null == o) break;
                    r.unshift(o), n = i
                }
                throw Error("Unable to find the path for Slate node: ".concat(f.Scrubber.stringify(t)))
            },
            findDocumentOrShadowRoot(e) {
                var t = eE.toDOMNode(e, e),
                    r = t.getRootNode();
                return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
            },
            isFocused: e => !!P.get(e),
            isReadOnly: e => !!k.get(e),
            blur(e) {
                var t = eE.toDOMNode(e, e),
                    r = eE.findDocumentOrShadowRoot(e);
                P.set(e, !1), r.activeElement === t && t.blur()
            },
            focus(e) {
                var t = eE.toDOMNode(e, e),
                    r = eE.findDocumentOrShadowRoot(e);
                P.set(e, !0), r.activeElement !== t && t.focus({
                    preventScroll: !0
                })
            },
            deselect(e) {
                var {
                    selection: t
                } = e, r = eE.findDocumentOrShadowRoot(e).getSelection();
                r && r.rangeCount > 0 && r.removeAllRanges(), t && f.Transforms.deselect(e)
            },
            hasDOMNode(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        editable: i = !1
                    } = n,
                    o = eE.toDOMNode(e, e);
                try {
                    r = K(t) ? t : t.parentElement
                } catch (e) {
                    if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                }
                return !!r && r.closest("[data-slate-editor]") === o && (!i || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === o || !!r.getAttribute("data-slate-zero-width"))
            },
            insertData(e, t) {
                e.insertData(t)
            },
            insertFragmentData: (e, t) => e.insertFragmentData(t),
            insertTextData: (e, t) => e.insertTextData(t),
            setFragmentData(e, t, r) {
                e.setFragmentData(t, r)
            },
            toDOMNode(e, t) {
                var r = x.get(e),
                    n = f.Editor.isEditor(t) ? A.get(e) : null == r ? void 0 : r.get(eE.findKey(e, t));
                if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.Scrubber.stringify(t)));
                return n
            },
            toDOMPoint(e, t) {
                var [r] = f.Editor.node(e, t.path), n = eE.toDOMNode(e, r);
                f.Editor.void(e, {
                    at: t
                }) && (t = {
                    path: t.path,
                    offset: 0
                });
                for (var i = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), o = 0, a = 0; a < i.length; a++) {
                    var u = i[a],
                        s = u.childNodes[0];
                    if (null != s && null != s.textContent) {
                        var {
                            length: l
                        } = s.textContent, c = u.getAttribute("data-slate-length"), d = o + (null == c ? l : parseInt(c, 10)), h = i[a + 1];
                        if (t.offset === d && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                            var p, v, D = h.childNodes[0];
                            p = [D instanceof U ? D : h, null !== (v = h.textContent) && void 0 !== v && v.startsWith("\uFEFF") ? 1 : 0];
                            break
                        }
                        if (t.offset <= d) {
                            p = [s, Math.min(l, Math.max(0, t.offset - o))];
                            break
                        }
                        o = d
                    }
                }
                if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.Scrubber.stringify(t)));
                return p
            },
            toDOMRange(e, t) {
                var {
                    anchor: r,
                    focus: n
                } = t, i = f.Range.isBackward(t), o = eE.toDOMPoint(e, r), a = f.Range.isCollapsed(t) ? o : eE.toDOMPoint(e, n), u = eE.getWindow(e).document.createRange(), [s, l] = i ? a : o, [c, d] = i ? o : a, h = !!(K(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), p = !!(K(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                return u.setStart(s, h ? 1 : l), u.setEnd(c, p ? 1 : d), u
            },
            toSlateNode(e, t) {
                var r = K(t) ? t : t.parentElement;
                r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                var n = r ? F.get(r) : null;
                if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                return n
            },
            findEventRange(e, t) {
                "nativeEvent" in t && (t = t.nativeEvent);
                var r, {
                    clientX: n,
                    clientY: i,
                    target: o
                } = t;
                if (null == n || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                var a = eE.toSlateNode(e, t.target),
                    u = eE.findPath(e, a);
                if (f.Element.isElement(a) && f.Editor.isVoid(e, a)) {
                    var s = o.getBoundingClientRect(),
                        l = e.isInline(a) ? n - s.left < s.left + s.width - n : i - s.top < s.top + s.height - i,
                        c = f.Editor.point(e, u, {
                            edge: l ? "start" : "end"
                        }),
                        d = l ? f.Editor.before(e, c) : f.Editor.after(e, c);
                    if (d) return f.Editor.range(e, d)
                }
                var {
                    document: h
                } = eE.getWindow(e);
                if (h.caretRangeFromPoint) r = h.caretRangeFromPoint(n, i);
                else {
                    var p = h.caretPositionFromPoint(n, i);
                    p && ((r = h.createRange()).setStart(p.offsetNode, p.offset), r.setEnd(p.offsetNode, p.offset))
                }
                if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                return eE.toSlateRange(e, r, {
                    exactMatch: !1,
                    suppressThrow: !1
                })
            },
            toSlatePoint(e, t, r) {
                var {
                    exactMatch: n,
                    suppressThrow: i
                } = r, [o, a] = n ? t : Y(t), u = o.parentNode, s = null, l = 0;
                if (u) {
                    var c, d, h = eE.toDOMNode(e, e),
                        p = u.closest('[data-slate-void="true"]'),
                        v = p && h.contains(p) ? p : null,
                        D = u.closest("[data-slate-leaf]"),
                        g = null;
                    if (D) {
                        if (s = D.closest('[data-slate-node="text"]')) {
                            var C = eE.getWindow(e).document.createRange();
                            C.setStart(s, 0), C.setEnd(o, a);
                            var m = C.cloneContents();
                            [...Array.prototype.slice.call(m.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(m.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                if (el && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                    e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                    return
                                }
                                e.parentNode.removeChild(e)
                            }), l = m.textContent.length, g = s
                        }
                    } else if (v) {
                        for (var y = v.querySelectorAll("[data-slate-leaf]"), E = 0; E < y.length; E++) {
                            var B = y[E];
                            if (eE.hasDOMNode(e, B)) {
                                D = B;
                                break
                            }
                        }
                        D ? (s = D.closest('[data-slate-node="text"]'), l = (g = D).textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                            l -= e.textContent.length
                        })) : l = 1
                    }
                    g && l === g.textContent.length && el && "z" === g.getAttribute("data-slate-zero-width") && null !== (c = g.textContent) && void 0 !== c && c.startsWith("\uFEFF") && (u.hasAttribute("data-slate-zero-width") || ec && null !== (d = g.textContent) && void 0 !== d && d.endsWith("\n\n")) && l--
                }
                if (el && !s && !n) {
                    var b = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
                    if (b && eE.hasDOMNode(e, b, {
                            editable: !0
                        })) {
                        var A = eE.toSlateNode(e, b),
                            {
                                path: w,
                                offset: F
                            } = f.Editor.start(e, eE.findPath(e, A));
                        return !b.querySelector("[data-slate-leaf]") && (F = a), {
                            path: w,
                            offset: F
                        }
                    }
                }
                if (!s) {
                    if (i) return null;
                    throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                }
                var _ = eE.toSlateNode(e, s);
                return {
                    path: eE.findPath(e, _),
                    offset: l
                }
            },
            toSlateRange(e, t, r) {
                var n, i, o, a, u, s, {
                    exactMatch: l,
                    suppressThrow: c
                } = r;
                if ((X(t) ? t.anchorNode : t.startContainer) && (X(t) ? (n = t.anchorNode, i = t.anchorOffset, o = t.focusNode, a = t.focusOffset, u = eh && Z(n) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (n = t.startContainer, i = t.startOffset, o = t.endContainer, a = t.endOffset, u = t.collapsed)), null == n || null == o || null == i || null == a) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                "getAttribute" in o && "false" === o.getAttribute("contenteditable") && (o = n, a = (null === (s = n.textContent) || void 0 === s ? void 0 : s.length) || 0);
                var d = eE.toSlatePoint(e, [n, i], {
                    exactMatch: l,
                    suppressThrow: c
                });
                if (!d) return null;
                var h = u ? d : eE.toSlatePoint(e, [o, a], {
                    exactMatch: l,
                    suppressThrow: c
                });
                if (!h) return null;
                if (ec && !u && n !== o) {
                    var p = f.Editor.isEnd(e, d, d.path),
                        v = f.Editor.isStart(e, h, h.path);
                    p && (d = f.Editor.after(e, d) || d), v && (h = f.Editor.before(e, h) || h)
                }
                var D = {
                    anchor: d,
                    focus: h
                };
                return f.Range.isExpanded(D) && f.Range.isForward(D) && K(o) && f.Editor.void(e, {
                    at: D.focus,
                    mode: "highest"
                }) && (D = f.Editor.unhangRange(e, D, {
                    voids: !0
                })), D
            },
            hasRange(e, t) {
                var {
                    anchor: r,
                    focus: n
                } = t;
                return f.Editor.hasPath(e, r.path) && f.Editor.hasPath(e, n.path)
            },
            hasTarget: (e, t) => $(t) && eE.hasDOMNode(e, t),
            hasEditableTarget: (e, t) => $(t) && eE.hasDOMNode(e, t, {
                editable: !0
            }),
            hasSelectableTarget: (e, t) => eE.hasEditableTarget(e, t) || eE.isTargetInsideNonReadonlyVoid(e, t),
            isTargetInsideNonReadonlyVoid(e, t) {
                if (k.get(e)) return !1;
                var r = eE.hasTarget(e, t) && eE.toSlateNode(e, t);
                return f.Element.isElement(r) && f.Editor.isVoid(e, r)
            },
            androidScheduleFlush(e) {
                var t;
                null === (t = M.get(e)) || void 0 === t || t()
            },
            androidPendingDiffs: e => L.get(e)
        },
        eB = ["anchor", "focus"],
        eb = ["anchor", "focus"],
        eA = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
        ew = (e, t) => {
            var r = C(e, eB),
                n = C(t, eb);
            return e[q] === t[q] && eA(r, n)
        },
        eF = (e, t) => {
            if (e.length !== t.length) return !1;
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    i = t[r];
                if (!f.Range.equals(n, i) || !ew(n, i)) return !1
            }
            return !0
        },
        e_ = (e, t) => {
            if (e.length !== t.length) return !1;
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    i = t[r];
                if (n.anchor.offset !== i.anchor.offset || n.focus.offset !== i.focus.offset || !ew(n, i)) return !1
            }
            return !0
        },
        eO = em ? l.useLayoutEffect : l.useEffect,
        String = e => {
            var {
                isLast: t,
                leaf: r,
                parent: n,
                text: i
            } = e, o = eT(), a = eE.findPath(o, i), u = f.Path.parent(a), s = !0 === r[V];
            return o.isVoid(n) ? c.createElement(eP, {
                length: f.Node.string(n).length
            }) : "" !== r.text || n.children[n.children.length - 1] !== i || o.isInline(n) || "" !== f.Editor.string(o, u) ? "" === r.text ? c.createElement(eP, {
                isMarkPlaceholder: s
            }) : t && "\n" === r.text.slice(-1) ? c.createElement(ex, {
                isTrailing: !0,
                text: r.text
            }) : c.createElement(ex, {
                text: r.text
            }) : c.createElement(eP, {
                isLineBreak: !0,
                isMarkPlaceholder: s
            })
        },
        ex = e => {
            var {
                text: t,
                isTrailing: r = !1
            } = e, n = (0, l.useRef)(null), i = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [o] = (0, l.useState)(i);
            return eO(() => {
                var e = i();
                n.current && n.current.textContent !== e && (n.current.textContent = e)
            }), c.createElement(ek, {
                ref: n
            }, o)
        },
        ek = (0, l.memo)((0, l.forwardRef)((e, t) => c.createElement("span", {
            "data-slate-string": !0,
            ref: t
        }, e.children))),
        eP = e => {
            var {
                length: t = 0,
                isLineBreak: r = !1,
                isMarkPlaceholder: n = !1
            } = e, i = {
                "data-slate-zero-width": r ? "n" : "z",
                "data-slate-length": t
            };
            return n && (i["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, i), el && r ? null : "\uFEFF", r ? c.createElement("br", null) : null)
        },
        eS = (0, l.createContext)(null),
        eT = () => {
            var e = (0, l.useContext)(eS);
            if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
            return e
        },
        ej = c.memo(e => {
            var {
                leaf: t,
                isLast: r,
                text: n,
                parent: i,
                renderPlaceholder: o,
                renderLeaf: a = e => c.createElement(eM, Object.assign({}, e))
            } = e, u = (0, l.useRef)(null), s = (0, l.useRef)(null), d = eT(), f = (0, l.useRef)(null);
            (0, l.useEffect)(() => () => {
                f.current && f.current.disconnect()
            }, []), (0, l.useEffect)(() => {
                var e = null == s ? void 0 : s.current;
                if (e ? w.set(d, e) : w.delete(d), f.current) f.current.disconnect(), e && f.current.observe(e);
                else if (e) {
                    var t = window.ResizeObserver || h.ResizeObserver;
                    f.current = new t(() => {
                        var e = W.get(d);
                        null == e || e()
                    }), f.current.observe(e)
                }
                if (!e && u.current) {
                    var r = W.get(d);
                    null == r || r()
                }
                return u.current = s.current, () => {
                    w.delete(d)
                }
            }, [s, t]);
            var p = c.createElement(String, {
                isLast: r,
                leaf: t,
                parent: i,
                text: n
            });
            if (t[q]) {
                var v = {
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
                        ref: s
                    }
                };
                p = c.createElement(c.Fragment, null, o(v), p)
            }
            return a({
                attributes: {
                    "data-slate-leaf": !0
                },
                children: p,
                leaf: t,
                text: n
            })
        }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && f.Text.equals(t.leaf, e.leaf) && t.leaf[q] === e.leaf[q]),
        eM = e => {
            var {
                attributes: t,
                children: r
            } = e;
            return c.createElement("span", Object.assign({}, t), r)
        },
        eR = c.memo(e => {
            for (var {
                    decorations: t,
                    isLast: r,
                    parent: n,
                    renderPlaceholder: i,
                    renderLeaf: o,
                    text: a
                } = e, u = eT(), s = (0, l.useRef)(null), d = f.Text.decorations(a, t), h = eE.findKey(u, a), p = [], v = 0; v < d.length; v++) {
                var D = d[v];
                p.push(c.createElement(ej, {
                    isLast: r && v === d.length - 1,
                    key: "".concat(h.id, "-").concat(v),
                    renderPlaceholder: i,
                    leaf: D,
                    text: a,
                    parent: n,
                    renderLeaf: o
                }))
            }
            var g = (0, l.useCallback)(e => {
                var t = x.get(u);
                e ? (null == t || t.set(h, e), _.set(a, e), F.set(e, a)) : (null == t || t.delete(h), _.delete(a), s.current && F.delete(s.current)), s.current = e
            }, [s, u, h, a]);
            return c.createElement("span", {
                "data-slate-node": "text",
                ref: g
            }, p)
        }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && e_(t.decorations, e.decorations)),
        eI = c.memo(e => {
            var {
                decorations: t,
                element: r,
                renderElement: n = e => c.createElement(eL, Object.assign({}, e)),
                renderPlaceholder: o,
                renderLeaf: a,
                selection: u
            } = e, s = eT(), d = eH(), h = s.isInline(r), p = eE.findKey(s, r), v = (0, l.useCallback)(e => {
                var t = x.get(s);
                e ? (null == t || t.set(p, e), _.set(r, e), F.set(e, r)) : (null == t || t.delete(p), _.delete(r))
            }, [s, p, r]), D = eV({
                decorations: t,
                node: r,
                renderElement: n,
                renderPlaceholder: o,
                renderLeaf: a,
                selection: u
            }), g = {
                "data-slate-node": "element",
                ref: v
            };
            if (h && (g["data-slate-inline"] = !0), !h && f.Editor.hasInlines(s, r)) {
                var C = i(f.Node.string(r));
                "rtl" === C && (g.dir = C)
            }
            if (f.Editor.isVoid(s, r)) {
                g["data-slate-void"] = !0, !d && h && (g.contentEditable = !1);
                var [
                    [m]
                ] = f.Node.texts(r);
                D = c.createElement(h ? "span" : "div", {
                    "data-slate-spacer": !0,
                    style: {
                        height: "0",
                        color: "transparent",
                        outline: "none",
                        position: "absolute"
                    }
                }, c.createElement(eR, {
                    renderPlaceholder: o,
                    decorations: [],
                    isLast: !1,
                    parent: r,
                    text: m
                })), E.set(m, 0), B.set(m, r)
            }
            return n({
                attributes: g,
                children: D,
                element: r
            })
        }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eF(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && f.Range.equals(e.selection, t.selection))),
        eL = e => {
            var {
                attributes: t,
                children: r,
                element: n
            } = e, i = eT().isInline(n) ? "span" : "div";
            return c.createElement(i, Object.assign({}, t, {
                style: {
                    position: "relative"
                }
            }), r)
        },
        eN = (0, l.createContext)(() => []),
        ez = () => (0, l.useContext)(eN),
        eW = (0, l.createContext)(!1),
        eq = () => (0, l.useContext)(eW),
        eV = e => {
            for (var {
                    decorations: t,
                    node: r,
                    renderElement: n,
                    renderPlaceholder: i,
                    renderLeaf: o,
                    selection: a
                } = e, u = ez(), s = eT(), l = eE.findPath(s, r), d = [], h = f.Element.isElement(r) && !s.isInline(r) && f.Editor.hasInlines(s, r), p = 0; p < r.children.length; p++) {
                var v = l.concat(p),
                    D = r.children[p],
                    g = eE.findKey(s, D),
                    C = f.Editor.range(s, v),
                    m = a && f.Range.intersection(C, a),
                    y = u([D, v]);
                for (var b of t) {
                    var A = f.Range.intersection(b, C);
                    A && y.push(A)
                }
                f.Element.isElement(D) ? d.push(c.createElement(eW.Provider, {
                    key: "provider-".concat(g.id),
                    value: !!m
                }, c.createElement(eI, {
                    decorations: y,
                    element: D,
                    key: g.id,
                    renderElement: n,
                    renderPlaceholder: i,
                    renderLeaf: o,
                    selection: m
                }))) : d.push(c.createElement(eR, {
                    decorations: y,
                    key: g.id,
                    isLast: h && p === r.children.length - 1,
                    parent: r,
                    renderPlaceholder: i,
                    renderLeaf: o,
                    text: D
                })), E.set(D, p), B.set(D, r)
            }
            return d
        },
        eU = (0, l.createContext)(!1),
        eH = () => (0, l.useContext)(eU),
        eJ = (0, l.createContext)(null),
        eK = () => {
            var e = (0, l.useContext)(eJ);
            if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
            var {
                editor: t
            } = e;
            return t
        },
        e$ = {
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
        eX = {
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
        eQ = {
            deleteWordBackward: "ctrl+shift?+backspace",
            deleteWordForward: "ctrl+shift?+delete",
            redo: ["ctrl+y", "ctrl+shift+z"]
        },
        eG = e => {
            var t = e$[e],
                r = eX[e],
                n = eQ[e],
                i = t && (0, p.isKeyHotkey)(t),
                o = r && (0, p.isKeyHotkey)(r),
                a = n && (0, p.isKeyHotkey)(n);
            return e => !!(i && i(e) || es && o && o(e) || !es && a && a(e)) || !1
        },
        eY = {
            isBold: eG("bold"),
            isCompose: eG("compose"),
            isMoveBackward: eG("moveBackward"),
            isMoveForward: eG("moveForward"),
            isDeleteBackward: eG("deleteBackward"),
            isDeleteForward: eG("deleteForward"),
            isDeleteLineBackward: eG("deleteLineBackward"),
            isDeleteLineForward: eG("deleteLineForward"),
            isDeleteWordBackward: eG("deleteWordBackward"),
            isDeleteWordForward: eG("deleteWordForward"),
            isExtendBackward: eG("extendBackward"),
            isExtendForward: eG("extendForward"),
            isExtendLineBackward: eG("extendLineBackward"),
            isExtendLineForward: eG("extendLineForward"),
            isItalic: eG("italic"),
            isMoveLineBackward: eG("moveLineBackward"),
            isMoveLineForward: eG("moveLineForward"),
            isMoveWordBackward: eG("moveWordBackward"),
            isMoveWordForward: eG("moveWordForward"),
            isRedo: eG("redo"),
            isSoftBreak: eG("insertSoftBreak"),
            isSplitBlock: eG("splitBlock"),
            isTransposeCharacter: eG("transposeCharacter"),
            isUndo: eG("undo")
        },
        eZ = (e, t) => {
            var r = [],
                n = () => {
                    r = []
                };
            return {
                registerMutations: n => {
                    if (t.current) {
                        var i = n.filter(t => eo(e, t, n));
                        r.push(...i)
                    }
                },
                restoreDOM: function() {
                    r.length > 0 && (r.reverse().forEach(e => {
                        "characterData" !== e.type && (e.removedNodes.forEach(t => {
                            e.target.insertBefore(t, e.nextSibling)
                        }), e.addedNodes.forEach(t => {
                            e.target.removeChild(t)
                        }))
                    }), n())
                },
                clear: n
            }
        },
        e0 = {
            subtree: !0,
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0
        };
    class e1 extends l.Component {
        observe() {
            var e, {
                node: t
            } = this.props;
            if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e0)
        }
        componentDidMount() {
            var {
                receivedUserInput: e
            } = this.props, t = this.context;
            this.manager = eZ(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
        }
        getSnapshotBeforeUpdate() {
            var e, t, r, n, i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
            return null != i && i.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
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
        constructor() {
            super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
        }
    }
    e1.contextType = eS;
    var e2 = el ? e1 : e => {
        var {
            children: t
        } = e;
        return c.createElement(c.Fragment, null, t)
    };

    function e3(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
    }

    function e7(e, t) {
        var {
            start: r,
            end: n,
            text: i
        } = t, o = e.slice(r, n), a = function(e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                if (e.charAt(n) !== t.charAt(n)) return n;
            return r
        }(o, i), u = Math.min(o.length - a, i.length - a), s = function(e, t, r) {
            for (var n = Math.min(e.length, t.length, r), i = 0; i < n; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return n
        }(o, i, u), l = {
            start: r + a,
            end: n - s,
            text: i.slice(a, i.length - s)
        };
        return l.start === l.end && 0 === l.text.length ? null : l
    }

    function e4(e, t) {
        var {
            path: r,
            offset: n
        } = t;
        if (!f.Editor.hasPath(e, r)) return null;
        var i = f.Node.get(e, r);
        if (!f.Text.isText(i)) return null;
        var o = f.Editor.above(e, {
            match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
            at: r
        });
        if (!o) return null;
        for (; n > i.text.length;) {
            var a = f.Editor.next(e, {
                at: r,
                match: f.Text.isText
            });
            if (!a || !f.Path.isDescendant(a[1], o[1])) return null;
            n -= i.text.length, i = a[0], r = a[1]
        }
        return {
            path: r,
            offset: n
        }
    }

    function e5(e, t) {
        var r = e4(e, t.anchor);
        if (!r) return null;
        if (f.Range.isCollapsed(t)) return {
            anchor: r,
            focus: r
        };
        var n = e4(e, t.focus);
        return n ? {
            anchor: r,
            focus: n
        } : null
    }

    function e8(e, t, r) {
        var n = L.get(e),
            i = null == n ? void 0 : n.find(e => {
                var {
                    path: r
                } = e;
                return f.Path.equals(r, t.path)
            });
        if (!i || t.offset <= i.diff.start) return f.Point.transform(t, r, {
            affinity: "backward"
        });
        var {
            diff: o
        } = i;
        if (t.offset <= o.start + o.text.length) {
            var a = {
                    path: t.path,
                    offset: o.start
                },
                u = f.Point.transform(a, r, {
                    affinity: "backward"
                });
            return u ? {
                path: u.path,
                offset: u.offset + t.offset - o.start
            } : null
        }
        var s = {
                path: t.path,
                offset: t.offset - o.text.length + o.end - o.start
            },
            l = f.Point.transform(s, r, {
                affinity: "backward"
            });
        return l ? "split_node" === r.type && f.Path.equals(r.path, t.path) && s.offset < r.position && o.start < r.position ? l : {
            path: l.path,
            offset: l.offset + o.text.length - o.end + o.start
        } : null
    }

    function e9(e, t, r) {
        var n = e8(e, t.anchor, r);
        if (!n) return null;
        if (f.Range.isCollapsed(t)) return {
            anchor: n,
            focus: n
        };
        var i = e8(e, t.focus, r);
        return i ? {
            anchor: n,
            focus: i
        } : null
    }

    function e6(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function te(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e6(Object(r), !0).forEach(function(t) {
                g(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e6(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var tt = function() {},
        tr = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
        tn = ["node"];

    function ti(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    var to = {
            subtree: !0,
            childList: !0,
            characterData: !0
        },
        ta = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
        tu = ["text"];

    function ts(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function tl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ts(Object(r), !0).forEach(function(t) {
                g(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var tc = e => c.createElement(c.Fragment, null, eV(e)),
        td = e => {
            var t, r, n, o, u, d, h = (0, l.useCallback)(e => c.createElement(tf, Object.assign({}, e)), []),
                {
                    autoFocus: p,
                    decorate: v = th,
                    onDOMBeforeInput: D,
                    placeholder: m,
                    readOnly: y = !1,
                    renderElement: E,
                    renderLeaf: B,
                    renderPlaceholder: O = h,
                    scrollSelectionIntoView: x = tp,
                    style: j = {},
                    as: U = "div",
                    disableDefaultStyles: J = !1
                } = e,
                Q = C(e, ta),
                Y = eK(),
                [Z, ee] = (0, l.useState)(!1),
                et = (0, l.useRef)(null),
                er = (0, l.useRef)([]);
            var {
                onUserInput: en,
                receivedUserInput: ei
            } = (t = eT(), r = (0, l.useRef)(!1), n = (0, l.useRef)(0), o = (0, l.useCallback)(() => {
                if (!r.current) {
                    r.current = !0;
                    var e = eE.getWindow(t);
                    e.cancelAnimationFrame(n.current), n.current = e.requestAnimationFrame(() => {
                        r.current = !1
                    })
                }
            }, []), (0, l.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
                receivedUserInput: r,
                onUserInput: o
            }), [, ea] = (0, l.useReducer)(e => e + 1, 0);
            W.set(Y, ea), k.set(Y, y);
            var es = (0, l.useMemo)(() => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }), []);
            (0, l.useLayoutEffect)(() => () => {
                if (null != es) null != es.latestElement && (es.latestElement.remove(), es.latestElement = null)
            }, []), (0, l.useEffect)(() => {
                et.current && p && et.current.focus()
            }, [p]);
            var ef = (0, l.useCallback)(s(() => {
                    if ((el || !eE.isComposing(Y)) && (!es.isUpdatingSelection || null != ev && ev.isFlushing()) && !es.isDraggingInternally) {
                        var e = eE.findDocumentOrShadowRoot(Y),
                            {
                                activeElement: t
                            } = e,
                            r = eE.toDOMNode(Y, Y),
                            n = e.getSelection();
                        if (t === r ? (es.latestElement = t, P.set(Y, !0)) : P.delete(Y), !n) return f.Transforms.deselect(Y);
                        var {
                            anchorNode: i,
                            focusNode: o
                        } = n, a = eE.hasEditableTarget(Y, i) || eE.isTargetInsideNonReadonlyVoid(Y, i), u = eE.hasEditableTarget(Y, o) || eE.isTargetInsideNonReadonlyVoid(Y, o);
                        if (a && u) {
                            var s = eE.toSlateRange(Y, n, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            s && (eE.isComposing(Y) || null != ev && ev.hasPendingChanges() || null != ev && ev.isFlushing() ? null == ev || ev.handleUserSelect(s) : f.Transforms.select(Y, s))
                        }
                        y && (!a || !u) && f.Transforms.deselect(Y)
                    }
                }, 100), [y]),
                ep = (0, l.useMemo)(() => a(ef, 0), [ef]),
                ev = function(e) {
                    var t, {
                            node: r
                        } = e,
                        n = C(e, tn);
                    if (!el) return null;
                    var i = eT();
                    var o = (t = (0, l.useRef)(!1), (0, l.useEffect)(() => (t.current = !0, () => {
                            t.current = !1
                        }), []), t.current),
                        [a] = (0, l.useState)(() => (function(e) {
                            var {
                                editor: t,
                                scheduleOnDOMSelectionChange: r,
                                onDOMSelectionChange: n
                            } = e, i = !1, o = null, a = null, u = null, s = 0, l = !1, c = () => {
                                var e = z.get(t);
                                if (z.delete(t), e) {
                                    var {
                                        selection: r
                                    } = t, n = e5(t, e);
                                    n && (!r || !f.Range.equals(n, r)) && f.Transforms.select(t, n)
                                }
                            }, d = () => {
                                var e = N.get(t);
                                if (N.delete(t), e) {
                                    if (e.at) {
                                        var r = f.Point.isPoint(e.at) ? e4(t, e.at) : e5(t, e.at);
                                        if (!r) return;
                                        var n = f.Editor.range(t, r);
                                        (!t.selection || !f.Range.equals(t.selection, n)) && f.Transforms.select(t, r)
                                    }
                                    e.run()
                                }
                            }, h = () => {
                                if (a && (clearTimeout(a), a = null), u && (clearTimeout(u), u = null), !C() && !g()) {
                                    c();
                                    return
                                }!i && (i = !0, setTimeout(() => i = !1)), g() && (i = "action");
                                var e = t.selection && f.Editor.rangeRef(t, t.selection, {
                                    affinity: "forward"
                                });
                                I.set(t, t.marks), tt("flush", N.get(t), L.get(t));
                                for (var o = C(); s = null === (h = L.get(t)) || void 0 === h ? void 0 : h[0];) {
                                    var s, h, p, v = R.get(t);
                                    void 0 !== v && (R.delete(t), t.marks = v), v && !1 === l && (l = null);
                                    var D = function(e) {
                                        var {
                                            path: t,
                                            diff: r
                                        } = e;
                                        return {
                                            anchor: {
                                                path: t,
                                                offset: r.start
                                            },
                                            focus: {
                                                path: t,
                                                offset: r.end
                                            }
                                        }
                                    }(s);
                                    (!t.selection || !f.Range.equals(t.selection, D)) && f.Transforms.select(t, D), s.diff.text ? f.Editor.insertText(t, s.diff.text) : f.Editor.deleteFragment(t), L.set(t, null === (p = L.get(t)) || void 0 === p ? void 0 : p.filter(e => {
                                        var {
                                            id: t
                                        } = e;
                                        return t !== s.id
                                    })), ! function(e, t) {
                                        var {
                                            path: r,
                                            diff: n
                                        } = t;
                                        if (!f.Editor.hasPath(e, r)) return !1;
                                        var i = f.Node.get(e, r);
                                        if (!f.Text.isText(i)) return !1;
                                        if (n.start !== i.text.length || 0 === n.text.length) return i.text.slice(n.start, n.start + n.text.length) === n.text;
                                        var o = f.Path.next(r);
                                        if (!f.Editor.hasPath(e, o)) return !1;
                                        var a = f.Node.get(e, o);
                                        return f.Text.isText(a) && a.text.startsWith(n.text)
                                    }(t, s) && (o = !1, N.delete(t), I.delete(t), i = "action", z.delete(t), r.cancel(), n.cancel(), null == e || e.unref())
                                }
                                var m = null == e ? void 0 : e.unref();
                                if (m && !z.get(t) && (!t.selection || !f.Range.equals(m, t.selection)) && f.Transforms.select(t, m), g()) {
                                    d();
                                    return
                                }
                                o && r(), r.flush(), n.flush(), c();
                                var y = I.get(t);
                                I.delete(t), void 0 !== y && (t.marks = y, t.onChange())
                            }, p = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    r = w.get(t);
                                if (r) {
                                    if (C() || e) {
                                        r.style.display = "none";
                                        return
                                    }
                                    r.style.removeProperty("display")
                                }
                            }, v = (e, r) => {
                                var n, i, o, a, u, l, c, d, h, v = null !== (h = L.get(t)) && void 0 !== h ? h : [];
                                L.set(t, v);
                                var D = f.Node.leaf(t, e),
                                    g = v.findIndex(t => f.Path.equals(t.path, e));
                                if (g < 0) {
                                    e7(D.text, r) && v.push({
                                        path: e,
                                        diff: r,
                                        id: s++
                                    }), p();
                                    return
                                }
                                var C = (n = D.text, i = v[g].diff, o = r, a = Math.min(i.start, o.start), u = Math.max(0, Math.min(i.start + i.text.length, o.end) - o.start), l = e3(n, i, o), c = Math.max(o.start + o.text.length, i.start + i.text.length + (i.start + i.text.length > o.start ? o.text.length : 0) - u), d = l.slice(a, c), e7(n, {
                                    start: a,
                                    end: Math.max(i.end, o.end - i.text.length + (i.end - i.start)),
                                    text: d
                                }));
                                if (!C) {
                                    v.splice(g, 1), p();
                                    return
                                }
                                v[g] = te(te({}, v[g]), {}, {
                                    diff: C
                                })
                            }, D = function(e) {
                                var {
                                    at: i
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                l = !1, z.delete(t), r.cancel(), n.cancel(), g() && h(), N.set(t, {
                                    at: i,
                                    run: e
                                }), u = setTimeout(h)
                            }, g = () => !!N.get(t), C = () => {
                                var e;
                                return !!(null !== (e = L.get(t)) && void 0 !== e && e.length)
                            }, m = e => {
                                z.set(t, e), a && (clearTimeout(a), a = null);
                                var {
                                    selection: r
                                } = t;
                                if (e) {
                                    var n = !r || !f.Path.equals(r.anchor.path, e.anchor.path),
                                        i = !r || !f.Path.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                    (n && l || i) && (l = !1), (n || C()) && (a = setTimeout(h, 200))
                                }
                            }, y = () => {
                                !g() && (u = setTimeout(h))
                            };
                            return {
                                flush: h,
                                scheduleFlush: y,
                                hasPendingDiffs: C,
                                hasPendingAction: g,
                                hasPendingChanges: () => g() || C(),
                                isFlushing: () => i,
                                handleUserSelect: m,
                                handleCompositionEnd: e => {
                                    o && clearTimeout(o), o = setTimeout(() => {
                                        S.set(t, !1), h()
                                    }, 25)
                                },
                                handleCompositionStart: e => {
                                    S.set(t, !0), o && (clearTimeout(o), o = null)
                                },
                                handleDOMBeforeInput: e => {
                                    a && (clearTimeout(a), a = null);
                                    var {
                                        inputType: r
                                    } = e, n = null, i = e.dataTransfer || e.data || void 0;
                                    !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                                    var [o] = e.getTargetRanges();
                                    o && (n = eE.toSlateRange(t, o, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    }));
                                    var u = eE.getWindow(t).getSelection();
                                    if (!n && u && (o = u, n = eE.toSlateRange(t, u, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        })), n = null !== (k = n) && void 0 !== k ? k : t.selection) {
                                        var s = !0;
                                        if (r.startsWith("delete")) {
                                            if (f.Range.isExpanded(n)) {
                                                var [c, d] = f.Range.edges(n);
                                                if (f.Node.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                    var h = f.Editor.next(t, {
                                                        at: c.path,
                                                        match: f.Text.isText
                                                    });
                                                    h && f.Path.equals(h[1], d.path) && (n = {
                                                        anchor: d,
                                                        focus: d
                                                    })
                                                }
                                            }
                                            var p = r.endsWith("Backward") ? "backward" : "forward",
                                                [g, C] = f.Range.edges(n),
                                                [E, B] = f.Editor.leaf(t, g.path),
                                                b = {
                                                    text: "",
                                                    start: g.offset,
                                                    end: C.offset
                                                },
                                                A = L.get(t),
                                                w = null == A ? void 0 : A.find(e => f.Path.equals(e.path, B)),
                                                F = w ? [w.diff, b] : [b];
                                            if (0 === e3(E.text, ...F).length && (s = !1), f.Range.isExpanded(n)) {
                                                if (s && f.Path.equals(n.anchor.path, n.focus.path)) {
                                                    var _ = {
                                                        path: n.anchor.path,
                                                        offset: g.offset
                                                    };
                                                    return m(f.Editor.range(t, _, _)), v(n.anchor.path, {
                                                        text: "",
                                                        end: C.offset,
                                                        start: g.offset
                                                    })
                                                }
                                                return D(() => f.Editor.deleteFragment(t, {
                                                    direction: p
                                                }), {
                                                    at: n
                                                })
                                            }
                                        }
                                        switch (r) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return D(() => f.Editor.deleteFragment(t), {
                                                    at: n
                                                });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var {
                                                    anchor: O
                                                } = n;
                                                if (s && f.Range.isCollapsed(n)) {
                                                    var x = f.Node.leaf(t, O.path);
                                                    if (O.offset < x.text.length) return v(O.path, {
                                                        text: "",
                                                        start: O.offset,
                                                        end: O.offset + 1
                                                    })
                                                }
                                                return D(() => f.Editor.deleteForward(t), {
                                                    at: n
                                                });
                                            case "deleteContentBackward":
                                                var k, P, {
                                                        anchor: S
                                                    } = n,
                                                    T = X(o) ? o.isCollapsed : !!(null !== (P = o) && void 0 !== P && P.collapsed);
                                                if (s && T && f.Range.isCollapsed(n) && S.offset > 0) return v(S.path, {
                                                    text: "",
                                                    start: S.offset - 1,
                                                    end: S.offset
                                                });
                                                return D(() => f.Editor.deleteBackward(t), {
                                                    at: n
                                                });
                                            case "deleteEntireSoftLine":
                                                return D(() => {
                                                    f.Editor.deleteBackward(t, {
                                                        unit: "line"
                                                    }), f.Editor.deleteForward(t, {
                                                        unit: "line"
                                                    })
                                                }, {
                                                    at: n
                                                });
                                            case "deleteHardLineBackward":
                                                return D(() => f.Editor.deleteBackward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: n
                                                });
                                            case "deleteSoftLineBackward":
                                                return D(() => f.Editor.deleteBackward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: n
                                                });
                                            case "deleteHardLineForward":
                                                return D(() => f.Editor.deleteForward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: n
                                                });
                                            case "deleteSoftLineForward":
                                                return D(() => f.Editor.deleteForward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: n
                                                });
                                            case "deleteWordBackward":
                                                return D(() => f.Editor.deleteBackward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: n
                                                });
                                            case "deleteWordForward":
                                                return D(() => f.Editor.deleteForward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: n
                                                });
                                            case "insertLineBreak":
                                                return D(() => f.Editor.insertSoftBreak(t), {
                                                    at: n
                                                });
                                            case "insertParagraph":
                                                return D(() => f.Editor.insertBreak(t), {
                                                    at: n
                                                });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if (tr(i)) return D(() => eE.insertData(t, i), {
                                                    at: n
                                                });
                                                var j = null != i ? i : "";
                                                if (R.get(t) && (j = j.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(j) && (j = j.slice(0, -1)), j.includes("\n")) return D(() => {
                                                    var e = j.split("\n");
                                                    e.forEach((r, n) => {
                                                        r && f.Editor.insertText(t, r), n !== e.length - 1 && f.Editor.insertSoftBreak(t)
                                                    })
                                                }, {
                                                    at: n
                                                });
                                                if (f.Path.equals(n.anchor.path, n.focus.path)) {
                                                    var [M, I] = f.Range.edges(n), N = {
                                                        start: M.offset,
                                                        end: I.offset,
                                                        text: j
                                                    };
                                                    if (j && l && "insertCompositionText" === r) {
                                                        var z = l.start + l.text.search(/\S|$/);
                                                        N.start + N.text.search(/\S|$/) === z + 1 && N.end === l.start + l.text.length ? (N.start -= 1, l = null, y()) : l = !1
                                                    } else l = "insertText" === r && (null === l ? N : !!(l && f.Range.isCollapsed(n)) && l.end + l.text.length === M.offset && te(te({}, l), {}, {
                                                        text: l.text + j
                                                    }));
                                                    if (s) {
                                                        v(M.path, N);
                                                        return
                                                    }
                                                }
                                                return D(() => f.Editor.insertText(t, j), {
                                                    at: n
                                                })
                                        }
                                    }
                                },
                                handleKeyDown: e => {
                                    !C() && (p(!0), setTimeout(p))
                                },
                                handleDomMutations: e => {
                                    if (!(C() || g()) && e.some(r => eo(t, r, e))) {
                                        var r;
                                        null === (r = W.get(t)) || void 0 === r || r()
                                    }
                                },
                                handleInput: () => {
                                    (g() || !C()) && h()
                                }
                            }
                        })(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ti(Object(r), !0).forEach(function(t) {
                                    g(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            editor: i
                        }, n)));
                    return ! function(e, t, r) {
                        var [n] = (0, l.useState)(() => new MutationObserver(t));
                        eO(() => {
                            n.takeRecords()
                        }), (0, l.useEffect)(() => {
                            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                            return n.observe(e.current, r), () => n.disconnect()
                        }, [])
                    }(r, a.handleDomMutations, to), M.set(i, a.scheduleFlush), o && a.flush(), a
                }({
                    node: et,
                    onDOMSelectionChange: ef,
                    scheduleOnDOMSelectionChange: ep
                });
            eO(() => {
                et.current && (e = H(et.current)) ? (b.set(Y, e), A.set(Y, et.current), _.set(Y, et.current), F.set(et.current, Y)) : _.delete(Y);
                var e, {
                        selection: t
                    } = Y,
                    r = eE.findDocumentOrShadowRoot(Y).getSelection();
                if (!(!r || !eE.isFocused(Y) || null != ev && ev.hasPendingAction())) {
                    var n = e => {
                            var n = "None" !== r.type;
                            if (t || n) {
                                var i = A.get(Y),
                                    o = !1;
                                if (i.contains(r.anchorNode) && i.contains(r.focusNode) && (o = !0), n && o && t && !e) {
                                    var a = eE.toSlateRange(Y, r, {
                                        exactMatch: !0,
                                        suppressThrow: !0
                                    });
                                    if (a && f.Range.equals(a, t)) {
                                        if (!es.hasMarkPlaceholder) return;
                                        var u, {
                                            anchorNode: s
                                        } = r;
                                        if (null != s && null !== (u = s.parentElement) && void 0 !== u && u.hasAttribute("data-slate-mark-placeholder")) return
                                    }
                                }
                                if (t && !eE.hasRange(Y, t)) {
                                    Y.selection = eE.toSlateRange(Y, r, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    return
                                }
                                es.isUpdatingSelection = !0;
                                var l = t && eE.toDOMRange(Y, t);
                                return l ? (f.Range.isBackward(t) ? r.setBaseAndExtent(l.endContainer, l.endOffset, l.startContainer, l.startOffset) : r.setBaseAndExtent(l.startContainer, l.startOffset, l.endContainer, l.endOffset), x(Y, l)) : r.removeAllRanges(), l
                            }
                        },
                        i = n(),
                        o = (null == ev ? void 0 : ev.isFlushing()) === "action";
                    if (!el || !o) {
                        setTimeout(() => {
                            i && ec && eE.toDOMNode(Y, Y).focus(), es.isUpdatingSelection = !1
                        });
                        return
                    }
                    var a = null,
                        u = requestAnimationFrame(() => {
                            if (o) {
                                var e = e => {
                                    try {
                                        eE.toDOMNode(Y, Y).focus(), n(e)
                                    } catch (e) {}
                                };
                                e(), a = setTimeout(() => {
                                    e(!0), es.isUpdatingSelection = !1
                                })
                            }
                        });
                    return () => {
                        cancelAnimationFrame(u), a && clearTimeout(a)
                    }
                }
            });
            var eB = (0, l.useCallback)(e => {
                    if (en(), !y && eE.hasEditableTarget(Y, e.target) && !tD(e, D)) {
                        if (ev) return ev.handleDOMBeforeInput(e);
                        ep.flush(), ef.flush();
                        var {
                            selection: t
                        } = Y, {
                            inputType: r
                        } = e, n = e.dataTransfer || e.data || void 0, i = "insertCompositionText" === r || "deleteCompositionText" === r;
                        if (i && eE.isComposing(Y)) return;
                        var o = !1;
                        if ("insertText" === r && t && f.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                            o = !0, Y.marks && (o = !1);
                            var {
                                anchor: a
                            } = t, [u, s] = eE.toDOMPoint(Y, a), l = null === (h = u.parentElement) || void 0 === h ? void 0 : h.closest("a"), c = eE.getWindow(Y);
                            if (o && l && eE.hasDOMNode(Y, l)) {
                                var d, h, p, v, g = null == c ? void 0 : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                g === u && (null === (v = g.textContent) || void 0 === v ? void 0 : v.length) === s && (o = !1)
                            }
                            if (o && u.parentElement && (null == c ? void 0 : null === (p = c.getComputedStyle(u.parentElement)) || void 0 === p ? void 0 : p.whiteSpace) === "pre") {
                                var C = f.Editor.above(Y, {
                                    at: a.path,
                                    match: e => f.Element.isElement(e) && f.Editor.isBlock(Y, e)
                                });
                                C && f.Node.string(C[0]).includes("	") && (o = !1)
                            }
                        }
                        if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                            var [m] = e.getTargetRanges();
                            if (m) {
                                var E = eE.toSlateRange(Y, m, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                if (!t || !f.Range.equals(t, E)) {
                                    o = !1;
                                    var B = !i && Y.selection && f.Editor.rangeRef(Y, Y.selection);
                                    f.Transforms.select(Y, E), B && T.set(Y, B)
                                }
                            }
                        }
                        if (!i) {
                            if (!o && e.preventDefault(), t && f.Range.isExpanded(t) && r.startsWith("delete")) {
                                var b = r.endsWith("Backward") ? "backward" : "forward";
                                f.Editor.deleteFragment(Y, {
                                    direction: b
                                });
                                return
                            }
                            switch (r) {
                                case "deleteByComposition":
                                case "deleteByCut":
                                case "deleteByDrag":
                                    f.Editor.deleteFragment(Y);
                                    break;
                                case "deleteContent":
                                case "deleteContentForward":
                                    f.Editor.deleteForward(Y);
                                    break;
                                case "deleteContentBackward":
                                    f.Editor.deleteBackward(Y);
                                    break;
                                case "deleteEntireSoftLine":
                                    f.Editor.deleteBackward(Y, {
                                        unit: "line"
                                    }), f.Editor.deleteForward(Y, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineBackward":
                                    f.Editor.deleteBackward(Y, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineBackward":
                                    f.Editor.deleteBackward(Y, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteHardLineForward":
                                    f.Editor.deleteForward(Y, {
                                        unit: "block"
                                    });
                                    break;
                                case "deleteSoftLineForward":
                                    f.Editor.deleteForward(Y, {
                                        unit: "line"
                                    });
                                    break;
                                case "deleteWordBackward":
                                    f.Editor.deleteBackward(Y, {
                                        unit: "word"
                                    });
                                    break;
                                case "deleteWordForward":
                                    f.Editor.deleteForward(Y, {
                                        unit: "word"
                                    });
                                    break;
                                case "insertLineBreak":
                                    f.Editor.insertSoftBreak(Y);
                                    break;
                                case "insertParagraph":
                                    f.Editor.insertBreak(Y);
                                    break;
                                case "insertFromComposition":
                                case "insertFromDrop":
                                case "insertFromPaste":
                                case "insertFromYank":
                                case "insertReplacementText":
                                case "insertText":
                                    "insertFromComposition" === r && eE.isComposing(Y) && (ee(!1), S.set(Y, !1)), (null == n ? void 0 : n.constructor.name) === "DataTransfer" ? eE.insertData(Y, n) : "string" == typeof n && (o ? er.current.push(() => f.Editor.insertText(Y, n)) : f.Editor.insertText(Y, n))
                            }
                            var A = null === (d = T.get(Y)) || void 0 === d ? void 0 : d.unref();
                            T.delete(Y), A && (!Y.selection || !f.Range.equals(Y.selection, A)) && f.Transforms.select(Y, A)
                        }
                    }
                }, [y, D]),
                eb = (0, l.useCallback)(e => {
                    null == e ? (ef.cancel(), ep.cancel(), A.delete(Y), _.delete(Y), et.current && ey && et.current.removeEventListener("beforeinput", eB)) : ey && e.addEventListener("beforeinput", eB), et.current = e
                }, [et, eB, ef, ep]);
            eO(() => {
                var e = eE.getWindow(Y);
                return e.document.addEventListener("selectionchange", ep), () => {
                    e.document.removeEventListener("selectionchange", ep)
                }
            }, [ep]);
            var eA = v([Y, []]);
            if (m && 1 === Y.children.length && 1 === Array.from(f.Node.texts(Y)).length && "" === f.Node.string(Y) && !Z) {
                var ew = f.Editor.start(Y, []);
                eA.push({
                    [q]: !0,
                    placeholder: m,
                    anchor: ew,
                    focus: ew
                })
            }
            var {
                marks: eF
            } = Y;
            if (es.hasMarkPlaceholder = !1, Y.selection && f.Range.isCollapsed(Y.selection) && eF) {
                var {
                    anchor: e_
                } = Y.selection, ex = f.Node.leaf(Y, e_.path), ek = C(ex, tu);
                if (!f.Text.equals(ex, eF, {
                        loose: !0
                    })) {
                    es.hasMarkPlaceholder = !0;
                    var eP = Object.fromEntries(Object.keys(ek).map(e => [e, null]));
                    eA.push(tl(tl(tl({
                        [V]: !0
                    }, eP), eF), {}, {
                        anchor: e_,
                        focus: e_
                    }))
                }
            }(0, l.useEffect)(() => {
                setTimeout(() => {
                    var {
                        selection: e
                    } = Y;
                    if (e) {
                        var {
                            anchor: t
                        } = e, r = f.Node.leaf(Y, t.path);
                        if (eF && !f.Text.equals(r, eF, {
                                loose: !0
                            })) {
                            R.set(Y, eF);
                            return
                        }
                    }
                    R.delete(Y)
                })
            });
            var eS = null === (u = w.get(Y)) || void 0 === u ? void 0 : null === (d = u.getBoundingClientRect()) || void 0 === d ? void 0 : d.height;
            return c.createElement(eU.Provider, {
                value: y
            }, c.createElement(eN.Provider, {
                value: v
            }, c.createElement(e2, {
                node: et,
                receivedUserInput: ei
            }, c.createElement(U, Object.assign({
                role: y ? void 0 : "textbox",
                "aria-multiline": !y || void 0
            }, Q, {
                spellCheck: (!!ey || !em) && Q.spellCheck,
                autoCorrect: ey || !em ? Q.autoCorrect : "false",
                autoCapitalize: ey || !em ? Q.autoCapitalize : "false",
                "data-slate-editor": !0,
                "data-slate-node": "value",
                contentEditable: !y,
                zindex: -1,
                suppressContentEditableWarning: !0,
                ref: eb,
                style: tl(tl({}, J ? {} : tl({
                    position: "relative",
                    outline: "none",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word"
                }, eS ? {
                    minHeight: eS
                } : {})), j),
                onBeforeInput: (0, l.useCallback)(e => {
                    if (!ey && !y && !tv(e, Q.onBeforeInput) && eE.hasSelectableTarget(Y, e.target) && (e.preventDefault(), !eE.isComposing(Y))) {
                        var t = e.data;
                        f.Editor.insertText(Y, t)
                    }
                }, [y]),
                onInput: (0, l.useCallback)(e => {
                    if (!tv(e, Q.onInput)) {
                        if (ev) {
                            ev.handleInput();
                            return
                        }
                        for (var t of er.current) t();
                        er.current = []
                    }
                }, []),
                onBlur: (0, l.useCallback)(e => {
                    if (y || es.isUpdatingSelection || !eE.hasSelectableTarget(Y, e.target) || tv(e, Q.onBlur)) return;
                    var t = eE.findDocumentOrShadowRoot(Y);
                    if (es.latestElement === t.activeElement) return;
                    var {
                        relatedTarget: r
                    } = e;
                    if (r !== eE.toDOMNode(Y, Y)) {
                        if (!(K(r) && r.hasAttribute("data-slate-spacer"))) {
                            if (null != r && $(r) && eE.hasDOMNode(Y, r)) {
                                var n = eE.toSlateNode(Y, r);
                                if (f.Element.isElement(n) && !Y.isVoid(n)) return
                            }
                            if (ed) {
                                var i = t.getSelection();
                                null == i || i.removeAllRanges()
                            }
                            P.delete(Y)
                        }
                    }
                }, [y, Q.onBlur]),
                onClick: (0, l.useCallback)(e => {
                    if (eE.hasTarget(Y, e.target) && !tv(e, Q.onClick) && $(e.target)) {
                        var t = eE.toSlateNode(Y, e.target),
                            r = eE.findPath(Y, t);
                        if (!!f.Editor.hasPath(Y, r) && f.Node.get(Y, r) === t) {
                            if (3 === e.detail && r.length >= 1) {
                                var n = r;
                                if (!(f.Element.isElement(t) && f.Editor.isBlock(Y, t))) {
                                    var i, o = f.Editor.above(Y, {
                                        match: e => f.Element.isElement(e) && f.Editor.isBlock(Y, e),
                                        at: r
                                    });
                                    n = null !== (i = null == o ? void 0 : o[1]) && void 0 !== i ? i : r.slice(0, 1)
                                }
                                var a = f.Editor.range(Y, n);
                                f.Transforms.select(Y, a);
                                return
                            }
                            if (!y) {
                                var u = f.Editor.start(Y, r),
                                    s = f.Editor.end(Y, r),
                                    l = f.Editor.void(Y, {
                                        at: u
                                    }),
                                    c = f.Editor.void(Y, {
                                        at: s
                                    });
                                if (l && c && f.Path.equals(l[1], c[1])) {
                                    var d = f.Editor.range(Y, u);
                                    f.Transforms.select(Y, d)
                                }
                            }
                        }
                    }
                }, [y, Q.onClick]),
                onCompositionEnd: (0, l.useCallback)(e => {
                    if (eE.hasSelectableTarget(Y, e.target) && (eE.isComposing(Y) && (ee(!1), S.set(Y, !1)), null == ev || ev.handleCompositionEnd(e), !tv(e, Q.onCompositionEnd) && !el && !ed && !eD && !eu && !eC && !eg && e.data)) {
                        var t = R.get(Y);
                        R.delete(Y), void 0 !== t && (I.set(Y, Y.marks), Y.marks = t), f.Editor.insertText(Y, e.data);
                        var r = I.get(Y);
                        I.delete(Y), void 0 !== r && (Y.marks = r)
                    }
                }, [Q.onCompositionEnd]),
                onCompositionUpdate: (0, l.useCallback)(e => {
                    eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCompositionUpdate) && !eE.isComposing(Y) && (ee(!0), S.set(Y, !0))
                }, [Q.onCompositionUpdate]),
                onCompositionStart: (0, l.useCallback)(e => {
                    if (eE.hasSelectableTarget(Y, e.target) && (null == ev || ev.handleCompositionStart(e), !tv(e, Q.onCompositionStart) && !el)) {
                        ee(!0);
                        var {
                            selection: t
                        } = Y;
                        if (t) {
                            if (f.Range.isExpanded(t)) {
                                f.Editor.deleteFragment(Y);
                                return
                            }
                            var r = f.Editor.above(Y, {
                                match: e => f.Element.isElement(e) && f.Editor.isInline(Y, e),
                                mode: "highest"
                            });
                            if (r) {
                                var [, n] = r;
                                if (f.Editor.isEnd(Y, t.anchor, n)) {
                                    var i = f.Editor.after(Y, n);
                                    f.Transforms.setSelection(Y, {
                                        anchor: i,
                                        focus: i
                                    })
                                }
                            }
                        }
                    }
                }, [Q.onCompositionStart]),
                onCopy: (0, l.useCallback)(e => {
                    eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCopy) && (e.preventDefault(), eE.setFragmentData(Y, e.clipboardData, "copy"))
                }, [Q.onCopy]),
                onCut: (0, l.useCallback)(e => {
                    if (!y && eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCut)) {
                        e.preventDefault(), eE.setFragmentData(Y, e.clipboardData, "cut");
                        var {
                            selection: t
                        } = Y;
                        if (t) {
                            if (f.Range.isExpanded(t)) f.Editor.deleteFragment(Y);
                            else {
                                var r = f.Node.parent(Y, t.anchor.path);
                                f.Editor.isVoid(Y, r) && f.Transforms.delete(Y)
                            }
                        }
                    }
                }, [y, Q.onCut]),
                onDragOver: (0, l.useCallback)(e => {
                    if (eE.hasTarget(Y, e.target) && !tv(e, Q.onDragOver)) {
                        var t = eE.toSlateNode(Y, e.target);
                        f.Element.isElement(t) && f.Editor.isVoid(Y, t) && e.preventDefault()
                    }
                }, [Q.onDragOver]),
                onDragStart: (0, l.useCallback)(e => {
                    if (!y && eE.hasTarget(Y, e.target) && !tv(e, Q.onDragStart)) {
                        var t = eE.toSlateNode(Y, e.target),
                            r = eE.findPath(Y, t);
                        if (f.Element.isElement(t) && f.Editor.isVoid(Y, t) || f.Editor.void(Y, {
                                at: r,
                                voids: !0
                            })) {
                            var n = f.Editor.range(Y, r);
                            f.Transforms.select(Y, n)
                        }
                        es.isDraggingInternally = !0, eE.setFragmentData(Y, e.dataTransfer, "drag")
                    }
                }, [y, Q.onDragStart]),
                onDrop: (0, l.useCallback)(e => {
                    if (!y && eE.hasTarget(Y, e.target) && !tv(e, Q.onDrop)) {
                        e.preventDefault();
                        var t = Y.selection,
                            r = eE.findEventRange(Y, e),
                            n = e.dataTransfer;
                        f.Transforms.select(Y, r), es.isDraggingInternally && t && !f.Range.equals(t, r) && !f.Editor.void(Y, {
                            at: r,
                            voids: !0
                        }) && f.Transforms.delete(Y, {
                            at: t
                        }), eE.insertData(Y, n), !eE.isFocused(Y) && eE.focus(Y)
                    }
                    es.isDraggingInternally = !1
                }, [y, Q.onDrop]),
                onDragEnd: (0, l.useCallback)(e => {
                    !y && es.isDraggingInternally && Q.onDragEnd && eE.hasTarget(Y, e.target) && Q.onDragEnd(e), es.isDraggingInternally = !1
                }, [y, Q.onDragEnd]),
                onFocus: (0, l.useCallback)(e => {
                    if (!y && !es.isUpdatingSelection && eE.hasEditableTarget(Y, e.target) && !tv(e, Q.onFocus)) {
                        var t = eE.toDOMNode(Y, Y),
                            r = eE.findDocumentOrShadowRoot(Y);
                        if (es.latestElement = r.activeElement, ec && e.target !== t) {
                            t.focus();
                            return
                        }
                        P.set(Y, !0)
                    }
                }, [y, Q.onFocus]),
                onKeyDown: (0, l.useCallback)(e => {
                    if (!y && eE.hasEditableTarget(Y, e.target)) {
                        null == ev || ev.handleKeyDown(e);
                        var {
                            nativeEvent: t
                        } = e;
                        if (eE.isComposing(Y) && !1 === t.isComposing && (S.set(Y, !1), ee(!1)), !(tv(e, Q.onKeyDown) || eE.isComposing(Y))) {
                            var {
                                selection: r
                            } = Y, n = Y.children[null !== r ? r.focus.path[0] : 0], o = "rtl" === i(f.Node.string(n));
                            if (eY.isRedo(t)) {
                                e.preventDefault();
                                "function" == typeof Y.redo && Y.redo();
                                return
                            }
                            if (eY.isUndo(t)) {
                                e.preventDefault();
                                "function" == typeof Y.undo && Y.undo();
                                return
                            }
                            if (eY.isMoveLineBackward(t)) {
                                e.preventDefault(), f.Transforms.move(Y, {
                                    unit: "line",
                                    reverse: !0
                                });
                                return
                            }
                            if (eY.isMoveLineForward(t)) {
                                e.preventDefault(), f.Transforms.move(Y, {
                                    unit: "line"
                                });
                                return
                            }
                            if (eY.isExtendLineBackward(t)) {
                                e.preventDefault(), f.Transforms.move(Y, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0
                                });
                                return
                            }
                            if (eY.isExtendLineForward(t)) {
                                e.preventDefault(), f.Transforms.move(Y, {
                                    unit: "line",
                                    edge: "focus"
                                });
                                return
                            }
                            if (eY.isMoveBackward(t)) {
                                e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Y, {
                                    reverse: !o
                                }) : f.Transforms.collapse(Y, {
                                    edge: "start"
                                });
                                return
                            }
                            if (eY.isMoveForward(t)) {
                                e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Y, {
                                    reverse: o
                                }) : f.Transforms.collapse(Y, {
                                    edge: "end"
                                });
                                return
                            }
                            if (eY.isMoveWordBackward(t)) {
                                e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Y, {
                                    edge: "focus"
                                }), f.Transforms.move(Y, {
                                    unit: "word",
                                    reverse: !o
                                });
                                return
                            }
                            if (eY.isMoveWordForward(t)) {
                                e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Y, {
                                    edge: "focus"
                                }), f.Transforms.move(Y, {
                                    unit: "word",
                                    reverse: o
                                });
                                return
                            }
                            if (ey) {
                                if ((eh || ed) && r && (eY.isDeleteBackward(t) || eY.isDeleteForward(t)) && f.Range.isCollapsed(r)) {
                                    var a = f.Node.parent(Y, r.anchor.path);
                                    if (f.Element.isElement(a) && f.Editor.isVoid(Y, a) && (f.Editor.isInline(Y, a) || f.Editor.isBlock(Y, a))) {
                                        e.preventDefault(), f.Editor.deleteBackward(Y, {
                                            unit: "block"
                                        });
                                        return
                                    }
                                }
                            } else {
                                if (eY.isBold(t) || eY.isItalic(t) || eY.isTransposeCharacter(t)) {
                                    e.preventDefault();
                                    return
                                }
                                if (eY.isSoftBreak(t)) {
                                    e.preventDefault(), f.Editor.insertSoftBreak(Y);
                                    return
                                }
                                if (eY.isSplitBlock(t)) {
                                    e.preventDefault(), f.Editor.insertBreak(Y);
                                    return
                                }
                                if (eY.isDeleteBackward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(Y);
                                    return
                                }
                                if (eY.isDeleteForward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(Y);
                                    return
                                }
                                if (eY.isDeleteLineBackward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(Y, {
                                        unit: "line"
                                    });
                                    return
                                }
                                if (eY.isDeleteLineForward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(Y, {
                                        unit: "line"
                                    });
                                    return
                                }
                                if (eY.isDeleteWordBackward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "backward"
                                    }) : f.Editor.deleteBackward(Y, {
                                        unit: "word"
                                    });
                                    return
                                }
                                if (eY.isDeleteWordForward(t)) {
                                    e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                        direction: "forward"
                                    }) : f.Editor.deleteForward(Y, {
                                        unit: "word"
                                    });
                                    return
                                }
                            }
                        }
                    }
                }, [y, Q.onKeyDown]),
                onPaste: (0, l.useCallback)(e => {
                    !y && eE.hasEditableTarget(Y, e.target) && !tv(e, Q.onPaste) && (!ey || G(e.nativeEvent) || ed) && (e.preventDefault(), eE.insertData(Y, e.clipboardData))
                }, [y, Q.onPaste])
            }), c.createElement(tc, {
                decorations: eA,
                node: Y,
                renderElement: E,
                renderPlaceholder: O,
                renderLeaf: B,
                selection: Y.selection
            })))))
        },
        tf = e => {
            var {
                attributes: t,
                children: r
            } = e;
            return c.createElement("span", Object.assign({}, t), r, el && c.createElement("br", null))
        },
        th = () => [],
        tp = (e, t) => {
            if (t.getBoundingClientRect && (!e.selection || e.selection && f.Range.isCollapsed(e.selection))) {
                var r = t.startContainer.parentElement;
                r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, d.default)(r, {
                    scrollMode: "if-needed"
                }), delete r.getBoundingClientRect
            }
        },
        tv = (e, t) => {
            if (!t) return !1;
            var r = t(e);
            return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
        },
        tD = (e, t) => {
            if (!t) return !1;
            var r = t(e);
            return null != r ? r : e.defaultPrevented
        },
        tg = (0, l.createContext)(!1),
        tC = () => (0, l.useContext)(tg),
        tm = (0, l.createContext)({}),
        ty = ["editor", "children", "onChange", "value"],
        tE = e => {
            var t, r, n, i, {
                    editor: o,
                    children: a,
                    onChange: u,
                    value: s
                } = e,
                d = C(e, ty),
                h = (0, l.useRef)(!1),
                [p, v] = c.useState(() => {
                    if (!f.Node.isNodeList(s)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(f.Scrubber.stringify(s)));
                    if (!f.Editor.isEditor(o)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.Scrubber.stringify(o)));
                    return o.children = s, Object.assign(o, d), {
                        v: 0,
                        editor: o
                    }
                });
            var {
                selectorContext: D,
                onChange: g
            } = (t = o, r = (0, l.useRef)([]).current, n = (0, l.useRef)({
                editor: t
            }).current, i = (0, l.useCallback)(e => {
                n.editor = e, r.forEach(t => t(e))
            }, []), {
                selectorContext: (0, l.useMemo)(() => ({
                    getSlate: () => n.editor,
                    addEventListener: e => (r.push(e), () => {
                        r.splice(r.indexOf(e), 1)
                    })
                }), [r, n]),
                onChange: i
            }), m = (0, l.useCallback)(() => {
                u && u(o.children), v(e => ({
                    v: e.v + 1,
                    editor: o
                })), g(o)
            }, [u]);
            (0, l.useEffect)(() => (j.set(o, m), () => {
                j.set(o, () => {}), h.current = !0
            }), [m]);
            var [y, E] = (0, l.useState)(eE.isFocused(o));
            return (0, l.useEffect)(() => {
                E(eE.isFocused(o))
            }), eO(() => {
                var e = () => E(eE.isFocused(o));
                return ea ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                    document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                    document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                })
            }, []), c.createElement(tm.Provider, {
                value: D
            }, c.createElement(eJ.Provider, {
                value: p
            }, c.createElement(eS.Provider, {
                value: p.editor
            }, c.createElement(tg.Provider, {
                value: y
            }, a))))
        },
        tB = (e, t) => {
            var r = (t.top + t.bottom) / 2;
            return e.top <= r && e.bottom >= r
        },
        tb = (e, t, r) => {
            var n = eE.toDOMRange(e, t).getBoundingClientRect(),
                i = eE.toDOMRange(e, r).getBoundingClientRect();
            return tB(n, i) && tB(i, n)
        },
        tA = (e, t) => {
            var r = f.Editor.range(e, f.Range.end(t)),
                n = Array.from(f.Editor.positions(e, {
                    at: t
                })),
                i = 0,
                o = n.length,
                a = Math.floor(o / 2);
            if (tb(e, f.Editor.range(e, n[i]), r)) return f.Editor.range(e, n[i], r);
            if (n.length < 2) return f.Editor.range(e, n[n.length - 1], r);
            for (; a !== n.length && a !== i;) tb(e, f.Editor.range(e, n[a]), r) ? o = a : i = a, a = Math.floor((i + o) / 2);
            return f.Editor.range(e, n[o], r)
        };

    function tw(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function tF(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tw(Object(r), !0).forEach(function(t) {
                g(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var t_ = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                {
                    apply: r,
                    onChange: n,
                    deleteBackward: i,
                    addMark: o,
                    removeMark: a
                } = e;
            return x.set(e, new WeakMap), e.addMark = (t, r) => {
                var n, i;
                null === (n = M.get(e)) || void 0 === n || n(), !R.get(e) && null !== (i = L.get(e)) && void 0 !== i && i.length && R.set(e, null), I.delete(e), o(t, r)
            }, e.removeMark = t => {
                var r;
                !R.get(e) && null !== (r = L.get(e)) && void 0 !== r && r.length && R.set(e, null), I.delete(e), a(t)
            }, e.deleteBackward = t => {
                if ("line" !== t) return i(t);
                if (e.selection && f.Range.isCollapsed(e.selection)) {
                    var r = f.Editor.above(e, {
                        match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                        at: e.selection
                    });
                    if (r) {
                        var [, n] = r, o = f.Editor.range(e, n, e.selection.anchor), a = tA(e, o);
                        !f.Range.isCollapsed(a) && f.Transforms.delete(e, {
                            at: a
                        })
                    }
                }
            }, e.apply = t => {
                var n, i = [],
                    o = L.get(e);
                if (null != o && o.length) {
                    var a = o.map(e => (function(e, t) {
                        var {
                            path: r,
                            diff: n,
                            id: i
                        } = e;
                        switch (t.type) {
                            case "insert_text":
                                if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                if (t.offset <= n.start) return {
                                    diff: {
                                        start: t.text.length + n.start,
                                        end: t.text.length + n.end,
                                        text: n.text
                                    },
                                    id: i,
                                    path: r
                                };
                                return {
                                    diff: {
                                        start: n.start,
                                        end: n.end + t.text.length,
                                        text: n.text
                                    }, id: i, path: r
                                };
                            case "remove_text":
                                if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                if (t.offset + t.text.length <= n.start) return {
                                    diff: {
                                        start: n.start - t.text.length,
                                        end: n.end - t.text.length,
                                        text: n.text
                                    },
                                    id: i,
                                    path: r
                                };
                                return {
                                    diff: {
                                        start: n.start,
                                        end: n.end - t.text.length,
                                        text: n.text
                                    }, id: i, path: r
                                };
                            case "split_node":
                                if (!f.Path.equals(t.path, r) || t.position >= n.end) return {
                                    diff: n,
                                    id: i,
                                    path: f.Path.transform(r, t, {
                                        affinity: "backward"
                                    })
                                };
                                if (t.position > n.start) return {
                                    diff: {
                                        start: n.start,
                                        end: Math.min(t.position, n.end),
                                        text: n.text
                                    },
                                    id: i,
                                    path: r
                                };
                                return {
                                    diff: {
                                        start: n.start - t.position,
                                        end: n.end - t.position,
                                        text: n.text
                                    }, id: i, path: f.Path.transform(r, t, {
                                        affinity: "forward"
                                    })
                                };
                            case "merge_node":
                                if (!f.Path.equals(t.path, r)) return {
                                    diff: n,
                                    id: i,
                                    path: f.Path.transform(r, t)
                                };
                                return {
                                    diff: {
                                        start: n.start + t.position,
                                        end: n.end + t.position,
                                        text: n.text
                                    }, id: i, path: f.Path.transform(r, t)
                                }
                        }
                        var o = f.Path.transform(r, t);
                        return o ? {
                            diff: n,
                            path: o,
                            id: i
                        } : null
                    })(e, t)).filter(Boolean);
                    L.set(e, a)
                }
                var u = z.get(e);
                u && z.set(e, e9(e, u, t));
                var s = N.get(e);
                if (null != s && s.at) {
                    var l = f.Point.isPoint(null == s ? void 0 : s.at) ? e8(e, s.at, t) : e9(e, s.at, t);
                    N.set(e, l ? tF(tF({}, s), {}, {
                        at: l
                    }) : null)
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tO(e, t.path));
                        break;
                    case "set_selection":
                        null === (n = T.get(e)) || void 0 === n || n.unref(), T.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tO(e, f.Path.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...tO(e, f.Path.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...tO(e, f.Path.common(f.Path.parent(t.path), f.Path.parent(t.newPath))))
                }
                for (var [c, d] of(r(t), i)) {
                    var [h] = f.Editor.node(e, c);
                    O.set(h, d)
                }
            }, e.setFragmentData = r => {
                var {
                    selection: n
                } = e;
                if (!!n) {
                    var [i, o] = f.Range.edges(n), a = f.Editor.void(e, {
                        at: i.path
                    }), u = f.Editor.void(e, {
                        at: o.path
                    });
                    if (!f.Range.isCollapsed(n) || a) {
                        var s = eE.toDOMRange(e, n),
                            l = s.cloneContents(),
                            c = l.childNodes[0];
                        if (l.childNodes.forEach(e => {
                                e.textContent && "" !== e.textContent.trim() && (c = e)
                            }), u) {
                            var [d] = u, h = s.cloneRange(), p = eE.toDOMNode(e, d);
                            h.setEndAfter(p), l = h.cloneContents()
                        }
                        if (a && (c = l.querySelector("[data-slate-spacer]")), Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : ""
                            }), Q(c)) {
                            var v = c.ownerDocument.createElement("span");
                            v.style.whiteSpace = "pre", v.appendChild(c), l.appendChild(v), c = v
                        }
                        var D = JSON.stringify(e.getFragment()),
                            g = window.btoa(encodeURIComponent(D));
                        c.setAttribute("data-slate-fragment", g), r.setData("application/".concat(t), g);
                        var C = l.ownerDocument.createElement("div");
                        return C.appendChild(l), C.setAttribute("hidden", "true"), l.ownerDocument.body.appendChild(C), r.setData("text/html", C.innerHTML), r.setData("text/plain", er(C)), l.ownerDocument.body.removeChild(C), r
                    }
                }
            }, e.insertData = t => {
                !e.insertFragmentData(t) && e.insertTextData(t)
            }, e.insertFragmentData = r => {
                var n = r.getData("application/".concat(t)) || ei(r);
                if (n) {
                    var i = JSON.parse(decodeURIComponent(window.atob(n)));
                    return e.insertFragment(i), !0
                }
                return !1
            }, e.insertTextData = t => {
                var r = t.getData("text/plain");
                if (r) {
                    var n = r.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var o of n) i && f.Transforms.splitNodes(e, {
                        always: !0
                    }), e.insertText(o), i = !0;
                    return !0
                }
                return !1
            }, e.onChange = t => {
                D.unstable_batchedUpdates(() => {
                    var r = j.get(e);
                    r && r(), n(t)
                })
            }, e
        },
        tO = (e, t) => {
            var r = [];
            for (var [n, i] of f.Editor.levels(e, {
                    at: t
                })) {
                var o = eE.findKey(e, n);
                r.push([i, o])
            }
            return r
        }
}