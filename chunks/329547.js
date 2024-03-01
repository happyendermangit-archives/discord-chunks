function(e, t, n) {
    IntlMessageFormat.__addLocaleData({
        locale: "da",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = n[0],
                a = Number(n[0]) == e;
            return t ? "other" : 1 != e && (a || 0 != r && 1 != r) ? "other" : "one"
        }
    }), IntlMessageFormat.__addLocaleData({
        locale: "da-GL",
        parentLocale: "da"
    })
}