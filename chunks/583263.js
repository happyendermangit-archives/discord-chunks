function(e, t, n) {
    IntlMessageFormat.__addLocaleData({
        locale: "sv",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = !n[1],
                a = Number(n[0]) == e,
                o = a && n[0].slice(-1),
                i = a && n[0].slice(-2);
            return t ? (1 == o || 2 == o) && 11 != i && 12 != i ? "one" : "other" : 1 == e && r ? "one" : "other"
        }
    }), IntlMessageFormat.__addLocaleData({
        locale: "sv-AX",
        parentLocale: "sv"
    }), IntlMessageFormat.__addLocaleData({
        locale: "sv-FI",
        parentLocale: "sv"
    })
}