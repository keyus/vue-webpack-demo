export default {
    toTree (data,id,pid) {
        let id_str  = id || 'id',
            pid_str = pid || 'pid',
            map = {};
        if(!Array.isArray(data)) return ;
        data.forEach(function (item) {
            delete item.son;
        });
        data.forEach(function (item) {
            map[item[id_str]] = item;
        });

        var val = [];
        data.forEach(function (item) {
            var parent = map[item[pid_str]];
            if (parent) {
                (parent.son || ( parent.son = [] )).push(item);
            } else {
                val.push(item);
            }
        });
        return val;
    }
}