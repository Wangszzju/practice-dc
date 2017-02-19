## 输出第一列和第四列
echo "输出第一列和第四列"
awk '{ print $1, $4 }' netstat.txt

## 注意使用单引号