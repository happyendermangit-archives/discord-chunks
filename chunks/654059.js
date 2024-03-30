function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("967888"),
        a = n("941504");

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r || (r = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (o || (o = {})).ASSET = "asset";
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = u(t);
            if (n) {
                var a = u(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o);
            var n, i, u = (n = r.call(this, e, t, a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD)).getFieldErrors("asset");
            return null != u && (null === (i = u[0]) || void 0 === i ? void 0 : i.code) === "BINARY_TYPE_MAX_SIZE" && (n.message = a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE), n
        }
        return o
    }(i.V8APIError);
    t.default = l
}