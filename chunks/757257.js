function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        ascending: "nouseva",
        ascendingSort: e => `lajiteltu sarakkeen ${e.columnName} mukaan nousevassa j\xe4rjestyksess\xe4`,
        columnSize: e => `${e.value} pikseli\xe4`,
        descending: "laskeva",
        descendingSort: e => `lajiteltu sarakkeen ${e.columnName} mukaan laskevassa j\xe4rjestyksess\xe4`,
        resizerDescription: `Aloita koon muutos painamalla Enter-n\xe4pp\xe4int\xe4`,
        select: "Valitse",
        selectAll: "Valitse kaikki",
        sortable: "lajiteltava sarake"
    }
}