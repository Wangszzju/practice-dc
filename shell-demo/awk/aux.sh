ps aux | awk 'FNR!=1{a[$1]+=$6;} END { for(i in a) {print i ":" a[i]"KB"} }'

## awk的''内部就是参数命令
## {a[$1]+=$6}表示对a对象的属性按第一列分类，然后加上每一行第6列第内容
## END{}内部是结束后执行的
## for(i in a)遍历a对象的属性
##