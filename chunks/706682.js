function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusScope: function() {
            return c
        },
        createFocusManager: function() {
            return x
        },
        focusSafely: function() {
            return o
        },
        getFocusableTreeWalker: function() {
            return S
        },
        isElementInChildOfActiveScope: function() {
            return b
        },
        useFocusRing: function() {
            return O
        },
        useFocusable: function() {
            return A
        },
        useHasTabbableChild: function() {
            return k
        }
    });
    var r = n("182823"),
        i = n("470079"),
        a = n("612001");

    function o(e) {
        let t = (0, r.getOwnerDocument)(e);
        if ("virtual" === (0, a.getInteractionModality)()) {
            let n = t.activeElement;
            (0, r.runAfterTransition)(() => {
                t.activeElement === n && e.isConnected && (0, r.focusWithoutScrolling)(e)
            })
        } else(0, r.focusWithoutScrolling)(e)
    }
    n("867330");
    let s = i.createContext(null),
        u = null;

    function c(e) {
        let {
            children: t,
            contain: n,
            restoreFocus: a,
            autoFocus: o
        } = e, c = (0, i.useRef)(null), l = (0, i.useRef)(null), d = (0, i.useRef)([]), {
            parentNode: f
        } = (0, i.useContext)(s) || {}, m = (0, i.useMemo)(() => new C({
            scopeRef: d
        }), [d]);
        (0, r.useLayoutEffect)(() => {
            let e = f || D.root;
            if (D.getTreeNode(e.scopeRef) && u && !v(u, e.scopeRef)) {
                let t = D.getTreeNode(u);
                t && (e = t)
            }
            e.addChild(m), D.addNode(m)
        }, [m, f]), (0, r.useLayoutEffect)(() => {
            let e = D.getTreeNode(d);
            e && (e.contain = !!n)
        }, [n]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null === (e = c.current) || void 0 === e ? void 0 : e.nextSibling,
                n = [];
            for (; t && t !== l.current;) n.push(t), t = t.nextSibling;
            d.current = n
        }, [t]),
        function(e, t, n) {
            (0, r.useLayoutEffect)(() => {
                if (t || n) return;
                let i = e.current,
                    a = (0, r.getOwnerDocument)(i ? i[0] : void 0),
                    o = t => {
                        let n = t.target;
                        if (g(n, e.current)) u = e;
                        else if (!_(n)) u = null
                    };
                return a.addEventListener("focusin", o, !1), null == i || i.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                    a.removeEventListener("focusin", o, !1), null == i || i.forEach(e => e.removeEventListener("focusin", o, !1))
                }
            }, [e, t, n])
        }(d, a, n),
        function(e, t) {
            let n = (0, i.useRef)(),
                a = (0, i.useRef)();
            (0, r.useLayoutEffect)(() => {
                let i = e.current;
                if (!t) {
                    a.current && (cancelAnimationFrame(a.current), a.current = void 0);
                    return
                }
                let o = (0, r.getOwnerDocument)(i ? i[0] : void 0),
                    s = t => {
                        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                        let n = o.activeElement,
                            r = e.current;
                        if (!r || !g(n, r)) return;
                        let i = S(p(r), {
                            tabbable: !0
                        }, r);
                        if (!n) return;
                        i.currentNode = n;
                        let a = t.shiftKey ? i.previousNode() : i.nextNode();
                        !a && (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, a = t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), a && y(a, !0)
                    },
                    c = t => {
                        (!u || v(u, e)) && g(t.target, e.current) ? (u = e, n.current = t.target) : h(e) && !_(t.target, e) ? n.current ? n.current.focus() : u && u.current && E(u.current) : h(e) && (n.current = t.target)
                    },
                    l = t => {
                        a.current && cancelAnimationFrame(a.current), a.current = requestAnimationFrame(() => {
                            if (o.activeElement && h(e) && !_(o.activeElement, e)) {
                                if (u = e, o.body.contains(t.target)) {
                                    var r;
                                    n.current = t.target, null === (r = n.current) || void 0 === r || r.focus()
                                } else u.current && E(u.current)
                            }
                        })
                    };
                return o.addEventListener("keydown", s, !1), o.addEventListener("focusin", c, !1), null == i || i.forEach(e => e.addEventListener("focusin", c, !1)), null == i || i.forEach(e => e.addEventListener("focusout", l, !1)), () => {
                    o.removeEventListener("keydown", s, !1), o.removeEventListener("focusin", c, !1), null == i || i.forEach(e => e.removeEventListener("focusin", c, !1)), null == i || i.forEach(e => e.removeEventListener("focusout", l, !1))
                }
            }, [e, t]), (0, r.useLayoutEffect)(() => () => {
                a.current && cancelAnimationFrame(a.current)
            }, [a])
        }(d, n),
        function(e, t, n) {
            let a = (0, i.useRef)("undefined" != typeof document ? (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0).activeElement : null);
            (0, r.useLayoutEffect)(() => {
                let i = e.current,
                    a = (0, r.getOwnerDocument)(i ? i[0] : void 0);
                if (!t || n) return;
                let o = () => {
                    (!u || v(u, e)) && g(a.activeElement, e.current) && (u = e)
                };
                return a.addEventListener("focusin", o, !1), null == i || i.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                    a.removeEventListener("focusin", o, !1), null == i || i.forEach(e => e.removeEventListener("focusin", o, !1))
                }
            }, [e, n]), (0, r.useLayoutEffect)(() => {
                let i = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let a = t => {
                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                    let n = i.activeElement;
                    if (!g(n, e.current)) return;
                    let r = D.getTreeNode(e);
                    if (!r) return;
                    let a = r.nodeToRestore,
                        o = S(i.body, {
                            tabbable: !0
                        });
                    o.currentNode = n;
                    let s = t.shiftKey ? o.previousNode() : o.nextNode();
                    if ((!a || !i.body.contains(a) || a === i.body) && (a = void 0, r.nodeToRestore = void 0), (!s || !g(s, e.current)) && a) {
                        o.currentNode = a;
                        do s = t.shiftKey ? o.previousNode() : o.nextNode(); while (g(s, e.current));
                        if (t.preventDefault(), t.stopPropagation(), s) y(s, !0);
                        else if (_(a)) y(a, !0);
                        else n.blur()
                    }
                };
                return !n && i.addEventListener("keydown", a, !0), () => {
                    !n && i.removeEventListener("keydown", a, !0)
                }
            }, [e, t, n]), (0, r.useLayoutEffect)(() => {
                var n;
                let i = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let o = D.getTreeNode(e);
                if (o) return o.nodeToRestore = null !== (n = a.current) && void 0 !== n ? n : void 0, () => {
                    let n = D.getTreeNode(e);
                    if (!n) return;
                    let r = n.nodeToRestore;
                    if (t && r && (g(i.activeElement, e.current) || i.activeElement === i.body && function(e) {
                            let t = D.getTreeNode(u);
                            for (; t && t.scopeRef !== e;) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent
                            }
                            return (null == t ? void 0 : t.scopeRef) === e
                        }(e))) {
                        let t = D.clone();
                        requestAnimationFrame(() => {
                            if (i.activeElement === i.body) {
                                let n = t.getTreeNode(e);
                                for (; n;) {
                                    if (n.nodeToRestore && n.nodeToRestore.isConnected) {
                                        y(n.nodeToRestore);
                                        return
                                    }
                                    n = n.parent
                                }
                                for (n = t.getTreeNode(e); n;) {
                                    if (n.scopeRef && n.scopeRef.current && D.getTreeNode(n.scopeRef)) {
                                        E(n.scopeRef.current, !0);
                                        return
                                    }
                                    n = n.parent
                                }
                            }
                        })
                    }
                }
            }, [e, t])
        }(d, a, n),
        function(e, t) {
            let n = i.useRef(t);
            (0, i.useEffect)(() => {
                n.current && (u = e, !g((0, r.getOwnerDocument)(e.current ? e.current[0] : void 0).activeElement, u.current) && e.current && E(e.current)), n.current = !1
            }, [e])
        }(d, o), (0, i.useEffect)(() => {
            let e = (0, r.getOwnerDocument)(d.current ? d.current[0] : void 0).activeElement,
                t = null;
            if (g(e, d.current)) {
                for (let n of D.traverse()) n.scopeRef && g(e, n.scopeRef.current) && (t = n);
                t === D.getTreeNode(d) && (u = t.scopeRef)
            }
        }, [d]), (0, r.useLayoutEffect)(() => () => {
            var e, t, n;
            let r = null !== (n = null === (t = D.getTreeNode(d)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
            (d === u || v(d, u)) && (!r || D.getTreeNode(r)) && (u = r), D.removeTreeNode(d)
        }, [d]);
        let b = (0, i.useMemo)(() => (function(e) {
                return {
                    focusNext(t = {}) {
                        let n = e.current,
                            {
                                from: i,
                                tabbable: a,
                                wrap: o,
                                accept: s
                            } = t,
                            u = i || (0, r.getOwnerDocument)(n[0]).activeElement,
                            c = n[0].previousElementSibling,
                            l = S(p(n), {
                                tabbable: a,
                                accept: s
                            }, n);
                        l.currentNode = g(u, n) ? u : c;
                        let d = l.nextNode();
                        return !d && o && (l.currentNode = c, d = l.nextNode()), d && y(d, !0), d
                    },
                    focusPrevious(t = {}) {
                        let n = e.current,
                            {
                                from: i,
                                tabbable: a,
                                wrap: o,
                                accept: s
                            } = t,
                            u = i || (0, r.getOwnerDocument)(n[0]).activeElement,
                            c = n[n.length - 1].nextElementSibling,
                            l = S(p(n), {
                                tabbable: a,
                                accept: s
                            }, n);
                        l.currentNode = g(u, n) ? u : c;
                        let d = l.previousNode();
                        return !d && o && (l.currentNode = c, d = l.previousNode()), d && y(d, !0), d
                    },
                    focusFirst(t = {}) {
                        let n = e.current,
                            {
                                tabbable: r,
                                accept: i
                            } = t,
                            a = S(p(n), {
                                tabbable: r,
                                accept: i
                            }, n);
                        a.currentNode = n[0].previousElementSibling;
                        let o = a.nextNode();
                        return o && y(o, !0), o
                    },
                    focusLast(t = {}) {
                        let n = e.current,
                            {
                                tabbable: r,
                                accept: i
                            } = t,
                            a = S(p(n), {
                                tabbable: r,
                                accept: i
                            }, n);
                        a.currentNode = n[n.length - 1].nextElementSibling;
                        let o = a.previousNode();
                        return o && y(o, !0), o
                    }
                }
            })(d), []),
            x = (0, i.useMemo)(() => ({
                focusManager: b,
                parentNode: m
            }), [m, b]);
        return i.createElement(s.Provider, {
            value: x
        }, i.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: c
        }), t, i.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: l
        }))
    }
    let l = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        d = l.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    l.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let f = l.join(':not([hidden]):not([tabindex="-1"]),');

    function p(e) {
        return e[0].parentElement
    }

    function h(e) {
        let t = D.getTreeNode(u);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function m(e) {
        return _(e)
    }

    function g(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function _(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: n
            }
            of D.traverse(D.getTreeNode(t)))
            if (n && g(e, n.current)) return !0;
        return !1
    }

    function b(e) {
        return _(e, u)
    }

    function v(e, t) {
        var n;
        let r = null === (n = D.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
        for (; r;) {
            if (r.scopeRef === e) return !0;
            r = r.parent
        }
        return !1
    }

    function y(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch (e) {}
        } else try {
            o(e)
        } catch (e) {}
    }

    function E(e, t = !0) {
        let n = e[0].previousElementSibling,
            r = p(e),
            i = S(r, {
                tabbable: t
            }, e);
        i.currentNode = n;
        let a = i.nextNode();
        t && !a && ((i = S(r = p(e), {
            tabbable: !1
        }, e)).currentNode = n, a = i.nextNode()), y(a)
    }

    function S(e, t, n) {
        let i = (null == t ? void 0 : t.tabbable) ? f : d,
            a = (0, r.getOwnerDocument)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode(e) {
                    var a;
                    return (null == t ? void 0 : null === (a = t.from) || void 0 === a ? void 0 : a.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(i) && function e(t, n) {
                        var i, a;
                        return "#comment" !== t.nodeName && function(e) {
                            let t = (0, r.getOwnerWindow)(e);
                            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: i
                            } = e.style, a = "none" !== n && "hidden" !== i && "collapse" !== i;
                            if (a) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: n,
                                    visibility: r
                                } = t(e);
                                a = "none" !== n && "hidden" !== r && "collapse" !== r
                            }
                            return a
                        }(t) && (i = t, a = n, !i.hasAttribute("hidden") && ("DETAILS" !== i.nodeName || !a || "SUMMARY" === a.nodeName || i.hasAttribute("open"))) && (!t.parentElement || e(t.parentElement, t))
                    }(e) && (!n || g(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
    }

    function x(e, t = {}) {
        return {
            focusNext(n = {}) {
                let i = e.current;
                if (!i) return null;
                let {
                    from: a,
                    tabbable: o = t.tabbable,
                    wrap: s = t.wrap,
                    accept: u = t.accept
                } = n, c = a || (0, r.getOwnerDocument)(i).activeElement, l = S(i, {
                    tabbable: o,
                    accept: u
                });
                i.contains(c) && (l.currentNode = c);
                let d = l.nextNode();
                return !d && s && (l.currentNode = i, d = l.nextNode()), d && y(d, !0), d
            },
            focusPrevious(n = t) {
                let i = e.current;
                if (!i) return null;
                let {
                    from: a,
                    tabbable: o = t.tabbable,
                    wrap: s = t.wrap,
                    accept: u = t.accept
                } = n, c = a || (0, r.getOwnerDocument)(i).activeElement, l = S(i, {
                    tabbable: o,
                    accept: u
                });
                if (i.contains(c)) l.currentNode = c;
                else {
                    let e = w(l);
                    return e && y(e, !0), null != e ? e : null
                }
                let d = l.previousNode();
                if (!d && s) {
                    l.currentNode = i;
                    let e = w(l);
                    if (!e) return null;
                    d = e
                }
                return d && y(d, !0), null != d ? d : null
            },
            focusFirst(n = t) {
                let r = e.current;
                if (!r) return null;
                let {
                    tabbable: i = t.tabbable,
                    accept: a = t.accept
                } = n, o = S(r, {
                    tabbable: i,
                    accept: a
                }).nextNode();
                return o && y(o, !0), o
            },
            focusLast(n = t) {
                let r = e.current;
                if (!r) return null;
                let {
                    tabbable: i = t.tabbable,
                    accept: a = t.accept
                } = n, o = w(S(r, {
                    tabbable: i,
                    accept: a
                }));
                return o && y(o, !0), null != o ? o : null
            }
        }
    }

    function w(e) {
        let t, n;
        do(t = e.lastChild()) && (n = t); while (t);
        return n
    }
    class T {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
            let r = this.fastMap.get(null != t ? t : null);
            if (!r) return;
            let i = new C({
                scopeRef: e
            });
            r.addChild(i), i.parent = r, this.fastMap.set(e, i), n && (i.nodeToRestore = n)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let n = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && g(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let r = t.children;
            n && (n.removeChild(t), r.size > 0 && r.forEach(e => n && n.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let n = new T;
            for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
            return n
        }
        constructor() {
            this.fastMap = new Map, this.root = new C({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class C {
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
    }
    let D = new T;

    function O(e = {}) {
        let {
            autoFocus: t = !1,
            isTextInput: n,
            within: r
        } = e, o = (0, i.useRef)({
            isFocused: !1,
            isFocusVisible: t || (0, a.isFocusVisible)()
        }), [s, u] = (0, i.useState)(!1), [c, l] = (0, i.useState)(() => o.current.isFocused && o.current.isFocusVisible), d = (0, i.useCallback)(() => l(o.current.isFocused && o.current.isFocusVisible), []), f = (0, i.useCallback)(e => {
            o.current.isFocused = e, u(e), d()
        }, [d]);
        (0, a.useFocusVisibleListener)(e => {
            o.current.isFocusVisible = e, d()
        }, [], {
            isTextInput: n
        });
        let {
            focusProps: p
        } = (0, a.useFocus)({
            isDisabled: r,
            onFocusChange: f
        }), {
            focusWithinProps: h
        } = (0, a.useFocusWithin)({
            isDisabled: !r,
            onFocusWithinChange: f
        });
        return {
            isFocused: s,
            isFocusVisible: c,
            focusProps: r ? h : p
        }
    }
    let M = i.createContext(null);

    function A(e, t) {
        let {
            focusProps: n
        } = (0, a.useFocus)(e), {
            keyboardProps: s
        } = (0, a.useKeyboard)(e), u = (0, r.mergeProps)(n, s), c = function(e) {
            let t = (0, i.useContext)(M) || {};
            (0, r.useSyncRef)(t, e);
            let {
                ref: n,
                ...a
            } = t;
            return a
        }(t), l = e.isDisabled ? {} : c, d = (0, i.useRef)(e.autoFocus);
        return (0, i.useEffect)(() => {
            d.current && t.current && o(t.current), d.current = !1
        }, [t]), {
            focusableProps: (0, r.mergeProps)({
                ...u,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
            }, l)
        }
    }

    function k(e, t) {
        let n = null == t ? void 0 : t.isDisabled,
            [a, o] = (0, i.useState)(!1);
        return (0, r.useLayoutEffect)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && o(!!S(e.current, {
                        tabbable: !0
                    }).nextNode())
                };
                t();
                let n = new MutationObserver(t);
                return n.observe(e.current, {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeFilter: ["tabIndex", "disabled"]
                }), () => {
                    n.disconnect()
                }
            }
        }), !n && a
    }
}