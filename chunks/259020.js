function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("836560");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var u = function() {
        var e, t, n;

        function o() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = this, t = "emitter", n = new r.EventEmitter, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = o, t = [{
            key: "on",
            value: function(e, t) {
                this.emitter.on(e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                this.emitter.off(e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                this.emitter.once(e, t)
            }
        }, {
            key: "addListener",
            value: function(e, t) {
                this.emitter.addListener(e, t)
            }
        }, {
            key: "removeListener",
            value: function(e, t) {
                this.emitter.removeListener(e, t)
            }
        }, {
            key: "removeAllListeners",
            value: function() {
                this.emitter.removeAllListeners()
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                (t = this.emitter).emit.apply(t, [e].concat(a(r)))
            }
        }, {
            key: "emitUnsafe",
            value: function(e) {
                for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                (t = this.emitter).emit.apply(t, [e].concat(a(r)))
            }
        }, {
            key: "listenerCount",
            value: function(e) {
                return this.emitter.listenerCount(e)
            }
        }], i(e.prototype, t), n && i(e, n), o
    }()
}