function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("112661"),
        i = n("517727"),
        a = n("49657"),
        u = n("374550"),
        s = n("83653");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function E(e) {
        var t = ["openFile"];
        e.multiple && t.push("multiSelections");
        var n = e.filters;
        i.default.fileManager.openFiles({
            properties: t,
            filters: n
        }, s.MAX_TOTAL_ATTACHMENT_SIZE).then(function(t) {
            var n = t.map(function(e) {
                return a.transformNativeFile(e)
            });
            null != n && e.onChange({
                stopPropagation: function() {
                    return null
                },
                preventDefault: function() {
                    return null
                },
                currentTarget: {
                    files: n
                }
            })
        }).catch(function(t) {
            e.onChange({
                stopPropagation: function() {
                    return null
                },
                preventDefault: function() {
                    return null
                },
                currentTarget: {
                    files: null,
                    err: t
                }
            })
        })
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(m, e);
        var t, n, i, a, s, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function m(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), f(l(t = p.call(this, e)), "_ref", r.createRef()), t.setRef = t.setRef.bind(l(t)), t
        }
        return i = m, a = [{
            key: "activateUploadDialogue",
            value: function() {
                if (null != this._ref) return this._ref.activateUploadDialogue()
            }
        }, {
            key: "setRef",
            value: function(e) {
                this._ref = e
            }
        }, {
            key: "render",
            value: function() {
                return r.createElement(o.FileInput, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            f(e, t, n[t])
                        })
                    }
                    return e
                }({
                    ref: this.setRef,
                    handleNativeClick: E,
                    embedded: (0, u.isDesktop)()
                }, this.props))
            }
        }], c(i.prototype, a), s && c(i, s), m
    }(r.Component);
    t.default = p
}