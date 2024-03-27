function() {
    IntlMessageFormat.__addLocaleData({
        locale: "uk",
        pluralRuleFunction: function(e, t) {
            var n = String(e).split("."),
                r = n[0],
                i = !n[1],
                a = Number(n[0]) == e,
                o = a && n[0].slice(-1),
                s = a && n[0].slice(-2),
                u = r.slice(-1),
                c = r.slice(-2);
            return t ? 3 == o && 13 != s ? "few" : "other" : i && 1 == u && 11 != c ? "one" : i && u >= 2 && u <= 4 && (c < 12 || c > 14) ? "few" : i && 0 == u || i && u >= 5 && u <= 9 || i && c >= 11 && c <= 14 ? "many" : "other"
        }
    })
}