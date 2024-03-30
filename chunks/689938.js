function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i = n("913527"),
        r = n.n(i),
        s = n("627420"),
        a = n("375964"),
        o = n.n(a),
        l = n("924658"),
        u = n.n(l),
        d = n("539590"),
        _ = n.n(d);
    let c = e => ({
            ...u(),
            ..._(),
            ...e
        }),
        E = new s.default({
            getMessages: e => "en-US" === e ? c(o()) : n("594802")("./messages/".concat(e, ".jsona").replace("./messages/", "./")).then(e => {
                let {
                    default: t
                } = e;
                return t
            }).then(c),
            getLanguages: () => n("515297")
        });

    function I(e) {
        n("763747").dateFnsLocales[e]().then(t => {
            let {
                default: i
            } = t;
            {
                let {
                    registerLocale: t
                } = n("217379");
                t(e, i)
            }
        })
    }
    E.addListener("locale", e => {
        ! function(e, t) {
            let n = [],
                i = ("no" === e ? "nb" : e).split("-");
            for (; i.length > 0;) n.push(i.join("-")), i.pop();
            n.push(t), r().locale(n)
        }(e, "en-US");
        let {
            setTags: t
        } = n("960048").default;
        t({
            locale: e
        })
    }), E.addListener("locale", I), I(E.getLocale()), t.default = E
}