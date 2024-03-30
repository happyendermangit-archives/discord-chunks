function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("470079"),
        s = n("803997"),
        l = n.n(s),
        c = n("784184"),
        f = n("143953"),
        d = n("843226");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).SINGLE_AVATAR = "1", r.MULTIPLE_AVATAR = "2";
    var I = (p(i = {}, c.AvatarSizes.SIZE_32, d.avatarSmall), p(i, c.AvatarSizes.SIZE_40, d.avatarLarge), i),
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }(s, e);
            var t, n, r, o, i, a = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = m(t);
                if (n) {
                    var a = m(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : _(e)
            });

            function s() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = a.apply(this, arguments), p(_(e), "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%")), e
            }
            return r = s, o = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.type,
                        n = e.avatarSize,
                        r = e.className;
                    return "2" === t ? u.createElement("div", {
                        className: l()(d.multiplePlaceholder, r)
                    }, u.createElement(f.default, null, u.createElement("div", {
                        className: l()(d.placeholderAvatar, I[n], d.avatarMasked)
                    }), u.createElement("div", {
                        className: l()(d.placeholderAvatar, I[n], d.avatarMasked)
                    }), u.createElement("div", {
                        className: l()(d.placeholderAvatar, I[n])
                    })), u.createElement(f.default, {
                        grow: 1,
                        className: d.mulitplePlaceholderUsername,
                        style: {
                            maxWidth: this.placeholderMaxWidth
                        }
                    })) : u.createElement(f.default, {
                        className: l()(d.placeholder, r)
                    }, u.createElement("div", {
                        className: l()(d.placeholderAvatar, I[n])
                    }), u.createElement(f.default, {
                        grow: 1,
                        className: d.placeholderUsername,
                        style: {
                            maxWidth: this.placeholderMaxWidth
                        }
                    }))
                }
            }], E(r.prototype, o), i && E(r, i), s
        }(u.Component);
    p(h, "defaultProps", {
        type: "1"
    }), p(h, "Types", o), t.default = h
}