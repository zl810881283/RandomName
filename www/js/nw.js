var fs = require('fs');
/* */
// var name = "";
// for (var i = 0; i < 100; i++) {
//     name += '2012' + i + ' ' + '姓名' + i + "\r\n";
// }
//
// fs.writeFile('name.txt', name, function (err) {
//     if (err) {
//         throw err;
//     }
// });

function trim(str) { //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
var nameArr = [];

function onChangeFile(path){
    fs.readFile(path, function (err, data) {
        if (err) {
            console.log(err);
            throw err;
        }

        data = data.toString().split('\r\n');
        data.forEach(function (i) {
            if (i) {
                var t = trim(i).split(/\s+/);
                nameArr.push({id: t[0], name: t[1]});
            }

        });

    });
}




