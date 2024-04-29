function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        deselectedItem: e => `${e.item} er ikke valgt.`,
        longPressToSelect: `Bruk et langt trykk for \xe5 g\xe5 inn i valgmodus.`,
        select: "Velg",
        selectedAll: "Alle elementer er valgt.",
        selectedCount: (e, t) => `${t.plural(e.count,{"=0":"Ingen elementer er valgt",one:()=>`${t.number(e.count)} element er valgt`,other:()=>`${t.number(e.count)} elementer er valgt`})}.`,
        selectedItem: e => `${e.item} er valgt.`
    }
}