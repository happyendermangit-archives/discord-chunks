function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addResultListener: function() {
            return T
        },
        getCorrections: function() {
            return c
        },
        isMisspelled: function() {
            return _
        },
        isSupported: function() {
            return o
        },
        replaceWithCorrection: function() {
            return E
        },
        setAppLocale: function() {
            return I
        },
        setEnabled: function() {
            return u
        },
        setLearnedWords: function() {
            return d
        }
    });
    var i = n("579806"),
        r = n("405826"),
        a = n("358085");

    function s() {
        return (null === i.default || void 0 === i.default ? void 0 : i.default.spellCheck) != null
    }

    function o() {
        return (0, a.isDesktop)() && s()
    }
    let l = o() ? (0, r.install)() : null;
    async function u(e) {
        let t = await l;
        null != t && (t.enabled = e)
    }
    async function d(e) {
        let t = await l;
        null != t && t.setLearnedWords(e)
    }
    async function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await l;
        return null != n && n.isMisspelled(e, t)
    }
    async function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
            i = await l;
        return null == i ? [] : i.getCorrectionsForMisspelling(e, t).slice(0, n)
    }
    async function E(e) {
        let t = await l;
        null != t && t.replaceMisspelling(e)
    }
    async function I(e) {
        let t = await l;
        null != t && t.setAppLocale(e)
    }

    function T(e) {
        if (!s()) return () => {};
        let t = i.default.spellCheck.on("spellcheck-result", e);
        return null != t ? t : () => {}
    }
}