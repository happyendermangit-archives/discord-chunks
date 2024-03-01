function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var s, i = n("714617"),
        r = n.n(i);
    s = class {
        shouldCommit() {
            return !0
        }
        setState(e) {
            this.state = {
                ...this.state,
                ...e
            }
        }
        getState() {
            return this.state
        }
        reset() {
            this.dirty = !1, this.state = this.getInitialState()
        }
        update() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.getNextState({
                    ...this.state,
                    ...e
                });
            if (t) this.dirty = !r(n, this.getInitialState());
            else
                for (let e of Object.keys(n)) this.dirty = this.dirty || !r(this.state[e], n[e]);
            return this.state = n, !!(this.dirty && this.shouldCommit()) && (this.dirty = !1, this.didCommit(this.state), !0)
        }
        forceUpdate() {
            this.dirty = !1, this.didCommit(this.state)
        }
        constructor() {
            this.dirty = !1, this.state = this.getInitialState()
        }
    }
}