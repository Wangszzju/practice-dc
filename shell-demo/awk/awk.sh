# 输出第一列和第四列
echo "输出第一列和第四列"
awk '{print $1, $4}' netstat.txt

# 格式化输出-同C语言
  ## 用{printf "格式" ,对应字段}表示
  awk '{printf "%-8s %-8s %-8s %-18s %-22s %-15s\n",$1,$2,$3,$4,$5,$6}' netstat.txt

# 过滤记录
  awk '$3==0 && $6=="ESTABLISHED" {print $0}' netstat.txt # $0表示输出全部列

# 使用内建变量
  ## NR输出表头,||表示或
  awk '$3==0 && $6=="CLOSE_WAIT"|| NR==1' netstat.txt ## NR表示已经读出的记录数，即行号，从1开始，有多个文件的话会累加
  awk '$3==0 && $6=="CLOSE_WAIT"|| FNR==1' ## FNR和NR的区别就是行好单独记录

  ## 输入字段分隔符
  awk  'BEGIN{FS=":"} {print $1,$3,$6}' /etc/passwd ## BEGIN{FS=":"}表示分隔符为:

  ## 输出字段分隔符
  awk  -F: '{print $1,$3,$6}' OFS="\t" /etc/passwd ## \t表示跳一个tab位

# 字符串匹配
  ## ~表示匹配模式开始，!~表示取反
  ## //内部是一个正则表达式
  awk '$6 ~ /ESTABL||WAIT/ || NR==1 {print NR,$4,$5,$6}' OFS="\t" netstat.txt
# 分隔文件
  ## 按照第六列来做拆分
  awk 'NR!=1{print > $6}' netstat.txt
  ## 或者输出特定列
  awk 'NR!=1{print $4,$5 > $6}' netstat.txt
  
# 统计
## BEGIN放上执行前语句
BEGIN {
    math = 0
    english = 0
    computer = 0
 
    printf "NAME    NO.   MATH  ENGLISH  COMPUTER   TOTAL\n"
    printf "---------------------------------------------\n"
}
## END放上执行后语句
END {
    printf "---------------------------------------------\n"
    printf "  TOTAL:%10d %8d %8d \n", math, english, computer
    printf "AVERAGE:%10.2f %8.2f %8.2f\n", math/NR, english/NR, computer/NR
}

## 统计每个用户的进程占了多少内存
ps aux | awk 'NR!=1{a[$1]+=$6;} END { for(i in a) print i ", " a[i]"KB";}'

## 统计学生成绩
  ### 执行方法
  awk -f cal.awk score.txt
  ### 内部语句
  #!/bin/awk -f
#运行前
BEGIN {
    math = 0
    english = 0
    computer = 0
 
    printf "NAME    NO.   MATH  ENGLISH  COMPUTER   TOTAL\n"
    printf "---------------------------------------------\n"
}
#运行中
{
    math+=$3
    english+=$4
    computer+=$5
    printf "%-6s %-6s %4d %8d %8d %8d\n", $1, $2, $3,$4,$5, $3+$4+$5
}
#运行后
END {
    printf "---------------------------------------------\n"
    printf "  TOTAL:%10d %8d %8d \n", math, english, computer
    printf "AVERAGE:%10.2f %8.2f %8.2f\n", math/NR, english/NR, computer/NR
}