function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FileInput: function() {
            return d
        }
    });
    var r, o = n("470079");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = "file-input",
        f = function(e) {
            return {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: e ? "not-allowed" : "pointer",
                fontSize: 0
            }
        },
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(p, e);
            var t, n, r, d, _, E = (t = p, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, a = s(t);
                if (n) {
                    var u = s(this).constructor;
                    o = Reflect.construct(a, arguments, u)
                } else o = a.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : i(e)
            });

            function p() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), e = E.apply(this, arguments), u(i(e), "_input", null), u(i(e), "activateUploadDialogue", function() {
                    e.props.embedded ? e.handleNativeClick() : e._input && e._input.click()
                }), u(i(e), "handleNativeClick", function() {
                    e.props.handleNativeClick && e.props.handleNativeClick(e.props)
                }), u(i(e), "handleNativeKeyDown", function(t) {
                    (" " === t.key || "Enter" === t.key) && e.handleNativeClick()
                }), u(i(e), "handleBrowserInputMouseDown", function(e) {
                    e.currentTarget.value = null
                }), e
            }
            return r = p, d = [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.disabled,
                        r = t.tabIndex,
                        i = t.className,
                        a = t.name,
                        u = t["aria-label"],
                        s = t["aria-hidden"];
                    if (this.props.embedded) return o.createElement("div", {
                        role: "button",
                        style: f(n),
                        className: i || c,
                        tabIndex: r,
                        onKeyDown: n ? void 0 : this.handleNativeKeyDown,
                        onClick: n ? void 0 : this.handleNativeClick,
                        "aria-disabled": n,
                        "aria-label": u,
                        "aria-hidden": s || void 0
                    });
                    var l = "";
                    return this.props.filters && (l = this.props.filters.map(function(e) {
                        return e.extensions.map(function(e) {
                            return ".".concat(e)
                        }).join(",")
                    }).join(",")), o.createElement("input", {
                        style: f(n),
                        className: i || c,
                        disabled: n,
                        type: "file",
                        tabIndex: r,
                        onMouseDown: this.handleBrowserInputMouseDown,
                        onChange: this.props.onChange,
                        multiple: this.props.multiple,
                        accept: l,
                        name: a,
                        "aria-label": u,
                        "aria-hidden": s || void 0,
                        ref: function(t) {
                            return e._input = t
                        }
                    })
                }
            }], a(r.prototype, d), _ && a(r, _), p
        }(o.Component);
    u(d, "defaultProps", {
        multiple: !1,
        disabled: !1,
        tabIndex: 0
    })
}