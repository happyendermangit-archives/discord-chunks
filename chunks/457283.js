function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ListKeyboardDelegate: function() {
            return g
        },
        useSelectableCollection: function() {
            return f
        },
        useSelectableItem: function() {
            return p
        },
        useSelectableList: function() {
            return _
        },
        useTypeSelect: function() {
            return d
        }
    });
    var r = n("699581"),
        i = n("470079"),
        a = n("706682"),
        o = n("182823"),
        s = n("612001"),
        u = n("602607");

    function c(e) {
        return (0, o.isAppleDevice)() ? e.altKey : e.ctrlKey
    }

    function l(e) {
        return (0, o.isMac)() ? e.metaKey : e.ctrlKey
    }

    function d(e) {
        let {
            keyboardDelegate: t,
            selectionManager: n,
            onTypeSelect: r
        } = e, a = (0, i.useRef)({
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
                    " " === i && a.search.trim().length > 0 && (e.preventDefault(), !("continuePropagation" in e) && e.stopPropagation()), a.search += i;
                    let o = t.getKeyForSearch(a.search, n.focusedKey);
                    null == o && (o = t.getKeyForSearch(a.search)), null != o && (n.setFocusedKey(o), r && r(o)), clearTimeout(a.timeout), a.timeout = setTimeout(() => {
                        a.search = ""
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
                shouldFocusWrap: m = !1,
                disallowEmptySelection: g = !1,
                disallowSelectAll: _ = !1,
                selectOnFocus: b = "replace" === n.selectionBehavior,
                disallowTypeAhead: v = !1,
                shouldUseVirtualFocus: y,
                allowsTabNavigation: E = !1,
                isVirtualized: S,
                scrollRef: x = p,
                linkBehavior: w = "action"
            } = e,
            {
                direction: T
            } = (0, u.useLocale)(),
            C = (0, o.useRouter)(),
            D = (0, i.useRef)({
                top: 0,
                left: 0
            });
        (0, o.useEvent)(x, "scroll", S ? null : () => {
            D.current = {
                top: x.current.scrollTop,
                left: x.current.scrollLeft
            }
        });
        let O = (0, i.useRef)(h);
        (0, i.useEffect)(() => {
            if (O.current) {
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
                n.setFocused(!0), n.setFocusedKey(e), null == e && !y && (0, a.focusSafely)(p.current)
            }
        }, []);
        let M = (0, i.useRef)(n.focusedKey);
        (0, i.useEffect)(() => {
            let e = (0, s.getInteractionModality)();
            if (n.isFocused && null != n.focusedKey && (null == x ? void 0 : x.current)) {
                let t = x.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
                t && ("keyboard" === e || O.current) && (!S && (0, o.scrollIntoView)(x.current, t), (0, o.scrollIntoViewport)(t, {
                    containingElement: p.current
                }))
            }
            n.isFocused && null == n.focusedKey && null != M.current && (0, a.focusSafely)(p.current), M.current = n.focusedKey, O.current = !1
        }, [S, x, n.focusedKey, n.isFocused, p]);
        let A = {
                onKeyDown: e => {
                    var t, i, s, u, d, h, v, y;
                    if (e.altKey && "Tab" === e.key && e.preventDefault(), !p.current.contains(e.target)) return;
                    let S = (t, i) => {
                        if (null != t) {
                            if (n.isLink(t) && "selection" === w && b && !c(e)) {
                                (0, r.flushSync)(() => {
                                    n.setFocusedKey(t, i)
                                });
                                let a = x.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
                                C.open(a, e);
                                return
                            }
                            n.setFocusedKey(t, i), (!n.isLink(t) || "override" !== w) && (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : b && !c(e) && n.replaceSelection(t))
                        }
                    };
                    switch (e.key) {
                        case "ArrowDown":
                            if (f.getKeyBelow) {
                                e.preventDefault();
                                let r = null != n.focusedKey ? f.getKeyBelow(n.focusedKey) : null === (t = f.getFirstKey) || void 0 === t ? void 0 : t.call(f);
                                null == r && m && (r = null === (i = f.getFirstKey) || void 0 === i ? void 0 : i.call(f, n.focusedKey)), S(r)
                            }
                            break;
                        case "ArrowUp":
                            if (f.getKeyAbove) {
                                e.preventDefault();
                                let t = null != n.focusedKey ? f.getKeyAbove(n.focusedKey) : null === (s = f.getLastKey) || void 0 === s ? void 0 : s.call(f);
                                null == t && m && (t = null === (u = f.getLastKey) || void 0 === u ? void 0 : u.call(f, n.focusedKey)), S(t)
                            }
                            break;
                        case "ArrowLeft":
                            if (f.getKeyLeftOf) {
                                e.preventDefault();
                                let t = f.getKeyLeftOf(n.focusedKey);
                                null == t && m && (t = "rtl" === T ? null === (d = f.getFirstKey) || void 0 === d ? void 0 : d.call(f, n.focusedKey) : null === (h = f.getLastKey) || void 0 === h ? void 0 : h.call(f, n.focusedKey)), S(t, "rtl" === T ? "first" : "last")
                            }
                            break;
                        case "ArrowRight":
                            if (f.getKeyRightOf) {
                                e.preventDefault();
                                let t = f.getKeyRightOf(n.focusedKey);
                                null == t && m && (t = "rtl" === T ? null === (v = f.getLastKey) || void 0 === v ? void 0 : v.call(f, n.focusedKey) : null === (y = f.getFirstKey) || void 0 === y ? void 0 : y.call(f, n.focusedKey)), S(t, "rtl" === T ? "last" : "first")
                            }
                            break;
                        case "Home":
                            if (f.getFirstKey) {
                                e.preventDefault();
                                let t = f.getFirstKey(n.focusedKey, l(e));
                                n.setFocusedKey(t), l(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : b && n.replaceSelection(t)
                            }
                            break;
                        case "End":
                            if (f.getLastKey) {
                                e.preventDefault();
                                let t = f.getLastKey(n.focusedKey, l(e));
                                n.setFocusedKey(t), l(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : b && n.replaceSelection(t)
                            }
                            break;
                        case "PageDown":
                            f.getKeyPageBelow && (e.preventDefault(), S(f.getKeyPageBelow(n.focusedKey)));
                            break;
                        case "PageUp":
                            f.getKeyPageAbove && (e.preventDefault(), S(f.getKeyPageAbove(n.focusedKey)));
                            break;
                        case "a":
                            l(e) && "multiple" === n.selectionMode && !0 !== _ && (e.preventDefault(), n.selectAll());
                            break;
                        case "Escape":
                            e.preventDefault(), !g && n.clearSelection();
                            break;
                        case "Tab":
                            if (!E) {
                                if (e.shiftKey) p.current.focus();
                                else {
                                    let e, t, n = (0, a.getFocusableTreeWalker)(p.current, {
                                        tabbable: !0
                                    });
                                    do(t = n.lastChild()) && (e = t); while (t);
                                    e && !e.contains(document.activeElement) && (0, o.focusWithoutScrolling)(e)
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
                                    null != e && (n.setFocusedKey(e), b && n.replaceSelection(e))
                                },
                                a = e.relatedTarget;
                            i(a && e.currentTarget.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING ? null !== (t = n.lastSelectedKey) && void 0 !== t ? t : f.getLastKey() : null !== (r = n.firstSelectedKey) && void 0 !== r ? r : f.getFirstKey())
                        } else !S && (x.current.scrollTop = D.current.top, x.current.scrollLeft = D.current.left);
                        if (!S && null != n.focusedKey) {
                            let e = x.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
                            e && (!e.contains(document.activeElement) && (0, o.focusWithoutScrolling)(e), "keyboard" === (0, s.getInteractionModality)() && (0, o.scrollIntoViewport)(e, {
                                containingElement: p.current
                            }))
                        }
                    }
                },
                onBlur: e => {
                    !e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1)
                },
                onMouseDown(e) {
                    x.current === e.target && e.preventDefault()
                }
            },
            {
                typeSelectProps: k
            } = d({
                keyboardDelegate: f,
                selectionManager: n
            });
        return !v && (A = (0, o.mergeProps)(k, A)), !y && (t = null == n.focusedKey ? 0 : -1), {
            collectionProps: {
                ...A,
                tabIndex: t
            }
        }
    }

    function p(e) {
        let {
            selectionManager: t,
            key: n,
            ref: r,
            shouldSelectOnPressUp: u,
            shouldUseVirtualFocus: d,
            focus: f,
            isDisabled: p,
            onAction: g,
            allowsDifferentPressOrigin: _,
            linkBehavior: b = "action"
        } = e, v = (0, o.useRouter)(), y = e => {
            if ("keyboard" === e.pointerType && c(e)) t.toggleSelection(n);
            else {
                if ("none" === t.selectionMode) return;
                if (t.isLink(n)) {
                    if ("selection" === b) {
                        v.open(r.current, e), t.setSelectedKeys(t.selectedKeys);
                        return
                    }
                    if ("override" === b || "none" === b) return
                }
                "single" === t.selectionMode ? t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n) : e && e.shiftKey ? t.extendSelection(n) : "toggle" === t.selectionBehavior || e && (l(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? t.toggleSelection(n) : t.replaceSelection(n)
            }
        };
        (0, i.useEffect)(() => {
            n === t.focusedKey && t.isFocused && !d && (f ? f() : document.activeElement !== r.current && (0, a.focusSafely)(r.current))
        }, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, d]), p = p || t.isDisabled(n);
        let E = {};
        d || p ? p && (E.onMouseDown = e => {
            e.preventDefault()
        }) : E = {
            tabIndex: n === t.focusedKey ? 0 : -1,
            onFocus(e) {
                e.target === r.current && t.setFocusedKey(n)
            }
        };
        let S = t.isLink(n) && "override" === b,
            x = t.isLink(n) && "selection" !== b && "none" !== b,
            w = !p && t.canSelectItem(n) && !S,
            T = (g || x) && !p,
            C = T && ("replace" === t.selectionBehavior ? !w : !w || t.isEmpty),
            D = T && w && "replace" === t.selectionBehavior,
            O = C || D,
            M = (0, i.useRef)(null),
            A = O && w,
            k = (0, i.useRef)(!1),
            R = (0, i.useRef)(!1),
            N = e => {
                g && g(), x && v.open(r.current, e)
            },
            I = {};
        u ? (I.onPressStart = e => {
            M.current = e.pointerType, k.current = A, "keyboard" === e.pointerType && (!O || m()) && y(e)
        }, _ ? (I.onPressUp = C ? null : e => {
            "keyboard" !== e.pointerType && w && y(e)
        }, I.onPress = C ? N : null) : I.onPress = e => {
            C || D && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || !!h()) && N(e) : "keyboard" !== e.pointerType && w && y(e)
        }) : (I.onPressStart = e => {
            M.current = e.pointerType, k.current = A, R.current = C, w && ("mouse" === e.pointerType && !C || "keyboard" === e.pointerType && (!T || m())) && y(e)
        }, I.onPress = e => {
            ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && O && h() || "mouse" === e.pointerType && R.current) && (O ? N(e) : w && y(e))
        }), E["data-key"] = n, I.preventFocusOnPress = d;
        let {
            pressProps: L,
            isPressed: P
        } = (0, s.usePress)(I), F = D ? e => {
            "mouse" === M.current && (e.stopPropagation(), e.preventDefault(), N(e))
        } : void 0, {
            longPressProps: B
        } = (0, s.useLongPress)({
            isDisabled: !A,
            onLongPress(e) {
                "touch" === e.pointerType && (y(e), t.setSelectionBehavior("toggle"))
            }
        }), U = t.isLink(n) ? e => {
            !o.openLink.isOpening && e.preventDefault()
        } : void 0;
        return {
            itemProps: (0, o.mergeProps)(E, w || C ? L : {}, A ? B : {}, {
                onDoubleClick: F,
                onDragStartCapture: e => {
                    "touch" === M.current && k.current && e.preventDefault()
                },
                onClick: U
            }),
            isPressed: P,
            isSelected: t.isSelected(n),
            isFocused: t.isFocused && t.focusedKey === n,
            isDisabled: p,
            allowsSelection: w,
            hasAction: O
        }
    }

    function h() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter"
    }

    function m() {
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
            return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)
        }
        getKeyPageAbove(e) {
            let t = this.ref.current,
                n = this.getItem(e);
            if (!n) return null;
            if (!(0, o.isScrollable)(t)) return this.getFirstKey();
            let r = t.getBoundingClientRect(),
                i = n.getBoundingClientRect();
            if ("horizontal" === this.orientation) {
                let a = r.x - t.scrollLeft,
                    o = Math.max(0, i.x - a + i.width - r.width);
                for (; n && i.x - a > o;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            } else {
                let a = r.y - t.scrollTop,
                    o = Math.max(0, i.y - a + i.height - r.height);
                for (; n && i.y - a > o;) i = null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            }
            return null != e ? e : this.getFirstKey()
        }
        getKeyPageBelow(e) {
            let t = this.ref.current,
                n = this.getItem(e);
            if (!n) return null;
            if (!(0, o.isScrollable)(t)) return this.getLastKey();
            let r = t.getBoundingClientRect(),
                i = n.getBoundingClientRect();
            if ("horizontal" === this.orientation) {
                let a = r.x - t.scrollLeft,
                    o = Math.min(t.scrollWidth, i.x - a - i.width + r.width);
                for (; n && i.x - a < o;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
            } else {
                let a = r.y - t.scrollTop,
                    o = Math.min(t.scrollHeight, i.y - a - i.height + r.height);
                for (; n && i.y - a < o;) i = null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect()
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

    function _(e) {
        let {
            selectionManager: t,
            collection: n,
            disabledKeys: r,
            ref: a,
            keyboardDelegate: o
        } = e, s = (0, u.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), c = t.disabledBehavior, l = (0, i.useMemo)(() => o || new g(n, "selection" === c ? new Set : r, a, s), [o, n, r, a, s, c]), {
            collectionProps: d
        } = f({
            ...e,
            ref: a,
            selectionManager: t,
            keyboardDelegate: l
        });
        return {
            listProps: d
        }
    }
}