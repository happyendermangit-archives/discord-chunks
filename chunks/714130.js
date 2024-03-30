function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DropTargetNavigator: function() {
            return f
        }
    });
    var r, o, i = n("967147");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {})).UP = "ArrowUp", r.DOWN = "ArrowDown", r.DROP = "Shift", r.CANCEL = "Escape";
    var f = function() {
        var e, t, n;

        function r(e, t, n, o, a) {
            var s, c, f = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), l(this, "targetNodes", void 0), l(this, "manager", void 0), l(this, "previewer", void 0), l(this, "announcer", void 0), l(this, "currentHoveredNode", void 0), l(this, "focusManager", void 0), l(this, "actions", void 0), l(this, "monitor", void 0), l(this, "handleDraggedElementKeyDown", void 0), this.targetNodes = t, this.manager = n, this.previewer = o, this.announcer = a;
            var d = this;
            this.handleDraggedElementKeyDown = (c = (s = function(e) {
                var t, n;
                return function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                }(this, function(r) {
                    switch (r.label) {
                        case 0:
                            switch (e.key) {
                                case "ArrowUp":
                                    return [3, 1];
                                case "ArrowDown":
                                    return [3, 3]
                            }
                            return [3, 5];
                        case 1:
                            return e.preventDefault(), e.stopPropagation(), t = d.hoverNode, [4, d.getPreviousDropTarget()];
                        case 2:
                            return t.apply(d, [r.sent()]), [2];
                        case 3:
                            return e.preventDefault(), e.stopPropagation(), n = d.hoverNode, [4, d.getNextDropTarget()];
                        case 4:
                            n.apply(d, [r.sent()]), r.label = 5;
                        case 5:
                            return [2]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var o = s.apply(e, t);

                    function i(e) {
                        u(o, n, r, i, a, "next", e)
                    }

                    function a(e) {
                        u(o, n, r, i, a, "throw", e)
                    }
                    i(void 0)
                })
            }), function(e) {
                return c.apply(this, arguments)
            }), this.currentHoveredNode = e, this.focusManager = (0, i.createFocusManager)({
                getFocusableElements: function() {
                    return f.getViableTargets(t)
                },
                getActiveElement: function() {
                    return e.ownerDocument.activeElement
                }
            }), this.actions = n.getActions(), this.monitor = n.getMonitor(), window.addEventListener("keydown", this.handleDraggedElementKeyDown, {
                capture: !0
            })
        }
        return e = r, t = [{
            key: "disconnect",
            value: function() {
                window.removeEventListener("keydown", this.handleDraggedElementKeyDown, {
                    capture: !0
                })
            }
        }, {
            key: "hoverNode",
            value: function(e) {
                var t, n = null === (t = Array.from(this.targetNodes.entries()).find(function(t) {
                    var n = c(t, 2);
                    return e === (n[0], n[1])
                })) || void 0 === t ? void 0 : t[0];
                null != n && (this.actions.hover([n], {
                    clientOffset: function(e) {
                        if (null == e) return {
                            x: 0,
                            y: 0
                        };
                        var t = e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement;
                        if (null == t) return {
                            x: 0,
                            y: 0
                        };
                        var n = t.getBoundingClientRect(),
                            r = n.top;
                        return {
                            x: n.left,
                            y: r
                        }
                    }(e)
                }), this.currentHoveredNode = e, this.previewer.render(this.monitor), this.announcer.announceHover(e, n), null == e || e.focus())
            }
        }, {
            key: "getNextDropTarget",
            value: function() {
                var e;
                return this.focusManager.getNextFocusableElement({
                    wrap: !1,
                    from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
                })
            }
        }, {
            key: "getPreviousDropTarget",
            value: function() {
                var e;
                return this.focusManager.getPreviousFocusableElement({
                    wrap: !1,
                    from: null !== (e = this.currentHoveredNode) && void 0 !== e ? e : void 0
                })
            }
        }, {
            key: "getViableTargets",
            value: function(e) {
                return this.getAllowedTargets(e).sort(function(e, t) {
                    if (e === t) return 0;
                    var n = e.compareDocumentPosition(t);
                    return (n & (Node.DOCUMENT_POSITION_FOLLOWING | n & Node.DOCUMENT_POSITION_CONTAINED_BY)) != 0 ? -1 : (n & (Node.DOCUMENT_POSITION_PRECEDING | n & Node.DOCUMENT_POSITION_CONTAINS)) != 0 ? 1 : 0
                })
            }
        }, {
            key: "getAllowedTargets",
            value: function(e) {
                var t = this;
                return null == this.monitor.getItemType() ? Array.from(e.values()) : Array.from(e).reduce(function(e, n) {
                    var r = c(n, 2),
                        o = r[0],
                        i = r[1];
                    return t.manager.getMonitor().canDropOnTarget(o) && e.push(i), e
                }, [])
            }
        }], s(e.prototype, t), n && s(e, n), r
    }()
}