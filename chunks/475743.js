function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r, o, i = n("208454"),
        a = n("569262");

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function s(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function l(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var c = function() {
            throw Error("updateModal has not been implemented.")
        },
        f = n("689566");
    r = f.showModal, c = f.updateModalProps, o = n("67381").closeModal;

    function d(e) {
        var t = e.promiseFn,
            n = e.resolve,
            i = e.reject,
            a = e.modalProps,
            l = void 0 === a ? {} : a,
            f = e.hooks,
            d = (void 0 === f ? {} : f).onEarlyClose;
        if (null == r) {
            null == d || d();
            return
        }
        var E = r(I, p, l);

        function p() {
            null == d || d()
        }

        function m(e) {
            o(E), n(e)
        }

        function y(e) {
            o(E), i(e)
        }

        function I(e) {
            return c(E, I, p, s(u({}, l), {
                isLoading: !0
            })), _({
                promiseFn: t,
                resolve: m,
                reject: y,
                code: e,
                mfaCodeHandler: h,
                isModalOpen: !0
            })
        }

        function h(e) {
            var t = e.res;
            c(E, I, p, s(u({}, l), {
                error: t.body.message
            }))
        }
    }

    function _(e) {
        var t = e.promiseFn,
            n = e.resolve,
            r = e.reject,
            o = e.code,
            i = e.mfaCodeHandler,
            a = void 0 === i ? d : i,
            s = e.isModalOpen,
            c = void 0 !== s && s,
            f = l(e, ["promiseFn", "resolve", "reject", "code", "mfaCodeHandler", "isModalOpen"]);
        return t(null != o ? {
            code: o
        } : {}).then(n, function(e) {
            var o, i;
            if (o = e, i = c, o.body && 60008 === o.body.code || i && 429 === o.status) return a(u({
                promiseFn: t,
                resolve: n,
                reject: r,
                res: e
            }, f));
            r(e)
        })
    }

    function E(e, t) {
        var n, r, o = null != t ? t : {},
            s = o.checkEnabled,
            c = void 0 === s ? null !== (r = null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r : s,
            f = l(o, ["checkEnabled"]);
        return new Promise(function(t, n) {
            ((0, a.resolveThunk)(c) ? d : _)(u({
                promiseFn: e,
                resolve: t,
                reject: n
            }, f))
        })
    }
}