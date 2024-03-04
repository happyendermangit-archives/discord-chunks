function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClearPressResponder: function() {
            return C
        },
        useFocus: function() {
            return A
        },
        isFocusVisible: function() {
            return q
        },
        getInteractionModality: function() {
            return G
        },
        setInteractionModality: function() {
            return W
        },
        useInteractionModality: function() {
            return Z
        },
        useFocusVisibleListener: function() {
            return X
        },
        useFocusWithin: function() {
            return J
        },
        useHover: function() {
            return er
        },
        useInteractOutside: function() {
            return ei
        },
        useKeyboard: function() {
            return ea
        },
        useMove: function() {
            return ec
        },
        usePress: function() {
            return m
        },
        useScrollWheel: function() {
            return eu
        },
        useLongPress: function() {
            return ed
        }
    }), n("222007");
    var r = n("240849"),
        i = n("884691"),
        o = n("79458"),
        s = n("599514"),
        a = n("686047"),
        c = n("638915");
    let u = "default",
        d = "",
        l = new WeakMap;

    function f(e) {
        if ((0, r.isIOS)()) {
            if ("default" === u) {
                let t = (0, r.getOwnerDocument)(e);
                d = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
            }
            u = "disabled"
        } else(e instanceof HTMLElement || e instanceof SVGElement) && (l.set(e, e.style.userSelect), e.style.userSelect = "none")
    }

    function p(e) {
        if ((0, r.isIOS)()) "disabled" === u && (u = "restoring", setTimeout(() => {
            (0, r.runAfterTransition)(() => {
                if ("restoring" === u) {
                    let t = (0, r.getOwnerDocument)(e);
                    "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = d || ""), d = "", u = "default"
                }
            })
        }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && l.has(e)) {
            let t = l.get(e);
            "none" === e.style.userSelect && (e.style.userSelect = t), "" === e.getAttribute("style") && e.removeAttribute("style"), l.delete(e)
        }
    }
    let h = i.createContext({
        register: () => {}
    });
    h.displayName = "PressResponderContext";
    var v = new WeakMap;
    class g {
        continuePropagation() {
            (0, a._)(this, v, !1)
        }
        get shouldStopPropagation() {
            return (0, o._)(this, v)
        }
        constructor(e, t, n) {
            (0, s._)(this, v, {
                writable: !0,
                value: void 0
            }), (0, a._)(this, v, !0), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey
        }
    }
    let b = Symbol("linkClicked");

    function m(e) {
        let {
            onPress: t,
            onPressChange: n,
            onPressStart: o,
            onPressEnd: s,
            onPressUp: a,
            isDisabled: c,
            isPressed: u,
            preventFocusOnPress: d,
            shouldCancelOnPointerExit: l,
            allowTextSelectionOnPress: v,
            ref: m,
            ...M
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
        }(e), [D, C] = (0, i.useState)(!1), P = (0, i.useRef)({
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
            addGlobalListener: T,
            removeAllGlobalListeners: A
        } = (0, r.useGlobalListeners)(), R = (0, r.useEffectEvent)((e, t) => {
            let r = P.current;
            if (c || r.didFirePressStart) return !1;
            let i = !0;
            if (r.isTriggeringEvent = !0, o) {
                let n = new g("pressstart", t, e);
                o(n), i = n.shouldStopPropagation
            }
            return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, C(!0), i
        }), I = (0, r.useEffectEvent)(function(e, r) {
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                o = P.current;
            if (!o.didFirePressStart) return !1;
            o.ignoreClickAfterPress = !0, o.didFirePressStart = !1, o.isTriggeringEvent = !0;
            let a = !0;
            if (s) {
                let t = new g("pressend", r, e);
                s(t), a = t.shouldStopPropagation
            }
            if (n && n(!1), C(!1), t && i && !c) {
                let n = new g("press", r, e);
                t(n), a && (a = n.shouldStopPropagation)
            }
            return o.isTriggeringEvent = !1, a
        }), O = (0, r.useEffectEvent)((e, t) => {
            let n = P.current;
            if (c) return !1;
            if (a) {
                n.isTriggeringEvent = !0;
                let r = new g("pressup", t, e);
                return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
            }
            return !0
        }), L = (0, r.useEffectEvent)(e => {
            let t = P.current;
            t.isPressed && t.target && (t.isOverTarget && null != t.pointerType && I(S(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, A(), !v && p(t.target))
        }), j = (0, r.useEffectEvent)(e => {
            l && L(e)
        }), N = (0, i.useMemo)(() => {
            let e = P.current,
                t = {
                    onKeyDown(t) {
                        if (x(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
                            var i;
                            _(t.target, t.key) && t.preventDefault();
                            let o = !0;
                            !e.isPressed && !t.repeat && (e.target = t.currentTarget, e.isPressed = !0, o = R(t, "keyboard"), T((0, r.getOwnerDocument)(t.currentTarget), "keyup", n, !1)), o && t.stopPropagation(), t.metaKey && (0, r.isMac)() && (null === (i = e.metaKeyEvents) || void 0 === i || i.set(t.key, t.nativeEvent))
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map)
                    },
                    onKeyUp(t) {
                        x(t.nativeEvent, t.currentTarget) && !t.repeat && t.currentTarget.contains(t.target) && e.target && O(S(e.target, t), "keyboard")
                    },
                    onClick(t) {
                        if ((!t || t.currentTarget.contains(t.target)) && t && 0 === t.button && !e.isTriggeringEvent && !r.openLink.isOpening) {
                            let n = !0;
                            if (c && t.preventDefault(), !e.ignoreClickAfterPress && !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, r.isVirtualClick)(t.nativeEvent))) {
                                !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget);
                                let e = R(t, "virtual"),
                                    i = O(t, "virtual"),
                                    o = I(t, "virtual");
                                n = e && i && o
                            }
                            e.ignoreEmulatedMouseEvents = !1, e.ignoreClickAfterPress = !1, n && t.stopPropagation()
                        }
                    }
                },
                n = t => {
                    var n, i, o;
                    if (e.isPressed && e.target && x(t, e.target)) {
                        _(t.target, t.key) && t.preventDefault();
                        let n = t.target,
                            o = I(S(e.target, t), "keyboard", e.target.contains(n));
                        A(), o && t.stopPropagation(), "Enter" !== t.key && y(e.target) && e.target.contains(n) && !t[b] && (t[b] = !0, (0, r.openLink)(e.target, t, !1)), e.isPressed = !1, null === (i = e.metaKeyEvents) || void 0 === i || i.delete(t.key)
                    } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of (e.metaKeyEvents = void 0, t.values())) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
                    }
                };
            if ("undefined" != typeof PointerEvent) {
                t.onPointerDown = t => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
                    if ((0, r.isVirtualPointerEvent)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return
                    }
                    E(t.currentTarget) && t.preventDefault(), e.pointerType = t.pointerType;
                    let s = !0;
                    !e.isPressed && (e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), !v && f(e.target), s = R(t, e.pointerType), T((0, r.getOwnerDocument)(t.currentTarget), "pointermove", n, !1), T((0, r.getOwnerDocument)(t.currentTarget), "pointerup", i, !1), T((0, r.getOwnerDocument)(t.currentTarget), "pointercancel", o, !1)), s && t.stopPropagation()
                }, t.onMouseDown = e => {
                    e.currentTarget.contains(e.target) && 0 === e.button && (E(e.currentTarget) && e.preventDefault(), e.stopPropagation())
                }, t.onPointerUp = t => {
                    t.currentTarget.contains(t.target) && "virtual" !== e.pointerType && 0 === t.button && k(t, t.currentTarget) && O(t, e.pointerType || t.pointerType)
                };
                let n = t => {
                        t.pointerId === e.activePointerId && (e.target && k(t, e.target) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, R(S(e.target, t), e.pointerType)) : e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, I(S(e.target, t), e.pointerType, !1), j(t)))
                    },
                    i = t => {
                        t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target && (k(t, e.target) && null != e.pointerType ? I(S(e.target, t), e.pointerType) : e.isOverTarget && null != e.pointerType && I(S(e.target, t), e.pointerType, !1), e.isPressed = !1, e.isOverTarget = !1, e.activePointerId = null, e.pointerType = null, A(), !v && p(e.target))
                    },
                    o = e => {
                        L(e)
                    };
                t.onDragStart = e => {
                    e.currentTarget.contains(e.target) && L(e)
                }
            } else {
                t.onMouseDown = t => {
                    if (0 === t.button && !!t.currentTarget.contains(t.target)) {
                        if (E(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents) {
                            t.stopPropagation();
                            return
                        }
                        e.isPressed = !0, e.isOverTarget = !0, e.target = t.currentTarget, e.pointerType = (0, r.isVirtualClick)(t.nativeEvent) ? "virtual" : "mouse", !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), R(t, e.pointerType) && t.stopPropagation(), T((0, r.getOwnerDocument)(t.currentTarget), "mouseup", n, !1)
                    }
                }, t.onMouseEnter = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !0, n = R(t, e.pointerType)), n && t.stopPropagation()
                }, t.onMouseLeave = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let n = !0;
                    e.isPressed && !e.ignoreEmulatedMouseEvents && null != e.pointerType && (e.isOverTarget = !1, n = I(t, e.pointerType, !1), j(t)), n && t.stopPropagation()
                }, t.onMouseUp = t => {
                    t.currentTarget.contains(t.target) && !e.ignoreEmulatedMouseEvents && 0 === t.button && O(t, e.pointerType || "mouse")
                };
                let n = t => {
                    if (0 === t.button) {
                        if (e.isPressed = !1, A(), e.ignoreEmulatedMouseEvents) {
                            e.ignoreEmulatedMouseEvents = !1;
                            return
                        }
                        e.target && k(t, e.target) && null != e.pointerType ? I(S(e.target, t), e.pointerType) : e.target && e.isOverTarget && null != e.pointerType && I(S(e.target, t), e.pointerType, !1), e.isOverTarget = !1
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
                    if (!!n) e.activePointerId = n.identifier, e.ignoreEmulatedMouseEvents = !0, e.isOverTarget = !0, e.isPressed = !0, e.target = t.currentTarget, e.pointerType = "touch", !c && !d && (0, r.focusWithoutScrolling)(t.currentTarget), !v && f(e.target), R(t, e.pointerType) && t.stopPropagation(), T((0, r.getOwnerWindow)(t.currentTarget), "scroll", i, !0)
                }, t.onTouchMove = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = w(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && k(n, t.currentTarget) ? !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, r = R(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, r = I(t, e.pointerType, !1), j(t)), r && t.stopPropagation()
                }, t.onTouchEnd = t => {
                    if (!t.currentTarget.contains(t.target)) return;
                    if (!e.isPressed) {
                        t.stopPropagation();
                        return
                    }
                    let n = w(t.nativeEvent, e.activePointerId),
                        r = !0;
                    n && k(n, t.currentTarget) && null != e.pointerType ? (O(t, e.pointerType), r = I(t, e.pointerType)) : e.isOverTarget && null != e.pointerType && (r = I(t, e.pointerType, !1)), r && t.stopPropagation(), e.isPressed = !1, e.activePointerId = null, e.isOverTarget = !1, e.ignoreEmulatedMouseEvents = !0, e.target && !v && p(e.target), A()
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
        }, [T, c, d, A, v, L, j, I, R, O]);
        return (0, i.useEffect)(() => () => {
            var e;
            !v && p(null !== (e = P.current.target) && void 0 !== e ? e : void 0)
        }, [v]), {
            isPressed: u || D,
            pressProps: (0, r.mergeProps)(M, N)
        }
    }

    function y(e) {
        return "A" === e.tagName && e.hasAttribute("href")
    }

    function x(e, t) {
        let {
            key: n,
            code: i
        } = e, o = t.getAttribute("role");
        return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === i) && !(t instanceof(0, r.getOwnerWindow)(t).HTMLInputElement && !D(t, n) || t instanceof(0, r.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === o || !o && y(t)) && "Enter" !== n)
    }

    function w(e, t) {
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

    function k(e, t) {
        var n, r, i;
        let o, s, a = t.getBoundingClientRect();
        let c = (o = 0, s = 0, void 0 !== (n = e).width ? o = n.width / 2 : void 0 !== n.radiusX && (o = n.radiusX), void 0 !== n.height ? s = n.height / 2 : void 0 !== n.radiusY && (s = n.radiusY), {
            top: n.clientY - s,
            right: n.clientX + o,
            bottom: n.clientY + s,
            left: n.clientX - o
        });
        return r = a, i = c, !(r.left > i.right) && !(i.left > r.right) && !(r.top > i.bottom) && !(i.top > r.bottom) && !0
    }

    function E(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable")
    }

    function _(e, t) {
        return e instanceof HTMLInputElement ? !D(e, t) : e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !y(e) && !0
    }
    let M = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function D(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : M.has(e.type)
    }

    function C(e) {
        let {
            children: t
        } = e, n = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.createElement(h.Provider, {
            value: n
        }, t)
    }
    class P {
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

    function T(e) {
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
                    t.current.isFocused = !1, r.disabled && n(new P("blur", e)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
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

    function A(e) {
        let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
        } = e, s = (0, i.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
        }, [r, o]), a = T(s), c = (0, i.useCallback)(e => {
            e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), o && o(!0), a(e))
        }, [o, n, a]);
        return {
            focusProps: {
                onFocus: !t && (n || o || r) ? c : void 0,
                onBlur: !t && (r || o) ? s : void 0
            }
        }
    }
    let R = null,
        I = new Set,
        O = !1,
        L = !1,
        j = !1,
        N = {
            Tab: !0,
            Escape: !0
        };

    function F(e, t) {
        for (let n of I) n(e, t)
    }

    function B(e) {
        var t;
        if (L = !0, !((t = e).metaKey || !(0, r.isMac)() && t.altKey || t.ctrlKey || "Control" === t.key || "Shift" === t.key || "Meta" === t.key)) R = "keyboard", F("keyboard", e)
    }

    function z(e) {
        R = "pointer", ("mousedown" === e.type || "pointerdown" === e.type) && (L = !0, F("pointer", e))
    }

    function K(e) {
        (0, r.isVirtualClick)(e) && (L = !0, R = "virtual")
    }

    function V(e) {
        e.target !== window && e.target !== document && (!L && !j && (R = "virtual", F("virtual", e)), L = !1, j = !1)
    }

    function U() {
        L = !1, j = !0
    }

    function H() {
        if ("undefined" == typeof window || O) return;
        let e = HTMLElement.prototype.focus;
        HTMLElement.prototype.focus = function() {
            L = !0, e.apply(this, arguments)
        }, document.addEventListener("keydown", B, !0), document.addEventListener("keyup", B, !0), document.addEventListener("click", K, !0), window.addEventListener("focus", V, !0), window.addEventListener("blur", U, !1), "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", z, !0), document.addEventListener("pointermove", z, !0), document.addEventListener("pointerup", z, !0)) : (document.addEventListener("mousedown", z, !0), document.addEventListener("mousemove", z, !0), document.addEventListener("mouseup", z, !0)), O = !0
    }

    function q() {
        return "pointer" !== R
    }

    function G() {
        return R
    }

    function W(e) {
        R = e, F(e, null)
    }

    function Z() {
        H();
        let [e, t] = (0, i.useState)(R);
        return (0, i.useEffect)(() => {
            let e = () => {
                t(R)
            };
            return I.add(e), () => {
                I.delete(e)
            }
        }, []), (0, c.useIsSSR)() ? null : e
    }
    "undefined" != typeof document && ("loading" !== document.readyState ? H() : document.addEventListener("DOMContentLoaded", H));
    let Y = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function X(e, t, n) {
        H(), (0, i.useEffect)(() => {
            let t = (t, r) => {
                var i, o, s, a;
                if (i = !!(null == n ? void 0 : n.isTextInput), o = t, s = r, !((i = i || (null == s ? void 0 : s.target) instanceof HTMLInputElement && !Y.has(null == s ? void 0 : null === (a = s.target) || void 0 === a ? void 0 : a.type) || (null == s ? void 0 : s.target) instanceof HTMLTextAreaElement || (null == s ? void 0 : s.target) instanceof HTMLElement && (null == s ? void 0 : s.target.isContentEditable)) && "keyboard" === o && s instanceof KeyboardEvent) || N[s.key]) e(q())
            };
            return I.add(t), () => {
                I.delete(t)
            }
        }, t)
    }

    function J(e) {
        let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
        } = e, s = (0, i.useRef)({
            isFocusWithin: !1
        }), a = (0, i.useCallback)(e => {
            s.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (s.current.isFocusWithin = !1, n && n(e), o && o(!1))
        }, [n, o, s]), c = T(a), u = (0, i.useCallback)(e => {
            !s.current.isFocusWithin && document.activeElement === e.target && (r && r(e), o && o(!0), s.current.isFocusWithin = !0, c(e))
        }, [r, o, c]);
        return t ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: u,
                onBlur: a
            }
        }
    }
    let $ = !1,
        Q = 0;

    function ee() {
        $ = !0, setTimeout(() => {
            $ = !1
        }, 50)
    }

    function et(e) {
        "touch" === e.pointerType && ee()
    }

    function en() {
        if ("undefined" != typeof document) return "undefined" != typeof PointerEvent ? document.addEventListener("pointerup", et) : document.addEventListener("touchend", ee), Q++, () => {
            !(--Q > 0) && ("undefined" != typeof PointerEvent ? document.removeEventListener("pointerup", et) : document.removeEventListener("touchend", ee))
        }
    }

    function er(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: r,
            isDisabled: o
        } = e, [s, a] = (0, i.useState)(!1), c = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, i.useEffect)(en, []);
        let {
            hoverProps: u,
            triggerHoverEnd: d
        } = (0, i.useMemo)(() => {
            let e = (e, r) => {
                    if (c.pointerType = r, o || "touch" === r || c.isHovered || !e.currentTarget.contains(e.target)) return;
                    c.isHovered = !0;
                    let i = e.currentTarget;
                    c.target = i, t && t({
                        type: "hoverstart",
                        target: i,
                        pointerType: r
                    }), n && n(!0), a(!0)
                },
                i = (e, t) => {
                    if (c.pointerType = "", c.target = null, "touch" === t || !c.isHovered) return;
                    c.isHovered = !1;
                    let i = e.currentTarget;
                    r && r({
                        type: "hoverend",
                        target: i,
                        pointerType: t
                    }), n && n(!1), a(!1)
                },
                s = {};
            return "undefined" != typeof PointerEvent ? (s.onPointerEnter = t => {
                (!$ || "mouse" !== t.pointerType) && e(t, t.pointerType)
            }, s.onPointerLeave = e => {
                !o && e.currentTarget.contains(e.target) && i(e, e.pointerType)
            }) : (s.onTouchStart = () => {
                c.ignoreEmulatedMouseEvents = !0
            }, s.onMouseEnter = t => {
                !c.ignoreEmulatedMouseEvents && !$ && e(t, "mouse"), c.ignoreEmulatedMouseEvents = !1
            }, s.onMouseLeave = e => {
                !o && e.currentTarget.contains(e.target) && i(e, "mouse")
            }), {
                hoverProps: s,
                triggerHoverEnd: i
            }
        }, [t, n, r, o, c]);
        return (0, i.useEffect)(() => {
            o && d({
                currentTarget: c.target
            }, c.pointerType)
        }, [o]), {
            hoverProps: u,
            isHovered: s
        }
    }

    function ei(e) {
        let {
            ref: t,
            onInteractOutside: n,
            isDisabled: o,
            onInteractOutsideStart: s
        } = e, a = (0, i.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1
        }), c = (0, r.useEffectEvent)(e => {
            n && eo(e, t) && (s && s(e), a.current.isPointerDown = !0)
        }), u = (0, r.useEffectEvent)(e => {
            n && n(e)
        });
        (0, i.useEffect)(() => {
            let e = a.current;
            if (o) return;
            let n = t.current,
                i = (0, r.getOwnerDocument)(n);
            if ("undefined" != typeof PointerEvent) {
                let n = n => {
                    e.isPointerDown && eo(n, t) && u(n), e.isPointerDown = !1
                };
                return i.addEventListener("pointerdown", c, !0), i.addEventListener("pointerup", n, !0), () => {
                    i.removeEventListener("pointerdown", c, !0), i.removeEventListener("pointerup", n, !0)
                }
            } {
                let n = n => {
                        e.ignoreEmulatedMouseEvents ? e.ignoreEmulatedMouseEvents = !1 : e.isPointerDown && eo(n, t) && u(n), e.isPointerDown = !1
                    },
                    r = n => {
                        e.ignoreEmulatedMouseEvents = !0, e.isPointerDown && eo(n, t) && u(n), e.isPointerDown = !1
                    };
                return i.addEventListener("mousedown", c, !0), i.addEventListener("mouseup", n, !0), i.addEventListener("touchstart", c, !0), i.addEventListener("touchend", r, !0), () => {
                    i.removeEventListener("mousedown", c, !0), i.removeEventListener("mouseup", n, !0), i.removeEventListener("touchstart", c, !0), i.removeEventListener("touchend", r, !0)
                }
            }
        }, [t, o, c, u])
    }

    function eo(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
            let t = e.target.ownerDocument;
            if (!t || !t.documentElement.contains(e.target) || e.target.closest("[data-react-aria-top-layer]")) return !1
        }
        return t.current && !t.current.contains(e.target)
    }

    function es(e) {
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

    function ea(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: es(e.onKeyDown),
                onKeyUp: es(e.onKeyUp)
            }
        }
    }

    function ec(e) {
        let {
            onMoveStart: t,
            onMove: n,
            onMoveEnd: o
        } = e, s = (0, i.useRef)({
            didMove: !1,
            lastPosition: null,
            id: null
        }), {
            addGlobalListener: a,
            removeGlobalListener: c
        } = (0, r.useGlobalListeners)(), u = (0, r.useEffectEvent)((e, r, i, o) => {
            (0 !== i || 0 !== o) && (!s.current.didMove && (s.current.didMove = !0, null == t || t({
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
                deltaY: o,
                shiftKey: e.shiftKey,
                metaKey: e.metaKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey
            }))
        }), d = (0, r.useEffectEvent)((e, t) => {
            p(), s.current.didMove && (null == o || o({
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
                        f(), s.current.didMove = !1
                    };
                if ("undefined" == typeof PointerEvent) {
                    let n = e => {
                            if (0 === e.button) {
                                var t, n, r, i;
                                u(e, "mouse", e.pageX - (null !== (r = null === (t = s.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), s.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            0 === e.button && (d(e, "mouse"), c(window, "mousemove", n, !1), c(window, "mouseup", r, !1))
                        };
                    e.onMouseDown = e => {
                        0 === e.button && (t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, a(window, "mousemove", n, !1), a(window, "mouseup", r, !1))
                    };
                    let i = e => {
                            let t = [...e.changedTouches].findIndex(e => {
                                let {
                                    identifier: t
                                } = e;
                                return t === s.current.id
                            });
                            if (t >= 0) {
                                var n, r, i, o;
                                let {
                                    pageX: a,
                                    pageY: c
                                } = e.changedTouches[t];
                                u(e, "touch", a - (null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageX) && void 0 !== i ? i : 0), c - (null !== (o = null === (r = s.current.lastPosition) || void 0 === r ? void 0 : r.pageY) && void 0 !== o ? o : 0)), s.current.lastPosition = {
                                    pageX: a,
                                    pageY: c
                                }
                            }
                        },
                        o = e => {
                            [...e.changedTouches].findIndex(e => {
                                let {
                                    identifier: t
                                } = e;
                                return t === s.current.id
                            }) >= 0 && (d(e, "touch"), s.current.id = null, c(window, "touchmove", i), c(window, "touchend", o), c(window, "touchcancel", o))
                        };
                    e.onTouchStart = e => {
                        if (0 === e.changedTouches.length || null != s.current.id) return;
                        let {
                            pageX: n,
                            pageY: r,
                            identifier: c
                        } = e.changedTouches[0];
                        t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
                            pageX: n,
                            pageY: r
                        }, s.current.id = c, a(window, "touchmove", i, !1), a(window, "touchend", o, !1), a(window, "touchcancel", o, !1)
                    }
                } else {
                    let n = e => {
                            if (e.pointerId === s.current.id) {
                                var t, n, r, i;
                                let o = e.pointerType || "mouse";
                                u(e, o, e.pageX - (null !== (r = null === (t = s.current.lastPosition) || void 0 === t ? void 0 : t.pageX) && void 0 !== r ? r : 0), e.pageY - (null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageY) && void 0 !== i ? i : 0)), s.current.lastPosition = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }
                            }
                        },
                        r = e => {
                            if (e.pointerId === s.current.id) {
                                let t = e.pointerType || "mouse";
                                d(e, t), s.current.id = null, c(window, "pointermove", n, !1), c(window, "pointerup", r, !1), c(window, "pointercancel", r, !1)
                            }
                        };
                    e.onPointerDown = e => {
                        0 === e.button && null == s.current.id && (t(), e.stopPropagation(), e.preventDefault(), s.current.lastPosition = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        }, s.current.id = e.pointerId, a(window, "pointermove", n, !1), a(window, "pointerup", r, !1), a(window, "pointercancel", r, !1))
                    }
                }
                let n = (e, n, r) => {
                    t(), u(e, "keyboard", n, r), d(e, "keyboard")
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
            }, [s, a, c, u, d])
        }
    }

    function eu(e, t) {
        let {
            onScroll: n,
            isDisabled: o
        } = e, s = (0, i.useCallback)(e => {
            !e.ctrlKey && (e.preventDefault(), e.stopPropagation(), n && n({
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }))
        }, [n]);
        (0, r.useEvent)(t, "wheel", o ? void 0 : s)
    }

    function ed(e) {
        let {
            isDisabled: t,
            onLongPressStart: n,
            onLongPressEnd: o,
            onLongPress: s,
            threshold: a = 500,
            accessibilityDescription: c
        } = e, u = (0, i.useRef)(), {
            addGlobalListener: d,
            removeGlobalListener: l
        } = (0, r.useGlobalListeners)(), {
            pressProps: f
        } = m({
            isDisabled: t,
            onPressStart(e) {
                if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (n && n({
                        ...e,
                        type: "longpressstart"
                    }), u.current = setTimeout(() => {
                        e.target.dispatchEvent(new PointerEvent("pointercancel", {
                            bubbles: !0
                        })), s && s({
                            ...e,
                            type: "longpress"
                        }), u.current = void 0
                    }, a), "touch" === e.pointerType)) {
                    let t = e => {
                        e.preventDefault()
                    };
                    d(e.target, "contextmenu", t, {
                        once: !0
                    }), d(window, "pointerup", () => {
                        setTimeout(() => {
                            l(e.target, "contextmenu", t)
                        }, 30)
                    }, {
                        once: !0
                    })
                }
            },
            onPressEnd(e) {
                u.current && clearTimeout(u.current), o && ("mouse" === e.pointerType || "touch" === e.pointerType) && o({
                    ...e,
                    type: "longpressend"
                })
            }
        }), p = (0, r.useDescription)(s && !t ? c : void 0);
        return {
            longPressProps: (0, r.mergeProps)(f, p)
        }
    }
}