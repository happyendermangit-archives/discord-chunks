function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("179870");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        var e, t, n;

        function i() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), e = this, n = !1, (t = "isInitialized") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = i, t = [{
            key: "initialize",
            value: function() {
                for (var e, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                if (!this.isInitialized) {
                    ;
                    this.isInitialized = !0, this._initialize.apply(this, function(e) {
                        if (Array.isArray(e)) return r(e)
                    }(e = n) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }
                    }(e) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                }
            }
        }, {
            key: "terminate",
            value: function() {
                this.isInitialized && (this.isInitialized = !1, this._terminate())
            }
        }], o(e.prototype, t), n && o(e, n), i
    }()
}