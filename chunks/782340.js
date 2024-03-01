function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return A
        }
    }), E("222007"), E("424973");
    var t = E("866227"),
        o = E.n(t),
        n = E("429030"),
        r = E("229353"),
        i = E.n(r),
        a = E("444051"),
        I = E.n(a),
        s = E("657743"),
        T = E.n(s);
    let S = e => ({
            ...I,
            ...T,
            ...e
        }),
        N = new n.default({
            getMessages: e => "en-US" === e ? S(i) : E("795529")("./messages/".concat(e, ".jsona").replace("./messages/", "./")).then(e => {
                let {
                    default: _
                } = e;
                return _
            }).then(S),
            getLanguages: () => E("199005")
        });

    function O(e) {
        E("199038").dateFnsLocales[e]().then(_ => {
            let {
                default: t
            } = _;
            {
                let {
                    registerLocale: _
                } = E("900419");
                _(e, t)
            }
        })
    }
    N.addListener("locale", e => {
        ! function(e, _) {
            let E = [],
                t = ("no" === e ? "nb" : e).split("-");
            for (; t.length > 0;) E.push(t.join("-")), t.pop();
            E.push(_), o.locale(E)
        }(e, "en-US");
        let {
            setTags: _
        } = E("286235").default;
        _({
            locale: e
        })
    }), N.addListener("locale", O), O(N.getLocale());
    var A = N
}