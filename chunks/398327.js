function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("433517"),
        u = n("570140"),
        d = n("601993");
    let _ = "SpellcheckStore",
        c = !0,
        E = new Set;

    function I() {
        l.Storage.set(_, {
            enabled: c,
            learnedWords: E
        })
    }
    class T extends(i = o.default.Store) {
        initialize() {
            let e = l.Storage.get(_);
            null != e && (c = e.enabled, E = new Set(e.learnedWords), (0, d.setEnabled)(c), (0, d.setLearnedWords)(E))
        }
        isEnabled() {
            return c
        }
        hasLearnedWord(e) {
            return E.has(e.toLocaleLowerCase())
        }
    }
    s = "SpellcheckStore", (a = "displayName") in(r = T) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new T(u.default, {
        SPELLCHECK_TOGGLE() {
            c = !c, (0, d.setEnabled)(c), I()
        },
        SPELLCHECK_LEARN_WORD(e) {
            let {
                word: t
            } = e;
            E.add(t.toLocaleLowerCase()), (0, d.setLearnedWords)(E), I()
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let {
                word: t
            } = e;
            E.delete(t.toLocaleLowerCase()), (0, d.setLearnedWords)(E), I()
        },
        I18N_LOAD_SUCCESS(e) {
            let {
                locale: t
            } = e;
            (0, d.setAppLocale)(t)
        }
    })
}