function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusGuard: function() {
            return u
        },
        LOCK_STACK: function() {
            return o
        },
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        i = function() {
            this.locks = [], this.listeners = []
        };

    function a(e, t, n) {
        void 0 === n && (n = !1);
        var r, i = (r = e, document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function(e) {
                    return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            })),
            a = t.compareDocumentPosition(e),
            o = null;
        a & Node.DOCUMENT_POSITION_PRECEDING || n ? o = i.firstChild() : a & Node.DOCUMENT_POSITION_FOLLOWING && (o = i.lastChild()), (null != o ? o : e).focus()
    }
    i.prototype.add = function(e, t) {
        var n = {
            uid: e,
            setEnabled: t,
            enabled: !1
        };
        this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit()
    }, i.prototype.remove = function(e) {
        var t = this.locks.find(function(t) {
            return t.uid === e
        });
        this.toggleLayer(t, !1);
        var n = this.current(),
            r = null != n && n.uid === e;
        this.locks = this.locks.filter(function(t) {
            return t.uid !== e
        }), r && this.toggleLayer(this.current(), !0), this.emit()
    }, i.prototype.current = function() {
        return this.locks[this.locks.length - 1]
    }, i.prototype.isActive = function() {
        var e = this.current();
        return null != e && e.enabled
    }, i.prototype.toggleLayer = function(e, t) {
        null != e && (e.setEnabled(t), e.enabled = t)
    }, i.prototype.subscribe = function(e) {
        var t = this;
        return this.listeners.push(e), e(this.isActive(), this.locks),
            function() {
                return t.listeners = t.listeners.filter(function(t) {
                    return t !== e
                })
            }
    }, i.prototype.emit = function() {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function(n) {
            return n(t, e.locks)
        })
    };
    var o = new i,
        s = 0,
        u = (0, r.memo)(function() {
            var e, t = (0, r.useState)(!1),
                n = t[0];
            return e = t[1], (0, r.useEffect)(function() {
                return o.subscribe(e)
            }, [e]), (0, r.createElement)("div", {
                tabIndex: n ? 0 : void 0,
                style: {
                    position: "fixed",
                    opacity: 0,
                    pointerEvents: "none"
                }
            })
        });

    function c(e, t) {
        void 0 === t && (t = {});
        var n, i, u, c, l, d = t.disableReturnRef,
            f = t.attachTo;
        void 0 === f && (f = document);
        var p = t.disable,
            h = (i = (0, r.useState)(function() {
                return "lock-" + s++
            })[0], u = (0, r.useRef)(!1), (0, r.useLayoutEffect)(function() {
                return o.add(i, function(e) {
                        return u.current = e
                    }),
                    function() {
                        return o.remove(i)
                    }
            }, [i]), u);
        (0, r.useEffect)(function() {
            p && (h.current = !1)
        }, [p]), (0, r.useLayoutEffect)(function() {
            var t = e.current;

            function n(t) {
                if (h.current) {
                    var n = e.current;
                    if (null != n) {
                        var r = t.target || document.body;
                        n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), a(n, r))
                    }
                }
            }

            function r(t) {
                if (h.current) {
                    var n = e.current;
                    if (null != n) {
                        null != t.relatedTarget && t.relatedTarget !== document.body || (t.preventDefault(), n.focus());
                        var r = t.target || document.body;
                        n.contains(r) || a(n, r)
                    }
                }
            }
            return null == t || null == document.activeElement || t.contains(document.activeElement) || null != t.querySelector("[autofocus]") || a(t, document.activeElement, !0), f.addEventListener("focusin", n, {
                    capture: !0
                }), f.addEventListener("focusout", r, {
                    capture: !0
                }),
                function() {
                    f.removeEventListener("focusin", n, {
                        capture: !0
                    }), f.removeEventListener("focusout", r, {
                        capture: !0
                    })
                }
        }, [e]), c = d, l = (0, r.useState)(function() {
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