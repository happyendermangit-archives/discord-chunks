function(t, e, s) {
    var r = s("390493");
    "use strict";
    s("854508");

    function i(t, e) {
        c(t, e), n(t)
    }

    function n(t) {
        if (!t._writableState || !!t._writableState.emitClose)(!t._readableState || t._readableState.emitClose) && t.emit("close")
    }

    function c(t, e) {
        t.emit("error", e)
    }
    t.exports = {
        destroy: function(t, e) {
            var s = this,
                o = this._readableState && this._readableState.destroyed,
                f = this._writableState && this._writableState.destroyed;
            return o || f ? (e ? e(t) : t && (this._writableState ? !this._writableState.errorEmitted && (this._writableState.errorEmitted = !0, r.nextTick(c, this, t)) : r.nextTick(c, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
                !e && t ? s._writableState ? s._writableState.errorEmitted ? r.nextTick(n, s) : (s._writableState.errorEmitted = !0, r.nextTick(i, s, t)) : r.nextTick(i, s, t) : e ? (r.nextTick(n, s), e(t)) : r.nextTick(n, s)
            }), this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        },
        errorOrDestroy: function(t, e) {
            var s = t._readableState,
                r = t._writableState;
            s && s.autoDestroy || r && r.autoDestroy ? t.destroy(e) : t.emit("error", e)
        }
    }
}