function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClearPressResponder: function() {
            return O
        },
        getInteractionModality: function() {
            return $
        },
        isFocusVisible: function() {
            return V
        },
        setInteractionModality: function() {
            return W
        },
        useFocus: function() {
            return k
        },
        useFocusVisibleListener: function() {
            return Q
        },
        useFocusWithin: function() {
            return Z
        },
        useHover: function() {
            return er
        },
        useInteractOutside: function() {
            return ei
        },
        useInteractionModality: function() {
            return K
        },
        useKeyboard: function() {
            return es
        },
        useLongPress: function() {
            return el
        },
        useMove: function() {
            return eu
        },
        usePress: function() {
            return b
        },
        useScrollWheel: function() {
            return ec
        }
    });
    var r = n("182823"),
        i = n("470079"),
        a = n("651512"),
        o = n("410914"),
        s = n("846135"),
        u = n("230012");
    let c = "default",
        l = "",
        d = new WeakMap;

    function f(e) {
        if ((0, r.isIOS)()) {
            if ("default" === c) {
                let t = (0, r.getOwnerDocument)(e);
                l = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
            }
            c = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (d.set(e, e.style.userSelect), e.style.userSelect = "none")
    }

    function p(e) {
        if ((0, r.isIOS)()) "disabled" === c && (c = "restoring", setTimeout(() => {
            (0, r.runAfterTransition)(() => {
                if ("restoring" === c) {
                    let t = (0, r.getOwnerDocument)(e);
                    "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || ""), l = "", c = "default"
                }
            })
        }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
            let t = d.get(e);
            "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), d.delete(e)
        }
    }
    let h = i.createContext({
        register: () => {}
    });
    h.displayName = "PressResponderContext";
    var m = new WeakMap;
    class g {
        continuePropagation() {
            (0, s._)(this, m, !1)
        }
        get shouldStopPropagation() {
            return (0, a._)(this, m)
        }
        constructor(e, t, n) {
            (0, o._)(this, m, {
                writable: !0,
                value: void 0
            }), (0, s._)(this, m, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
    }
    let _ = Symbol("linkClicked");

    function b(e) {
        let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: o,
            onPressUp: s,
            isDisabled: u,
            isPressed: c,
            preventFocusOnPress: l,
            shouldCancelOnPointerExit: d,
            allowTextSelectionOnPress: m,
            ref: b,
            ...C
        } = function(e) {
            let t = (0, i.useContext)(h);
            if (t) {
                let {
                    register: n,
                    ...i
                } = t;
                e = (0, r.mergeProps)(i, e), n()
            }
            return (0, r.useSyncRef)(t, e.ref), e
        }(e), [D, O] = (0, i.useState)(!1), M = (0, i.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null
        }), {
            addGlobalListener: A,
            removeAllGlobalListeners: k
        } = (0, r.useGlobalListeners)(), R = (0, r.useEffectEvent)((e, t) => {
            let r = M.current;
            if (u || r.didFirePressStart) return !1;
            let i = !0;
            if (r.isTriggeringEvent = !0, a) {
                let n = new g("pressstart", t, e);
                a(n), i = n.shouldStopPropagation
            }
            return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, O(!0), i
        }), N = (0, r.useEffectEvent)((e, r, i = !0) => {
            let a = M.current;
            if (!a.didFirePressStart) return !1;
            a.ignoreClickAfterPress = !0, a.didFirePressStart = !1, a.isTriggeringEvent = !0;
            let s = !0;
            if (o) {
                let t = new g("pressend", r, e);
                o(t), s = t.shouldStopPropagation
            }
            if (n && n(!1), O(!1), t && i && !u) {
                let n = new g("press", r, e);
                t(n), s && (s = n.shouldStopPropagation)
            }
            return a.isTriggeringEvent = !1, s
        }), I = (0, r.useEffectEvent)((e, t) => {
            let n = M.current;
            if (u) return !1;
            if (s) {
                n.isTriggeringEvent = !0;
                let r = new g("pressup", t, e);
                return s(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
            }
            return !0
        }), L = (0, r.useEffectEvent)(e => {
            let t = M.current;
            t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && N(S(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, k(), !m && p(t.target))
        }), P = (0, r.useEffectEvent)(e => {
            d && L(e)
        }), F = (0, i.useMemo)(() => {
            let e = M.current,
                t = {
                    onKeyDown(t) {
                        if (y(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                            var i;
                            T(t.target, t.key) && t.preventDefault();
                            let a = !0;
                            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, a = R(t, "keyboard"), A((0, r.getOwnerDocument)(t.currentTarget), "keyup", n, !1)), a && t.stopPropagation(), t.metaKey && (0, r.isMac)() && (null === (i = e.metaKeyEvents) || void 0 === i || i.set(t.key, t.nativeEvent))
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                    },
                    onKeyUp(t) {
                        y(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && e.target && I(S(e.target, t), "keyboard")
                    },
                    onClick(t) {
                        if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !r.openLink.isOpening) {
                            let n = !0;
                            if (u && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
                                !u && !l && (0, r.focusWithoutScrolling)(t.currentTarget);
                                let e = R(t, "virtual"),
                                    i = I(t, "virtual"),
                                    a = N(t, "virtual");
                                n = e && i && a
                            }
                            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                        }
                    }
                },
                n = t => {
                    var n, i, a;
                    if (e.isPressed && e.target && y(t, e.target)) {
                        T(t.target, t.key) && t.preventDefault();
                        let n = t.target,
                            a = N(S(e.target, t), "keyboard", e.target.contains(n));
                        k(), a && t.stopPropagation(), "Enter" !== t.key && v(e.target) && e.target.contains(n) && !t[_] && (t[_] = !0, (0, r.openLink)(e.target, t, !1)), e.isPressed = !1, null === (i = e.metaKeyEvents) || void 0 === i || i.delete(t.key)
                    } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of (e.metaKeyEvents = void 0, t.values())) null === (a = e.target) || void 0 === a || a.dispatchEvent(new KeyboardEvent("keyup", n))
                    }
                };
            if ("undefined" != typeof PointerEvent) {
                t.onPointerDown = t => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                    if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return
                    }
                    w(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
                    let o = !0;
                    !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !u && !l && (0, r.focusWithoutScrolling)(t.currentTarget), !m && f(e.target), o = R(t, e.pointerType), A((0, r.getOwnerDocument)(t.currentTarget), "pointermove", n, !1), A((0, r.getOwnerDocument)(t.currentTarget), "pointerup", i, !1), A((0, r.getOwnerDocument)(t.currentTarget), "pointercancel", a, !1)), o && t.stopPropagation()
                }, t.onMouseDown = e => {
                    e.currentTarget.contains(e.target) && 0 === e.button && (w(e.currentTarget) && e.preventDefault(), e.stopPropagation())
                }, t.onPointerUp = t => {
                    t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && x(t, t.currentTarget) && I(t, e.pointerType || t.pointerType)
                };
                let n = t => {
                        t.pointerId === e.activePointerId && (e.target && x(t, e.target) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, R(S(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, N(S(e.target, t), e.pointerType, !1), P(t)))
                    },
                    i = t => {
                        t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (x(t, e.target) && null != e.pointerType ? N(S(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && N(S(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, k(), !m && p(e.target))
                    },
                    a = e => {
                        L(e)
                    };
                t.onDragStart = e => {
                    e.currentTarget.contains(e.target) && L(e)
                }
            } else {
                t.onMouseDown = t => {
                    if (0 === t.button && !!t.currentTarget.contains(t.target)) {
                        if (w(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
                            t.stopPropagation();
                            return
                        }
                        e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !u && !l && (0, r.focusWithoutScrolling)(t.currentTarget), R(t, e.pointerType) && t.stopPropagation(), A((0, r.getOwnerDocument)(t.currentTarget), "mouseup", n, !1)
                    }
                }, t.onMouseEnter = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = R(t, e.pointerType)), n && t.stopPropagation()
                }, t.onMouseLeave = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = N(t, e.pointerType, !1), P(t)), n && t.stopPropagation()
                }, t.onMouseUp = t => {
                    t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && I(t, e.pointerType || "mouse")
                };
                let n = t => {
                    if (0 === t.button) {
                        if (e.isPressed = !1, k(), e.ignoreEmulatedMouseEvents) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return
                        }
                        e.target && x(t, e.target) && null != e.pointerType ? N(S(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && N(S(e.target, t), e.pointerType, !1), e.isOverTarget = !1
                    }
                };
                t.onTouchStart = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = function(e) {
                        let {
                            targetTouches: t
                        } = e;
                        return t.length > 0 ? t[0] : null
                    }(t.nativeEvent);
                    if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !u && !l && (0, r.focusWithoutScrolling)(t.currentTarget), !m && f(e.target), R(t, e.pointerType) && t.stopPropagation(), A((0, r.getOwnerWindow)(t.currentTarget), "scroll", i, !0)
                }, t.onTouchMove = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = E(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && x(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, r = R(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = N(t, e.pointerType, !1), P(t)), r && t.stopPropagation()
                }, t.onTouchEnd = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = E(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && x(n, t.currentTarget) && null != e.pointerType ? (I(t, e.pointerType), r = N(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = N(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !m && p(e.target), k()
                }, t.onTouchCancel = t => {
                    t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && L(t))
                };
                let i = t => {
                    e.isPressed && t.target.contains(e.target) && L({
                        currentTarget: e.target,
                        shiftKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                        altKey: !1
                    })
                };
                t.onDragStart = e => {
                    e.currentTarget.contains(e.target) && L(e)
                }
            }
            return t
        }, [A, u, l, k, m, L, P, N, R, I]);
        return (0, i.useEffect)(() => () => {
            var e;
            !m && p(null !== (e = M.current.target) && void 0 !== e ? e : void 0)
        }, [m]), {
            isPressed: c || D,
            pressProps: (0, r.mergeProps)(C, F)
        }
    }

    function v(e) {
        return "A" === e.tagName && e.hasAttribute("href")
    }

    function y(e, t) {
        let {
            key: n,
            code: i
        } = e, a = t.getAttribute("role");
        return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === i) && !(t instanceof(0, r.getOwnerWindow)(t).HTMLInputElement && !D(t, n) || t instanceof(0, r.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === a || !a && v(t)) && "Enter" !== n)
    }

    function E(e, t) {
        let n = e.changedTouches;
        for (let e = 0; e < n.length; e++) {
            let r = n[e];
            if (r.identifier === t) return r
        }
        return null
    }

    function S(e, t) {
        return {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey
        }
    }

    function x(e, t) {
        var n, r, i;
        let a, o, s = t.getBoundingClientRect();
        let u = (a = 0, o = 0, void 0 !== (n = e).width ? a = n.width / 2 : void 0 !== n.radiusX && (a = n.radiusX), void 0 !== n.height ? o = n.height / 2 : void 0 !== n.radiusY && (o = n.radiusY), {
            top: n.clientY - o,
            right: n.clientX + a,
            bottom: n.clientY + o,
            left: n.clientX - a
        });
        return r = s, i = u, !(r.left > i.right) && !(i.left > r.right) && !(r.top > i.bottom) && !(i.top > r.bottom) && !0
    }

    function w(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
    }

    function T(e, t) {
        return e instanceof HTMLInputElement ? !D(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !v(e) && !0
    }
    let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function D(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : C.has(e.type)
    }

    function O({
        children: e
    }) {
        let t = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.createElement(h.Provider, {
            value: t
        }, e)
    }
    class M {
        isDefaultPrevented() {
            return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
            this.defaultPrevented = !0, this.nativeEvent.preventDefault()
        }
        stopPropagation() {
            this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
            return !1
        }
        persist() {}
        constructor(e, t) {
            this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = e
        }
    }

    function A(e) {
        let t = (0, i.useRef)({
            isFocused: !1,
            observer: null
        });
        (0, r.useLayoutEffect)(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []);
        let n = (0, r.useEffectEvent)(t => {
            null == e || e(t)
        });
        return (0, i.useCallback)(e => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target;
                r.addEventListener("focusout", e => {
                    t.current.isFocused = !1, r.disabled && n(new M("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                }, {
                    once: !0
                }), t.current.observer = new MutationObserver(() => {
                    if (t.current.isFocused && r.disabled) {
                        var e;
                        null === (e = t.current.observer) || void 0 === e || e.disconnect();
                        let n = r === document.activeElement ? null : document.activeElement;
                        r.dispatchEvent(new FocusEvent("blur", {
                            relatedTarget: n
                        })), r.dispatchEvent(new FocusEvent("focusout", {
                            bubbles: !0,
                            relatedTarget: n
                        }))
                    }
                }), t.current.observer.observe(r, {
                    attributes: !0,
                    attributeFilter: ["disabled"]
                })
            }
        }, [n])
    }

    function k(e) {
        let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: a
        } = e, o = (0, i.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), a && a(!1), !0
        }, [r, a]), s = A(o), u = (0, i.useCallback)(e => {
            e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), a && a(!0), s(e))
        }, [a, n, s]);
        return {
            focusProps: {
                onFocus: !t && (n || a || r) ? u : void 0,
                onBlur: !t && (r || a) ? o : void 0
            }
        }
    }
    let R = null,
        N = new Set,
        I = !1,
        L = !1,
        P = !1,
        F = {
            Tab: !0,
            Escape: !0
        };

    function B(e, t) {
        for (let n of N) n(e, t)
    }

    function U(e) {
        var t;
        if (L = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) R = "keyboard", B("keyboard", e)
    }

    function Y(e) {
        R = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (L = !0, B("pointer", e))
    }

    function j(e) {
        (0, r.isVirtualClick)(e) && (L = !0, R = "virtual")
    }

    function z(e) {
        e.target !== window && e.target !== document && (!L && !P && (R = "virtual", B("virtual", e)), L = !1, P = !1)
    }

    function H() {
        L = !1, P = !0
    }

    function G() {
        if ("undefined" == typeof window || I) return;
        let e = HTMLElement.prototype.focus;
        HTMLElement.prototype.focus = function() {
            L = !0, e.apply(this, arguments)
        }, document.addEventListener("keydown", U, !0), document.addEventListener("keyup", U, !0), document.addEventListener("click", j, !0), window.addEventListener("focus", z, !0), window.addEventListener("blur", H, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", Y, !0), document.addEventListener("pointermove", Y, !0), document.addEventListener("pointerup", Y, !0)) : (document.addEventListener("mousedown", Y, !0), document.addEventListener("mousemove", Y, !0), document.addEventListener("mouseup", Y, !0)), I = !0
    }

    function V() {
        return "pointer" !== R
    }

    function $() {
        return R
    }

    function W(e) {
        R = e, B(e, null)
    }

    function K() {
        G();
        let [e, t] = (0, i.useState)(R);
        return (0, i.useEffect)(() => {
            let e = () => {
                t(R)
            };
            return N.add(e), () => {
                N.delete(e)
            }
        }, []), (0, u.useIsSSR)() ? null : e
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? G() : document.addEventListener("DOMContentLoaded", G));
    let q = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function Q(e, t, n) {
        G(), (0, i.useEffect)(() => {
            let t = (t, r) => {
                var i, a, o, s;
                if (i = !!(null == n ? void 0 : n.isTextInput), a = t, o = r, !((i = i || (null == o ? void 0 : o.target) instanceof HTMLInputElement && !q.has(null == o ? void 0 : null === (s = o.target) || void 0 === s ? void 0 : s.type) || (null == o ? void 0 : o.target) instanceof HTMLTextAreaElement || (null == o ? void 0 : o.target) instanceof HTMLElement && (null == o ? void 0 : o.target.isContentEditable)) && "keyboard" === a && o instanceof KeyboardEvent) || F[o.key]) e(V())
            };
            return N.add(t), () => {
                N.delete(t)
            }
        }, t)
    }

    function Z(e) {
        let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: a
        } = e, o = (0, i.useRef)({
            isFocusWithin: !1
        }), s = (0, i.useCallback)(e => {
            o.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (o.current.isFocusWithin = !1, n && n(e), a && a(!1))
        }, [n, a, o]), u = A(s), c = (0, i.useCallback)(e => {
            !o.current.isFocusWithin && document.activeElement === e.target && (r && r(e), a && a(!0), o.current.isFocusWithin = !0, u(e))
        }, [r, a, u]);
        return t ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: c,
                onBlur: s
            }
        }
    }
    let X = !1,
        J = 0;

    function ee() {
        X = !0, setTimeout(() => {
            X = !1
        }, 50)
    }

    function et(e) {
        "touch" === e.pointerType && ee()
    }

    function en() {
        if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", et) : document.addEventListener("touchend", ee), J++, () => {
            !(--J > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", et) : document.removeEventListener("touchend", ee))
        }
    }

    function er(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: r,
            isDisabled: a
        } = e, [o, s] = (0, i.useState)(!1), u = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, i.useEffect)(en, []);
        let {
            hoverProps: c,
            triggerHoverEnd: l
        } = (0, i.useMemo)(() => {
            let e = (e, r) => {
                    if (u.pointerType = r, a || "touch" === r || u.isHovered || !e.currentTarget.contains(e.target)) return;
                    u.isHovered = !0;
                    let i = e.currentTarget;
                    u.target = i, t && t({
                        type: "hoverstart",
                        target: i,
                        pointerType: r
                    }), n && n(!0), s(!0)
                },
                i = (e, t) => {
                    if (u.pointerType = "", u.target = null, "touch" === t || !u.isHovered) return;
                    u.isHovered = !1;
                    let i = e.currentTarget;
                    r && r({
                        type: "hoverend",
                        target: i,
                        pointerType: t
                    }), n && n(!1), s(!1)
                },
                o = {};
            return "undefined" != typeof PointerEvent ? (o.onPointerEnter = t => {
                (!X || "mouse" !== t.pointerType) && e(t, t.pointerType)
            }, o.onPointerLeave = e => {
                !a && e.currentTarget.contains(e.target) && i(e, e.pointerType)
            }) : (o.onTouchStart = () => {
                u.ignoreEmulatedMouseEvents = !0
            }, o.onMouseEnter = t => {
                !u.ignoreEmulatedMouseEvents && !X && e(t, "mouse"), u.ignoreEmulatedMouseEvents = !1
            }, o.onMouseLeave = e => {
                !a && e.currentTarget.contains(e.target) && i(e, "mouse")
            }), {
                hoverProps: o,
                triggerHoverEnd: i
            }
        }, [t, n, r, a, u]);
        return (0, i.useEffect)(() => {
            a && l({
                currentTarget: u.target
            }, u.pointerType)
        }, [a]), {
            hoverProps: c,
            isHovered: o
        }
    }

    function ei(e) {
        let {
            ref: t,
            onInteractOutside: n,
            isDisabled: a,
            onInteractOutsideStart: o
        } = e, s = (0, i.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }), u = (0, r.useEffectEvent)(e => {
            n && ea(e, t) && (o && o(e), s.current.isPointerDown = !0)
        }), c = (0, r.useEffectEvent)(e => {
            n && n(e)
        });
        (0, i.useEffect)(() => {
            let e = s.current;
            if (a) return;
            let n = t.current,
                i = (0, r.getOwnerDocument)(n);
            if ("undefined" != typeof PointerEvent) {
                let n = n => {
                    e.isPointerDown && ea(n, t) && c(n), e.isPointerDown = !1
                };
                return i.addEventListener("pointerdown", u, !0), i.addEventListener("pointerup", n, !0), () => {
                    i.removeEventListener("pointerdown", u, !0), i.removeEventListener("pointerup", n, !0)
                }
            } {
                let n = n => {
                        e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && ea(n, t) && c(n), e.isPointerDown = !1
                    },
                    r = n => {
                        e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && ea(n, t) && c(n), e.isPointerDown = !1
                    };
                return i.addEventListener("mousedown", u, !0), i.addEventListener("mouseup", n, !0), i.addEventListener("touchstart", u, !0), i.addEventListener("touchend", r, !0), () => {
                    i.removeEventListener("mousedown", u, !0), i.removeEventListener("mouseup", n, !0), i.removeEventListener("touchstart", u, !0), i.removeEventListener("touchend", r, !0)
                }
            }
        }, [t, a, u, c])
    }

    function ea(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return t.current && !t.current.contains(e.target)
    }

    function eo(e) {
        if (!e) return;
        let t = !0;
        return n => {
            e({
                ...n,
                preventDefault() {
                    n.preventDefault()
                },
                isDefaultPrevented: () => n.isDefaultPrevented(),
                stopPropagation() {
                    console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")
                },
                continuePropagation() {
                    t = !1
                }
            }), t && n.stopPropagation()
        }
    }

    function es(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: eo(e.onKeyDown),
                onKeyUp: eo(e.onKeyUp)
            }
        }
    }

    function eu(e) {
        let {
            onMoveStart: t,
            onMove: n,
            onMoveEnd: a
        } = e, o = (0, i.useRef)({
            didMove: !1,
            lastPosition: null,
            id: null
        }), {
            addGlobalListener: s,
            removeGlobalListener: u
        } = (0, r.useGlobalListeners)(), c = (0, r.useEffectEvent)((e, r, i, a) => {
            (0 !== i || 0 !== a) && (!o.current.didMove && (o.current.didMove = !0, null == t || t({
                type: "movestart",
                pointerType: r,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            })), null == n || n({
                type: "move",
                pointerType: r,
                deltaX: i,
                deltaY: a,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            }))
        }), l = (0, r.useEffectEvent)((e, t) => {
            p(), o.current.didMove && (null == a || a({
                type: "moveend",
                pointerType: t,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            }))
        });
        return {
            moveProps: (0, i.useMemo)(() => {
                let e = {},
                    t = () => {
                        f(), o.current.didMove = !1
                    };
                if ("undefined" == typeof PointerEvent) {
                    let n = e => {
                            if (0 === e.button) {
                                var t, n, r, i;
                                c(e, "mouse", e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            0 === e.button && (l(e, "mouse"), u(window, "mousemove", n, !1), u(window, "mouseup", r, !1))
                        };
                    e.onMouseDown = e => {
                        0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, s(window, "mousemove", n, !1), s(window, "mouseup", r, !1))
                    };
                    let i = e => {
                            let t = [...e.changedTouches].findIndex(({
                                identifier: e
                            }) => e === o.current.id);
                            if (t >= 0) {
                                var n, r, i, a;
                                let {
                                    pageX: s,
                                    pageY: u
                                } = e.changedTouches[t];
                                c(e, "touch", s - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), u - (null !== (a = null === (r = o.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== a ? a : 0)), o.current.lastPosition = {
                                    pageX: s,
                                    pageY: u
                                }
                            }
                        },
                        a = e => {
                            [...e.changedTouches].findIndex(({
                                identifier: e
                            }) => e === o.current.id) >= 0 && (l(e, "touch"), o.current.id = null, u(window, "touchmove", i), u(window, "touchend", a), u(window, "touchcancel", a))
                        };
                    e.onTouchStart = e => {
                        if (0 === e.changedTouches.length || null != o.current.id) return;
                        let {
                            pageX: n,
                            pageY: r,
                            identifier: u
                        } = e.changedTouches[0];
                        t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: n,
                            pageY: r
                        }, o.current.id = u, s(window, "touchmove", i, !1), s(window, "touchend", a, !1), s(window, "touchcancel", a, !1)
                    }
                } else {
                    let n = e => {
                            if (e.pointerId === o.current.id) {
                                var t, n, r, i;
                                let a = e.pointerType || "mouse";
                                c(e, a, e.pageX - (null !== (r = null === (t = o.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = o.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), o.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            if (e.pointerId === o.current.id) {
                                let t = e.pointerType || "mouse";
                                l(e, t), o.current.id = null, u(window, "pointermove", n, !1), u(window, "pointerup", r, !1), u(window, "pointercancel", r, !1)
                            }
                        };
                    e.onPointerDown = e => {
                        0 === e.button && null == o.current.id && (t(), e.stopPropagation(), e.preventDefault(), o.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, o.current.id = e.pointerId, s(window, "pointermove", n, !1), s(window, "pointerup", r, !1), s(window, "pointercancel", r, !1))
                    }
                }
                let n = (e, n, r) => {
                    t(), c(e, "keyboard", n, r), l(e, "keyboard")
                };
                return e.onKeyDown = e => {
                    switch (e.key) {
                        case "Left":
                        case "ArrowLeft":
                            e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
                            break;
                        case "Right":
                        case "ArrowRight":
                            e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
                            break;
                        case "Up":
                        case "ArrowUp":
                            e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
                            break;
                        case "Down":
                        case "ArrowDown":
                            e.preventDefault(), e.stopPropagation(), n(e, 0, 1)
                    }
                }, e
            }, [o, s, u, c, l])
        }
    }

    function ec(e, t) {
        let {
            onScroll: n,
            isDisabled: a
        } = e, o = (0, i.useCallback)(e => {
            !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }))
        }, [n]);
        (0, r.useEvent)(t, "wheel", a ? void 0 : o)
    }

    function el(e) {
        let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: a,
            onLongPress: o,
            threshold: s = 500,
            accessibilityDescription: u
        } = e, c = (0, i.useRef)(), {
            addGlobalListener: l,
            removeGlobalListener: d
        } = (0, r.useGlobalListeners)(), {
            pressProps: f
        } = b({
            isDisabled: t,
            onPressStart(e) {
                if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
                        ...e,
                        type: "longpressstart"
                    }), c.current = setTimeout(() => {
                        e.target.dispatchEvent(new PointerEvent("pointercancel", {
                            bubbles: !0
                        })), o && o({
                            ...e,
                            type: "longpress"
                        }), c.current = void 0
                    }, s), "touch" === e.pointerType)) {
                    let t = e => {
                        e.preventDefault()
                    };
                    l(e.target, "contextmenu", t, {
                        once: !0
                    }), l(window, "pointerup", () => {
                        setTimeout(() => {
                            d(e.target, "contextmenu", t)
                        }, 30)
                    }, {
                        once: !0
                    })
                }
            },
            onPressEnd(e) {
                c.current && clearTimeout(c.current), a && ("mouse" === e.pointerType || "touch" === e.pointerType) && a({
                    ...e,
                    type: "longpressend"
                })
            }
        }), p = (0, r.useDescription)(o && !t ? u : void 0);
        return {
            longPressProps: (0, r.mergeProps)(f, p)
        }
    }
}