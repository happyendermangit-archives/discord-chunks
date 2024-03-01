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
        dateSelected: e => "".concat(e.date, " seleccionado"),
        finishRangeSelectionPrompt: "Haga clic para terminar de seleccionar rango de fechas",
        maximumDate: "\xdaltima fecha disponible",
        minimumDate: "Primera fecha disponible",
        next: "Siguiente",
        previous: "Anterior",
        selectedDateDescription: e => "Fecha seleccionada: ".concat(e.date),
        selectedRangeDescription: e => "Intervalo seleccionado: ".concat(e.dateRange),
        startRangeSelectionPrompt: "Haga clic para comenzar a seleccionar un rango de fechas",
        todayDate: e => "Hoy, ".concat(e.date),
        todayDateSelected: e => "Hoy, ".concat(e.date, " seleccionado")
    }
}