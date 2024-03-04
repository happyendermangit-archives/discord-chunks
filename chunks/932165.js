function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelectableCollection: function() {
            return f
        },
        useSelectableItem: function() {
            return p
        },
        useSelectableList: function() {
            return b
        },
        ListKeyboardDelegate: function() {
            return g
        },
        useTypeSelect: function() {
            return l
        }
    }), n("222007");
    var r = n("817736"),
        i = n("884691"),
        o = n("447259"),
        s = n("240849"),
        a = n("388032"),
        c = n("564341");

    function u(e) {
        return (0, s.isAppleDevice)() ? e.altKey : e.ctrlKey
    }

    function d(e) {
        return (0, s.isMac)() ? e.metaKey : e.ctrlKey
    }

    function l(e) {
        let {
            keyboardDelegate: t,
            selectionManager: n,
            onTypeSelect: r
        } = e, o = (0, i.useRef)({
            search: "",
            timeout: null
        }).current;
        return {
            typeSelectProps: {
                onKeyDownCapture: t.getKeyForSearch ? e => {
                    let i = function(e) {
                        return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e
                    }(e.key);
                    if (!i || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
                    " " === i && o.search.trim().length > 0 && (e.preventDefault(), !("continuePropagation" in e) && e.stopPropagation()), o.search += i;
                    let s = t.getKeyForSearch(o.search, n.focusedKey);
                    null == s && (s = t.getKeyForSearch(o.search)), null != s && (n.setFocusedKey(s), r && r(s)), clearTimeout(o.timeout), o.timeout = setTimeout(() => {
                        o.search = ""
                    }, 1e3)
                } : null
            }
        }
    }

    function f(e) {
        let t, {
                selectionManager: n,
                keyboardDelegate: f,
                ref: p,
                autoFocus: h = !1,
                shouldFocusWrap: v = !1,
                disallowEmptySelection: g = !1,
                disallowSelectAll: b = !1,
                selectOnFocus: m = "replace" === n.selectionBehavior,
                disallowTypeAhead: y = !1,
                shouldUseVirtualFocus: x,
                allowsTabNavigation: w = !1,
                isVirtualized: S,
                scrollRef: k = p,
                linkBehavior: E = "action"
            } = e,
            {
                direction: _
            } = (0, c.useLocale)(),
            M = (0, s.useRouter)(),
            D = (0, i.useRef)({
                top: 0,
                left: 0
            });
        (0, s.useEvent)(k, "scroll", S ? null : () => {
            D.current = {
                top: k.current.scrollTop,
                left: k.current.scrollLeft
            }
        });
        let C = (0, i.useRef)(h);
        (0, i.useEffect)(() => {
            if (C.current) {
                let e = null;
                "first" === h && (e = f.getFirstKey()), "last" === h && (e = f.getLastKey());
                let t = n.selectedKeys;
                if (t.size) {
                    for (let r of t)
                        if (n.canSelectItem(r)) {
                            e = r;
                            break
                        }
                }
                n.setFocused(!0), n.setFocusedKey(e), null == e && !x && (0, o.focusSafely)(p.current)
            }
        }, []);
        let P = (0, i.useRef)(n.focusedKey);
        (0, i.useEffect)(() => {
            let e = (0, a.getInteractionModality)();
            if (n.isFocused && null != n.focusedKey && (null == k ? void 0 : k.current)) {
                let t = k.current.querySelector('[data-key="'.concat(CSS.escape(n.focusedKey.toString()), '"]'));
                t && ("keyboard" === e || C.current) && (!S && (0, s.scrollIntoView)(k.current, t), (0, s.scrollIntoViewport)(t, {
                    containingElement: p.current
                }))
            }
            n.isFocused && null == n.focusedKey && null != P.current && (0, o.focusSafely)(p.current), P.current = n.focusedKey, C.current = !1
        }, [S, k, n.focusedKey, n.isFocused, p]);
        let T = {
                onKeyDown: e => {
                    var t, i, a, c, l, h, y, x;
                    if (e.altKey && "Tab" === e.key && e.preventDefault(), !p.current.contains(e.target)) return;
                    let S = (t, i) => {
                        if (null != t) {
                            if (n.isLink(t) && "selection" === E && m && !u(e)) {
                                (0, r.flushSync)(() => {
                                    n.setFocusedKey(t, i)
                                });
                                let o = k.current.querySelector('[data-key="'.concat(CSS.escape(t.toString()), '"]'));
                                M.open(o, e);
                                return
                            }
                            n.setFocusedKey(t, i), (!n.isLink(t) || "override" !== E) && (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : m && !u(e) && n.replaceSelection(t))
                        }
                    };
                    switch (e.key) {
                        case "ArrowDown":
                            if (f.getKeyBelow) {
                                e.preventDefault();
                                let r = null != n.focusedKey ? f.getKeyBelow(n.focusedKey) : null === (t = f.getFirstKey) || void 0 === t ? void 0 : t.call(f);
                                null == r && v && (r = null === (i = f.getFirstKey) || void 0 === i ? void 0 : i.call(f, n.focusedKey)), S(r)
                            }
                            break;
                        case "ArrowUp":
                            if (f.getKeyAbove) {
                                e.preventDefault();
                                let t = null != n.focusedKey ? f.getKeyAbove(n.focusedKey) : null === (a = f.getLastKey) || void 0 === a ? void 0 : a.call(f);
                                null == t && v && (t = null === (c = f.getLastKey) || void 0 === c ? void 0 : c.call(f, n.focusedKey)), S(t)
                            }
                            break;
                        case "ArrowLeft":
                            if (f.getKeyLeftOf) {
                                e.preventDefault();
                                let t = f.getKeyLeftOf(n.focusedKey);
                                null == t && v && (t = "rtl" === _ ? null === (l = f.getFirstKey) || void 0 === l ? void 0 : l.call(f, n.focusedKey) : null === (h = f.getLastKey) || void 0 === h ? void 0 : h.call(f, n.focusedKey)), S(t, "rtl" === _ ? "first" : "last")
                            }
                            break;
                        case "ArrowRight":
                            if (f.getKeyRightOf) {
                                e.preventDefault();
                                let t = f.getKeyRightOf(n.focusedKey);
                                null == t && v && (t = "rtl" === _ ? null === (y = f.getLastKey) || void 0 === y ? void 0 : y.call(f, n.focusedKey) : null === (x = f.getFirstKey) || void 0 === x ? void 0 : x.call(f, n.focusedKey)), S(t, "rtl" === _ ? "last" : "first")
                            }
                            break;
                        case "Home":
                            if (f.getFirstKey) {
                                e.preventDefault();
                                let t = f.getFirstKey(n.focusedKey, d(e));
                                n.setFocusedKey(t), d(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : m && n.replaceSelection(t)
                            }
                            break;
                        case "End":
                            if (f.getLastKey) {
                                e.preventDefault();
                                let t = f.getLastKey(n.focusedKey, d(e));
                                n.setFocusedKey(t), d(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : m && n.replaceSelection(t)
                            }
                            break;
                        case "PageDown":
                            f.getKeyPageBelow && (e.preventDefault(), S(f.getKeyPageBelow(n.focusedKey)));
                            break;
                        case "PageUp":
                            f.getKeyPageAbove && (e.preventDefault(), S(f.getKeyPageAbove(n.focusedKey)));
                            break;
                        case "a":
                            d(e) && "multiple" === n.selectionMode && !0 !== b && (e.preventDefault(), n.selectAll());
                            break;
                        case "Escape":
                            e.preventDefault(), !g && n.clearSelection();
                            break;
                        case "Tab":
                            if (!w) {
                                if (e.shiftKey) p.current.focus();
                                else {
                                    let e, t, n = (0, o.getFocusableTreeWalker)(p.current, {
                                        tabbable: !0
                                    });
                                    do(t = n.lastChild()) && (e = t); while (t);
                                    e && !e.contains(document.activeElement) && (0, s.focusWithoutScrolling)(e)
                                }
                            }
                    }
                },
                onFocus: e => {
                    if (n.isFocused) {
                        !e.currentTarget.contains(e.target) && n.setFocused(!1);
                        return
                    }
                    if (e.currentTarget.contains(e.target)) {
                        if (n.setFocused(!0), null == n.focusedKey) {
                            var t, r;
                            let i = e => {
                                    null != e && (n.setFocusedKey(e), m && n.replaceSelection(e))
                                },
                                o = e.relatedTarget;
                            i(o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? null !== (t = n.lastSelectedKey) && void 0 !== t ? t : f.getLastKey() : null !== (r = n.firstSelectedKey) && void 0 !== r ? r : f.getFirstKey())
                        } else !S && (k.current.scrollTop = D.current.top, k.current.scrollLeft = D.current.left);
                        if (!S && null != n.focusedKey) {
                            let e = k.current.querySelector('[data-key="'.concat(CSS.escape(n.focusedKey.toString()), '"]'));
                            e && (!e.contains(document.activeElement) && (0, s.focusWithoutScrolling)(e), "keyboard" === (0, a.getInteractionModality)() && (0, s.scrollIntoViewport)(e, {
                                containingElement: p.current
                            }))
                        }
                    }
                },
                onBlur: e => {
                    !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1)
                },
                onMouseDown(e) {
                    k.current === e.target && e.preventDefault()
                }
            },
            {
                typeSelectProps: A
            } = l({
                keyboardDelegate: f,
                selectionManager: n
            });
        return !y && (T = (0, s.mergeProps)(A, T)), !x && (t = null == n.focusedKey ? 0 : -1), {
            collectionProps: {
                ...T,
                tabIndex: t
            }
        }
    }

    function p(e) {
        let {
            selectionManager: t,
            key: n,
            ref: r,
            shouldSelectOnPressUp: c,
            shouldUseVirtualFocus: l,
            focus: f,
            isDisabled: p,
            onAction: g,
            allowsDifferentPressOrigin: b,
            linkBehavior: m = "action"
        } = e, y = (0, s.useRouter)(), x = e => {
            if ("keyboard" === e.pointerType && u(e)) t.toggleSelection(n);
            else {
                if ("none" === t.selectionMode) return;
                if (t.isLink(n)) {
                    if ("selection" === m) {
                        y.open(r.current, e), t.setSelectedKeys(t.selectedKeys);
                        return
                    }
                    if ("override" === m || "none" === m) return
                }
                "single" === t.selectionMode ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : e && e.shiftKey ? t.extendSelection(n) : "toggle" === t.selectionBehavior || e && (d(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? t.toggleSelection(n) : t.replaceSelection(n)
            }
        };
        (0, i.useEffect)(() => {
            n === t.focusedKey && t.isFocused && !l && (f ? f() : document.activeElement !== r.current && (0, o.focusSafely)(r.current))
        }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, l]), p = p || t.isDisabled(n);
        let w = {};
        l || p ? p && (w.onMouseDown = e => {
            e.preventDefault()
        }) : w = {
            tabIndex: n === t.focusedKey ? 0 : -1,
            onFocus(e) {
                e.target === r.current && t.setFocusedKey(n)
            }
        };
        let S = t.isLink(n) && "override" === m,
            k = t.isLink(n) && "selection" !== m && "none" !== m,
            E = !p && t.canSelectItem(n) && !S,
            _ = (g || k) && !p,
            M = _ && ("replace" === t.selectionBehavior ? !E : !E || t.isEmpty),
            D = _ && E && "replace" === t.selectionBehavior,
            C = M || D,
            P = (0, i.useRef)(null),
            T = C && E,
            A = (0, i.useRef)(!1),
            R = (0, i.useRef)(!1),
            I = e => {
                g && g(), k && y.open(r.current, e)
            },
            O = {};
        c ? (O.onPressStart = e => {
            P.current = e.pointerType, A.current = T, "keyboard" === e.pointerType && (!C || v()) && x(e)
        }, b ? (O.onPressUp = M ? null : e => {
            "keyboard" !== e.pointerType && E && x(e)
        }, O.onPress = M ? I : null) : O.onPress = e => {
            M || D && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || !!h()) && I(e) : "keyboard" !== e.pointerType && E && x(e)
        }) : (O.onPressStart = e => {
            P.current = e.pointerType, A.current = T, R.current = M, E && ("mouse" === e.pointerType && !M || "keyboard" === e.pointerType && (!_ || v())) && x(e)
        }, O.onPress = e => {
            ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && C && h() || "mouse" === e.pointerType && R.current) && (C ? I(e) : E && x(e))
        }), w["data-key"] = n, O.preventFocusOnPress = l;
        let {
            pressProps: L,
            isPressed: j
        } = (0, a.usePress)(O), N = D ? e => {
            "mouse" === P.current && (e.stopPropagation(), e.preventDefault(), I(e))
        } : void 0, {
            longPressProps: F
        } = (0, a.useLongPress)({
            isDisabled: !T,
            onLongPress(e) {
                "touch" === e.pointerType && (x(e), t.setSelectionBehavior("toggle"))
            }
        }), B = t.isLink(n) ? e => {
            !s.openLink.isOpening && e.preventDefault()
        } : void 0;
        return {
            itemProps: (0, s.mergeProps)(w, E || M ? L : {}, T ? F : {}, {
                onDoubleClick: N,
                onDragStartCapture: e => {
                    "touch" === P.current && A.current && e.preventDefault()
                },
                onClick: B
            }),
            isPressed: j,
            isSelected: t.isSelected(n),
            isFocused: t.isFocused && t.focusedKey === n,
            isDisabled: p,
            allowsSelection: E,
            hasAction: C
        }
    }

    function h() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter"
    }

    function v() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === " " || (null == e ? void 0 : e.code) === "Space"
    }
    class g {
        getNextKey(e) {
            for (e = this.collection.getKeyAfter(e); null != e;) {
                if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
                e = this.collection.getKeyAfter(e)
            }
            return null
        }
        getPreviousKey(e) {
            for (e = this.collection.getKeyBefore(e); null != e;) {
                if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
                e = this.collection.getKeyBefore(e)
            }
            return null
        }
        findKey(e, t, n) {
            let r = this.getItem(e);
            if (!r) return null;
            let i = r.getBoundingClientRect();
            do e = t(e), r = this.getItem(e); while (r && n(i, r.getBoundingClientRect()));
            return e
        }
        isSameRow(e, t) {
            return e.top === t.top || e.left !== t.left
        }
        isSameColumn(e, t) {
            return e.left === t.left || e.top !== t.top
        }
        getKeyBelow(e) {
            return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getNextKey(e), this.isSameRow) : this.getNextKey(e)
        }
        getKeyAbove(e) {
            return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getPreviousKey(e), this.isSameRow) : this.getPreviousKey(e)
        }
        getNextColumn(e, t) {
            return t ? this.getPreviousKey(e) : this.getNextKey(e)
        }
        getKeyRightOf(e) {
            if ("grid" === this.layout) return "vertical" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction) : this.findKey(e, e => this.getNextColumn(e, "rtl" === this.direction), this.isSameColumn);
            return "horizontal" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction) : null
        }
        getKeyLeftOf(e) {
            if ("grid" === this.layout) return "vertical" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction) : this.findKey(e, e => this.getNextColumn(e, "ltr" === this.direction), this.isSameColumn);
            return "horizontal" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction) : null
        }
        getFirstKey() {
            let e = this.collection.getFirstKey();
            for (; null != e;) {
                if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
                e = this.collection.getKeyAfter(e)
            }
            return null
        }
        getLastKey() {
            let e = this.collection.getLastKey();
            for (; null != e;) {
                if ("item" === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
                e = this.collection.getKeyBefore(e)
            }
            return null
        }
        getItem(e) {
            return this.ref.current.querySelector('[data-key="'.concat(CSS.escape(e.toString()), '"]'))
        }
        getKeyPageAbove(e) {
            let t = this.ref.current,
                n = this.getItem(e);
            if (!n) return null;
            if (!(0, s.isScrollable)(t)) return this.getFirstKey();
            let r = t.getBoundingClientRect(),
                i = n.getBoundingClientRect();
            if ("horizontal" === this.orientation) {
                let o = r.x - t.scrollLeft,
                    s = Math.max(0, i.x - o + i.width - r.width);
                for (; n && i.x - o > s;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            } else {
                let o = r.y - t.scrollTop,
                    s = Math.max(0, i.y - o + i.height - r.height);
                for (; n && i.y - o > s;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            }
            return null != e ? e : this.getFirstKey()
        }
        getKeyPageBelow(e) {
            let t = this.ref.current,
                n = this.getItem(e);
            if (!n) return null;
            if (!(0, s.isScrollable)(t)) return this.getLastKey();
            let r = t.getBoundingClientRect(),
                i = n.getBoundingClientRect();
            if ("horizontal" === this.orientation) {
                let o = r.x - t.scrollLeft,
                    s = Math.min(t.scrollWidth, i.x - o - i.width + r.width);
                for (; n && i.x - o < s;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            } else {
                let o = r.y - t.scrollTop,
                    s = Math.min(t.scrollHeight, i.y - o - i.height + r.height);
                for (; n && i.y - o < s;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            }
            return null != e ? e : this.getLastKey()
        }
        getKeyForSearch(e, t) {
            if (!this.collator) return null;
            let n = this.collection,
                r = t || this.getFirstKey();
            for (; null != r;) {
                let t = n.getItem(r),
                    i = t.textValue.slice(0, e.length);
                if (t.textValue && 0 === this.collator.compare(i, e)) return r;
                r = this.getKeyBelow(r)
            }
            return null
        }
        constructor(...e) {
            if (1 === e.length) {
                let t = e[0];
                this.collection = t.collection, this.ref = t.ref, this.collator = t.collator, this.disabledKeys = t.disabledKeys || new Set, this.orientation = t.orientation, this.direction = t.direction, this.layout = t.layout || "stack"
            } else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical";
            "stack" === this.layout && "vertical" === this.orientation && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0)
        }
    }

    function b(e) {
        let {
            selectionManager: t,
            collection: n,
            disabledKeys: r,
            ref: o,
            keyboardDelegate: s
        } = e, a = (0, c.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), u = t.disabledBehavior, d = (0, i.useMemo)(() => s || new g(n, "selection" === u ? new Set : r, o, a), [s, n, r, o, a, u]), {
            collectionProps: l
        } = f({
            ...e,
            ref: o,
            selectionManager: t,
            keyboardDelegate: d
        });
        return {
            listProps: l
        }
    }
}