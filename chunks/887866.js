function(e, t, n) {
    var r = n("444675");
    "use strict";

    function i(e, t) {
        o(e, t), a(e)
    }

    function a(e) {
        if (!e._writableState || !!e._writableState.emitClose)(!e._readableState || e._readableState.emitClose) && e.emit("close")
    }

    function o(e, t) {
        e.emit("error", t)
    }
    e.exports = {
        destroy: function(e, t) {
            var n = this,
                s = this._readableState && this._readableState.destroyed,
                u = this._writableState && this._writableState.destroyed;
            return s || u ? (t ? t(e) : e && (this._writableState ? !this._writableState.errorEmitted && (this._writableState.errorEmitted = !0, r.nextTick(o, this, e)) : r.nextTick(o, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                !t && e ? n._writableState ? n._writableState.errorEmitted ? r.nextTick(a, n) : (n._writableState.errorEmitted = !0, r.nextTick(i, n, e)) : r.nextTick(i, n, e) : t ? (r.nextTick(a, n), t(e)) : r.nextTick(a, n)
            }), this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        },
        errorOrDestroy: function(e, t) {
            var n = e._readableState,
                r = e._writableState;
            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t)
        }
    }
}