function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return c
        },
        LOCK_STACK: function() {
            return a
        },
        FocusGuard: function() {
            return s
        }
    }), n("424973");
    var r = n("884691"),
        i = function() {
            this.locks = [], this.listeners = []
        };

    function o(t, e, n) {
        void 0 === n && (n = !1);
        var r, i = (r = t, document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function(t) {
                    return t.tabIndex >= 0 && !t.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            })),
            o = e.compareDocumentPosition(t),
            a = null;
        o & Node.DOCUMENT_POSITION_PRECEDING || n ? a = i.firstChild() : o & Node.DOCUMENT_POSITION_FOLLOWING && (a = i.lastChild()), (null != a ? a : t).focus()
    }
    i.prototype.add = function(t, e) {
        var n = {
            uid: t,
            setEnabled: e,
            enabled: !1
        };
        this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit()
    }, i.prototype.remove = function(t) {
        var e = this.locks.find(function(e) {
            return e.uid === t
        });
        this.toggleLayer(e, !1);
        var n = this.current(),
            r = null != n && n.uid === t;
        this.locks = this.locks.filter(function(e) {
            return e.uid !== t
        }), r && this.toggleLayer(this.current(), !0), this.emit()
    }, i.prototype.current = function() {
        return this.locks[this.locks.length - 1]
    }, i.prototype.isActive = function() {
        var t = this.current();
        return null != t && t.enabled
    }, i.prototype.toggleLayer = function(t, e) {
        null != t && (t.setEnabled(e), t.enabled = e)
    }, i.prototype.subscribe = function(t) {
        var e = this;
        return this.listeners.push(t), t(this.isActive(), this.locks),
            function() {
                return e.listeners = e.listeners.filter(function(e) {
                    return e !== t
                })
            }
    }, i.prototype.emit = function() {
        var t = this,
            e = this.isActive();
        this.listeners.forEach(function(n) {
            return n(e, t.locks)
        })
    };
    var a = new i,
        u = 0,
        s = (0, r.memo)(function() {
            var t, e = (0, r.useState)(!1),
                n = e[0];
            return t = e[1], (0, r.useEffect)(function() {
                return a.subscribe(t)
            }, [t]), (0, r.createElement)("div", {
                tabIndex: n ? 0 : void 0,
                style: {
                    position: "fixed",
                    opacity: 0,
                    pointerEvents: "none"
                }
            })
        });

    function c(t, e) {
        void 0 === e && (e = {});
        var n, i, s, c, l, f = e.disableReturnRef,
            h = e.attachTo;
        void 0 === h && (h = document);
        var p = e.disable,
            d = (i = (0, r.useState)(function() {
                return "lock-" + u++
            })[0], s = (0, r.useRef)(!1), (0, r.useLayoutEffect)(function() {
                return a.add(i, function(t) {
                        return s.current = t
                    }),
                    function() {
                        return a.remove(i)
                    }
            }, [i]), s);
        (0, r.useEffect)(function() {
            p && (d.current = !1)
        }, [p]), (0, r.useLayoutEffect)(function() {
            var e = t.current;

            function n(e) {
                if (d.current) {
                    var n = t.current;
                    if (null != n) {
                        var r = e.target || document.body;
                        n.contains(r) || (e.preventDefault(), e.stopImmediatePropagation(), o(n, r))
                    }
                }
            }

            function r(e) {
                if (d.current) {
                    var n = t.current;
                    if (null != n) {
                        null != e.relatedTarget && e.relatedTarget !== document.body || (e.preventDefault(), n.focus());
                        var r = e.target || document.body;
                        n.contains(r) || o(n, r)
                    }
                }
            }
            return null == e || null == document.activeElement || e.contains(document.activeElement) || null != e.querySelector("[autofocus]") || o(e, document.activeElement, !0), h.addEventListener("focusin", n, {
                    capture: !0
                }), h.addEventListener("focusout", r, {
                    capture: !0
                }),
                function() {
                    h.removeEventListener("focusin", n, {
                        capture: !0
                    }), h.removeEventListener("focusout", r, {
                        capture: !0
                    })
                }
        }, [t]), c = f, l = (0, r.useState)(function() {
            return document.activeElement
        })[0], (0, r.useLayoutEffect)(function() {
            return function() {
                null != c && c.current || requestAnimationFrame(function() {
                    null != l && l.focus()
                })
            }
        }, [])
    }
}