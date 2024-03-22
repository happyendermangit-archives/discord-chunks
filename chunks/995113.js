function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        BatchedStoreListener: function() {
            return o
        }
    }), E("70102");
    var t = E("805833");
    class o {
        attach(e) {
            let {
                stores: _
            } = this;
            _.forEach((_, E) => {
                if (null == _) throw Error("".concat(e, " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ").concat(E, " stores before error."));
                _.addReactChangeListener(this.handleStoreChange)
            })
        }
        detach() {
            let {
                stores: e
            } = this;
            e.forEach(e => e.removeReactChangeListener(this.handleStoreChange))
        }
        constructor(e, _) {
            this.handleStoreChange = () => {
                let e = t.default.getChangeSentinel();
                this.storeVersionHandled !== e && (this.changeCallback(), this.storeVersionHandled = e)
            }, this.stores = e, this.changeCallback = _
        }
    }
}