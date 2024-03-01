function(t, e, s) {
    "use strict";

    function r(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), s.push.apply(s, r)
        }
        return s
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(s), !0).forEach(function(e) {
                (function(t, e, s) {
                    (e = c(e)) in t ? Object.defineProperty(t, e, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = s
                })(t, e, s[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : r(Object(s)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
            })
        }
        return t
    }
    s("424973"), s("70102");

    function n(t, e) {
        for (var s = 0; s < e.length; s++) {
            var r = e[s];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
        }
    }

    function c(t) {
        var e = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            var s = t[Symbol.toPrimitive];
            if (void 0 !== s) {
                var r = s.call(t, e || "default");
                if ("object" != typeof r) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === e ? String : Number)(t)
        }(t, "string");
        return "symbol" == typeof e ? e : String(e)
    }
    var o = s("446825").Buffer,
        f = s("482803").inspect,
        u = f && f.custom || "inspect";
    t.exports = function() {
        var t, e, s;

        function r() {
            ! function(t, e) {
                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
            }(this, r), this.head = null, this.tail = null, this.length = 0
        }
        return t = r, e = [{
            key: "push",
            value: function(t) {
                var e = {
                    data: t,
                    next: null
                };
                this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
            }
        }, {
            key: "unshift",
            value: function(t) {
                var e = {
                    data: t,
                    next: this.head
                };
                0 === this.length && (this.tail = e), this.head = e, ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (0 !== this.length) {
                    var t = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null, this.length = 0
            }
        }, {
            key: "join",
            value: function(t) {
                if (0 === this.length) return "";
                for (var e = this.head, s = "" + e.data; e = e.next;) s += t + e.data;
                return s
            }
        }, {
            key: "concat",
            value: function(t) {
                if (0 === this.length) return o.alloc(0);
                for (var e, s, r, i = o.allocUnsafe(t >>> 0), n = this.head, c = 0; n;) {
                    ;
                    e = n.data, s = i, r = c, o.prototype.copy.call(e, s, r), c += n.data.length, n = n.next
                }
                return i
            }
        }, {
            key: "consume",
            value: function(t, e) {
                var s;
                return t < this.head.data.length ? (s = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : s = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), s
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(t) {
                var e = this.head,
                    s = 1,
                    r = e.data;
                for (t -= r.length; e = e.next;) {
                    var i = e.data,
                        n = t > i.length ? i.length : t;
                    if (n === i.length ? r += i : r += i.slice(0, t), 0 == (t -= n)) {
                        n === i.length ? (++s, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, e.data = i.slice(n));
                        break
                    }++s
                }
                return this.length -= s, r
            }
        }, {
            key: "_getBuffer",
            value: function(t) {
                var e = o.allocUnsafe(t),
                    s = this.head,
                    r = 1;
                for (s.data.copy(e), t -= s.data.length; s = s.next;) {
                    var i = s.data,
                        n = t > i.length ? i.length : t;
                    if (i.copy(e, e.length - t, 0, n), 0 == (t -= n)) {
                        n === i.length ? (++r, s.next ? this.head = s.next : this.head = this.tail = null) : (this.head = s, s.data = i.slice(n));
                        break
                    }++r
                }
                return this.length -= r, e
            }
        }, {
            key: u,
            value: function(t, e) {
                return f(this, i(i({}, e), {}, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }], n(t.prototype, e), s && n(t, s), Object.defineProperty(t, "prototype", {
            writable: !1
        }), r
    }()
}