function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusScope: function() {
            return u
        },
        getFocusableTreeWalker: function() {
            return S
        },
        createFocusManager: function() {
            return k
        },
        isElementInChildOfActiveScope: function() {
            return m
        },
        useFocusable: function() {
            return T
        },
        useFocusRing: function() {
            return C
        },
        focusSafely: function() {
            return s
        },
        useHasTabbableChild: function() {
            return A
        }
    }), n("424973"), n("222007");
    var r = n("240849"),
        i = n("884691"),
        o = n("388032");

    function s(e) {
        let t = (0, r.getOwnerDocument)(e);
        if ("virtual" === (0, o.getInteractionModality)()) {
            let n = t.activeElement;
            (0, r.runAfterTransition)(() => {
                t.activeElement === n && e.isConnected && (0, r.focusWithoutScrolling)(e)
            })
        } else(0, r.focusWithoutScrolling)(e)
    }
    n("493427");
    let a = i.createContext(null),
        c = null;

    function u(e) {
        let {
            children: t,
            contain: n,
            restoreFocus: o,
            autoFocus: s
        } = e, u = (0, i.useRef)(null), d = (0, i.useRef)(null), l = (0, i.useRef)([]), {
            parentNode: f
        } = (0, i.useContext)(a) || {}, v = (0, i.useMemo)(() => new M({
            scopeRef: l
        }), [l]);
        (0, r.useLayoutEffect)(() => {
            let e = f || D.root;
            if (D.getTreeNode(e.scopeRef) && c && !y(c, e.scopeRef)) {
                let t = D.getTreeNode(c);
                t && (e = t)
            }
            e.addChild(v), D.addNode(v)
        }, [v, f]), (0, r.useLayoutEffect)(() => {
            let e = D.getTreeNode(l);
            e && (e.contain = !!n)
        }, [n]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null === (e = u.current) || void 0 === e ? void 0 : e.nextSibling,
                n = [];
            for (; t && t !== d.current;) n.push(t), t = t.nextSibling;
            l.current = n
        }, [t]),
        function(e, t, n) {
            (0, r.useLayoutEffect)(() => {
                if (t || n) return;
                let i = e.current,
                    o = (0, r.getOwnerDocument)(i ? i[0] : void 0),
                    s = t => {
                        let n = t.target;
                        if (g(n, e.current)) c = e;
                        else if (!b(n)) c = null
                    };
                return o.addEventListener("focusin", s, !1), null == i || i.forEach(e => e.addEventListener("focusin", s, !1)), () => {
                    o.removeEventListener("focusin", s, !1), null == i || i.forEach(e => e.removeEventListener("focusin", s, !1))
                }
            }, [e, t, n])
        }(l, o, n),
        function(e, t) {
            let n = (0, i.useRef)(),
                o = (0, i.useRef)();
            (0, r.useLayoutEffect)(() => {
                let i = e.current;
                if (!t) {
                    o.current && (cancelAnimationFrame(o.current), o.current = void 0);
                    return
                }
                let s = (0, r.getOwnerDocument)(i ? i[0] : void 0),
                    a = t => {
                        if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                        let n = s.activeElement,
                            r = e.current;
                        if (!r || !g(n, r)) return;
                        let i = S(p(r), {
                            tabbable: !0
                        }, r);
                        if (!n) return;
                        i.currentNode = n;
                        let o = t.shiftKey ? i.previousNode() : i.nextNode();
                        !o && (i.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling, o = t.shiftKey ? i.previousNode() : i.nextNode()), t.preventDefault(), o && x(o, !0)
                    },
                    u = t => {
                        (!c || y(c, e)) && g(t.target, e.current) ? (c = e, n.current = t.target) : h(e) && !b(t.target, e) ? n.current ? n.current.focus() : c && c.current && w(c.current) : h(e) && (n.current = t.target)
                    },
                    d = t => {
                        o.current && cancelAnimationFrame(o.current), o.current = requestAnimationFrame(() => {
                            if (s.activeElement && h(e) && !b(s.activeElement, e)) {
                                if (c = e, s.body.contains(t.target)) {
                                    var r;
                                    n.current = t.target, null === (r = n.current) || void 0 === r || r.focus()
                                } else c.current && w(c.current)
                            }
                        })
                    };
                return s.addEventListener("keydown", a, !1), s.addEventListener("focusin", u, !1), null == i || i.forEach(e => e.addEventListener("focusin", u, !1)), null == i || i.forEach(e => e.addEventListener("focusout", d, !1)), () => {
                    s.removeEventListener("keydown", a, !1), s.removeEventListener("focusin", u, !1), null == i || i.forEach(e => e.removeEventListener("focusin", u, !1)), null == i || i.forEach(e => e.removeEventListener("focusout", d, !1))
                }
            }, [e, t]), (0, r.useLayoutEffect)(() => () => {
                o.current && cancelAnimationFrame(o.current)
            }, [o])
        }(l, n),
        function(e, t, n) {
            let o = (0, i.useRef)("undefined" != typeof document ? (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0).activeElement : null);
            (0, r.useLayoutEffect)(() => {
                let i = e.current,
                    o = (0, r.getOwnerDocument)(i ? i[0] : void 0);
                if (!t || n) return;
                let s = () => {
                    (!c || y(c, e)) && g(o.activeElement, e.current) && (c = e)
                };
                return o.addEventListener("focusin", s, !1), null == i || i.forEach(e => e.addEventListener("focusin", s, !1)), () => {
                    o.removeEventListener("focusin", s, !1), null == i || i.forEach(e => e.removeEventListener("focusin", s, !1))
                }
            }, [e, n]), (0, r.useLayoutEffect)(() => {
                let i = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let o = t => {
                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !h(e)) return;
                    let n = i.activeElement;
                    if (!g(n, e.current)) return;
                    let r = D.getTreeNode(e);
                    if (!r) return;
                    let o = r.nodeToRestore,
                        s = S(i.body, {
                            tabbable: !0
                        });
                    s.currentNode = n;
                    let a = t.shiftKey ? s.previousNode() : s.nextNode();
                    if ((!o || !i.body.contains(o) || o === i.body) && (o = void 0, r.nodeToRestore = void 0), (!a || !g(a, e.current)) && o) {
                        s.currentNode = o;
                        do a = t.shiftKey ? s.previousNode() : s.nextNode(); while (g(a, e.current));
                        if (t.preventDefault(), t.stopPropagation(), a) x(a, !0);
                        else if (b(o)) x(o, !0);
                        else n.blur()
                    }
                };
                return !n && i.addEventListener("keydown", o, !0), () => {
                    !n && i.removeEventListener("keydown", o, !0)
                }
            }, [e, t, n]), (0, r.useLayoutEffect)(() => {
                var n;
                let i = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let s = D.getTreeNode(e);
                if (s) return s.nodeToRestore = null !== (n = o.current) && void 0 !== n ? n : void 0, () => {
                    let n = D.getTreeNode(e);
                    if (!n) return;
                    let r = n.nodeToRestore;
                    if (t && r && (g(i.activeElement, e.current) || i.activeElement === i.body && function(e) {
                            let t = D.getTreeNode(c);
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
                                        x(n.nodeToRestore);
                                        return
                                    }
                                    n = n.parent
                                }
                                for (n = t.getTreeNode(e); n;) {
                                    if (n.scopeRef && n.scopeRef.current && D.getTreeNode(n.scopeRef)) {
                                        w(n.scopeRef.current, !0);
                                        return
                                    }
                                    n = n.parent
                                }
                            }
                        })
                    }
                }
            }, [e, t])
        }(l, o, n),
        function(e, t) {
            let n = i.useRef(t);
            (0, i.useEffect)(() => {
                if (n.current) {
                    c = e;
                    let t = (0, r.getOwnerDocument)(e.current ? e.current[0] : void 0);
                    !g(t.activeElement, c.current) && e.current && w(e.current)
                }
                n.current = !1
            }, [e])
        }(l, s), (0, i.useEffect)(() => {
            let e = (0, r.getOwnerDocument)(l.current ? l.current[0] : void 0).activeElement,
                t = null;
            if (g(e, l.current)) {
                for (let n of D.traverse()) n.scopeRef && g(e, n.scopeRef.current) && (t = n);
                t === D.getTreeNode(l) && (c = t.scopeRef)
            }
        }, [l]), (0, r.useLayoutEffect)(() => () => {
            var e, t, n;
            let r = null !== (n = null === (t = D.getTreeNode(l)) || void 0 === t ? void 0 : null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
            (l === c || y(l, c)) && (!r || D.getTreeNode(r)) && (c = r), D.removeTreeNode(l)
        }, [l]);
        let m = (0, i.useMemo)(() => (function(e) {
                return {
                    focusNext() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                from: i,
                                tabbable: o,
                                wrap: s,
                                accept: a
                            } = t,
                            c = i || (0, r.getOwnerDocument)(n[0]).activeElement,
                            u = n[0].previousElementSibling,
                            d = S(p(n), {
                                tabbable: o,
                                accept: a
                            }, n);
                        d.currentNode = g(c, n) ? c : u;
                        let l = d.nextNode();
                        return !l && s && (d.currentNode = u, l = d.nextNode()), l && x(l, !0), l
                    },
                    focusPrevious() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                from: i,
                                tabbable: o,
                                wrap: s,
                                accept: a
                            } = t,
                            c = i || (0, r.getOwnerDocument)(n[0]).activeElement,
                            u = n[n.length - 1].nextElementSibling,
                            d = S(p(n), {
                                tabbable: o,
                                accept: a
                            }, n);
                        d.currentNode = g(c, n) ? c : u;
                        let l = d.previousNode();
                        return !l && s && (d.currentNode = u, l = d.previousNode()), l && x(l, !0), l
                    },
                    focusFirst() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                tabbable: r,
                                accept: i
                            } = t,
                            o = S(p(n), {
                                tabbable: r,
                                accept: i
                            }, n);
                        o.currentNode = n[0].previousElementSibling;
                        let s = o.nextNode();
                        return s && x(s, !0), s
                    },
                    focusLast() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.current,
                            {
                                tabbable: r,
                                accept: i
                            } = t,
                            o = S(p(n), {
                                tabbable: r,
                                accept: i
                            }, n);
                        o.currentNode = n[n.length - 1].nextElementSibling;
                        let s = o.previousNode();
                        return s && x(s, !0), s
                    }
                }
            })(l), []),
            k = (0, i.useMemo)(() => ({
                focusManager: m,
                parentNode: v
            }), [v, m]);
        return i.createElement(a.Provider, {
            value: k
        }, i.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: u
        }), t, i.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: d
        }))
    }
    let d = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
        l = d.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    d.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let f = d.join(':not([hidden]):not([tabindex="-1"]),');

    function p(e) {
        return e[0].parentElement
    }

    function h(e) {
        let t = D.getTreeNode(c);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function v(e) {
        return b(e)
    }

    function g(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: n
            }
            of D.traverse(D.getTreeNode(t)))
            if (n && g(e, n.current)) return !0;
        return !1
    }

    function m(e) {
        return b(e, c)
    }

    function y(e, t) {
        var n;
        let r = null === (n = D.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
        for (; r;) {
            if (r.scopeRef === e) return !0;
            r = r.parent
        }
        return !1
    }

    function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch (e) {}
        } else try {
            s(e)
        } catch (e) {}
    }

    function w(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = e[0].previousElementSibling,
            r = p(e),
            i = S(r, {
                tabbable: t
            }, e);
        i.currentNode = n;
        let o = i.nextNode();
        t && !o && ((i = S(r = p(e), {
            tabbable: !1
        }, e)).currentNode = n, o = i.nextNode()), x(o)
    }

    function S(e, t, n) {
        let i = (null == t ? void 0 : t.tabbable) ? f : l,
            o = (0, r.getOwnerDocument)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode(e) {
                    var o;
                    return (null == t ? void 0 : null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(i) && function e(t, n) {
                        var i, o;
                        return "#comment" !== t.nodeName && function(e) {
                            let t = (0, r.getOwnerWindow)(e);
                            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: i
                            } = e.style, o = "none" !== n && "hidden" !== i && "collapse" !== i;
                            if (o) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: n,
                                    visibility: r
                                } = t(e);
                                o = "none" !== n && "hidden" !== r && "collapse" !== r
                            }
                            return o
                        }(t) && (i = t, o = n, !i.hasAttribute("hidden") && ("DETAILS" !== i.nodeName || !o || "SUMMARY" === o.nodeName || i.hasAttribute("open"))) && (!t.parentElement || e(t.parentElement, t))
                    }(e) && (!n || g(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
    }

    function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            focusNext() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = e.current;
                if (!i) return null;
                let {
                    from: o,
                    tabbable: s = t.tabbable,
                    wrap: a = t.wrap,
                    accept: c = t.accept
                } = n, u = o || (0, r.getOwnerDocument)(i).activeElement, d = S(i, {
                    tabbable: s,
                    accept: c
                });
                i.contains(u) && (d.currentNode = u);
                let l = d.nextNode();
                return !l && a && (d.currentNode = i, l = d.nextNode()), l && x(l, !0), l
            },
            focusPrevious() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    i = e.current;
                if (!i) return null;
                let {
                    from: o,
                    tabbable: s = t.tabbable,
                    wrap: a = t.wrap,
                    accept: c = t.accept
                } = n, u = o || (0, r.getOwnerDocument)(i).activeElement, d = S(i, {
                    tabbable: s,
                    accept: c
                });
                if (i.contains(u)) d.currentNode = u;
                else {
                    let e = E(d);
                    return e && x(e, !0), null != e ? e : null
                }
                let l = d.previousNode();
                if (!l && a) {
                    d.currentNode = i;
                    let e = E(d);
                    if (!e) return null;
                    l = e
                }
                return l && x(l, !0), null != l ? l : null
            },
            focusFirst() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    r = e.current;
                if (!r) return null;
                let {
                    tabbable: i = t.tabbable,
                    accept: o = t.accept
                } = n, s = S(r, {
                    tabbable: i,
                    accept: o
                }).nextNode();
                return s && x(s, !0), s
            },
            focusLast() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                    r = e.current;
                if (!r) return null;
                let {
                    tabbable: i = t.tabbable,
                    accept: o = t.accept
                } = n, s = E(S(r, {
                    tabbable: i,
                    accept: o
                }));
                return s && x(s, !0), null != s ? s : null
            }
        }
    }

    function E(e) {
        let t, n;
        do(t = e.lastChild()) && (n = t); while (t);
        return n
    }
    class _ {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
            let r = this.fastMap.get(null != t ? t : null);
            if (!r) return;
            let i = new M({
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
        }* traverse() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.root;
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let n = new _;
            for (let r of this.traverse()) n.addTreeNode(r.scopeRef, null !== (t = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== t ? t : null, r.nodeToRestore);
            return n
        }
        constructor() {
            this.fastMap = new Map, this.root = new M({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class M {
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
    let D = new _;

    function C() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                autoFocus: t = !1,
                isTextInput: n,
                within: r
            } = e,
            s = (0, i.useRef)({
                isFocused: !1,
                isFocusVisible: t || (0, o.isFocusVisible)()
            }),
            [a, c] = (0, i.useState)(!1),
            [u, d] = (0, i.useState)(() => s.current.isFocused && s.current.isFocusVisible),
            l = (0, i.useCallback)(() => d(s.current.isFocused && s.current.isFocusVisible), []),
            f = (0, i.useCallback)(e => {
                s.current.isFocused = e, c(e), l()
            }, [l]);
        (0, o.useFocusVisibleListener)(e => {
            s.current.isFocusVisible = e, l()
        }, [], {
            isTextInput: n
        });
        let {
            focusProps: p
        } = (0, o.useFocus)({
            isDisabled: r,
            onFocusChange: f
        }), {
            focusWithinProps: h
        } = (0, o.useFocusWithin)({
            isDisabled: !r,
            onFocusWithinChange: f
        });
        return {
            isFocused: a,
            isFocusVisible: u,
            focusProps: r ? h : p
        }
    }
    let P = i.createContext(null);

    function T(e, t) {
        let {
            focusProps: n
        } = (0, o.useFocus)(e), {
            keyboardProps: a
        } = (0, o.useKeyboard)(e), c = (0, r.mergeProps)(n, a), u = function(e) {
            let t = (0, i.useContext)(P) || {};
            (0, r.useSyncRef)(t, e);
            let {
                ref: n,
                ...o
            } = t;
            return o
        }(t), d = e.isDisabled ? {} : u, l = (0, i.useRef)(e.autoFocus);
        return (0, i.useEffect)(() => {
            l.current && t.current && s(t.current), l.current = !1
        }, [t]), {
            focusableProps: (0, r.mergeProps)({
                ...c,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
            }, d)
        }
    }

    function A(e, t) {
        let n = null == t ? void 0 : t.isDisabled,
            [o, s] = (0, i.useState)(!1);
        return (0, r.useLayoutEffect)(() => {
            if ((null == e ? void 0 : e.current) && !n) {
                let t = () => {
                    e.current && s(!!S(e.current, {
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
        }), !n && o
    }
}