function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
        isSupported: function() {
            return E
        },
        setEnabled: function() {
            return i
        },
        setLearnedWords: function() {
            return t
        },
        isMisspelled: function() {
            return n
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
    async function i(N) {
        let I = await V;
        null != I && (I.enabled = N)
    }
    async function t(N) {
        let I = await V;
        null != I && I.setLearnedWords(N)
    }
    async function n(N) {
        let I = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            A = await V;
        return null != A && A.isMisspelled(N, I)
    }
    async function R(N) {
        let I = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
            O = await V;
        return null == O ? [] : O.getCorrectionsForMisspelling(N, I).slice(0, A)
    }
    async function G(N) {
        let I = await V;
        null != I && I.replaceMisspelling(N)
    }
    async function r(N) {
        let I = await V;
        null != I && I.setAppLocale(N)
    }

    function a(N) {
        if (!e()) return () => {};
        let I = O.default.spellCheck.on("spellcheck-result", N);
        return null != I ? I : () => {}
    }
}