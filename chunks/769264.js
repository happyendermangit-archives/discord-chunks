function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("446674"),
        l = n("95410"),
        a = n("913144"),
        s = n("749866");
    let r = "SpellcheckStore",
        o = !0,
        u = new Set;

    function d() {
        l.Storage.set(r, {
            enabled: o,
            learnedWords: u
        })
    }
    class c extends i.default.Store {
        initialize() {
            let e = l.Storage.get(r);
            null != e && (o = e.enabled, u = new Set(e.learnedWords), (0, s.setEnabled)(o), (0, s.setLearnedWords)(u))
        }
        isEnabled() {
            return o
        }
        hasLearnedWord(e) {
            return u.has(e.toLocaleLowerCase())
        }
    }
    c.displayName = "SpellcheckStore";
    var f = new c(a.default, {
        SPELLCHECK_TOGGLE() {
            o = !o, (0, s.setEnabled)(o), d()
        },
        SPELLCHECK_LEARN_WORD(e) {
            let {
                word: t
            } = e;
            u.add(t.toLocaleLowerCase()), (0, s.setLearnedWords)(u), d()
        },
        SPELLCHECK_UNLEARN_WORD(e) {
            let {
                word: t
            } = e;
            u.delete(t.toLocaleLowerCase()), (0, s.setLearnedWords)(u), d()
        },
        I18N_LOAD_SUCCESS(e) {
            let {
                locale: t
            } = e;
            (0, s.setAppLocale)(t)
        }
    })
}