function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var r = {};
    r = {
        dateRange: e => `${e.startDate} a ${e.endDate}`,
        dateSelected: e => `${e.date} selecionado`,
        finishRangeSelectionPrompt: "Clique para terminar de selecionar o intervalo de datas",
        maximumDate: `\xdaltima data dispon\xedvel`,
        minimumDate: `Primeira data dispon\xedvel`,
        next: `Pr\xf3ximo`,
        previous: "Anterior",
        selectedDateDescription: e => `Data selecionada: ${e.date}`,
        selectedRangeDescription: e => `Intervalo selecionado: ${e.dateRange}`,
        startRangeSelectionPrompt: `Clique para come\xe7ar a selecionar o intervalo de datas`,
        todayDate: e => `Hoje, ${e.date}`,
        todayDateSelected: e => `Hoje, ${e.date} selecionado`
    }
}