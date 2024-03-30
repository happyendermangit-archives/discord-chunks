function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r, o, i = n("470079"),
        a = n("281767");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).ARROW_UP = "ARROW_UP", r.ARROW_DOWN = "ARROW_DOWN", r.ARROW_LEFT = "ARROW_LEFT", r.ARROW_RIGHT = "ARROW_RIGHT";
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(_, e);
        var t, n, r, o, i, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function _() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), e = d.apply(this, arguments), l(u(e), "state", {
                focusedColumn: null,
                focusedRow: null
            }), l(u(e), "handleKeyDown", function(t) {
                var n = e.props.onSelect;
                switch (t.keyCode) {
                    case a.KeyboardKeys.ARROW_DOWN:
                    case a.KeyboardKeys.ARROW_UP:
                    case a.KeyboardKeys.ARROW_LEFT:
                    case a.KeyboardKeys.ARROW_RIGHT:
                        e.focusNext(function(e) {
                            switch (e) {
                                case a.KeyboardKeys.ARROW_DOWN:
                                    return "ARROW_DOWN";
                                case a.KeyboardKeys.ARROW_UP:
                                    return "ARROW_UP";
                                case a.KeyboardKeys.ARROW_LEFT:
                                    return "ARROW_LEFT";
                                case a.KeyboardKeys.ARROW_RIGHT:
                                    return "ARROW_RIGHT";
                                default:
                                    return null
                            }
                        }(t.keyCode));
                        break;
                    case a.KeyboardKeys.ENTER:
                        var r = e.calculateFocusedItem();
                        null != r && null != n && (t.preventDefault(), t.stopPropagation(), n(r))
                }
            }), l(u(e), "wrapPosition", function(t, n, r, o) {
                var i, a = t.length,
                    u = Math.max(r * a + n + o, 0) % a,
                    s = null !== (i = e.calculateClosest(t[n][r], t[u])) && void 0 !== i ? i : r,
                    l = 0;
                return o < 0 && u > n && (l = -1), o > 0 && u < n && (l = 1), {
                    column: u,
                    row: s + l
                }
            }), e
        }
        return r = _, o = [{
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown, !0)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown, !0)
            }
        }, {
            key: "focusNext",
            value: function(e) {
                var t = this,
                    n = this.props,
                    r = n.getItemGrid,
                    o = n.onFocus,
                    i = this.state,
                    a = i.focusedColumn,
                    u = i.focusedRow;
                if (null != e) {
                    var s = r();
                    if (null != s) {
                        var l = this.getNext(s, a, u, e);
                        this.setState({
                            focusedColumn: l.column,
                            focusedRow: l.row
                        }, function() {
                            var e = t.calculateFocusedItem();
                            null != e && null != o && o(e)
                        })
                    }
                }
            }
        }, {
            key: "getNext",
            value: function(e, t, n, r) {
                var o, i, a, u;
                if (null == t || null == n) i = 0, a = 0, o = {
                    column: 0,
                    row: 0
                };
                else switch (i = t, a = n, r) {
                    case "ARROW_UP":
                        o = {
                            column: i,
                            row: Math.max(a - 1, 0)
                        };
                        break;
                    case "ARROW_DOWN":
                        o = {
                            column: i,
                            row: Math.min(a + 1, e[i].length - 1)
                        };
                        break;
                    case "ARROW_LEFT":
                        o = this.wrapPosition(e, i, a, -1);
                        break;
                    case "ARROW_RIGHT":
                        o = this.wrapPosition(e, i, a, 1)
                }
                return null != o && (u = e[o.column][o.row]), (null == u || null == o) && (u = e[(o = {
                    column: i,
                    row: a
                }).column][o.row]), {
                    column: o.column,
                    row: o.row,
                    id: u
                }
            }
        }, {
            key: "calculateClosest",
            value: function(e, t) {
                var n, r = this.props.getCoordsMap()[e];
                if (null != r) {
                    for (var o = Number.MAX_SAFE_INTEGER, i = 0; i < t.length; i++) {
                        var a = this.props.getCoordsMap()[t[i]];
                        if (null != a) {
                            var u = Math.abs(a.top - r.top);
                            if (u < o) o = u, n = i;
                            else break
                        }
                    }
                    return n
                }
            }
        }, {
            key: "calculateFocusedItem",
            value: function() {
                var e = this.props.getItemGrid,
                    t = this.state,
                    n = t.focusedRow,
                    r = t.focusedColumn,
                    o = e();
                return null == o || null == r || null == n || null == o[r] || null == o[r][n] ? null : o[r][n]
            }
        }, {
            key: "render",
            value: function() {
                return this.props.children
            }
        }], s(r.prototype, o), i && s(r, i), _
    }(i.Component)
}