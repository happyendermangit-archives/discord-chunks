function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        isSupported: function() {
            return E
        },
        setEnabled: function() {
            return t
        },
        setLearnedWords: function() {
            return n
        },
        isMisspelled: function() {
            return i
        },
        getCorrections: function() {
            return R
        },
        replaceWithCorrection: function() {
            return G
        },
        setAppLocale: function() {
            return r
        },
        addResultListener: function() {
            return a
        }
    });
    var O = A("49671"),
        T = A("852046"),
        _ = A("773336");

    function e() {
        return (null === O.default || void 0 === O.default ? void 0 : O.default.spellCheck) != null
    }

    function E() {
        return (0, _.isDesktop)() && e()
    }
    let V = E() ? (0, T.install)() : null;
    async function t(I) {
        let N = await V;
        null != N && (N.enabled = I)
    }
    async function n(I) {
        let N = await V;
        null != N && N.setLearnedWords(I)
    }
    async function i(I) {
        let N = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            A = await V;
        return null != A && A.isMisspelled(I, N)
    }
    async function R(I) {
        let N = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
            O = await V;
        return null == O ? [] : O.getCorrectionsForMisspelling(I, N).slice(0, A)
    }
    async function G(I) {
        let N = await V;
        null != N && N.replaceMisspelling(I)
    }
    async function r(I) {
        let N = await V;
        null != N && N.setAppLocale(I)
    }

    function a(I) {
        if (!e()) return () => {};
        let N = O.default.spellCheck.on("spellcheck-result", I);
        return null != N ? N : () => {}
    }
}