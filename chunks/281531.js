function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => "".concat(e.startDate, " a ").concat(e.endDate),
        dateSelected: e => "".concat(e.date, " selecionado"),
        finishRangeSelectionPrompt: "Clique para concluir a sele\xe7\xe3o do intervalo de datas",
        maximumDate: "\xdaltima data dispon\xedvel",
        minimumDate: "Primeira data dispon\xedvel",
        next: "Pr\xf3ximo",
        previous: "Anterior",
        selectedDateDescription: e => "Data selecionada: ".concat(e.date),
        selectedRangeDescription: e => "Intervalo selecionado: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Clique para iniciar a sele\xe7\xe3o do intervalo de datas",
        todayDate: e => "Hoje, ".concat(e.date),
        todayDateSelected: e => "Hoje, ".concat(e.date, " selecionado")
    }
}