function(e, t, n) {
    n("854508");
    var r = n("37747").off;
    e.exports = function() {
        var e = this.element;
        r(e, "keypress", this.eventHandler), r(e, "keydown", this.eventHandler), r(e, "keyup", this.eventHandler)
    }
}