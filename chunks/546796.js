function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("411104");
    var s = n("594174"),
        a = n("831160");
    let o = () => {
        throw Error("updateModal has not been implemented.")
    };
    {
        let e = n("169480");
        i = e.showModal, o = e.updateModalProps, r = n("952265").closeModal
    }

    function l(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: s,
            modalProps: a = {},
            hooks: {
                onEarlyClose: l
            } = {}
        } = e;
        if (null == i) {
            null == l || l();
            return
        }
        let d = i(I, _, a);

        function _() {
            null == l || l()
        }

        function c(e) {
            r(d), n(e)
        }

        function E(e) {
            r(d), s(e)
        }

        function I(e) {
            return o(d, I, _, {
                ...a,
                isLoading: !0
            }), u({
                promiseFn: t,
                resolve: c,
                reject: E,
                code: e,
                mfaCodeHandler: T,
                isModalOpen: !0
            })
        }

        function T(e) {
            let {
                res: t
            } = e;
            o(d, I, _, {
                ...a,
                error: t.body.message
            })
        }
    }

    function u(e) {
        let {
            promiseFn: t,
            resolve: n,
            reject: i,
            code: r,
            mfaCodeHandler: s = l,
            isModalOpen: a = !1,
            ...o
        } = e;
        return t(null != r ? {
            code: r
        } : {}).then(n, e => {
            var r, l;
            if (r = e, l = a, r.body && 60008 === r.body.code || l && 429 === r.status) return s({
                promiseFn: t,
                resolve: n,
                reject: i,
                res: e,
                ...o
            });
            i(e)
        })
    }

    function d(e, t) {
        var n, i;
        let {
            checkEnabled: r = null !== (i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
            ...o
        } = null != t ? t : {};
        return new Promise((t, n) => {
            ((0, a.resolveThunk)(r) ? l : u)({
                promiseFn: e,
                resolve: t,
                reject: n,
                ...o
            })
        })
    }
}