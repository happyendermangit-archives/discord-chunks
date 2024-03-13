function(t, r, e) {
    e("222007");
    var n = e("540642"),
        o = e("927126"),
        Map = e("316923");
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(Map || o),
            string: new n
        }
    }
}