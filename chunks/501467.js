function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        ascending: "crescente",
        ascendingSort: e => `in ordine crescente in base alla colonna ${e.columnName}`,
        columnSize: e => `${e.value} pixel`,
        descending: "decrescente",
        descendingSort: e => `in ordine decrescente in base alla colonna ${e.columnName}`,
        resizerDescription: "Premi Invio per iniziare a ridimensionare",
        select: "Seleziona",
        selectAll: "Seleziona tutto",
        sortable: "colonna ordinabile"
    }
}