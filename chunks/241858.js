function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PaginationController: function() {
            return I
        },
        PaginationTypes: function() {
            return o
        }
    });
    var r, o, i, a = n("470079"),
        u = n("392711"),
        s = n.n(u);

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e, t) {
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
        }(e, t) || y(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || y(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function y(e, t) {
        if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }
    }(r = o || (o = {})).PAGE = "PAGE", r.GAP = "GAP", r.BACK = "BACK", r.NEXT = "NEXT";
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function u() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.apply(this, arguments), d(c(e), "changePageTo", function(t) {
                var n = e.props,
                    r = n.selectedPage,
                    o = n.onPageChange;
                r !== t && null != o && o(t)
            }), d(c(e), "handleForward", function() {
                e.changePageTo(Math.min(e.props.selectedPage + 1, e.props.totalPageCount))
            }), d(c(e), "handleBackward", function() {
                e.changePageTo(Math.max(e.props.selectedPage - 1, 1))
            }), d(c(e), "handleJump", function(t) {
                e.changePageTo(t)
            }), e
        }
        return r = u, o = [{
            key: "getNeighborBounds",
            value: function() {
                var e = this.props,
                    t = e.totalPageCount,
                    n = e.maxVisiblePages,
                    r = e.selectedPage,
                    o = Math.ceil(n / 2),
                    i = Math.floor(n / 2),
                    a = [1, t],
                    u = p(a = r <= o ? [1, n] : r > t - i ? [t - n + 1, t] : [r - o + 1, r + i], 2);
                return [Math.max(u[0], 1), Math.min(u[1], t)]
            }
        }, {
            key: "getPageList",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.totalPageCount,
                    r = t.selectedPage,
                    o = t.hideMaxPage,
                    i = p(this.getNeighborBounds(), 2),
                    a = i[0],
                    u = i[1],
                    l = {
                        type: "BACK",
                        key: "back",
                        disabled: 1 === r,
                        selected: !1,
                        navigateToPage: this.handleBackward
                    },
                    c = {
                        type: "NEXT",
                        key: "next",
                        disabled: r === n,
                        selected: !1,
                        navigateToPage: this.handleForward
                    },
                    f = [],
                    d = [];
                a > 1 && (f = [{
                    type: "PAGE",
                    key: "page-1",
                    targetPage: 1,
                    navigateToPage: function() {
                        return e.handleJump(1)
                    }
                }, {
                    type: "GAP",
                    key: "left-gap"
                }], a += 2), u < n && (d = [{
                    type: "GAP",
                    key: "right-gap"
                }], !o && d.push({
                    type: "PAGE",
                    key: "page-".concat(n),
                    targetPage: n,
                    navigateToPage: function() {
                        return e.handleJump(n)
                    }
                }), u -= 2);
                var _ = s().range(a, u + 1).map(function(t) {
                    return {
                        type: "PAGE",
                        key: "page-".concat(t),
                        targetPage: t,
                        selected: t === r,
                        disabled: !1,
                        navigateToPage: function() {
                            return e.handleJump(t)
                        }
                    }
                });
                return [l].concat(m(f), m(_), m(d), [c])
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.totalPageCount;
                return (0, e.children)({
                    pages: this.getPageList(),
                    hasMultiplePages: t > 1
                })
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(a.PureComponent);
    d(I, "defaultProps", {
        maxVisiblePages: 9,
        hideMaxPage: !1
    })
}