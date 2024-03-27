function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e = n("562255"),
            t = this.element;
        this.eventHandler = n("925965").bind(this), e(t, "keypress", this.eventHandler), e(t, "keydown", this.eventHandler), e(t, "keyup", this.eventHandler)
    }
}