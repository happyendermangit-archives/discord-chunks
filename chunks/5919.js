function(e, t, n) {
    "use strict";
    var r = n("148708");

    function i(e) {
        if (e) return function(e) {
            for (var t in i.prototype) Object.prototype.hasOwnProperty.call(i.prototype, t) && (e[t] = i.prototype[t]);
            return e
        }(e)
    }
    e.exports = i;
    i.prototype.get = function(e) {
        return this.header[e.toLowerCase()]
    }, i.prototype._setHeaderProperties = function(e) {
        var t = e["content-type"] || "";
        this.type = r.type(t);
        var n = r.params(t);
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (this[i] = n[i]);
        this.links = {};
        try {
            e.link && (this.links = r.parseLinks(e.link))
        } catch (e) {}
    }, i.prototype._setStatusProperties = function(e) {
        var t = e / 100 | 0;
        this.statusCode = e, this.status = this.statusCode, this.statusType = t, this.info = 1 === t, this.ok = 2 === t, this.redirect = 3 === t, this.clientError = 4 === t, this.serverError = 5 === t, this.error = (4 === t || 5 === t) && this.toError(), this.created = 201 === e, this.accepted = 202 === e, this.noContent = 204 === e, this.badRequest = 400 === e, this.unauthorized = 401 === e, this.notAcceptable = 406 === e, this.forbidden = 403 === e, this.notFound = 404 === e, this.unprocessableEntity = 422 === e
    }
}